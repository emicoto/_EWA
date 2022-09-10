import { wearslot } from "../type";
import {
	bodytype,
	Dict,
	eartype,
	existency,
	gender,
	headtype,
	marks,
	penishape,
	races,
	slots,
	vaginashape,
} from "../type";

//外貌信息。
export interface CharaInfo {
	eyes?: number;
	eyecolor?: string;

	haircolor?: string;
	hairstyle?: [string, string];
	hairlength?: [number, number];

	breast?: number;
	hips?: number;
	bodysize?: number;

	skin?: string;
	body?: bodytype;
	head?: headtype;
	ears?: eartype;
	tail?: string;
	horn?: string;
	wing?: string;
	subcolor?: string; //skin是fur的话,这里就是人型时的肤色
}

export interface Skill {
	lv: number;
	exp: number;
}

export interface SexPart {
	shape?: penishape | vaginashape;
	sens?: number; //sensitivity,感度
	size?: [number, number]; //大小，或者是扩张度
	produce?: number[]; //分泌物/产出物份量，0号位是现存量，1号位是容量
}

export interface VirginityInfo {
	person: string;
	date: string;
	situation: string;
}
export interface cycleInfo {
	type: "menst" | "heat" | "none";
	circle?: [number, number]; // 当前周期,基础周期
	cir?: number; //基础周期
	days: number; //基本持续时间
	rng?: [number, number]; //浮动范围
	current?: number; //周期进行状态
	state?: number; //周期的第几天
	phase?: string; //子宫周期状态
}

export interface pregnancy {
	cycle?: cycleInfo; //只有vagina才有
	chance?: number; //当前受孕概率
	fatherID?: string[]; //播种者的角色ID
	seedCount?: number[]; //毕竟有不是通过精液受孕的种族，还是用种子数来记录吧。
	currentState?: number; //当前怀孕进程。
	day?: number; //当前怀孕天数。
	due?: number; //预计需要的出产日数。
	inside?: babies[]; //内部情况。
}

export interface babies {
	type: races;
	gender: gender;
}

export interface revealDetails {
	reveal: number;
	total: number;
	tops: number;
	bottoms: number;
	slots: slots[];
}

/* 精神刻印，心灵创伤。MAX5。满了就失去对应的抵抗力。
    无法完全消除，但只要还没满级就可以接受催眠来降低等级。每个刻印最多可以接受5次治疗。
*/
export interface Mark {
	level: number; //当前等级
	maxlv: number; //历史最高等级
	hypo: number; //通过心理治疗压制的次数.最大5次.
	history: MarkHistory[]; //等级变动历史
}
export type Marks<T = Mark, K extends string = marks> = { [key in K]?: T };

export interface MarkHistory {
	change: number; //等级变动,正数就是获得,负数就是消除
	target: string; //留下刻印或消除刻印的对象
	situation: string; //刻印变动情景
}

export interface tatoos {
	face?: string; //可见区
	chest?: string;
	belly?: string;
	armsL?: string;
	legsL?: string;

	back?: string; //不可见区
	neck?: string;
	fossa?: string;
	buttsR?: string;
	buttsL?: string;
	armsR?: string;
	legsR?: string;
}

export interface pirecing {
	mouth?: string;
	tongue?: string;
	nippleL?: string;
	nippleR?: string;
	labiaL?: string;
	labiaR?: string;
	penisA?: string;
	penisB?: string;
	testA?: string;
	testB?: string;
	belly?: string;
}

export interface GenitalState {
	penis?: existency;
	pshape?: penishape;
	vagina?: existency;
	vshape?: vaginashape;
	psize?: [number, number];
	vsize?: [number, number];

	teste?: existency;
	critoris?: existency;
	interhasTeste?: boolean;
	interhasCritoris?: boolean;
}

export interface Equip {
	weapon?: any;
	shield?: any;
	acce1?: any;
	acce2?: any;
	acce3?: any;

	penis?: any;
	ureth?: any;
	vagina?: any;
	anal?: any;
}

export interface Schedule {
	workday?: number[];
	works?: [WorkSchedule?, WorkSchedule?, WorkSchedule?];
	sleepTime?: [number, number];
	homeLocation?: string;
	Tracks?: Dict<Tracks>; //常去地方.
}

export interface WorkSchedule {
	workday: number[];
	workplace: string;
	worktype: string;
	startTime: number;
	endTime: number;
}

export interface Tracks {
	chance: number;
	stayHours: number;
	entryTime: number;
	exitTime: number;
}

export interface preset {
	slot: wearslot;
	name: string;
	color?: string;
	colorname?: string;
	pattern?: string;
	subcolor?: string;
}
