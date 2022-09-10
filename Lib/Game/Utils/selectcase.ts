export class SelectCase {
	arr = [];
	defaultresult: any = "";
	condtype = "";

	case(cond: string[] | [number, number] | string, result: any) {
		this.check(cond);
		this.arr.push({ cond, result });
		return this;
	}

	else(result: any) {
		this.defaultresult = result;
		return this;
	}

	has(pick) {
		for (const element of this.arr) {
			const { cond, result } = element;
			const type = this.type(cond);

			if (type == "number") {
				if (pick >= cond[0] && pick <= cond[1]) return result;
			}
			if (type == "string array") {
				if (cond.includes(pick)) return result;
			}
			if (type == "single string") {
				if (pick === cond) return result;
			}
		}

		return this.defaultresult;
	}

	check(cond) {
		const check = this.type(cond);
		if (!this.condtype) this.condtype = check;
		else if (this.condtype !== check) throw new Error("expressions type must be same.");
	}

	type(cond) {
		if (Array.isArray(cond)) {
			switch (typeof cond[0]) {
				case "number":
					if (cond.length !== 2) throw new Error("number case must be [number, number]");

					return "number";
				case "string":
					return "string array";
				default:
					throw new Error("selectcase only accept string or number");
			}
		}
		if (typeof cond === "string") return "single string";

		throw new Error("selectcase only accept string or number");
	}
}
