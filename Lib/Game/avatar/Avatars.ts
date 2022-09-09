import { revealDetails, colorplate, D } from "../contraction";
import {
	category,
	Dict,
	eyebrow,
	eyes,
	gender,
	hairtype,
	layers,
	wearslot,
	mouth,
	shop,
	shopline,
	slots,
	tags,
	Wear,
	skincolor,
	eyecolor,
	bodytype,
	eartype,
	headtype,
} from "../contraction/type";

export interface Hairs {
	name: string;
	fixcolor: boolean;
	maxlong: number;
}

export interface Emote {
	name: string;
	eyebrow: eyebrow;
	eye: eyes;
	mouth: mouth;
	frame?: string;
	tear?: boolean;
	shy?: boolean;
	red?: boolean;
	hurt?: boolean;
}

export interface AvItems {
	id: string;
	uid: 0;
	imgname: string;
	name: string;
	name_en: string;
	gender: gender;
	des: string;
	des_en: string;
	tags: tags[];
	hasImg: boolean;
	hasBreastDif?: boolean;
	hasPregnantDif?: boolean;

	cost: number;
	hot?: number;
	cold?: number;
	durable: number;
	maxdurable: number;

	beauty?: number;
	defence?: number;

	fixcolor: boolean;
	color: string;

	colorname: string;
	colorplate: string[];

	category: category;
	layer: wearslot;
	shop: shop;
	lineup?: shopline[];
	slot: slots[];
	tuckinable?: boolean;
	tuckin?: boolean;
	pattern?: null | string;
	patterns?: string[];
	fixpattern?: boolean;
	subcolor?: null | string;

	cursed?: boolean;
	effect?: string;
	//能不能穿的判定
	require?: bodytype[];
}

export interface SkinItem {
	id: string;
	type: string; // tattoos or brand or writing or permentpen
	contex: string;
	lews: number; //变态程度
	tag?: string; // 妓女, 变态, 奴隶, 榨奶, 榨精, 被虐狂, 施虐狂, 黑道, 肉便器, 性玩具
	isText?: boolean; //内容是不是文字
}

type slotbits<T = number, K extends string = slots> = { [key in K]?: T };
const slotbit: slotbits = {
	head: 0,
	top: 5, //长袖上衣范围
	bottom: 4, //长裤/长裙范围

	shoulder: 1, //脖子到肩膀
	breast: 1, //胸部
	waist: 1, //腰部
	arms: 1, //手臂
	back: 1, //背部

	hips: 2, //三角内裤范围
	thign: 1, //大腿
	legs: 1, //腿部
	feet: 1, //脚

	torso: 3, //上身主体
	chest: 2, // 胸腔范围，包前后
	crotch: 1, //胯部范围，不含屁股
	butts: 1, //屁股范围，不含前部
	hands: 1, //手

	mouth: 0,
	vagina: 0,
	penis: 0,
	ureth: 0,
	nipple: 0,
	anal: 0,
	none: 0,
};

const slotlist = Object.keys(slotbit);
const Slots: slots[] = [
	"head",
	"mouth",
	"shoulder",
	"breast",
	"waist",
	"arms",
	"hands",
	"back",
	"crotch",
	"penis",
	"ureth",
	"vagina",
	"anal",
	"butts",
	"thign",
	"legs",
	"feet",
];

const layerlist: layers[] = [
	"topeffect",
	"frame",
	"addon",
	"hat",
	"eyebrow",
	"hairfront",
	"horn",
	"neck",
	"facial",
	"emoadd",
	"eye",
	"mouth",
	"cover",
	"outfit_up",
	"inner_up",
	"hands",
	"outfit_bt",
	"inner_bt",
	"shoes",
	"legs",
	"belly",
	"penis",
	"onskin_up",
	"onskin_bt",
	"tattoos",
	"ears",
	"head",
	"body",
	"hairback",
	"back",
	"kemoback",
	"bgeffect",
	"background",
];

const shoplines: shopline[] = [
	"general",
	"mens",
	"womens",
	"brand",
	"lingerie",
	"sexy",
	"lewd",
	"spring",
	"summer",
	"autumn",
	"winter",
	"fasional",
	"classic",
	"special",
	"cosplay",
	"none",
];

const shoptype: shop[] = ["none", "all", "online", "offline", "adluts", "unique", "special", "event", "ordermade"];

