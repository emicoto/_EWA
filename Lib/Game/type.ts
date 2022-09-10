import { AvItems } from "./avatar/Avatars";

//阻挡、占用判定用
export type slots =
	| "head"
	| "shoulder"
	| "top"
	| "bottom"
	| "chest"
	| "waist"
	| "hips"
	| "thign"
	| "legs"
	| "feet"
	| "arms"
	| "hands"
	| "mouth"
	| "vagina"
	| "penis"
	| "ureth"
	| "nipple"
	| "anal"
	| "none"
	| "crotch"
	| "butts"
	| "torso"
	| "back"
	| "breast"
	| "";

export type layers =
	| "topeffect"
	| "frame"
	| "addon"
	| "addon_hair"
	| "addon_face"
	| "addon_mouth"
	| "addon_penis"
	| "addon_bottom"
	| "addon_body"
	| "hat"
	| "horn"
	| "eyebrow"
	| "hairfront"
	| "neck"
	| "facial"
	| "emoadd"
	| "emo_tear"
	| "emo_shy"
	| "emo_red"
	| "emo_heart"
	| "eye"
	| "mouth"
	| "cover"
	| "outfit_up"
	| "outfit_bt"
	| "inner_up"
	| "inner_bt"
	| "hands"
	| "shoes"
	| "legs"
	| "belly"
	| "penis"
	| "onskin_up"
	| "onskin_bt"
	| "tattoos"
	| "ears"
	| "head"
	| "body"
	| "hairback"
	| "back"
	| "kemoback"
	| "kemoback_wing"
	| "kemoback_tail"
	| "background"
	| "topeffect"
	| "bgeffect";

export type wearslot =
	| "hat"
	| "cover"
	| "outfit_up"
	| "outfit_bt"
	| "inner_up"
	| "inner_bt"
	| "legs"
	| "shoes"
	| "neck"
	| "facial"
	| "hands"
	| "back"
	| "onskin_up"
	| "onskin_bt"
	| "any";

export type equipslot = "weapon" | "shield" | "acce1" | "acce2" | "acce3" | "penis" | "ureth" | "vagina" | "anal";

export type tatooslot =
	| "face"
	| "chest"
	| "belly"
	| "armsL"
	| "legsL"
	| "back"
	| "neck"
	| "fossa"
	| "buttsR"
	| "buttsL"
	| "armsR"
	| "legsR";

export type shopline =
	| "general"
	| "mens"
	| "womens"
	| "brand"
	| "lingerie"
	| "sexy"
	| "lewd"
	| "spring"
	| "summer"
	| "autumn"
	| "winter"
	| "fasional"
	| "classic"
	| "special"
	| "cosplay"
	| "none";

export type category =
	| "hat"
	| "coat"
	| "suits"
	| "upper"
	| "bottom"
	| "underup"
	| "underbt"
	| "socks"
	| "shoes"
	| "accessory"
	| "gear"
	| "backpack"
	| "hairs"
	| "facial"
	| "earing"
	| "scarf"
	| "necklace"
	| "glove"
	| "none"
	| "onepiece";

export type shop = "none" | "all" | "online" | "offline" | "event" | "adluts" | "unique" | "special" | "ordermade";
//all 是指线上线下商店都有，以及活动场合也可能有。adluts,unique,special,ordermade是独立的。

export type tags =
	| "裸露"
	| "日常"
	| "睡衣"
	| "正式"
	| "商务"
	| "舞台"
	| "社交"
	| "泳装"
	| "运动"
	| "学生"
	| "仆从"
	| "制服"
	| "COSPLAY"
	| "情趣"
	| "变态"
	| "神圣"
	| "古风"
	| "洛丽塔"
	| "时尚"
	| "防水"
	| "雨衣"
	| "潜水"
	| "福瑞"
	| "高跟"
	| "战斗"
	| "闪耀"
	| "魔力"
	| "裤子"
	| "特殊";

export type gender = "f" | "m" | "n" | "i";

export type eyebrow = "angry" | "confuse" | "happy" | "normal" | "sad" | string;

export type mouth = "angry" | "laugh" | "oop" | "open" | "sad" | "sigh" | "smile" | "unhappy" | string;

export type eyes =
	| "ahe"
	| "blink1"
	| "blink2a"
	| "blink2b"
	| "close1"
	| "close2"
	| "full"
	| "idle"
	| "half"
	| "quater1"
	| "quater2"
	| "lookdown"
	| "lookleft"
	| "lookup1"
	| "lookup2"
	| "lookup3";

export type hairtype = "front" | "back";

