import * as D from "./data";
import * as A from "../avatar";

import { Races } from "./Races";
import {
	VirginityInfo,
	CharaInfo,
	revealDetails,
	SexPart,
	pregnancy,
	Marks,
	Skill,
	pirecing,
	tatoos,
	GenitalState,
	Equip,
	Schedule,
	WorkSchedule,
	preset,
} from "./interface";
import {
	Dict,
	existency,
	gender,
	races,
	Wear,
	Existency,
	sexpart,
	penishape,
	vaginashape,
	element,
	powertype,
	sexPart,
	charatype,
	Base,
	Palam,
	Flags,
	liquid,
	dailyrecords,
	exprecords,
	Lewdegree,
	defaultBases,
	ability,
	sexablity,
	degree,
	skincolor,
	eartype,
	equipslot,
	tatooslot,
	bodypart,
	Source,
	haircolor,
	eyecolor,
} from "../type";
import { Equipment } from "./Equipment";
import { Tattoos } from "./tattos";
import { Closet } from "./Closet";

export type virginity<T = VirginityInfo, K extends string = sexpart> = { [key in K]?: T };

export type ABL<T = Skill, K extends string = string> = { [key in K]?: T };

export interface Character {
	//主要信息
	cid: string;
	name: string;
	nick: string; //昵称. 可自定义
	callname?: string; //角色对玩家的特殊称呼.
	race: races;
	gender: gender;
	trait: Dict<number>; //天赋，素质。只存在有与无的概念。少数会有数值差分. 态度也在这.
	title: string;
	major: number; //主修专业, 学校分区用.
	kojo: string; //文本模板ID。影响角色文本。
	powertype: powertype;
	elements: element[];
	des: [string, string]; //角色介绍
	diet: string; //推荐食谱
	birth?: number[]; //生日计算

	//数据组
	base: Base; //角色基础数值。0号位是现在显示值，1号位是基础值。
	palam: Palam; //常规变量。生活模式与调教模式需要的。
	source: Source; //处理源，内部跟palam一样，位置不一样是因为处理上的问题。
	flag: Flags; //角色事件管理开关，可以随意插拔，就不做规划限制了。好感度之类的也塞这里。
	state: any;
	tcsv: any;

	exp: exprecords;
	daily?: dailyrecords;
	mark: Marks;

	//技能与XP相关:
	abl: ABL; //基础技能、战斗技能是一样的处理。max 20
	sbl: ABL; //涩涩技能, max 10
	skl: ABL; //一些可习得的技能. max 6

	//但代表涩涩程度的就DOL那种处理方式。因为是代表某个程度，而不是某种技能。
	lewd: Lewdegree;

	//外貌信息，用于创建纸娃娃
	info: CharaInfo;
	emote: string;

	wear: Wear; //穿身上的都在这。
	equip: Equip; //武器, 护盾, 饰品等功能型装备
	tattoos: tatoos; //会有多层纹身。胸前，肚子，手，脚，面部
	pirecing: pirecing;
	slots: revealDetails;

	//身体部件内详，用于涩涩
	body: Existency;
	sexparts: sexPart<SexPart>;
	pregnant?: pregnancy; //正常的子宫怀孕
	analPregnant?: pregnancy; //肠内受孕
	exPregnant?: pregnancy; //特殊怀孕，主要用在特殊种族上。非特殊种族也有可能出现？首次受孕时生成。
	virginity: virginity;
	liquid: liquid;

	schedule?: Schedule; //npc的活动轨迹设定
	preset?: Dict<preset[]>; //npc的装扮预设

	money: number; //npc有个钱包意思意思得了。物品栏就根据资金状况临时生成的吧。
	//单位是宝石币, 10宝币 = 1晶币, 100晶币=1星币
	startbonus?: string; //玩家用. 出生时的奖励特征
}

//--------------<<  上面为定义, 以下为代码  >>---------------------->>>>

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

export class Character {
	private r?: Races;
	static data: Dict<Character> = {};
	static list: string[] = [];
	static templet: Dict<Character> = {};
	static add(type: charatype, race: races, name: string, gender: gender): Character {
		const CID = `Chara${Object.keys(this.data).length}`;
		this.data[CID] = new Character(type, race, name, gender);
		this.data[CID].cid = CID;
		this.list.push(name);
		return this.data[CID];
	}
	static newtemp(type: charatype, race: races, gender: gender) {
		const Tid = `${type}-${Object.keys(this.templet).length}`;
		this.templet[Tid] = new Character("npc", race, "", gender);
		this.templet[Tid].cid = Tid;
		return this.templet[Tid];
	}
	static initSave(type: charatype, chara: Character) {
		const data = new Character(type, chara.race, chara.name, chara.gender, chara);
		return data;
	}
	static get(cid: string) {
		return this.data[cid];
	}