const taglist: tags[] = [
	"裸露",

	"日常",
	"睡衣",
	"学生",
	"运动",
	"泳装",
	"制服",
	"正式",
	"舞台",
	"社交",

	"防水",
	"雨衣",
	"潜水",
	"战斗",

	"商务",
	"时尚",
	"COSPLAY",
	"情趣",

	"仆从",
	"变态",
	"神圣",
	"古风",
	"洛丽塔",
	"福瑞",
	"高跟",

	"闪耀",
	"魔力",
	"特殊",
];

type categorylayer<T = wearslot, K extends string = category> = { [key in K]?: T };

const catLayer: categorylayer = {
	无: "any",
	帽子: "hat",
	外套: "cover",
	上衣: "outfit_up",
	裤裙: "outfit_bt",
	内衣: "inner_up",
	内裤: "inner_bt",
	围巾: "neck",
	头饰: "hat",
	套装: "cover",
	手套: "hands",
	耳饰: "facial",
	背包: "back",
	脸饰: "facial",
	袜子: "legs",
	鞋子: "shoes",
	首饰: "neck",
	装饰: "onskin_up",
	道具: "onskin_bt",
};

const shopcategory = Object.keys(catLayer);

const eyebrowlist: eyebrow[] = ["angry", "confuse", "happy", "normal", "sad"];

const mouthlist: mouth[] = ["angry", "laugh", "oop", "open", "sad", "sigh", "smile", "unhappy"];

const eyelist: eyes[] = [
	"ahe",
	"blink1",
	"blink2a",
	"blink2b",
	"close1",
	"close2",
	"full",
	"idle",
	"half",
	"quater1",
	"quater2",
	"lookdown",
	"lookleft",
	"lookup1",
	"lookup2",
	"lookup3",
];

const colorplate: Dict<colorplate> = {
	black: { name: "黑", code: "#56545A" },
	white: { name: "白", code: "#FFFFFF" },
	gray: { name: "灰", code: "#CBC8C7" },
	blue: { name: "蓝", code: "#4089F9" },
	cyan: { name: "青", code: "#5DD9FA" },
	skyblue: { name: "天蓝", code: "#DDFDFF" },
	pink: { name: "粉", code: "#FB83C4" },
	purple: { name: "紫", code: "#B36CF6" },
	red: { name: "红", code: "#F14660" },
	orange: { name: "橙", code: "#FC7051" },
	yellow: { name: "黄", code: "#F8F45F" },
	rice: { name: "米黄", code: "#FDF3B1" },
	green: { name: "绿", code: "#8DC862" },
	mint: { name: "薄荷", code: "#BBEEC1" },
	brown: { name: "棕", code: "#9C6C51" },
};

const haircolor = {
	black: ["#4F4240", "#CAA799"],
	darkbrown: ["#765646", "#EACFB2"],
	wine: ["#9D5755", "#EACFB2"],
	brown: ["#A07856", "#EACFB2"],
	milktea: ["#D5AEA0", "#FFEDEA"],
	blond: ["#FFE664", "#FFFFFF"],
	softblond: ["#FFEEA9", "#FFFFFF"],
	platinum: ["#FFF1D5", "#FFFFFF"],
	silver: ["#EBF0F3", "#FFFFFF"],
	white: ["#FFFFFF", "#EAFDFF"],
	gray: ["#979DB0", "#FFFFFF"],
	purple: ["#C8B5F9", "#FFF1FE"],
	green: ["#CEF3A0", "#FFFDDA"],
	blue: ["#6B97F6", "#FFFFFF"],
	aqua: ["#BADDFF", "#FFFFFF"],
	pink: ["#FFC0DA", "#FFFDDA"],
	red: ["#ED5C4D", "#FFD2E7"],
	orange: ["#FFA63D", "#FAFFCF"],
};

const skincolors: skincolor[] = [
	"black",
	"dark",
	"copper",
	"gray",
	"sunset",
	"health",
	"white",
	"pale",

	"darkfur",
	"lightfur",
	"fur",

	"gold",
	"yoru",
];

const eyecolors: eyecolor[] = [
	"amber",
	"aqua",
	"black",
	"blue",
	"brown",
	"emerald",
	"green",
	"lightgreen",
	"lightpurple",
	"pink",
	"purple",
	"red",
	"white",
];

