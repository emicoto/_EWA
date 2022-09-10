var _$Chara = (()=>{


function initPlayerPalam() {
	const palam = {};
	const set = ["饮食", "健康", "魔力", "体力", "理智", "清洁"];
	D.palamPC.forEach((k) => {
		if (set.includes(k)) {
			palam[k] = [1000, 1000];
		} else {
			palam[k] = [0, 1000];
		}
	});
	D.palamSP.forEach((k) => {
		palam[k] = [0, 1800];
	});
	return palam;
}

function initNPCPalam() {
	const palam = {};
	const set = ["魔力", "体力", "理智", "清洁"];
	D.palamNPC.forEach((k) => {
		if (set.includes(k)) {
			palam[k] = [1000, 1000];
		} else {
			palam[k] = [0, 1000];
		}
	});
	D.palamSP.forEach((k) => {
		palam[k] = [0, 2400];
	});
	return palam;
}

function initMonPalam() {
	const palam = {};
	D.palamMon.forEach((k) => {
		palam[k] = [0, 2500];
	});
	D.palamSP.forEach((k) => {
		palam[k] = [0, 5000];
	});
}

function Mark() {
	this.level = 0;
	this.maxlv = 0;
	this.hypo = 0;
	this.history = [];
}

class Character {
	 r;
	static data = {};
	static list = [];
	static templet = {};
	static add(type, race, name, gender) {
		const CID = `Chara${Object.keys(this.data).length}`;
		this.data[CID] = new Character(type, race, name, gender);
		this.data[CID].cid = CID;
		this.list.push(name);
		return this.data[CID];
	}
	static newtemp(type, race, gender) {
		const Tid = `${type}-${Object.keys(this.templet).length}`;
		this.templet[Tid] = new Character("npc", race, "", gender);
		this.templet[Tid].cid = Tid;
		return this.templet[Tid];
	}
	static initSave(type, chara) {
		const data = new Character(type, chara.race, chara.name, chara.gender, chara);
		return data;
	}
	static get(cid) {
		return this.data[cid];
	}

	static getp(cid) {
		return this.templet[cid];
	}
	constructor(type, race, name, gender, obj) {
		this.r = clone(Races.get(race));

		if (obj) {
			for (let i in obj) {
				this[i] = clone(obj[i]);
			}
		} else {
			this.cid = "";
			this.name = name;
			this.gender = gender;
			this.race = race;
			this.init(type);
		}
	}
	init(type) {
		this.birth = [3018, 6, 6];
		this.powertype = this.r.powertype;
		this.elements = [];
		this.diet = this.r.diet;
		this.major = 1;
		this.emote = "普通";
		this.money = 0;

		this.initTraits();
		this.initBase();
		this.initPalam(type);
		this.initSource();
		this.initFlags(type);
		this.state = {};
		this.tcsv = {};
		this.initExps();
		this.initInfo();
		this.initMark();
		this.initSkill(type);
		this.initWear();
		this.initEquip();
		this.initTattoos();
		this.initSexparts();
		this.initLiquids();
		this.virginity = {};
		if (this.r.cycle) {
			this.initCycle();
		}

		if (type == "player") {
			this.initDaily();
		}

		if (type == "npc") {
			this.initSchedule();
		}
		this.preset = {};
	}
	initTraits() {
		const traits = this.r.traits;
		this.trait = {};

		if (traits) {
			for (let i in traits) {
				if (traits[i].length == 1) this.trait[i] = traits[i][0];
			}
		}
	}
	initBase() {
		const hot = this.r.warmth[0];
		const cold = this.r.warmth[1];
		const adj = this.r.base;

		this.base = {};
		D.basekey.forEach((k) => {
			if (adj[k]) this.base[k] = [10 + adj[k], 10 + adj[k]];
			else this.base[k] = [0, 0];
		});
		this.base.lv = [1, 0];
		this.base.hot = [hot, hot];
		this.base.cold = [cold, cold];
	}
	initPalam(type) {
		switch (type) {
			case "player":
				this.palam = initPlayerPalam();
				break;
			case "npc":
				this.palam = initNPCPalam();
				break;
		}
	}
	initSource() {
		this.source = {};
		for (let k in this.palam) {
			this.source[k] = 0;
		}
	}
	initFlags(type) {
		this.flag = {};
		if (type == "npc") {
			D.npcIntFlag.forEach((k) => {
				this.flag[k] = 0;
			});
		}
	}
	initExps() {
		this.exp = {}
		D.explist.forEach((k) => {
			this.exp[k] = 0;
		});
	}
	initDaily() {
		D.dailyrec.forEach((k) => {
			this.daily[k] = 0;
		});
	}
	initInfo() {
		const a = this.r.avatarinfo;
		this.info = {
			eyes: 1,
			eyecolor: a.eyes,

			haircolor: a.hair,
			hairstyle: ["natural", "natural"],
			hairlength: [120, 120],

			breast: 1,
			hips: 1,
			bodysize: this.r.bodysize,

			skin: a.skin,
			body: this.r.bodytype,
			head: this.r.headtype,
			ears: this.r.eartype,
		};

		if (a.tail) this.info.tail = a.tail;
		if (a.horn) this.info.horn = a.horn;
		if (a.wing) this.info.wing = a.wing;

		this.initBody(this.r.bodypart, this.r.genital);
	}
	initBody(bodypart, g) {
		this.body = clone(bodypart);
		let t = g.penis == "canhide" ? "hidden" : g.penis;
		let c = g.vagina == "canhide" ? "hidden" : g.vagina;

		switch (this.gender) {
			case "f":
				this.setGeniState(["none", "none", g.vagina, g.vagina]);
				break;

			case "m":
				this.setGeniState([g.penis, t, "none", "none"]);
				break;

			case "i":
				if (!g.interhasCritoris) c = "none";
				if (!g.interhasTeste) t = "none";
				this.setGeniState([g.penis, t, g.vagina, c]);
				break;

			case "n":
				this.setGeniState(["none", "none", "none", "none"]);
				break;
		}
	}
	initMark() {
		this.mark = {};
		D.mark.forEach((v) => {
			this.mark[v] = new Mark();
		});
	}
	initSkill(type) {
		this.abl = {};
		D.baseAbl.forEach((v) => {
			this.abl[v] = { lv: 1, exp: 0 };
		});

		this.sbl = {};
		D.sexAbl.forEach((v) => {
			this.sbl[v] = { lv: 1, exp: 0 };
		});

		this.skl = {};
		D.skill.forEach((v) => {
			this.skl[v] = { lv: 1, exp: 0 };
		});

		this.lewd = {};
		D.degrees.forEach((v) => {
			this.lewd[v] = 120;
			if (v == "纯洁") this.lewd[v] = 800;
		});
		if (type == "npc") {
			D.npcdegrees.forEach((v) => {
				this.lewd[v] = 120;
			});
		}
	}
	initWear() {
		this.wear = {};
		D.wearslots.forEach((k) => {
			this.wear[k] = null;
		});

		this.slots = A.getRevealDetail(this.wear);
	}
	initTattoos() {
		this.tattoos = {};
		D.tattoosA.forEach((k) => {
			this.tattoos[k] = null;
		});
		D.tattoosB.forEach((k) => {
			this.tattoos[k] = null;
		});
	}
	initEquip() {
		this.equip = {};
		D.equipslots.forEach((k) => {
			this.equip[k] = null;
		});
	}
	initSchedule() {
		this.schedule = {
			workday: [],
			works: [],
			sleepTime: [22, 8],
			homeLocation: "",
			Tracks: {},
		};
	}
	initSexparts() {
		this.sexparts = {};
		const { penis, vagina, critoris, organ, mouth } = this.body;

		if (D.bodyCheck(penis)) this.initSexOrgan("penis");
		if (D.bodyCheck(vagina)) this.initSexOrgan("vagina");
		if (D.bodyCheck(critoris)) this.initSexOrgan("critoris");

		if (D.bodyCheck(organ)) {
			this.initSexOrgan("ureth");
			this.initSexOrgan("anal");
		}

		if (D.bodyCheck(mouth)) this.initSexOrgan("mouth");

		this.initSexOrgan("breast");
	}
	initSexOrgan(part) {
		const state = this.body[part];
		this.sexparts[part] = {
			sens: D.sensbit[state],
		};
		const organ = this.sexparts[part];

		let volum = 0;
		let osize = 0;

		switch (part) {
			case "vagina":
			case "penis":
				const shape = part[0] + "shape";
				const size = part[0] + "size";
				organ.shape = this.r.genital[shape];
				organ.size = this.r.genital[size];

				volum = organ.size[0] * 0.3;
				if (part == "penis") organ.produce = [volum, volum];
				break;

			case "breast":
				volum = this.info.breast * 100;
				organ.produce = [volum, volum];
				break;

			case "ureth":
				if (this.hasPenis()) {
					osize = this.r.genital.psize[1] / 20;
				} else {
					osize = (this.r.bodysize + 1) * 2;
				}
				organ.size = [osize, osize + 1];
				organ.produce = [0, 3000];
				break;

			case "anal":
				osize = (this.info.hips + 1) * 5 + random(10);
				organ.size = [osize, osize + 5];
				break;
		}
	}
	initLiquids() {
		this.liquid = {};
		D.liquidLayer.forEach((k) => {
			this.liquid[k] = [0, 0, 0, 0];
		});
	}
	initCycle() {
		const { type, cir, days } = this.r.cycle;
		this.pregnant = {
			cycle: {
				type: type,
				circle: [cir, cir],
				days: days,
				rng: [-2, 2],
				current: 0,
				state: 0,
				phase: "none",
			},
			fatherID: [],
			seedCount: [],
			inside: [],
		};
	}
	hasPenis() {
		return this.body.penis !== "none";
	}
	hasVagina() {
		return this.body.vagina !== "none";
	}
	setRace(race) {
		Races.convert(this, race);
		return this;
	}
	setGender(gender) {
		this.gender = gender;
		this.initBody(this.r.bodypart, this.r.genital);
		this.initSexparts();
		return this;
	}
	setGeniState(state) {
		this.body.penis = state[0];
		this.body.teste = state[1];

		this.body.vagina = state[2];
		this.body.critoris = state[3];
		return this;
	}
	setName(name) {
		this.name = name;
		return this;
	}
	setNick(nick) {
		this.nick = nick;
		return this;
	}
	setTrait(str) {
		str.forEach((k) => {
			this.trait[k] = 1;
		});
		return this;
	}
	setTitle(str) {
		this.title = str;
		return this;
	}
	setMajor(int) {
		this.major = int.clamp(1, 6);
		return this;
	}
	setKojo(str) {
		this.kojo = str;
		return this;
	}
	setPowertype(str) {
		this.powertype = str;
		return this;
	}
	setElements(str) {
		if (str.length > this.r.elesize) {
			str = str.slice(0, this.r.elesize);
		}
		this.elements = str;
		return this;
	}
	Description(str) {
		this.des = str;
		return this;
	}
	Birthday(int) {
		this.birth = int;
		return this;
	}
	Base(obj) {
		const adj = this.r.base;

		for (let i in obj) {
			if (adj[i]) this.base[i] = [obj[i] + adj[i], obj[i] + adj[i]];
			else this.base[i] = [obj[i], obj[i]];
		}
		return this;
	}
	setFlag(obj) {
		if (!isObject(obj)) return;

		for (let i in obj) {
			this.flag[i] = obj[i];
		}
		return this;
	}
	setExp(exp) {
		for (let i in exp) {
			this.exp[i] = exp[i];
		}
		return this;
	}
	Abl(name, level) {
		this.abl[name].lv = level;
		return this;
	}
	Sbl(name, level) {
		this.sbl[name].lv = level;
		return this;
	}
	Skill(name, level) {
		this.skl[name].lv = level;
		return this;
	}
	Lewd(name, int) {
		this.lewd[name] = int;
		return this;
	}
	setInfo(info) {
		for (let i in info) {
			this.info[i] = info[i];
		}
		return this;
	}
	Eyetype(type) {
		this.info.eyes = type.clamp(1, 3);
		return this;
	}
	Eyecolor(color) {
		this.info.eyecolor = color;
		return this;
	}
	Haircolor(color) {
		this.info.haircolor = color;
		return this;
	}
	HairStyle(front, back) {
		this.info.hairstyle = [front, back];
		return this;
	}
	Hairlength(front, back) {
		this.info.hairlength = [front, back];
		return this;
	}
	Breast(int) {
		this.info.breast = int.clamp(1, 5);
		return this;
	}
	Hips(int) {
		this.info.hips = int.clamp(1, 5);
		return this;
	}
	Bodysize(int) {
		this.info.bodysize = int.clamp(0, this.r.bodysize + 1);
		return this;
	}
	SkinColor(skin) {
		this.info.skin = skin;
		return this;
	}
	Ears(ear) {
		this.info.ears = ear;
		return this;
	}
	Tail(tail) {
		this.info.tail = tail;
		return this;
	}
	Horn(horn) {
		this.info.horn = horn;
		return this;
	}
	Wing(wing) {
		this.info.wing = wing;
		return this;
	}
	SubBodyColor(color) {
		this.info.subcolor = color;
		return this;
	}
	Preset(set, preset) {
		this.preset[set] = preset;
		return this;
	}
	Wear(set) {
		const preset = this.preset[set];
		preset.forEach((set) => {
			Closet.getWear(this, set);
		});

		return this;
	}
	setEquip(slot, name) {
		const item = Equipment.getbyName(name);
		this.equip[slot] = clone(item);
		return this;
	}
	setTattoos(slot, id) {
		const item = Tattoos.get(id);
		this.tattoos[slot] = clone(item);
		return this;
	}
	setBody(part, state) {
		this.body[part] = state;
		return this;
	}
	setSens(part, level) {
		this.sexparts[part].sens = level;
		return this;
	}
	setProduce(part, volum) {
		this.sexparts[part].produce = [volum, volum];
		return this;
	}
	setSize(part, size) {
		this.sexparts[part].size = size;
		return this;
	}
	setPshape(shape) {
		this.sexparts.penis.shape = shape;
		return this;
	}
	setVshape(shape) {
		this.sexparts.vagina.shape = shape;
		return this;
	}
	setVirginity(part, info) {
		this.virginity[part] = info;
		return this;
	}
	setWorkday(day) {
		this.schedule.workday = day;
		return this;
	}
	setWork(workday, startTime, endTime, workplace, worktype) {
		const work = {
			workday: workday,
			workplace: workplace,
			worktype: worktype,
			startTime: startTime,
			endTime: endTime,
		};
		if (this.schedule.works.length < 3) {
			this.schedule.works.push(work);

			let workday = this.schedule.workday;
			workday = workday.concat(work.workday);
			workday = Array.from(new Set(workday));

			this.schedule.workday = workday;
		}

		return this;
	}
	setSleepTime(start, end) {
		this.schedule.sleepTime = [start, end];
		return this;
	}
	setHome(loc) {
		this.schedule.homeLocation = loc;
		return this;
	}
	setTrack(loc, chance, stayhour, entryTime, exitTime) {
		this.schedule.Tracks[loc] = {
			chance: chance,
			stayHours: stayhour,
			entryTime: entryTime,
			exitTime: exitTime ? exitTime : entryTime + stayhour,
		};
		return this;
	}
	setStartBonus(bonus) {
		this.startbonus = bonus;
		return this;
	}
	End() {
		delete this.r;

		if (this.cid.includes("Chara")) {
			Character.data[this.cid] = Object.freeze(this);
		} else {
			Character.templet[this.cid] = Object.freeze(this);
		}
	}
}

	Object.defineProperty(window.G, 'Chara', {
		value: Object.freeze(Character)
	})

})();