import { G } from "Lib/Game/define";

export function lan(CN, EN?) {
	if (Array.isArray(CN) && !EN) {
		if (CN.length == 1) {
			EN = CN[0];
			CN = CN[0];
		} else {
			EN = CN[1];
			CN = CN[0];
		}
	}
	if (G.config.language == "CN") return CN;
	if (G.config.language == "EN") return EN;
}

export function isObject(props) {
	return Object.prototype.toString.call(props) === "[object Object]";
}