const bodytypes: bodytype[] = ["elf", "furry", "hoof", "human", "mermaid", "snake"];

const headtypes: headtype[] = ["round", "square", "pointy", "furry"];

const eartypes: eartype[] = [
	"human",
	"cat",
	"dog",
	"deer",
	"futher",
	"horse",
	"mouse",
	"rabit",
	"elf",
	"sharp",
	"none",
];

//slot用于计算裸露面积和身体占用部位。
type defaultslots<T = slots[], K extends string = category> = { [key in K]?: T };
const defaultslot: defaultslots = {
	无: ["none"],
	帽子: ["head"],
	外套: ["top"],
	上衣: ["top"],
	裤裙: ["bottom"],
	内衣: ["chest"],
	内裤: ["hips"],
	围巾: ["shoulder"],
	头饰: ["head"],
	套装: ["top", "bottom"],
	手套: ["hands"],
	耳饰: ["none"],
	背包: ["none"],
	脸饰: ["none"],
	袜子: ["legs", "feet"],
	鞋子: ["feet"],
	首饰: ["none"],
	装饰: ["nipple"],
	道具: ["anal"],
};

//------------>> list 区域，先分别命名再整合到list下面-----------//

type objects<T = string[], K extends string = layers> = { [key in K]?: T };
type eobj<T = string[], K extends string = wearslot> = { [key in K]?: T };

const emotes: Dict<Emote> = {};
const data: Dict<AvItems> = {};
const objects: objects = {};
const equips: eobj = {};
const hair: Dict<Dict<Hairs>> = {
	front: {},
	back: {},
};

export const list = {
	slotlist: Object.freeze(slotlist),
	slots: Object.freeze(Slots),
	layers: Object.freeze(layerlist),

	shoplines: shoplines,
	shops: shoptype,
	tags: taglist,

	catLayer: Object.freeze(catLayer),
	categories: Object.freeze(shopcategory),

	colorplate: colorplate,
	haircolor: haircolor,
	eyecolor: eyecolors,
	skincolor: skincolors,
	bodies: bodytypes,
	heads: headtypes,
	ears: eartypes,
	emotes: [],
};

//---------------->> 主参数定义区 <<-------------------------------//

export class Hairs {
	static add(type: hairtype, name: string, maxlong: number) {
		hair[type][name] = new Hairs(name, maxlong);
		objects["hair" + type].push(name);
		return hair[type][name];
	}
	isFix?() {
		this.fixcolor = true;
		return this;
	}
	constructor(name: string, maxlong: number, fixcolor: boolean = false) {
		this.name = name;
		this.maxlong = maxlong;
		this.fixcolor = fixcolor;
	}
}

export class Emote {
	static add(name: string, eyebrow: eyebrow, eyes: eyes, mouth: mouth) {
		emotes[name] = new Emote(name, eyebrow, eyes, mouth);
		list.emotes.push(name);
		return emotes[name];
	}
	constructor(name: string, eyebrow: eyebrow, eye: eyes, mouth: mouth) {
		this.name = name;
		this.eyebrow = eyebrow;
		this.eye = eye;
		this.mouth = mouth;
		this.frame = null;
	}
	addTear?() {
		this.tear = true;
		return this;
	}
	addShy?() {
		this.shy = true;
		return this;
	}
	addRed?() {
		this.red = true;
		return this;
	}
	addHurt?() {
		this.hurt = true;
		return this;
	}
	addFrame?(str: string) {
		this.frame = str;
		return this;
	}
}

