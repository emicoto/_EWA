import { Source } from "../type";
const data = {};

export type equiptype = "weapon" | "shield" | "accesory" | "lewditem";
export interface Equipment {
	id: string;
	name: string;
	type: equiptype;

	icon?: string;
	source?: Source;
	effect?: string;

	ATK?: number;
	DEF?: number;
	SPD?: number;
	MTK?: number;
	MDF?: number;

	STR?: number;
	CON?: number;
	DEX?: number;
	WIL?: number;
	INT?: number;
	PSY?: number;
	ALR?: number;
	LUK?: number;
}

export class Equipment {
	static add() {}
	static get() {}
	static getbyName(name: string) {
		return data;
	}
	constructor() {}
}
