import { Character } from "./Character";
import { G } from "../../define";
const Chara = Character;
const F = G.functions;

F.InitPlayerTemplet = function () {
	Chara.newtemp("player", "human", "m")
		.Preset("basic", [
			{ slot: "inner_bt", name: "四角内裤" },
			{ slot: "outfit_up", name: "T恤", color: "#F14660", colorname: "红" },
			{ slot: "outfit_bt", name: "短裤" },
			{ slot: "legs", name: "运动短袜" },
			{ slot: "shoes", name: "运动鞋" },
		])
		.Wear("basic")
		.setMajor(2)
		.Haircolor("milktea")
		.HairStyle("natural", "straight")
		.Hairlength(50, 50)
		.setTrait(["保守"])
		.setStartBonus("菜鸟")
		.Description(["一名热衷修仙的男孩。", "A Human boy who love to do Xiuxian activities."]);

	Chara.newtemp("player", "catvinx", "m")
		.Preset("basic", [
			{ slot: "inner_bt", name: "内裤" },
			{ slot: "outfit_up", name: "T恤", pattern: "heart" },
			{ slot: "outfit_bt", name: "短裙", color: "#FFA9DD", colorname: "粉" },
			{ slot: "shoes", name: "运动鞋" },
		])
		.Wear("basic")
		.setMajor(5)
		.setTrait(["开放"])
		.setStartBonus("人气")
		.setSens("anal", 2)
		.HairStyle("curly", "curly")
		.Hairlength(120, 50)
		.Description(["一名喜欢直播的女装猫猫。", "A Catvinx boy who love to live steam with crossdress."]);

	Chara.newtemp("player", "sckyrios", "f")
		.Preset("basic", [
			{ slot: "inner_up", name: "胸罩" },
			{ slot: "inner_bt", name: "内裤" },
			{ slot: "outfit_up", name: "衬衫" },
			{ slot: "outfit_bt", name: "短裙" },
			{ slot: "shoes", name: "高跟鞋" },
		])
		.Wear("basic")
		.setMajor(4)
		.setStartBonus("聪明")
		.setSens("breast", 2)
		.setFlag({ transform: { skin: "health", body: "human", head: "round" } })
		.HairStyle("natural", "straingt")
		.Description(["一名喜欢研究人体的狼妹。", "A Sckyrios girl who love to study the anatomy."]);
};

F.InitNPC = function () {
	Chara.add("npc", "human", "余安", "m")
		.Birthday([3012, 8, 8])
		.Preset("basic", [
			{ slot: "inner_bt", name: "四角内裤" },
			{ slot: "outfit_up", name: "衬衫" },
			{ slot: "outfit_bt", name: "长裤" },
			{ slot: "shoes", name: "皮鞋" },
		])
		.Haircolor("darkbrown")
		.Hairlength(50, 50)
		.setTrait(["自由业"])
		.Base({ STR: 8, INT: 14, WIL: 15, PSY: 16, ALR: 12 })
		.Abl("格斗", 2)
		.Abl("健身", 3)
		.Abl("跑步", 3)
		.Abl("科学", 8)
		.Abl("冥想", 1)
		.Abl("创作", 15)
		.Abl("表演", 3)
		.Sbl("性技巧", 5)
		.Sbl("性抵抗", 1)
		.Sbl("手技", 3)
		.Sbl("腰技", 3)
		.Lewd("纯洁", 120)
		.Lewd("支配", 240)
		.Lewd("束缚", 400)
		.Lewd("追踪", 600)
		.setWork([2, 3, 4, 5, 6], 14, 4, "自宅", "设计")
		.setTrack("小卖部", 20, 1, 12)
		.setTrack("小卖部", 20, 1, 19)
		.setHome("怡安小区")
		.setSleepTime(5, 12)
		.setVirginity("penis", { date: "不明", person: "前女友", situation: "在{0}的盛情邀约下丧失了自己的童贞" })
		.Description(["居住在主角对门的自由设计师。", "A freelance designer who living opposite of your appartment."]);

	Chara.add("npc", "dracons", "娜娜莉·爱索斯", "i")
		.Birthday([3016, 5, 28])
		.Preset("basic", [
			{ slot: "inner_up", name: "胸罩" },
			{ slot: "inner_bt", name: "内裤" },
			{ slot: "outfit_up", name: "BW连衣裙" },
			{ slot: "shoes", name: "高跟鞋" },
		])
		.Wear("basic")
		.setMajor(2)
		.setTrait(["聪明", "开放"])
		.setElements(["ions"])
		.HairStyle("natrual", "straight")
		.Hairlength(300, 500)
		.Base({ STR: 8, CON: 10, DEX: 14, INT: 16, WIL: 12, PSY: 14, ALR: 14 })
		.Abl("格斗", 7)
		.Abl("健身", 5)
		.Abl("跑步", 7)
		.Abl("科学", 15)
		.Abl("冥想", 5)
		.Abl("创作", 11)
		.Abl("表演", 5)
		.Abl("奥术", 3)
		.Sbl("性技巧", 8)
		.Sbl("性抵抗", 2)
		.Sbl("口技", 6)
		.Sbl("手技", 6)
		.Sbl("脚技", 4)
		.Sbl("腰技", 1)
		.Lewd("纯洁", 200)
		.Lewd("滥交", 500)
		.Lewd("受虐", 500)
		.Lewd("顺从", 500)
		.setWork([1, 3, 5], 9, 11, "景南大学", "学习")
		.setWork([2, 4], 14, 17, "景南大学", "学习")
		.setTrack("大学城", 25, 1, 9, 18)
		.setTrack("海洋馆", 20, 3, 14)
		.setHome("凤兴苑")
		.Description([
			"有些内向的晶龙少女，在奥术研究方面的天才，目前在科大担任科研工作。",
			"A somewhat introverted dracon girl, a genius in arcane research, currently working as a researcher at KU.",
		])
		.setVirginity("anal", {
			date: "不明",
			person: "震动棒",
			situation: "以主角幻想对象，用{0}自卫时破了自己的{1}处女",
		})
		.End();
};
