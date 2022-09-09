var _$R = (()=>{
	const racesdata = {};
	const monsters = {};

	function convertCheck(part, race) {
		if (part == "none") return false;
		if (part == "fake" && race !== "alsha") return false;

		return true;
	}

	class Races {
		static add(name, type, size, skin, eye, hair, alter) {
			racesdata[name] = new Races(name, type, size, skin, eye, hair, alter);
			return racesdata[name];
		}
		static get(name) {
			return racesdata[name];
		}
		static convert(chara, race) {
			const r = Races.get(race);
			const b = chara.body;

			chara.info.body = r.bodytype;
			chara.info.ears = r.eartype;

			chara.body = clone(r.bodypart);

			if (convertCheck(b.vagina, chara.race)) {
				chara.body.vagina = r.genital.vagina;
				if (D.bodyCheck(b.critoris)) chara.body.critoris = r.genital.vagina;
			}
			if (convertCheck(b.penis, chara.race)) {
				chara.body.penis = r.genital.penis;
				if (D.bodyCheck(b.teste)) chara.body.teste = r.genital.penis;
			}

			chara.race = race;

			return chara;
		}
		static print(type){
			switch (type) {
				case "alsha":
					return lan("阳灵", "Alsha");
				case "catvinx":
					return lan("狐猫", "Catvinx");
				case "dracons":
					return lan("晶龙", "Dracons");
				case "havan":
					return lan("海族", "Havans");
				case "human":
					return lan("纯人", "Human");
				case "lepios":
					return lan("鼠兔", "Lepios");
				case "linlog":
					return lan("灵鹿", "Linlog");
				case "noctar":
					return lan("夜灵", "Noctar");
				case "pequitis":
					return lan("角马", "Pequitis");
				case "sckyrios":
					return lan("狼人", "Sckyrios");
				case "ulvs":
					return lan("灵蛇", "Ulvs");
				case "voeli":
					return lan("羽族", "Voeli");
			}
		}
		constructor(name, type, size, skin, eye, hair, alter) {
			this.name = name;
			this.bodytype = type;
			this.headtype = "round";
			this.eartype = "human";
			this.bodysize = size;
			this.avatarinfo = {
				skin: skin,
				eyes: eye,
				hair: hair,
			};
			this.bodypart = {
				eye: "natural",
				nose: "natural",
				mouth: "natural",
				body: "natural",
				ears: "natural",
				hands: "natural",
				wings: "none",
				horn: "none",
				fur: "none",
				tail: "none",
				organ: "natural",
			};
			if (alter) this.alter = {};
			this.gender = ["f", "m", "i"];
			this.genital = {
				penis: "natural",
				pshape: "human",
				psize: D.PeniSize['human'],
				vagina: "natural",
				vshape: "normal",
				vsize: D.vagisize[size],
			};
			this.warmth = [24, 19];
			this.cycle = {
				type: "menst",
				cir: 28,
				days: 5,
			};
			this.base = {}
			this.diet = 'omni'
			this.alter = {}
		}
		setBodyPart(part, state) {
			this.bodypart[part] = state;
			return this;
		}
		setGenital(state, option) {
			this.genital.penis = state[0];
			this.genital.vagina = state[1] ? state[1] : state[0];

			if (option?.c) this.genital.interhasCritoris = true;
			if (option?.t) this.genital.interhasTeste = true;

			return this;
		}

		setEarType(str) {
			this.eartype = str;
			if (["cat", "dot", "rabit", "mouse"].includes(str)) {
				this.bodypart["ears"] = "onhead";
			}
			return this;
		}
		setHeadType(str) {
			this.headtype = str;
			return this;
		}
		hasTail(str) {
			this.avatarinfo.tail = str;
			this.bodypart["tail"] = "natural";
			return this;
		}
		hasWings(str) {
			this.avatarinfo.wing = str;
			this.bodypart["wings"] = "natural";
			return this;
		}
		hasHorn(str) {
			this.avatarinfo.horn = str;
			this.bodypart["horn"] = "natural";
			return this;
		}
		setAlter(obj) {
			console.log(obj)
			for(let i in obj){
				this.alter[i] = obj[i]
			};
			return this;
		}
		setGenderOption(gender) {
			this.gender = gender;
			return this;
		}
		setTraitOption(str) {
			this.traits = str;
			return this;
		}
		setPower(str) {
			this.powertype = str;

			switch (str) {
				case "arcane":
				case "occult":
					this.setElements(["lumen", "ark", "ions", "flame", "electron", "vitae", "terra"]);
					this.elesize = 3;
					break;
				case "elements":
					this.elesize = 2;
					this.elements = [];
					break;
				case "psychic":
					this.elesize = 1;
					this.elements = [];
					break;
			}

			return this;
		}
		setElements(str) {
			this.elements = str;
			return this;
		}
		setElementSize(int) {
			this.elesize = int;
			return this;
		}
		setPenisShape(des) {
			this.genital.pshape = des;
			this.genital.psize = D.PeniSize[des];
			return this;
		}
		setVaginaShape(des) {
			this.genital.vshape = des;
			return this;
		}
		setWarmth(int) {
			this.warmth = int;
			return this;
		}
		setBase(obj) {
			this.base = obj;
			return this;
		}
		setDiet(diet) {
			this.diet = diet;
			return this;
		}
		setCycle(info) {
			this.cycle = info;
			return this;
		}
		noCycle() {
			this.cycle = null;
			return this;
		}
		End(){
			racesdata[this.name] = Object.freeze(racesdata[this.name]);
		}
	}

	Races.add("human", "human", 2, "health", "aqua", "brown").setPower("psychic").End();

	Races.add("catvinx", "human", 1, "white", "amber", "platinum", true)
		.setEarType("cat")
		.setHeadType("pointy")
		.setGenital(["canhide", "natural"])
		.hasTail("cat")
		.setPower("arcane")
		.setElementSize(5)
		.setGenderOption(["f", "m"])
		.setPenisShape("cat")
		.setVaginaShape("suji")
		.setWarmth([24, 16])
		.setBase({ 智力: 2, 灵感: 1, 体质: -2, 力量: -1 })
		.setTraitOption({ OMEGA: [0, 1], 泌乳: [0, 2] })
		.setAlter({ skin: ["health", "pale", "sunset", "gray"], mimi: ["cat", "fox"], tail: ["cat", "fox"] })
		.setCycle({ type: "heat", cir: 56, days: 5 })
		.End();

	Races.add("sckyrios", "furry", 4, "fur", "black", "gray")
		.setBodyPart("ears", "none")
		.setBodyPart("fur", "natural")
		.setEarType("dog")
		.setHeadType("furry")
		.hasTail("dog")
		.setPower("elements")
		.setElements(["flame", "electron"])
		.setGenderOption(["f", "m"])
		.setPenisShape("dog")
		.setWarmth([20, 12])
		.setBase({ 力量: 2, 体质: 1, 智力: -2, 意志: -1 })
		.setTraitOption({ ABO: [1, 2, 3], OMEGA: [0, 1] })
		.setCycle({ type: "heat", cir: 56, days: 7 })
		.setDiet("meat")
		.setAlter({ skin:['fur'], subcolor:['health','pale','sunset','white','gray','copper']})
		.End();

	Races.add("lepios", "human", 0, "health", "red", "silver", true)
		.setEarType("rabit")
		.hasTail("mouse")
		.setPower("psychic")
		.setVaginaShape("cute")
		.setTraitOption({ 暴食: [0, 1] })
		.setBase({ 敏捷: 2, 灵感: 1, 意志: -2, 力量: -1 })
		.setAlter({ skin: ["health", "pale", "white", "gray"], mimi: ["rabti", "mouse"] })
		.End();

	Races.add("dracons", "human", 2, "pale", "pink", "blond")
		.setGenital(["canhide"], { t: "t" })
		.hasTail("dracon")
		.hasHorn("crystal")
		.setPower("elements")
		.setElements(["lumen", "ark", "electron", "flame", "ions", "terra", "vitae"])
		.setElementSize(1)
		.setTraitOption({ 发光: [0, 1] })
		.setPenisShape("dracon")
		.setVaginaShape("suji")
		.setBase({ 意志: 2, 智力: 1, 敏捷: -2, 灵感: -1 })
		.setWarmth([30, 16])
		.setCycle({ type: "heat", cir: 84, days: 3 })
		.setDiet("ore")
		.setAlter({ skin: ['pale','white','gray','black','aqua','gold'], tail:['dragon', 'cystal'] })
		.End();

	Races.add("voeli", "human", 2, "black", "amber", "white", true)
		.setEarType("futher")
		.setGenital(["canhide", "natural"])
		.hasWings("voeli")
		.setAlter({ wing: ["voeli", "bird1", "bird2"] })
		.setPower("arcane")
		.setElementSize(2)
		.setTraitOption({ 飞翔: [1], 生蛋: [0, 1] })
		.setGenderOption(["f", "m"])
		.setPenisShape("bird")
		.setBase({ 灵感: 2, 敏捷: 1, 体质: -2, 力量: -1 })
		.setWarmth([32, 16])
		.setDiet("vegi")
		.End();

	Races.add("havan", "mermaid", 5, "copper", "black", "black")
		.setBodyPart("legs", "none")
		.setGenital(["canhide", "natural"])
		.hasTail("fish")
		.setPower("psychic")
		.setTraitOption({ 强壮: [1], 负罪: [1] })
		.setPenisShape("shark")
		.setVaginaShape("suji")
		.setWarmth([16, 3])
		.setBase({ 体质: 3, 智力: -3 })
		.setCycle({ type: "heat", cir: 36, days: 2 })
		.setAlter({skin:['copper','pale','gray']})
		.End();

	Races.add("linlog", "hoof", 2, "lightfur", "lightgreen", "milktea")
		.setEarType("deer")
		.setBodyPart("hoof", "natural")
		.setBodyPart("fur", "natural")
		.hasHorn("deer")
		.hasTail("deer")
		.setPower("elements")
		.setElements(["vitae", "terra", "ions"])
		.setTraitOption({ 无垢: [0, 1] })
		.setPenisShape("deer")
		.setVaginaShape("pretty")
		.setWarmth([22, 8])
		.setBase({ 智力: 3, 力量: -3 })
		.setAlter({skin:['lightfur'] , subcolor:['pale','white','health']})
		.End();

	Races.add("pequitis", "hoof", 4, "darkfur", "brown", "brown")
		.setEarType("horse")
		.setBodyPart("hoof", "natural")
		.setBodyPart("fur", "natural")
		.hasHorn("cow")
		.hasTail("horse")
		.setPower("psychic")
		.setTraitOption({ 愤怒: [0, 1], 色欲: [0, 1] })
		.setPenisShape("horse")
		.setWarmth([20, 15])
		.setBase({ 体质: 2, 力量: 2, 敏捷: 2, 智力: -2, 意志: -2, 灵感: -2 })
		.setCycle({ type: "heat", cir: 56, days: 5 })
		.setAlter({skin:['darkfur'], subcolor:['dark','copper','sunset']})
		.End();

	Races.add("ulvs", "snake", 3, "copper", "amber", "black", true)
		.setBodyPart("legs", "none")
		.setGenital(["canhide"])
		.hasTail("snake")
		.setAlter({ skin: ["copper", "sunset", "black", "dark", "pale", "white", "gray",'green'] })
		.setPower("occult")
		.setTraitOption({ 生蛋: [0, 1] })
		.setGenderOption(["i"])
		.setPenisShape("snake")
		.setVaginaShape("suji")
		.setWarmth([32, 24])
		.setBase({ 智力: 2, 体质: -2 })
		.setCycle({ type: "heat", cir: 56, days: 2 })
		.End();

	Races.add("alsha", "elf", 3, "gold", "amber", "white")
		.setEarType("elf")
		.setBodyPart("body", "fake")
		.setBodyPart("ears", "fake")
		.setBodyPart("eye", "fake")
		.setBodyPart("nose", "fake")
		.setBodyPart("mouth", "fake")
		.setBodyPart("hands", "fake")
		.setBodyPart("legs", "fake")
		.setBodyPart("organ", "fake")
		.setGenital(["fake"])
		.setPower("occult")
		.setBase({ 意志: 4, 灵感: -4 })
		.setTraitOption({ 神使: [1], 造物: [2] })
		.setWarmth([42, -10])
		.setGenderOption(["f", "m", "n"])
		.setAlter({skin:['gold','silver']})
		.noCycle()
		.End();

	Races.add("noctar", "elf", 2, "yoru", "lightpurple", "white")
		.setEarType("sharp")
		.setBodyPart("body", "fog")
		.setBodyPart("ears", "fog")
		.setBodyPart("eye", "fake")
		.setBodyPart("nose", "fog")
		.setBodyPart("mouth", "fog")
		.setBodyPart("hands", "fog")
		.setBodyPart("legs", "fog")
		.setBodyPart("tentacles", "fog")
		.setBodyPart("organ", "fog")
		.setGenital(["fog"])
		.setPower("elements")
		.setElements(["ark", "terra"])
		.setBase({ 灵感: 4, 意志: -4 })
		.setTraitOption({ 神使: [0, 1], 虚体: [1] })
		.setGenderOption(["f", "m", "n"])
		.setWarmth([42, -10])
		.setVaginaShape("deamon")
		.setDiet("ore")
		.setAlter({skin:['yoru']})
		.noCycle()
		.End();
	
	Object.defineProperty(window.G,'Races',{
		value: Object.freeze(Races)
	})
	Object.defineProperty(window.G, 'racedata', {
		value: Object.freeze(racesdata)
	})
	Object.defineProperty(window.G, 'racelist',{
		value: Object.keys(racesdata)
	})

})()