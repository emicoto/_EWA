window["BLENDMODE"] = {};

export const BlendMode = {
	SOURCE_OVER: "source-over",
	SOURCE_IN: "source-in",
	SOURCE_OUT: "source-out",
	SOURCE_ATOP: "source-atop",
	DESTINATION_OVER: "destination-over",
	DESTINATION_IN: "destination-in",
	DESTINATION_OUT: "destination-out",
	DESTINATION_ATOP: "destination-atop",
	LIGHTER: "lighter",
	COPY: "copy",
	XOR: "xor",
	MULTIPLY: "multiply",
	SCREEN: "screen",
	OVERLAY: "overlay",
	DARKEN: "darken",
	LIGHTEN: "lighten",
	COLOR_DODGE: "color-dodge",
	COLOR_BURN: "color-burn",
	HARD_LIGHT: "hard-light",
	SOFT_LIGHT: "soft-light",
	DIFFERENCE: "difference",
	EXCLUSION: "exclusion",
	HUE: "hue",
	SATURATION: "saturation",
	COLOR: "color",
	LUMINOSITY: "luminosity",
};

const dist = "./image/avatar";
const __resolve = (mainpath, ...paths) => path.resolve(mainpath, ...paths);
const cache = {};
const layers = [
	"background",
	"bgeffect",

	"kemoback_wing",
	"kemoback_tail",
	"kemoback_tail_msk",
	"back",
	"hairback",
	"body",
	"body_msk",
	"head",
	"head_msk",
	"ears",
	"penis",
	"belly",

	"tatoos1",
	"tatoos2",
	"tatoos3",
	"tatoos4",

	"onskin_bt",
	"onskin_up",

	"legs",
	"legs_p",
	"shoes",
	"inner_bt",
	"inner_bt_p",
	"outfit_bt",
	"outfit_bt_p",
	"hands",
	"inner_up",
	"inner_up_p",
	"outfit_up",
	"outfit_up_p",
	"cover",
	"cover_p",

	"mouth",
	"eye",
	"emo_tear",
	"emo_shy",
	"emo_red",
	"emo_heart",

	"facial",
	"neck",
	"neck_p",

	"horn",

	"hairfront",
	"hairfront_msk",

	"eyebrow",
	"hat",

	"addon_body",
	"addon_bottom",
	"addon_penis",
	"addon_mouth",
	"addon_face",
	"addon_hair",

	"frame",
	"topeffect",
];

const zindex = {};
layers.map((v, i) => (zindex[v] = i));

interface layersOption {
	show?: boolean;
	src?: string;
	z?: number;
	alpha?: number;
	desaturate?: boolean;
	brightness?: number;
	contrast?: number;
	blendMode?: string;
	blend?: string | object;
	masksrc?: string;
	animation?: string;
	frames?: number;
	filters?: string[];
	dx?: number;
	dy?: number;
	width?: number;
	height?: number;
	showfn?: (options) => boolean;
	srcfn?: (options) => string;
	zfn?: (options) => number;
	alphafn?: (options) => number;
	desaturatefn?: (options) => boolean;
	brightnessfn?: (options) => number;
	contrastftn?: (options) => number;
	blendModefn?: (options) => string;
	blendfn?: (options) => string | object;
	masksrcfn?: (options) => string;
	animationfn?: (options) => string;
	framesfn?: (options) => number[];
	filtersfn?: (options) => string[];
	dxfn?: (options) => number;
	dyfn?: (options) => number;
	widthfn?: (options) => number;
	heightfn?: (options) => number;
}

export function CanvasModels(name, width, height) {
	Renderer.CanvasModels[name] = {
		name: name,
		width: width,
		height: height,
		frames: 8,
		generatedOptions() {
			// console.log("generatedOptions");
			return [];
		},
		defaultOptions() {
			if (EWA.config.debug) console.log(zindex);

			return {
				zindex: zindex,
				frame: null,
				addon: {
					body: false,
					bottom: false,
					face: false,
					hair: false,
					mouth: false,
					penis: false,
				},

				neck: null,
				hand: null,
				face: null,
				hat: null,
				outter: null,
				over_up: null,
				over_bt: null,
				inner_up: null,
				inner_bt: null,
				shoes: null,
				legs: null,

				emoadd: { tear: false, shy: false, red: false, hurt: false },

				eyebrow: null,
				hairfront: null,
				kemofront: { mimi: null, horn: null },
				eyes: null,
				mouth: null,
				tatoos: null,
				dick: null,
				penis: null,
				nipple: null,
				plus: null,
				body: null,
				hairback: null,
				kemoback: { wing: null, tail: null },
				back: null,
				background: null,
				animation: "",
				dummy: __resolve(dist, "dummy.png"),
				eyesframe: 1,
				filters: {},
			};
		},
		preprocess(options) {
			// console.log("preprocess", options);
		},
		layers: {},
	};
}