export type races =
	| "human"
	| "catvinx"
	| "sckyrios"
	| "lepios"
	| "pequitis"
	| "dracons"
	| "ulvs"
	| "linlog"
	| "voeli"
	| "havan"
	| "alsha"
	| "noctar";

export type palameter =
	| "饮食" //food
	| "健康" //health
	| "魔力" //mana
	| "体力" //stamina
	| "理智" //sanity
	| "清洁" //clean
	| "酒精" //alcohol
	| "药物" //drugs
	| "欲望" //arousal
	| "快感" //esctacy
	| "压力" //stress
	| "疼痛" //pain
	| "抑郁" //depress
	| "恐惧" //fear
	| "耻辱" //stigma
	| "情绪" //emotion
	| "愤怒" //angry
	| "射精" //ejaculation
	| "满意" //sastify
	| "快M" //mouth esctacy
	| "快B" //breast esctacy
	| "快C" //critoris esctacy
	| "快V" //vagina esctacy
	| "快U" //ureth esctaty
	| "快A"; //anal esctacy;

export type bases =
	| "lv"
	| "ATK"
	| "DEF"
	| "MTK"
	| "MDF"
	| "SPD"
	| "STR" //力量
	| "CON" //体质
	| "DEX" //敏捷
	| "WIL" //意志
	| "INT" //智力
	| "PSY" //灵感
	| "ALR" //魅力
	| "LUK" //幸运
	| "hot"
	| "cold"
	| "exp";
//HP,MP,EP,SP的显示从PALAM的健康,魔力,体力,理智换算过来.

export type bodypart =
	| "eye"
	| "nose"
	| "mouth"
	| "ears"
	| "hands"
	| "legs"
	| "hoof"
	| "body"
	| "wings"
	| "mimi"
	| "horn"
	| "fur"
	| "tail"
	| "organ"
	| "penis"
	| "vagina"
	| "critoris"
	| "teste"
	| "tentacles";

export type haircolor =
	| "black"
	| "darkbrown"
	| "wine"
	| "brown"
	| "milktea"
	| "blond"
	| "softblond"
	| "platinum"
	| "silver"
	| "white"
	| "purple"
	| "green"
	| "blue"
	| "aqua"
	| "pink"
	| "red"
	| "orange"
	| "gray";

export type eyecolor =
	| "amber"
	| "aqua"
	| "black"
	| "blue"
	| "brown"
	| "emerald"
	| "green"
	| "lightgreen"
	| "lightpurple"
	| "pink"
	| "purple"
	| "red"
	| "white";

export type bodytype = "human" | "elf" | "furry" | "mermaid" | "hoof" | "snake" | "bird";

export type eartype =
	| "elf"
	| "sharp"
	| "human"
	| "none"
	| "cat"
	| "rabit"
	| "mouse"
	| "deer"
	| "horse"
	| "dog"
	| "futher";

export type headtype = "round" | "square" | "pointy" | "furry";

export type skincolor =
	| "pale"
	| "black"
	| "dark"
	| "health"
	| "gold"
	| "sunset"
	| "copper"
	| "white"
	| "yoru"
	| "fur"
	| "gray"
	| "lightfur"
	| "darkfur"
	| "green"
	| "silver"
	| "aqua";

export type element = "lumen" | "ark" | "ions" | "flame" | "electron" | "vitae" | "terra";
export type element_cn = "光" | "暗" | "水" | "火" | "土" | "电" | "木" | "土";

export type powertype = "psychic" | "arcane" | "occult" | "elements" | "mixed";
//mixid就是奥术和秘术都能用

export type existency = "none" | "fog" | "slime" | "fake" | "natural" | "canhide" | "onhead" | "hidden";
//存在性，none是完全不存在，fog是介于存在不存在之间，slime就是不定型，可拟状但不能拟态，纯样子货。fake就是仿生物件一类，虽然是假的但起码该有的都有。natural就是真实的，天然的存在。
//canhide表示虽然是天然的，但可收纳，具有不可见性
//onhead是耳朵属性用。natural就是人耳位置，onhead就是在头部。
//optional是设定时用的。角色生成时才会修改为别的属性。

export type marks = "痛苦" | "快乐" | "恐惧" | "耻辱";

export type baseskill = "格斗" | "健身" | "跑步" | "冥想" | "科学" | "创作" | "表演";

export type sexpart = "mouth" | "penis" | "vagina" | "anal" | "ureth" | "critoris" | "breast";

export type penishape =
	| "human"
	| "cat"
	| "dog"
	| "dracon"
	| "bird"
	| "shark"
	| "deer"
	| "horse"
	| "snake"
	| "tentacle"
	| "deamon";

