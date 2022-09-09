export * from "./Races";
export * from "./Character";
export * as D from "./data";
export * from "./interface";
export * from "./type";

export function isObject(props) {
	return Object.prototype.toString.call(props) === "[object Object]";
}
