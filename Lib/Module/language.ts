var _$L = (() => {
	const base = {
		lv: ["Lv.", "Lv."],
		exp: ["Exp.", "Exp."],
		ATK: ["攻击", "ATK"],
		DEF: ["防御", "DEF"],
		MTK: ["魔攻", "MATK"],
		MDF: ["魔防", "MDEF"],
		SPD: ["速度", "SPD"],
		STR: ["力量", "Str."],
		CON: ["体质", "Con."],
		DEX: ["敏捷", "Dex."],
		WIL: ["意志", "Wil."],
		INT: ["智力", "Int."],
		PSY: ["灵感", "Psy."],
		ALR: ["魅力", "Lur."],
		LUK: ["幸运", "Luc."],
		hot: ["耐热", "Hot"],
		cold: ["耐冷", "Cold"],
	};

	const wearcategory = {
		none: ["无", "none"],
		hat: ["帽子", "hat"],
		coat: ["外套", "coat"],
		top: ["上衣", "top"],
		bottom: ["裤裙", "bottom"],
		underwear: ["内衣", "under upper"],
		underpants: ["内裤", "under bottoms"],
		scarf: ["围巾", "scarf"],
		suits: ["套装", "suits"],
		glove: ["手套", "glove"],
		earing: ["耳饰", "earing"],
		backpack: ["背包", "backpack"],
		facial: ["面饰", "facial accessory"],
		socks: ["袜子", "socks"],
		shoes: ["鞋子", "shoes"],
		necklace: ["项链", "necklace"],
		accessory: ["装饰", "body accessory"],
		gears: ["装备", "gears"],
	};

	const color = {};

	const dayrecord = {
		高潮: ["高潮", "orgasm"],
		射精: ["射精", "ejaculation"],
		喷乳: ["喷乳", "lactation"],
		A高潮: ["A高潮", "orgasm A"],
		M高潮: ["M高潮", "orgasm M"],
		B高潮: ["B高潮", "orgasm B"],
		C高潮: ["C高潮", "orgasm C"],
		V高潮: ["V高潮", "orgasm V"],
		U高潮: ["U高潮", "orgasm U"],
		浴精: ["浴精", "creamy pie"],
		饮精: ["饮精", "swallowed"],
		肛内射: ["肛内射", "cum in anal"],
		内射: ["内射", "cum inside"],
		产卵: ["产卵", "spawn"],
	};

	const degree = {
		纯洁: ["纯洁", "Innocence"],
		露出: ["露出", "Exhibition"],
		滥交: ["滥交", "Promiscuity"],
		受虐: ["受虐", "Masochist"],
		受缚: ["受缚", "Depender"],
		施虐: ["施虐", "Sadist"],
		顺从: ["顺从", "Submissive"],
		兽交: ["兽交", "Beastality"],
		药隐: ["药隐", "DrugAddiction"],
		性瘾: ["性瘾", "SexAddiction"],
		支配: ["支配", "Domination"],
		束缚: ["束缚", "Holder"],
		追踪: ["追踪", "Haunt"],
	};

	const element = {
		lumen: ["光", "Lumen"],
		ark: ["暗", "Ark"],
		ions: ["水", "Ions"],
		flame: ["火", "Flame"],
		electron: ["电", "Electron"],
		vitae: ["生命", "Vitae"],
		terra: ["土", "Terra"],
	};

	const exp = {
		打工: ["打工", "work"],
		下厨: ["下厨", "cook"],
		清扫: ["清扫", "clean"],
		唱歌: ["唱歌", "sing"],
		演戏: ["演戏", "act movies"],
		舞台: ["舞台", "live stage"],
		直播: ["直播", "live stream"],
		交涉: ["交涉", "social"],
		销售: ["销售", "sales"],
		探索: ["探索", "explore"],
		狩猎: ["狩猎", "hunt"],
		钓鱼: ["钓鱼", "fishing"],
		战斗: ["战斗", "combat"],
		战败: ["战败", "defeat"],
		诱惑: ["诱惑", "seduce"],
		被诱惑: ["被诱惑", "seduced"],
		射精: ["射精", "cum"],
		高潮: ["高潮", "orgasm"],
		M高潮: ["M高潮", "orgasm M"],
		B高潮: ["B高潮", "orgasm B"],
		C高潮: ["C高潮", "orgasm C"],
		U高潮: ["U高潮", "orgasm U"],
		V高潮: ["V高潮", "orgasm V"],
		A高潮: ["A高潮", "orgasm A"],
		多重高潮: ["多重高潮", "multip orgasm"],
		自慰: ["自慰", "masturbation"],
		口交: ["口交", "oral sex"],
		性交: ["性交", "vagina sex"],
		肛交: ["肛交", "anal sex"],
		插入: ["插入", "penetrate"],
		喷乳: ["喷乳", "lactation"],
		被猥琐: ["被猥琐", "molested"],
		被眠奸: ["被眠奸", "raped when sleep"],
		被迷奸: ["被迷奸", "raped by drug"],
		被强奸: ["被强奸", "be raped"],
		被轮奸: ["被轮奸", "gang raped"],
		被兽奸: ["被兽奸", "raped by beast"],
		被触手奸: ["被触手奸", "raped by tentacles"],
		兽交: ["兽交", "beastality"],
		触手: ["触手", "tantacles"],
		史莱姆: ["史莱姆", "slime"],
		怀孕: ["怀孕", "pregnant"],
		A怀孕: ["A怀孕", "anal pregnant"],
		分娩: ["分娩", "give birth"],
		尿道开发: ["尿道开发", "urethral develop"],
		阴道扩张: ["阴道扩张", "vagina stretch"],
		肛门扩张: ["肛门扩张", "anal stretch"],
		产卵: ["产卵", "spawn egg"],
		寄生: ["寄生", "parasitic"],
		监禁: ["监禁", "imprisoned"],
		SM: ["SM", "SM trained"],
	};

	const marks = {
		痛苦: ["痛苦", "Pain"],
		快乐: ["快乐", "Ecstasy"],
		恐惧: ["恐惧", "Fear"],
		耻辱: ["耻辱", "Stigma"],
	};

	const palam = {
		饮食: ["饮食", "Foo."],
		健康: ["健康", "Hea."],
		魔力: ["魔力", "Man."],
		体力: ["体力", "Sta."],
		理智: ["理智", "San."],
		清洁: ["清洁", "Cle."],
		酒精: ["酒精", "Alc."],
		药物: ["药物", "Dru."],
		欲望: ["欲望", "Aro."],
		快感: ["快感", "Ecs."],
		压力: ["压力", "Str."],
		疼痛: ["疼痛", "Pai."],
		抑郁: ["抑郁", "Dep."],
		恐惧: ["恐惧", "Fea."],
		耻辱: ["耻辱", "Sti."],
		情绪: ["情绪", "Emo."],
		愤怒: ["愤怒", "Ang."],
		射精: ["射精", "Eja."],
		满意: ["满意", "Sas."],
		快M: ["快M", ".M"],
		快B: ["快B", ".B"],
		快C: ["快C", ".C"],
		快V: ["快V", ".V"],
		快U: ["快U", ".U"],
		快A: ["快A", ".A"],
	};

	const skill = {
		格斗: ["格斗", "Combat"],
		健身: ["健身", "Fitness"],
		跑步: ["跑步", "Running"],
		冥想: ["冥想", "Meditation"],
		科学: ["科学", "Science"],
		创作: ["创作", "Creativity"],
		表演: ["表演", "Peformance"],
		异能: ["异能", "Psychic Power"],
		奥术: ["奥术", "Arcane Magic"],
		秘术: ["秘术", "Classic Magic"],
		学识: ["学识", "Knowlogic"],
		性技巧: ["性技巧", "Sex Techniques"],
		性抵抗: ["性抵抗", "Sex resistance"],
		口技: ["口技", "Mouth Skill"],
		手技: ["手技", "Hand Skill"],
		脚技: ["脚技", "Foot Skill"],
		腰技: ["腰技", "Penis Skill"],
		开锁: ["开锁", "unlock"],
		黑客: ["黑客", "hacker"],
		潜行: ["潜行", "stalk"],
		搜索: ["搜索", "explore"],
	};

	const weartag = {};

	const hairstyle = {};

	const races = {
		alsha: ["阳灵", "Alsha"],
		catvinx: ["狐猫", "Catvinx"],
		dracons: ["晶龙", "Dracons"],
		havan: ["海族", "Havans"],
		human: ["新人类", "Human"],
		lepios: ["鼠兔", "Lepios"],
		linlog: ["灵鹿", "Linlog"],
		noctar: ["夜灵", "Noctar"],
		pequitis: ["角马", "Pequitis"],
		sckyrios: ["狼人", "Sckyrios"],
		ulvs: ["灵蛇", "Ulvs"],
		voeli: ["羽族", "Voeli"],
	};

	const major = [
		["无", "none"], //0
		["文艺创作", "Creativity"], //1
		["物理科学", "Science"], //2
		["自然科学", "Natural"], //3
		["生理科学", "Medical"], //4
		["音乐表演", "Performance"], //5
		["运动格斗", "Physical"], //6
	];

	const gender = {
		f: ["女", "female"],
		i: ["双", "inter"],
		m: ["男", "male"],
		n: ["无", "none"],
	};

	$.getJSON("json/language/hairs.json", (data) => {
		if (data) {
			console.log("loading the language file from hairs.json");
			for (let i in data) {
				hairstyle[i] = data[i];
			}
		}
	});

	$.getJSON("json/language/colors.json", (data) => {
		if (data) {
			console.log("loading the language file from colors.json");
			for (let i in data) {
				color[i] = data[i];
			}
		}
	});

	$.getJSON("json/language/tags.json", (data) => {
		if (data) {
			console.log("loading the language file from tags.json");
			for (let i in data) {
				weartag[i] = data[i];
			}
		}
	});

	Object.defineProperty(window, "L", {
		value: {
			base: Object.freeze(base),
			wearcategory: wearcategory,
			color: color,
			dayrecord: dayrecord,
			degree: Object.freeze(degree),
			element: Object.freeze(element),
			exp: exp,
			marks: marks,
			skill: skill,
			weartag: weartag,
			hairstyle: hairstyle,
			races: Object.freeze(races),
			major: Object.freeze(major),
			gender: Object.freeze(gender),
		},
	});
})();
