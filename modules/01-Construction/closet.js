var _$Closet = (()=>{

class Closet{
	static getWear(chara, set) {
		const { slot, name, color, colorname, pattern, subcolor } = set;
		const item = AvItems.getbyName(name);
		chara.wear[slot] = clone(item);

		if (!item.fixcolor) {
			if (color) chara.wear[slot].color = color;
			if (colorname) chara.wear[slot].colorname = colorname;
		} else if (item?.colorplate.includes(color)) {
			chara.wear[slot].color = color;
		}

		if (pattern && item?.patterns.includes(pattern)) {
			if (pattern) chara.wear[slot].pattern = pattern;
			if (subcolor && !item.fixpattern) chara.wear[slot].subcolor = subcolor;
		}

		chara.slots = A.getRevealDetail(chara.wear);

		return chara.wear[slot];
	}
}

Object.defineProperty(window.G, 'Closet',{
    value: Object.freeze(Closet)
})

})()