export class AvItems {
	static add(category: category, imgname: string, name: string, des: string, gender?: gender) {
		equips[category].push(name);

		const UID = this.makeUID(category, equips[category].length);
		data[UID] = new AvItems(UID, category, imgname, name, des, gender);

		return data[UID];
	}
	static get(obj: AvItems) {
		return data[obj.id];
	}
	static getbyID(id: string) {
		return data[id];
	}
	static getCID(category: category) {
		const CID = shopcategory.indexOf(category);
		return `A${CID}`;
	}
	static getOID(count: number) {
		return `o${count}`;
	}
	static getbyName(name: string) {
		for (const [key, obj] of Object.entries(data)) {
			if (obj.name == name) return obj;
		}
	}
	static makeUID(category: category, count: number) {
		const CID = shopcategory.indexOf(category);
		return `A${CID}o${count}`;
	}
	static addObj(layer: layers, name: string) {
		objects[layer].push(name);
		return objects[layer];
	}
	static listUp(category: category) {
		const list: AvItems[] = [];
		for (const [key, value] of Object.entries(data)) {
			if (value.category == category) list.push(value);
		}
		return list;
	}
	constructor(id: string, category: category, imgname: string = "", name: string, des: string, gender: gender = "n") {
		this.id = id;
		this.imgname = imgname;
		this.name = name;
		this.des = des;
		this.gender = gender;
		this.uid = 0;
		this.name_en = name;
		this.des_en = des;
		this.tags = ["日常"];
		this.hasImg = imgname == "" ? false : true;
		this.cost = 0;
		this.durable = 12;
		this.maxdurable = 12;
		this.fixcolor = true;
		this.color = null;
		this.colorname = null;
		this.colorplate = [];

		this.category = category;
		this.layer = catLayer[category];
		this.shop = "all";
		this.slot = defaultslot[category];
		if (category == "鞋子" || category == "袜子") {
			this.require = ["elf", "furry", "human"];
		}
	}

	setGender?(str: gender) {
		this.gender = str;
		return this;
	}
	setEnglish?(name: string, des: string) {
		this.name_en = name;
		this.des_en = des;
		return this;
	}
	HasImg?(f?: string) {
		this.hasImg = true;

		if (f == "f") {
			this.hasImg = false;
		}
		return this;
	}
	hasBDif?() {
		this.hasBreastDif = true;
		return this;
	}
	hasPDif?() {
		this.hasPregnantDif = true;
		return this;
	}
	setCost?(int: number) {
		this.cost = int;
		return this;
	}
	setWarmth?(int: number) {
		this.hot = int;
		this.cold = int;
		return this;
	}
	setHot?(int: number) {
		this.hot = int;
		return this;
	}
	setCold?(int: number) {
		this.cold = int;
		return this;
	}
	setDurable?(int: number) {
		this.durable = int;
		this.maxdurable = int;
		return this;
	}
	setBeauty?(int: number) {
		this.beauty = int;
		return this;
	}
	setDefence?(int: number) {
		this.defence = int;
		return this;
	}
	setSlot?(str: slots[]) {
		this.slot = str;
		return this;
	}
	setLayer?(str: wearslot) {
		this.layer = str;
		this.slot = [defaultslot[str]];
		return this;
	}
	fixedColor?(colorplate: string[]) {
		this.fixcolor = true;
		this.colorplate = colorplate;
		this.color = colorplate[0];
		this.colorname = colorplate[0];
		return this;
	}
	customColor?(color: string = "#FDFFFF", colorname: string = "白") {
		this.color = color;
		this.colorname = colorname;
		this.fixcolor = false;
		return this;
	}
	setShop?(str: shop) {
		this.shop = str;
		return this;
	}
	setLineup?(str: shopline[]) {
		this.lineup = str;
		return this;
	}
	setTags?(tag: tags[]) {
		this.tags = tag;
		return this;
	}
	isTuckinable?() {
		this.tuckinable = true;
		this.tuckin = false;
		return this;
	}
	setPatterns?(str: string[]) {
		this.pattern = str[0];
		this.patterns = str;
		this.fixpattern = true;
		return this;
	}
	customPatterns?(defaultcolor: string) {
		this.fixpattern = false;
		this.subcolor = defaultcolor;
		return this;
	}
	setEffect?(string) {
		this.effect = string;
		return this;
	}
	setRequire?(str: bodytype[]) {
		this.require = str;
		return this;
	}
	isShortSleeve?() {
		this.slot = ["shoulder", "torso"];
		return this;
	}
	isShortPants?() {
		this.slot = ["hips", "thign"];
		return this;
	}
	isCursed?() {
		this.cursed = true;
		return this;
	}
}

//----------------->> 功能区 <<---------------------------------//
export function Init() {
	layerlist.forEach((layer) => {
		if (D.wearslots.includes(layer) === false) objects[layer] = [];
	});
	shopcategory.forEach((cat) => {
		equips[cat] = [];
	});
	eyelist.forEach((obj) => {
		objects["eye"].push(obj);
	});
	eyebrowlist.forEach((obj) => {
		objects["eyebrow"].push(obj);
	});
	mouthlist.forEach((obj) => {
		objects["mouth"].push(obj);
	});
}

