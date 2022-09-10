var _$D = (()=>{

const basekey = [
    "lv",
    "exp",
    "ATK",
    "DEF",
    "MTK",
    "MDF",
    "SPD",
    "STR",
    "CON",
    "DEX",
    "WIL",
    "INT",
    "PSY",
    "ALR",
    "LUK",
    "hot",
    "cold"
];

const palamPC = [
	"饮食", //hungry
	"健康", //health
	"魔力", //mana
	"体力", //stamina
	"理智", //sanity
	"清洁", //clean

	"酒精", //alcohol
	"药物", //drug

	"欲望", //arousal
	"快感", //pleasure
	"压力", //stress
	"疼痛", //pain
	"抑郁", //depress
	"恐惧", //fear
	"耻辱", //humilation
]

const palamNPC = ["魔力", "体力", "理智", "清洁", "情绪", "欲望", "快感", "愤怒", "射精", "满意"];
const palamMon = ["欲望", "愤怒", "快感", "射精", "满意"];
const palamSP = ["快M", "快B", "快C", "快V", "快U", "快A"];

const npcIntFlag = ["favo", "trust", "dom", "sub", "eager", "faith", "intro"];
const basicflags = [
	"trueform",
	"lactation",
	"lactatecd",
	"active",
	"alive",
	"bestfriend",
	"date",
	"notInteractHour",
];

const explist = [
	"打工",
	"下厨",
	"清扫",
	"唱歌",
	"演戏",
	"舞台",
	"直播",
	"交涉",
	"销售",
	"探索",
	"狩猎",
	"钓鱼",

	"战斗",
	"战败",
	"诱惑",
	"被诱惑",

	"射精",
	"高潮",
	"M高潮",
	"B高潮",
	"C高潮",
	"U高潮",
	"V高潮",
	"A高潮",
	"多重高潮",
	"自慰",
	"口交",
	"性交",
	"肛交",
	"喷乳",

	"被猥琐",
	"被眠奸",
	"被迷奸",
	"被强奸",
	"被轮奸",
	"被兽奸",
	"被触手奸",
	"兽交",
	"触手",
	"史莱姆",

	"怀孕",
	"A怀孕",
	"分娩",
	"尿道开发",
	"阴道扩张",
	"肛门扩张",

	"产卵",
	"寄生",
	"监禁",
	"SM",
];

const dailyrec = [
	"高潮",
	"射精",
	"喷乳",
	"A高潮",
	"M高潮",
	"B高潮",
	"C高潮",
	"V高潮",
	"U高潮",
	"浴精",
	"饮精",
	"肛内射",
	"内射",
	"产卵",
];

const mark = ["快乐", "恐惧", "痛苦", "耻辱"];

const baseAbl = [
	"格斗",
	"健身",
	"跑步",
	"科学",
	"冥想",
	"创作",
	"表演",
	"异能",
	"奥术",
	"秘术",
	"学识",
];

const sexAbl = ["性技巧", "性抵抗", "口技", "手技", "脚技", "腰技"];

const skill = ["开锁", "黑客", "潜行", "搜索"];

const degrees = ["纯洁", "露出", "滥交", "受虐", "受缚", "施虐", "顺从", "兽交", "药隐", "性瘾"];

const npcdegrees = ["支配", "束缚", "追踪"];

const tattoosA = ["face", "chest", "belly", "armsL", "legsL"];
const tattoosB = ["back", "neck", "fossa", "buttsR", "buttsL", "armsR", "legsR"];
const piercingSlots = ["tongue", "labiaL", "labiaR", "penisA", "penisB", "testeA", "testeB", "belly"];

const existstate = ["canhide", "fake", "fog", "natural", "none", "onhead", "slime"];

const wearslots = [
	"hat",
	"cover",
	"outfit_up",
	"outfit_bt",
	"inner_up",
	"inner_bt",
	"legs",
	"shoes",
	"neck",
	"facial",
	"hands",
	"back",
	"onskin_up",
	"onskin_bt",
];

const equipslots = ["weapon", "shield", "acce1", "acce2", "acce3", "penis", "ureth", "vagina", "anal"];

const liquidLayer = ["face", "hair", "hands", "legs", "chest", "back", "butts", "vagina", "anal"];

const PeniSize = {
	cat: [100, 21],
	human: [150, 35],
	dracon: [160, 40],
	bird: [160, 32],
	dog: [180, 42],
	deer: [180, 36],
	snake: [180, 40],
	deamon: [210, 48],
	horse: [240, 56],
	shark: [320, 60],
	tentacle: [360, 36],
};

//深度, 松紧度, 单位也是毫米
//根据bodysize调整
//根据湿润度,松紧度能临时增加 3~10
const vagisize = [
	[80, 16],
	[100, 20],
	[120, 24],
	[140, 28],
	[160, 32],
	[180, 36],
];

const sensbit = {
	none: 0,
	fog: 0.2,
	slime: 0.5,
	fake: 0.8,
	natural: 1.2,
	canhide: 2,
	onhead: 0,
};

function bodyCheck(part) {
	return part !== "none";
}

function getMajor(id) {
	switch (id) {
		case 1:
			return lan("文艺创作", "Creativity");
		case 2:
			return lan("物理科学", "Science");
		case 3:
			return lan("自然科学", "Natural");
		case 4:
			return lan("生理科学", "Medical");
		case 5:
			return lan("音乐表演", "Performance");
		case 6:
			return lan("运动格斗", "Physical");
	}
}

function showGender(g) {
	switch (g) {
		case "f":
			return lan("女", "female");
		case "i":
			return lan("双性", "intersex");
		case "m":
			return lan("男", "male");
		case "n":
			return lan("无性", "zerosex");
	}
}

function Gender(g) {
	switch (g) {
		case "f":
			return lan("女", "female");
		case "i":
			return lan("双", "inter");
		case "m":
			return lan("男", "male");
		case "n":
			return lan("无", "zero");
	}
}

function bodysize(size) {
    switch (size) {
		case 0:
			return lan("娇小", "tiny");
		case 1:
			return lan("娇矮", "small");
		case 2:
			return lan("普通", "normal");
		case 3:
			return lan("修长", "slim");
		case 4:
			return lan("高大", "tall");
		case 5:
			return lan("巨大", "huge");
    }
}

function Sens(int) {
	if (int < 0.5) return lan("微弱", "faint");
	if (int < 1) return lan("钝感", "blunt");
	if (int < 2) return lan("普通", "normal");
	if (int < 3) return lan("敏感", "tender");
	if (int < 4) return lan("十分敏感", "sensitive");
	if (int >= 4) return lan("超敏感", "super sensitive");
	//最多6
}

Object.defineProperty(window.G, "data", {
	value: {
		basekey: Object.freeze(basekey),
		palamPC: Object.freeze(palamPC),
		palamNPC: Object.freeze(palamNPC),
		palamMon: Object.freeze(palamMon),
		palamSP: Object.freeze(palamSP),
		npcIntFlag: Object.freeze(npcIntFlag),
		basicflags: Object.freeze(basicflags),
		explist: explist,
		dailyrec: dailyrec,
		mark: mark,
		baseAbl: baseAbl,
		sexAbl: sexAbl,
		skill: skill,
		degrees: degrees,
		npcdegrees: npcdegrees,
		tattoosA: Object.freeze(tattoosA),
		tattoosB: Object.freeze(tattoosB),
		piercingSlots: Object.freeze(piercingSlots),
		existstate: Object.freeze(existstate),
		wearslots: Object.freeze(wearslots),
		equipslots: equipslots,
		liquidLayer: Object.freeze(liquidLayer),
		PeniSize: Object.freeze(PeniSize),
		vagisize: Object.freeze(vagisize),
		sensbit: Object.freeze(sensbit),
		bodyCheck: Object.freeze(bodyCheck),
		getMajor: Object.freeze(getMajor),
		showGender: Object.freeze(showGender),
		Gender:Object.freeze(Gender),
		bodysize: Object.freeze(bodysize),
		Sens: Object.freeze(Sens),
	},
})

})();