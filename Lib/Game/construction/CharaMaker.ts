import { Races } from "./Races";
import { charatype, element, gender } from "../type";
import { Character, races } from ".";
import * as A from "../avatar";
import { L } from "../Utils/language";
import { lan } from "../Utils";

var G: any, V: any;
const Chara = Character;

export class CharaMaker {
	racelist: races[] = clone(G.racelist);
	racename: string[] = [];
	chara: Character;
	name: string = "Arian";
	race: races = "human";
	gender: gender = "m";
	r: Races = clone(Races.get("human"));

	genderlist: gender[];
	gendername: string[];
	skinlist: any;
	earlist: string[];
	taillist: string[];
	hornlist: string[];
	winglist: string[];
	elementlist: element[];
	elsize: number;
	p1: number;
	p2: number;
	eyecolorlist: any;
	eyecolorname: any;
	haircolorlist: any;
	haircolorname: any;
	skinlistb: string[];
	skinnameb: any[];
	skinname: any[];

	constructor(type: charatype) {
		this.racelist.forEach((k) => {
			this.racename.push(lan(L.races[k]));
		});

		this.chara = new Chara(type, this.race, this.name, this.gender);
		this.chara.init(type);
		this.InitRace(this.race);
		this.p1 = 63;
		this.p2 = 42;

		this.eyecolorlist.forEach((k) => {
			this.eyecolorname.push(lan(L.color[k]));
		});

		this.haircolorlist.forEach((k) => {
			this.haircolorname.push(lan(L.color[k]));
		});
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
