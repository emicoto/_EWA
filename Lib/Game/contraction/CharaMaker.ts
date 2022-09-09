import { Races } from "./Races";
import { charatype, element, gender } from "./type";
import { Character, races } from ".";
import * as D from "./data";

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

	constructor(type: charatype) {
		this.racelist.forEach((k) => {
			this.racename.push(Races.print(k));
		});

		this.chara = new Chara(type, this.race, this.name, this.gender);
		this.chara.init(type);
	}

	InitRace(race) {
		this.chara.setRace(race);
		this.r = clone(Races.get(race));

		this.genderlist = this.r.gender;
		this.gendername = [];
		this.genderlist.forEach((k) => {
			this.gendername.push(D.Gender(k));
		});

		this.skinlist = this.r.alter.skin;
		this.earlist = this.r.alter.mimi;
		this.taillist = this.r.alter.tail;
		this.hornlist = this.r.alter.horn;
		this.winglist = this.r.alter.wing;

		this.elementlist = this.r.elements;
		this.elsize = this.r.elesize;
	}
}