export type vaginashape = "cute" | "pretty" | "normal" | "raffle" | "suji" | "deamon" | "monster";

export type charatype = "player" | "npc" | "monster";

export type relation = "favo" | "trust" | "dom" | "sub" | "eager" | "faith";

export type flag =
	| "favo"
	| "trust"
	| "dom"
	| "sub"
	| "eager"
	| "faith"
	| "trueform"
	| "lactation"
	| "lactatecd"
	| "pregnantAware"
	| "lover"
	| "bestfriend"
	| "alive"
	| "active"
	| "intro"
	| "encount"
	| "date"
	| "notInteractHour";

export type expname =
	| "打工"
	| "下厨"
	| "清扫"
	| "唱歌"
	| "演戏"
	| "舞台"
	| "直播"
	| "交涉"
	| "销售"
	| "探索"
	| "狩猎"
	| "钓鱼"
	| "战斗"
	| "战败"
	| "诱惑"
	| "被诱惑"
	| "射精"
	| "高潮"
	| "M高潮"
	| "B高潮"
	| "C高潮"
	| "U高潮"
	| "V高潮"
	| "A高潮"
	| "多重高潮"
	| "自慰"
	| "口交"
	| "性交"
	| "肛交"
	| "喷乳"
	| "被猥琐"
	| "被眠奸"
	| "被迷奸"
	| "被强奸"
	| "被轮奸"
	| "被兽奸"
	| "被触手奸"
	| "兽交"
	| "触手"
	| "史莱姆"
	| "怀孕"
	| "A怀孕"
	| "分娩"
	| "尿道开发"
	| "阴道扩张"
	| "肛门扩张"
	| "产卵"
	| "寄生"
	| "监禁"
	| "SM";

export type dailyrecord =
	| "高潮"
	| "射精"
	| "喷乳"
	| "A高潮"
	| "M高潮"
	| "B高潮"
	| "C高潮"
	| "V高潮"
	| "U高潮"
	| "浴精"
	| "饮精"
	| "肛内射"
	| "内射"
	| "射精"
	| "产卵";

//基本上普通人类吃的都能吃,只是少数种族的食谱比较特别...
export type diet = "meat" | "vegi" | "omni" | "ore" | "any";

export type ability = "格斗" | "健身" | "跑步" | "科学" | "冥想" | "创作" | "表演" | "异能" | "奥术" | "秘术" | "学识";

export type sexablity = "性技巧" | "性抵抗" | "口技" | "手技" | "脚技" | "腰技";

export type degree =
	| "纯洁"
	| "露出"
	| "滥交"
	| "受虐"
	| "施虐"
	| "顺从"
	| "兽交"
	| "受缚"
	| "药隐"
	| "性瘾"
	| "束缚"
	| "支配"
	| "追踪";

export type liquidlayer = "face" | "hair" | "hands" | "legs" | "chest" | "back" | "vagina" | "anal" | "butts";

export type lube = number;
export type cum = number;
export type juice = number;
export type slimy = number;

export type liquids = [lube, cum, juice, slimy];

export type Dict<T = any, K extends string = string> = {
	[key in K]?: T;
};

export type dailyrecords<T = number, K extends string = dailyrecord> = { [key in K]?: T };

export type exprecords<T = number, K extends string = expname> = { [key in K]?: T };

export type Lewdegree<T = number, K extends string = degree> = { [key in K]?: T };

export type Wear<T = AvItems, K extends string = wearslot> = { [key in K]?: T };

export type Existency<T = existency, K extends string = bodypart> = { [key in K]?: T };

export type sexPart<T = any, K extends string = sexpart> = { [key in K]?: T };

export type Basevalue = [number, number];
export type Base<T = Basevalue, K extends string = bases> = { [key in K]?: T };
/*各项基础数值对应基础技能：
	STR = 格斗
	CON = 健身
	DEX = 跑步
	WIL = 冥想
	INT = 科学
	PSY = 创作
	ALR = 表演
*/
/*具体的战斗技能，以卡片的形式存在。*/

export type Palam<T = number[], K extends string = palameter> = {
	[key in K]?: T;
};
export type Source<T = number, K extends string = palameter> = {
	[key in K]?: T;
};
export type Flags<T = any, K extends string = string> = { [key in K]?: T };
export type liquid<T = liquids, K extends string = liquidlayer> = { [key in K]?: T };

export type defaultBases = {
	STR?: number;
	CON?: number;
	DEX?: number;
	WIL?: number;
	INT?: number;
	ALR?: number;
	PSY?: number;
};
