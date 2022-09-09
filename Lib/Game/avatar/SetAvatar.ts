import { layers, races } from "../contraction/type";
import { AvItems } from "./Avatars";
import { Character } from "../contraction/Character";

function isValid(props) {
	const type = typeof props;
	const isArray = Array.isArray(props);

	if (isArray) {
		return props.length > 0;
	}

	if (type == "object") {
		return JSON.stringify(props) !== "{}";
	}

	if (props === undefined || props === null) return false;
	return true;
}

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

function AvOptions(obj?: AvItems) {
	if (obj) {
		this.show = obj.hasImg;
		this.src = obj.imgname;
		if (!obj.fixcolor) {
			this.color = obj.color;
		}

		this.pattern = obj.pattern;
		if (!obj.fixpattern) {
			this.subcolor = obj.subcolor;
		}
	} else {
		this.show = false;
		this.src = "";
	}
}

export class Avatar {
	private chara: Character;

	constructor(obj: Character) {
		this.chara = obj;
		for (const [k, v] of Object.entries(obj.equip)) {
			if (isValid(v)) {
				this[k] = new AvOptions(v);
			}
		}
	}
	setOption(key: layers, value) {
		this[key] = value;
	}

	setBody() {
		const { race, info } = this.chara;
	}

	static set(obj: Character) {
		const a = new Avatar(obj);
	}
}
