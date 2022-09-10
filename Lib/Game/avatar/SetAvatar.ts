import { layers, races, Character, Wear, CharaInfo } from "../construction";
import { SelectCase } from "../../selectcase";
import { AvItems, Emote, Hairs } from "./Avatars";

export interface AvOptions {
	show: boolean;
	color?: string;
	src: string;
	pattern?: string;
	subcolor?: string;
	tuckin?: boolean;
	tail?: string;
	wing?: string;
}

export interface addOptions {
	show: boolean;
	body?: boolean;
	bottom?: boolean;
	penis?: boolean;
	mouth?: boolean;
	face?: boolean;
	hair?: boolean;
}

export interface emoOptions {
	show: boolean;
	tear?: boolean;
	shy?: boolean;
	red?: boolean;
	heart?: boolean;
}

export interface Tattoos {
	show: boolean;
	arms?: string;
	chest?: string;
	belly?: string;
	thigh?: string;
	face?: string;
}

export interface Avatar {
	topeffect?: AvOptions;
	frame?: AvOptions;
	addon?: addOptions;
	hat?: AvOptions;
	horn?: AvOptions;
	eyebrow?: string;
	hairfront: AvOptions;
	neck?: AvOptions;
	facial?: AvOptions;
	emoadd?: emoOptions;
	eye: AvOptions;
	mouth: string;
	cover?: AvOptions;
	outfit_up?: AvOptions;
	outfit_bt?: AvOptions;
	inner_up?: AvOptions;
	inner_bt?: AvOptions;
	onskin_up?: AvOptions;
	onskin_bt?: AvOptions;
	hands?: AvOptions;
	shoes?: AvOptions;
	legs?: AvOptions;
	belly: AvOptions;
	penis: AvOptions;
	tattoos?: AvOptions;
	ears?: AvOptions;
	head: AvOptions;
	body: AvOptions;
	hairback: AvOptions;
	back?: AvOptions;
	kemoback?: AvOptions;
	background?: AvOptions;
	bgeffect?: AvOptions;
}
const avatarlayers: layers[] = [
	"topeffect",
	"frame",
	"addon",
	"hat",
	"horn",
	"eyebrow",
	"hairfront",
	"neck",
	"facial",
	"emoadd",
	"eye",
	"mouth",
	"cover",
	"outfit_up",
	"outfit_bt",
	"inner_up",
	"inner_bt",
	"onskin_up",
	"onskin_bt",
	"hands",
	"shoes",
	"legs",
	"belly",
	"penis",
	"tattoos",
	"ears",
	"head",
	"body",
	"hairback",
	"back",
	"kemoback",
	"background",
	"bgeffect",
];

function AvOptions(obj?: AvItems, path?: string) {
	if (obj.hasImg) {
		this.show = true;
		this.src = path;

		if (!obj.fixcolor) {
			this.color = obj.color;
		}

		if (this.pattern) {
			this.pattern = obj.pattern;
			if (!obj.fixpattern) {
				this.subcolor = obj.subcolor;
			}
		}
	} else {
		this.show = false;
		this.src = "";
	}
}

const eyedif = ["blink2", "full", "lookup3"];

export class Avatar {
	private chara: Character;
	private wear: Wear;
	private info: CharaInfo;
	private race: races;
	private emote: string;
	private face: Emote;
	private hair: Hairs; //hair data

	constructor(obj: Character) {
		this.chara = obj;
		this.wear = obj.wear;
		this.info = obj.info;
		this.race = obj.race;
		this.emote = obj.emote;

		this.hair = Hairs.get("front", this.info.hairstyle[0]);

		this.initWear();
	}

	initWear() {
		for (const [k, v] of Object.entries(this.wear)) {
			if (v.hasImg) {
				const path = this.path(v) + this.bdif(v) + this.pdif(v);
				this[k] = new AvOptions(v, path);
			} else {
				this[k] = new AvOptions(v);
			}
		}
	}

	bsize() {
		const size = this.info.breast;
		if (inrange(size, 0, 1)) return 1;
		if (inrange(size, 2, 3)) return 2;

		return 3;
	}

	bdif(obj: AvItems) {
		if (obj.hasBreastDif) return `_${this.bsize()}`;
		else return "";
	}

	pdif(obj: AvItems) {
		if (obj.hasPregnantDif && this.chara.state.怀孕) return "p";
		else return "";
	}

	path(obj: AvItems) {
		if (obj.fixcolor) return `${obj.imgname}/${obj.color}`;
		else return `${obj.imgname}/basic`;
	}

	harilen(len) {
		const select = new SelectCase();
		select.case([0, 99], 1).case([100, 499], 2).case([500, 799], 3).else(4);

		return select.has(len);
	}

	hairdif(len) {
		if (Hairs.len(len) <= this.hair.maxlong) return "_" + Hairs.len(len);
		else return "_" + this.hair.maxlong;
	}

	setOption(key: layers, value) {
		this[key] = value;
	}

	setBody() {}

	setFace() {
		this.face = Emote.get(this.emote);
	}

	static set(obj: Character) {
		const a = new Avatar(obj);
	}
}
