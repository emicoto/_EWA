
//------>> 头部配件 ------------------------//
A.InitHairs = function () {
	Hairs.add("front", "natural", 1);
	Hairs.add("front", "himecut", 1);
	Hairs.add("front", "curly", 4);

	Hairs.add("back", "curly", 4);
	Hairs.add("back", "straight", 4);

	return A.hair;
};

//------------>> 表情设置  ----------------------//
A.InitEmotes = function () {
	Emote.add("正常", "normal", "full", "smile");
	Emote.add("开心", "happy", "quater2", "laugh").addShy();

	Emote.add("伤心", "sad", "quater1", "sad").addTear();

	Emote.add("生气", "angry", "quater2", "open");
	Emote.add("害羞", "happy", "lookleft", "smile").addShy();

	Emote.add("羞耻", "sad", "full", "oop").addShy();

	Emote.add("困惑", "confuse", "quater2", "unhappy").addFrame("confuse");

	Emote.add("受伤", "angry", "blink1", "open").addHurt();

	Emote.add("快感1", "sad", "quater2", "open").addRed();

	Emote.add("快感2", "confuse", "lookup2", "open").addTear().addRed();

	Emote.add("高潮", "sad", "lookup1", "open").addTear().addRed();

	return A.emotes;
};

//各分类第一件物品都是无。没穿也算一件物品，用来规避错误。
//暂时没啥装饰，打包放一块。
A.InitAccesory = function () {
	AvItems.add("无", "", "无", "无")
		.setEnglish("naked", "none")
		.setLayer("any")
		.setTags(["裸露"])
		.setShop("none")
		.setDurable(0);
};

//内衣上身
A.InitInnerTop = function () {
	AvItems.add("内衣", "", "吊带背心", "一件简单的吊带背心，给胸部小小的你带来些许安全感。", "f")
		.setEnglish("camisole", "A simple camisole, can give you a little bit comfort.")
		.setCost(30)
		.setWarmth(-0.2)
		.setSlot(["torso"]);

	AvItems.add("内衣", "", "胸罩", "一件设计朴素的胸罩。", "f").setEnglish("bra", "A simple designed bra.").setCost(60);
};

//内衣下身
A.InitInnerBottom = function () {
	AvItems.add("内裤", "boxer", "四角内裤", "一条简单的四角内裤。", "m")
		.setEnglish("boxer brief", "A simple boxer brief.")
		.customColor()
		.setCost(12)
		.setWarmth(-0.1);

	AvItems.add("内裤", "pantie", "内裤", "一款简单朴素的内裤。", "f")
		.setEnglish("pantie", "A simple pantie.")
		.setCost(15);
};

//暂时不会添加太多，打包放一块。鞋子和袜子
A.InitLegItems = function () {
	AvItems.add("鞋子", "sportshoes", "运动鞋", "一双普通的白色运动鞋。")
		.setEnglish("sport shoes", "A simple sport shoes.")
		.setTags(["日常", "运动"])
		.fixedColor(["white"])
		.setCost(60)
		.setWarmth(-0.1)
		.setDurable(30);

	AvItems.add("鞋子", "highheel", "高跟鞋", "一双简单设计的高跟鞋。", "f")
		.setEnglish("high heel", "A simple high heel.")
		.setTags(["日常", "商务", "高跟"])
		.setCost(80)
		.setDurable(20)
		.setBeauty(0.02)
		.customColor();

	AvItems.add("鞋子", "", "皮鞋", "一双设计简单的皮鞋。")
		.setEnglish("shoes", "A simple shoes.")
		.setTags(["日常", "正式", "商务"])
		.setCost(240)
		.setDurable(25)
		.setBeauty(0.02);

	AvItems.add("袜子", "sportsocks", "运动短袜", "一对简单的运动袜。")
		.setEnglish("sports socks", "A simple sports socks.")
		.setTags(["日常", "运动"])
		.setCost(15)
		.setWarmth(-0.2)
		.customColor();

	AvItems.add("袜子", "", "短袜", "一对简单的短袜。")
		.setEnglish("socks", "A simple socks.")
		.setCost(20)
		.setWarmth(-0.1);
};

