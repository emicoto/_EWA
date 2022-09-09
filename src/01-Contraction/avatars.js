//<reference path="./Avatars.d.ts"/>
var _$A = (()=>{

	const slotbit = {
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
	const Slots = [
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

	const layerlist = [
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

	const shoplines = [
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

	const shoptype = ["none", "all", "online", "offline", "adluts", "unique", "special", "event", "ordermade"];

	const taglist = [
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

	const catLayer = {
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

	const eyebrowlist = ["angry", "confuse", "happy", "normal", "sad"];

	const mouthlist = ["angry", "laugh", "oop", "open", "sad", "sigh", "smile", "unhappy"];

	const eyelist = [
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

	const colorplate = {
		black:  "#56545A",
		white: "#FFFFFF",
		gray: "#CBC8C7" ,
		blue: "#4089F9" ,
		cyan: "#5DD9FA",
		skyblue:"#DDFDFF",
		pink: "#FB83C4",
		purple: "#B36CF6",
		red: "#F14660",
		orange: "#FC7051",
		yellow: "#F8F45F",
		rice: "#FDF3B1",
		green: "#8DC862",
		mint: "#BBEEC1",
		brown: "#9C6C51",
	};

	const haircolor = {
		black: ["#4F4240", "#CAA799"],
		darkbrown: ["#765646", "#EACFB2"],
		wine: ["#9D5755", "#EACFB2"],
		brown: ["#A07856", "#EACFB2"],
		milktea: ["#D5AEA0", "#FFEDEA"],
		gold: ["#FFE664", "#FFFFFF"],
		softgold: ["#FFEEA9", "#FFFFFF"],
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

	const skincolors = [
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

	const eyecolors = [
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

	const bodytypes = ["elf", "furry", "hoof", "human", "mermaid", "snake"];

	const headtypes = ["round", "square", "pointy", "furry"];

	const eartypes = [
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

	const defaultslot = {
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

	const colorname = {
		black:['黑','black'],
		white:['白','white'],
		gray:['灰','gray'],
		blue:['蓝','blue'],
		cyan:['青','cyan'],
		skyblue:['天蓝','skyblue'],
		pink:['粉','pink'],
		purple:['紫','purple'],
		red:['红','red'],
		orange:['橙','orange'],
		yellow:['黄','yellow'],
		rice:['米黄','rice'],
		green:['绿','green'],
		mint:['薄荷','mint'],
		brown:['棕','brown'],
		darkbrown:['深棕','darkbrown'],
		wine:['酒红','wine'],
		milktea:['奶茶','milk tea'],
		gold:['金','gold'],
		softgold:['浅金','soft gold'],
		platinum:['白金','platinum'],
		silver:['银','silver'],
		aqua:['水蓝','aqua'],
		dark:['暗','dark'],
		copper:['铜','copper'],
		sunset:['麦黄','sunset'],
		health:['健康白','health'],
		pale:['苍白','pale'],
		yoru:['夜蓝','night'],
		amber:['琥珀','amber'],
		emerald:['绿宝石','emerald'],
		lightgreen:['淡绿','light green'],
		lightpurple:['淡紫','light purple'],
		fur:['发色','furry'],
		darkfur:['发色','furry'],
		lightfur:['发色','furry'],

	}

	const emotes = {};
	const data = {};
	const objects = {};
	const equips = {};
	const hair = {
		front: {},
		back: {},
	};

	const list = {
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
		colorname: colorname,
		bodies: bodytypes,
		heads: headtypes,
		ears: eartypes,
		emotes: [],
	};

	//------------>> list 区域，先分别命名再整合到list下面-----------//


	class Hairs {
		static add(type, name, maxlong) {
			hair[type][name] = new Hairs(name, maxlong);
			objects["hair" + type].push(name);
			return hair[type][name];
		}
		isFix() {
			this.fixcolor = true;
			return this;
		}
		constructor(name, maxlong, fixcolor = false) {
			this.name = name;
			this.maxlong = maxlong;
			this.fixcolor = fixcolor;
		}
	}

	class Emote {
		static add(name, eyebrow, eyes, mouth) {
			emotes[name] = new Emote(name, eyebrow, eyes, mouth);
			list.emotes.push(name);
			return emotes[name];
		}
		constructor(name, eyebrow, eye, mouth) {
			this.name = name;
			this.eyebrow = eyebrow;
			this.eye = eye;
			this.mouth = mouth;
			this.frame = null;
		}
		addTear() {
			this.tear = true;
			return this;
		}
		addShy() {
			this.shy = true;
			return this;
		}
		addRed() {
			this.red = true;
			return this;
		}
		addHurt() {
			this.hurt = true;
			return this;
		}
		addFrame(str) {
			this.frame = str;
			return this;
		}
	}

	class AvItems {
		static add(category, imgname, name, des, gender) {
			equips[category].push(name);

			const UID = this.makeUID(category, equips[category].length);
			data[UID] = new AvItems(UID, category, imgname, name, des, gender);

			return data[UID];
		}
		static get(obj) {
			return data[obj.id];
		}
		static getbyID(id) {
			return data[id];
		}
		static getCID(category) {
			const CID = shopcategory.indexOf(category);
			return `A${CID}`;
		}
		static getOID(count) {
			return `o${count}`;
		}
		static getbyName(name) {
			for (const [key, obj] of Object.entries(data)) {
				if (obj.name == name) return obj;
			}
		}
		static makeUID(category, count) {
			const CID = shopcategory.indexOf(category);
			return `A${CID}o${count}`;
		}
		static addObj(layer, name) {
			objects[layer].push(name);
			return objects[layer];
		}
		static listUp(category) {
			const list = [];
			for (const [key, value] of Object.entries(data)) {
				if (value.category == category) list.push(value);
			}
			return list;
		}
		constructor(id, category, imgname = "", name, des, gender = "n") {
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

		setGender(str) {
			this.gender = str;
			return this;
		}
		setEnglish(name, des) {
			this.name_en = name;
			this.des_en = des;
			return this;
		}
		HasImg(f) {
			this.hasImg = true;

			if (f == "f") {
				this.hasImg = false;
			}
			return this;
		}
		hasBDif() {
			this.hasBreastDif = true;
			return this;
		}
		hasPDif() {
			this.hasPregnantDif = true;
			return this;
		}
		setCost(int) {
			this.cost = int;
			return this;
		}
		setWarmth(int) {
			this.hot = int;
			this.cold = int;
			return this;
		}
		setHot(int) {
			this.hot = int;
			return this;
		}
		setCold(int) {
			this.cold = int;
			return this;
		}
		setDurable(int) {
			this.durable = int;
			this.maxdurable = int;
			return this;
		}
		setBeauty(int) {
			this.beauty = int;
			return this;
		}
		setDefence(int) {
			this.defence = int;
			return this;
		}
		setSlot(str) {
			this.slot = str;
			return this;
		}
		setLayer(str) {
			this.layer = str;
			this.slot = [defaultslot[str]];
			return this;
		}
		fixedColor(colorplate) {
			this.fixcolor = true;
			this.colorplate = colorplate;
			this.color = colorplate[0];
			this.colorname = colorplate[0];
			return this;
		}
		customColor(color = "#FDFFFF", colorname = "白") {
			this.color = color;
			this.colorname = colorname;
			this.fixcolor = false;
			return this;
		}
		setShop(str) {
			this.shop = str;
			return this;
		}
		setLineup(str) {
			this.lineup = str;
			return this;
		}
		setTags(tag) {
			this.tags = tag;
			return this;
		}
		isTuckinable() {
			this.tuckinable = true;
			this.tuckin = false;
			return this;
		}
		setPatterns(str) {
			this.pattern = str[0];
			this.patterns = str;
			this.fixpattern = true;
			return this;
		}
		customPatterns(defaultcolor) {
			this.fixpattern = false;
			this.subcolor = defaultcolor;
			return this;
		}
		setEffect(string) {
			this.effect = string;
			return this;
		}
		setRequire(str) {
			this.require = str;
			return this;
		}
		isShortSleeve() {
			this.slot = ["shoulder", "torso"];
			return this;
		}
		isShortPants() {
			this.slot = ["hips", "thign"];
			return this;
		}
		isCursed() {
			this.cursed = true;
			return this;
		}
	}

	//----------------->> 功能区 <<---------------------------------//
	function Init() {
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

	function addColor(index, name, colorcode) {
		colorplate[index] = { name: name, code: colorcode };
		return colorplate;
	}

	function addHaircolor(index, base, mask) {
		haircolor[index] = [base, mask];
		return haircolor;
	}

	function getRevealDetail(equips) {
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

		const details = {
			reveal: reveals[0] ?? 0,
			total: reveal,
			tops: detail[0],
			bottoms: detail[1],
			slots: slots,
		};

		return details;
	}

	function getReveal(slot) {
		let reveal = 0;
		if(!slot) return 0;

		slot.forEach((v) => {
			reveal += slotbit[v];
		});
		return reveal;
	}

	function setSlots(equip) {
		if(!equip) return []

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
		const arr = [];

		let i = 0
		for (const [key, obj] of Object.entries(equip)) {
			if(!obj) continue;
			if (obj.slot[0] === "none" || !obj.slot) continue;
			let slot = obj.slot.join();
			slot = slot.replace("top", "shoulder,breast,waist,arms,back");
			slot = slot.replace("bottom", "crotch,butts,thign,legs");
			slot = slot.replace("torso", "breast,back,waist");
			slot = slot.replace("chest", "breast,back");
			slot = slot.replace("hips", "crotch,butts");

			arr[i] = slot;
			i++
		}

		const arrs = arr.join().split(",");
		let slots = Array.from(new Set(arrs));
		slots.sort((start, next) => {
			return index.indexOf(start) - index.indexOf(next);
		});
		return slots;
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

})();

A.saveCustomItem = function (item) {
	const layer = A.catLayer[item.category]
	const newItem = new AvItems(
		"",
		item.category,
		layer,
		"",
		item.name,
		item.des,
		item.gender
	);

	const tags = [item.tag1]
	if(item.tag2) tags[1] = item.tag2;
	if(item.tag3) tags[2] = item.tag3;

	newItem
		.setCost(item.cost)
		.setBeauty(item.beauty / 100)
		.setDefence(item.defence / 10)
		.setWarmth(item.warmth)
		.setDurable(item.durable)
		.setTags(tags);

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