	static getp(cid: string) {
		return this.templet[cid];
	}
	constructor(type: charatype, race: races, name: string, gender: gender, obj?: Character) {
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
	init(type: charatype) {
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
	initTraits?() {
		const traits = this.r.traits;
		this.trait = {};

		if (traits) {
			for (let i in traits) {
				if (traits[i].length == 1) this.trait[i] = traits[i][0];
			}
		}
	}
	initBase?() {
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
	initPalam?(type?: charatype) {
		switch (type) {
			case "player":
				this.palam = initPlayerPalam();
				break;
			case "npc":
				this.palam = initNPCPalam();
				break;
		}
	}
	initSource?() {
		this.source = {};
		for (let k in this.palam) {
			this.source[k] = 0;
		}
	}
	initFlags?(type: charatype) {
		this.flag = {};
		if (type == "npc") {
			D.npcIntFlag.forEach((k) => {
				this.flag[k] = 0;
			});
		}
	}
	initExps?() {
		this.exp = {}
		D.explist.forEach((k) => {
			this.exp[k] = 0;
		});
	}
	initDaily?() {
		D.dailyrec.forEach((k) => {
			this.daily[k] = 0;
		});
	}
	initInfo?() {
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
	initBody?(bodypart: Existency, g: GenitalState) {
		this.body = clone(bodypart);
		let t: existency = g.penis == "canhide" ? "hidden" : g.penis;
		let c: existency = g.vagina == "canhide" ? "hidden" : g.vagina;

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
	initMark?() {
		this.mark = {};
		D.mark.forEach((v) => {
			this.mark[v] = new Mark();
		});
	}
	initSkill?(type: charatype) {
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
	initWear?() {
		this.wear = {};
		D.wearslots.forEach((k) => {
			this.wear[k] = null;
		});

		this.slots = A.getRevealDetail(this.wear);
	}
	initTattoos?() {
		this.tattoos = {};
		D.tattoosA.forEach((k) => {
			this.tattoos[k] = null;
		});
		D.tattoosB.forEach((k) => {
			this.tattoos[k] = null;
		});
	}
	initEquip?() {
		this.equip = {};
		D.equipslots.forEach((k) => {
			this.equip[k] = null;
		});
	}
	initSchedule?() {
		this.schedule = {
			workday: [],
			works: [],
			sleepTime: [22, 8],
			homeLocation: "",
			Tracks: {},
		};
	}
	initSexparts?() {
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
	initSexOrgan?(part: sexpart) {
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
	initLiquids?() {
		this.liquid = {};
		D.liquidLayer.forEach((k) => {
			this.liquid[k] = [0, 0, 0, 0];
		});
	}
	initCycle?() {
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
	hasPenis?() {
		return this.body.penis !== "none";
	}
	hasVagina?() {
		return this.body.vagina !== "none";
	}
	setRace(race: races) {
		Races.convert(this, race);
		return this;
	}
	setGender(gender: gender) {
		this.gender = gender;
		this.initBody(this.r.bodypart, this.r.genital);
		this.initSexparts();
		return this;
	}
	setGeniState(state: existency[]) {
		this.body.penis = state[0];
		this.body.teste = state[1];

		this.body.vagina = state[2];
		this.body.critoris = state[3];
		return this;
	}
	setName?(name: string) {
		this.name = name;
		return this;
	}
	setNick?(nick: string) {
		this.nick = nick;
		return this;
	}
	setTrait?(str: string[]) {
		str.forEach((k) => {
			this.trait[k] = 1;
		});
		return this;
	}
	setTitle?(str: string) {
		this.title = str;
		return this;
	}
	setMajor?(int: number) {
		this.major = int.clamp(1, 6);
		return this;
	}
	setKojo?(str: string) {
		this.kojo = str;
		return this;
	}
	setPowertype?(str: powertype) {
		this.powertype = str;
		return this;
	}
	setElements?(str: element[]) {
		if (str.length > this.r.elesize) {
			str = str.slice(0, this.r.elesize);
		}
		this.elements = str;
		return this;
	}
	Description?(str: [string, string]) {
		this.des = str;
		return this;
	}
	Birthday?(int: number[]) {
		this.birth = int;
		return this;
	}
	Base?(obj: defaultBases) {
		const adj = this.r.base;

		for (let i in obj) {
			if (adj[i]) this.base[i] = [obj[i] + adj[i], obj[i] + adj[i]];
			else this.base[i] = [obj[i], obj[i]];
		}
		return this;
	}
	setFlag?(obj) {
		if (!isObject(obj)) return;

		for (let i in obj) {
			this.flag[i] = obj[i];
		}
		return this;
	}
	setExp?(exp: exprecords) {
		for (let i in exp) {
			this.exp[i] = exp[i];
		}
		return this;
	}
	Abl?(name: ability, level: number) {
		this.abl[name].lv = level;
		return this;
	}
	Sbl?(name: sexablity, level: number) {
		this.sbl[name].lv = level;
		return this;
	}
	Skill?(name: string, level: number) {
		this.skl[name].lv = level;
		return this;
	}
	Lewd?(name: degree, int: number) {
		this.lewd[name] = int;
		return this;
	}
	setInfo?(info: CharaInfo) {
		for (let i in info) {
			this.info[i] = info[i];
		}
		return this;
	}
	Eyetype?(type: number) {
		this.info.eyes = type.clamp(1, 3);
		return this;
	}
	Eyecolor?(color: eyecolor) {
		this.info.eyecolor = color;
		return this;
	}
	Haircolor?(color: haircolor) {
		this.info.haircolor = color;
		return this;
	}
	HairStyle?(front: string, back: string) {
		this.info.hairstyle = [front, back];
		return this;
	}
	Hairlength?(front: number, back: number) {
		this.info.hairlength = [front, back];
		return this;
	}
	Breast?(int: number) {
		this.info.breast = int.clamp(1, 5);
		return this;
	}
	Hips?(int: number) {
		this.info.hips = int.clamp(1, 5);
		return this;
	}
	Bodysize?(int: number) {
		this.info.bodysize = int.clamp(0, this.r.bodysize + 1);
		return this;
	}
	SkinColor?(skin: skincolor) {
		this.info.skin = skin;
		return this;
	}
	Ears?(ear: eartype) {
		this.info.ears = ear;
		return this;
	}
	Tail?(tail: string) {
		this.info.tail = tail;
		return this;
	}
	Horn?(horn: string) {
		this.info.horn = horn;
		return this;
	}
	Wing?(wing: string) {
		this.info.wing = wing;
		return this;
	}
	SubBodyColor?(color: skincolor) {
		this.info.subcolor = color;
		return this;
	}
	Preset?(set: string, preset: preset[]) {
		this.preset[set] = preset;
		return this;
	}
	Wear?(set: string) {
		const preset = this.preset[set];
		preset.forEach((set) => {
			Closet.getWear(this, set);
		});

		return this;
	}
	setEquip?(slot: equipslot, name: string) {
		const item = Equipment.getbyName(name);
		this.equip[slot] = clone(item);
		return this;
	}
	setTattoos?(slot: tatooslot, id: number) {
		const item = Tattoos.get(id);
		this.tattoos[slot] = clone(item);
		return this;
	}
	setBody?(part: bodypart, state: existency) {
		this.body[part] = state;
		return this;
	}
	setSens?(part: sexpart, level: number) {
		this.sexparts[part].sens = level;
		return this;
	}
	setProduce?(part: sexpart, volum: number) {
		this.sexparts[part].produce = [volum, volum];
		return this;
	}
	setSize?(part: sexpart, size: [number, number]) {
		this.sexparts[part].size = size;
		return this;
	}
	setPshape?(shape: penishape) {
		this.sexparts.penis.shape = shape;
		return this;
	}
	setVshape?(shape: vaginashape) {
		this.sexparts.vagina.shape = shape;
		return this;
	}
	setVirginity?(part: sexpart, info: VirginityInfo) {
		this.virginity[part] = info;
		return this;
	}
	setWorkday?(day: number[]) {
		this.schedule.workday = day;
		return this;
	}
	setWork?(workday: number[], startTime: number, endTime: number, workplace: string, worktype: string) {
		const work: WorkSchedule = {
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
	setSleepTime?(start: number, end: number) {
		this.schedule.sleepTime = [start, end];
		return this;
	}
	setHome?(loc: string) {
		this.schedule.homeLocation = loc;
		return this;
	}
	setTrack?(loc: string, chance: number, stayhour: number, entryTime: number, exitTime?: number) {
		this.schedule.Tracks[loc] = {
			chance: chance,
			stayHours: stayhour,
			entryTime: entryTime,
			exitTime: exitTime ? exitTime : entryTime + stayhour,
		};
		return this;
	}
	setStartBonus?(bonus: string) {
		this.startbonus = bonus;
		return this;
	}
	End?() {
		delete this.r;

		if (this.cid.includes("Chara")) {
			Character.data[this.cid] = Object.freeze(this);
		} else {
			Character.templet[this.cid] = Object.freeze(this);
		}
	}
}