//上衣和连衣裙之类的。
A.InitOutfitTops = function () {
	AvItems.add("上衣", "Tshirt", "T恤", "一键简单的T恤。并不能给你多少保护，但总比没有好。")
		.setEnglish(
			"T-shirt",
			"A simple designed T-shirt. It cannot give you much of protection, but better than nothing."
		)
		.hasBDif()
		.hasPDif()
		.setCost(60)
		.setWarmth(-1)
		.setDurable(24)
		.setDefence(0.5)
		.customColor()
		.setPatterns(["slime", "heart"]);

	AvItems.add("上衣", "shirt", "衬衫", "一件简单的西式长袖衬衫。浅浅的暗纹给你增加了些许气质。")
		.setEnglish(
			"business shirt",
			"A simple long-sleeved dress shirt. The light dark pattern adds a touch of grace to you."
		)
		.setTags(["日常", "正式", "商务"])
		.hasBDif()
		.hasPDif()
		.setCost(150)
		.setWarmth(-1.5)
		.setDurable(24)
		.setBeauty(0.02)
		.setDefence(0.5)
		.customColor()
		.isTuckinable();

	AvItems.add(
		"上衣",
		"bwopice",
		"BW连衣裙",
		"一件设计简单的连衣裙。修身的设计显得你身材更苗条。毕竟是易淘上的便宜货，不能指望不了的防御效果。"
	)
		.setEnglish(
			"BW onepiece",
			"The slim fit design looks slimmer on your body. The cheap goods on Ebay, can not expect the fabric defense effect."
		)
		.hasBDif()
		.hasPDif()
		.setCost(240)
		.setWarmth(-0.5)
		.setDurable(15)
		.setBeauty(0.05)
		.fixedColor(["white", "black"])
		.setSlot(["top", "bottom"]);

	AvItems.add("上衣", "slpshortup", "短袖睡衣", "一件设计简单的睡衣。轻柔透气的布料给你带来好梦。")
		.setEnglish("summer pajamas", "A simple design pajamas. The light and breathable fabric brings you good dreams.")
		.setTags(["日常", "睡衣"])
		.hasBDif()
		.hasPDif()
		.setCost(80)
		.setWarmth(-0.5)
		.customColor()
		.setPatterns(["line", "dot", "star"])
		.customPatterns("#787878");
};

//裤子和裙子
A.InitOutfitBottoms = function () {
	AvItems.add("裤裙", "shortpant", "短裤", "一条简单的短裤。")
		.setEnglish("shortpant", "A simple shortpant.")
		.hasPDif()
		.setCost(80)
		.setWarmth(-0.5)
		.setDurable(20)
		.setDefence(0.2)
		.customColor("#787878", "黑");

	AvItems.add("裤裙", "shortskirt", "短裙", "一条简单的短裙。", "f")
		.setEnglish("skirt", "A simple skirt.")
		.hasPDif()
		.setCost(80)
		.setWarmth(-0.2)
		.setBeauty(0.01)
		.customColor("#787878", "黑");

	AvItems.add("裤裙", "bskirt", "西装短裙", "一条简单的西式短裙。毕竟是廉价款，不能指望耐久度。", "f")
		.setEnglish("business skirt", "A simple business skirt. Because it's cheap so you can't expect its durability.")
		.setTags(["日常", "商务"])
		.hasPDif()
		.setCost(210)
		.setWarmth(-0.2)
		.setBeauty(0.03)
		.customColor("#787878", "黑");

	AvItems.add("裤裙", "slpshortbt", "睡衣短裤", "一件设计简单的睡衣短裤。轻柔透气的布料给你带来好梦。")
		.setEnglish("summer pajamas", "A simple design pajamas. The light and breathable fabric brings you good dreams.")
		.setTags(["日常", "睡衣"])
		.hasPDif()
		.setCost(80)
		.setWarmth(-0.5)
		.setDurable(10)
		.setDefence(0.2)
		.customColor()
		.setPatterns(["line", "dot", "star"])
		.customPatterns("#787878");

	AvItems.add("裤裙", "", "长裤", "一件设计简单的长裤。舒适宽松的布料，修身的设计，穿着很是得体。")
		.setEnglish(
			"pant",
			"A pair of pants with a simple design. Comfortable and loose fabric, slim fit design, very modest to wear."
		)
		.setTags(["日常", "正式", "商务"])
		.setCost(320)
		.setWarmth(-0.8)
		.setDurable(20)
		.setDefence(0.2);
};

A.InitAvatarDatas = function () {
	A.Init();
	A.InitHairs();
	A.InitEmotes();
	A.InitAccesory();
	A.InitInnerTop();
	A.InitInnerBottom();
	A.InitLegItems();
	A.InitOutfitTops();
	A.InitOutfitBottoms();
};
