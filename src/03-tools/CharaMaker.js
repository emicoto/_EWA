F.test = function(arg1, arg2){
    console.log('有变化了',arg1, arg2)
}

G.CharaMaker = class{
	racelist = clone(G.racelist);
	racename = [];
	name = "Arian";
	race= "human";
	gender = "m";
	r = clone(Races.get("human"));
    eyecolorlist = clone(A.list.eyecolor);
    eyecolorname = [];
    haircolorlist = Object.keys(A.list.haircolor);
    haircolorname = [];

    skinname = []

	constructor(type) {
		this.racelist.forEach((k) => {
			this.racename.push(lan(L.races[k]));
		});

		this.chara = new Chara(type, this.race, this.name, this.gender);
		this.chara.init(type);
        this.InitRace(this.race);
        this.p1 = 63;
        this.p2 = 42;
        this.usedp1 = 0;
        this.usedp2 = 0;

        this.eyecolorlist.forEach((k)=>{
            this.eyecolorname.push(lan(L.color[k]))
        })

        this.haircolorlist.forEach((k)=>{
            this.haircolorname.push(lan(L.color[k]))
        })

	}

	InitRace(race) {
		this.chara.setRace(race);
		this.r = clone(Races.get(race));

		this.genderlist = this.r.gender;
		this.gendername = [];
		this.genderlist.forEach((k) => {
			this.gendername.push(lan(L.gender[k]));
		});

		if (this.r.alter.skin) {
			this.skinlist = this.r.alter.skin;
		} else {
			this.skinlist = A.list.skincolor.slice(0, 7);
		}

		if (this.r.alter.mimi) this.earlist = this.r.alter.mimi;

		if (this.r.alter.tail) this.taillist = this.r.alter.tail;

		if (this.r.alter.horn) this.hornlist = this.r.alter.horn;

		if (this.r.alter.wing) this.winglist = this.r.alter.wing;

		if (this.r.alter.subcolor) {
			this.skinlistb = this.r.alter.subcolor;
			this.skinnameb = [];

			this.skinlistb.forEach((k) => {
				this.skinnameb.push(lan(L.color[k]));
			});
		}

		this.skinname = [];

		this.skinlist.forEach((k) => {
			this.skinname.push(lan(L.color[k]));
		});

		this.elementlist = this.r.elements;
		this.elsize = this.r.elesize;
		console.log(this);
	}   
}


F.CMApply = function(id, value){
    console.log(id,value)
    switch(id){
        case 'race':
            T.cm.InitRace(value)
            new Wikifier(null,'<<replace #CMGender>><<CMGender>><</replace>><<replace #CMSkin>><<CMSkin>><</replace>><<replace #CMSkinb>><<CMSkinb>><</replace>>')
            break
        case 'age':
            T.cm.age = value
            T.cm.chara.birth[0] = (3036-value)
            T.cm.p1 = Math.min(value*3, 108)
            T.cm.p2 = Math.min(value*2, 80)
            new Wikifier(null,`<<replace #CMBirth>>${3036-value}<</replace>><<replace #CMPoint1>>${T.cm.p1}<</replace>><<replace #CMPoint2>>${T.cm.p2}<</replace>>`)
            break
        case 'birthmonth':
            T.cm.chara.birth[1] = parseInt(value);
            break
        case 'birthday':
            T.cm.chara.birth[2] = parseInt(value);
            break
    }

}