export function addColor(index: string, name: string, colorcode: string) {
	colorplate[index] = { name: name, code: colorcode };
	return colorplate;
}

export function addHaircolor(index: string, base: string, mask: string) {
	haircolor[index] = [base, mask];
	return haircolor;
}

export function getRevealDetail(equips: Wear): revealDetails {
	const set = ["cover", "outfit_up", "outfit_bt", "inner_up", "inner_bt"];
	const top = ["top", "shoulder", "chest", "waist", "arms", "back", "torso"];
	const bottom = ["bottom", "hips", "thign", "legs", "crotch", "butts"];
	const slots = setSlots(equips);
	const reveal = getReveal(slots);
	const reveals = [0, 0, 0];
	const detail = [0, 0, 0];
	let c = 0;

	for (const [key, value] of Object.entries(equips)) {
		if (set.includes(key) === false) continue;
		if (value) {
			value.slot.forEach((v) => {
				reveals[c] += slotbit[v];

				if (top.includes(v)) detail[0] += slotbit[v];

				if (bottom.includes(v)) detail[1] += slotbit[v];
			});
		}
		if (key == "cover" || key == "outfit_bt") c++;
		if (key == "inner_bt") break;
	}
	reveals.sort((a, b) => b - a);

	const details: revealDetails = {
		reveal: reveal[0] ?? 0,
		total: reveal,
		tops: detail[0],
		bottoms: detail[1],
		slots: slots,
	};

	return details;
}

function getReveal(slot: slots[] | string[]) {
	let reveal = 0;
	if (!slot) return 0;
	slot.forEach((v) => {
		reveal += slotbit[v];
	});
	return reveal;
}

function setSlots(equip: Wear) {
	if (!equip) return [];
	const index = [
		"head",
		"mouth",
		"shoulder",
		"breast",
		"waist",
		"arms",
		"hands",
		"back",
		"crotch",
		"penis",
		"ureth",
		"vagina",
		"anal",
		"butts",
		"thign",
		"legs",
		"feet",
	];
	const arr: Array<string> = [];

	let i = 0;
	for (const [key, obj] of Object.entries(equip)) {
		if (!obj) continue;
		if (obj.slot[0] === "none" || !obj.slot) continue;
		let slot = Array.from(obj.slot).join();
		slot = slot.replace("top", "shoulder,breast,waist,arms,back");
		slot = slot.replace("bottom", "crotch,butts,thign,legs");
		slot = slot.replace("torso", "breast,back,waist");
		slot = slot.replace("chest", "breast,back");
		slot = slot.replace("hips", "crotch,butts");

		arr[i] = slot;
		i++;
	}

	const arrs = arr.join().split(",");
	let slots = Array.from(new Set(arrs));
	slots.sort((start, next) => {
		return index.indexOf(start) - index.indexOf(next);
	});
	if (!slots[0]) return [];
	return slots;
}

const saveCustomItem = function (item) {
	const layer = catLayer[item.category];
	const newItem = new AvItems("", item.category, "", item.name, item.des, item.gender);

	const tags = [item.tag1];
	if (item.tag2) tags[1] = item.tag2;
	if (item.tag3) tags[2] = item.tag3;

	newItem
		.setCost(item.cost)
		.setBeauty(item.beauty / 100)
		.setDefence(item.defence / 10)
		.setWarmth(item.warmth)
		.setDurable(item.durable);

	const data = JSON.stringify(newItem);
	download(data, "newItem.txt", "text/plain");
};

function download(content, fileName, contentType) {
	var a = document.createElement("a");
	var file = new Blob([content], { type: contentType });
	a.href = URL.createObjectURL(file);
	a.download = fileName;
	a.click();
}

Object.defineProperty(window, "Avatars", {
	value: {
		Init: Object.freeze(Init),
		addColor: Object.freeze(addColor),
		addHaircolor: Object.freeze(addHaircolor),
		getRevealDetail: Object.freeze(getRevealDetail),
		getReveal: Object.freeze(getReveal),
		setSlots: Object.freeze(setSlots),

		Hairs: Object.freeze(Hairs),
		Emote: Object.freeze(Emote),
		AvItems: Object.freeze(AvItems),

		hair: hair,
		emotes: emotes,
		data: data,
		equips: equips,
		objects: objects,
		list: list,
	},
});
