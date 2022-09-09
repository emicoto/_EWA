type indexSkill = number | string;
class Skills {
	constructor(public name: string, public lv: number = 0, public exp: number = 0) {}
}
class SkillManager {
	private skill = new Map<indexSkill, Skills>();
	private skillName = new Map<string, indexSkill>();
	constructor() {
		return new Proxy(this, {
			ownKeys(target) {
				return Array.from(target.skill.keys()).map((v) => v.toString());
			},
			getOwnPropertyDescriptor(target, p) {
				return {
					enumerable: true,
					configurable: true,
					value: this.get(target, p),
				};
			},
			has(target, key) {
				if (typeof key === "string") {
					return target.has(key) || !!target[key];
				}
				return !!target[key];
			},
			get(target: SkillManager, props: string | Symbol) {
				const { skill, skillName } = target;
				if (typeof props === "symbol") return target[props].bind(target);
				if (typeof props === "string") {
					const isNumber = parseInt(props);
					if (typeof target[props] === "function") return target[props].bind(target);
					if (!isNaN(isNumber)) {
						return skill.get(isNumber);
					}
					const key = skillName.get(props);

					return skill.get(key);
				}
			},

			set(target: SkillManager, props: string, value: any) {
				const isNumber = parseInt(props);
				if (!isNaN(isNumber) && value instanceof Skills) {
					target.push(value, isNumber);
					return true;
				}
				if (isNaN(isNumber)) {
					throw new Error("请用数字赋值");
				} else if (target.skill.has(isNumber)) {
					throw new Error("你赋值的技能id已存在");
				}
				throw new Error("请用Skill类赋值");
			},
		});
	}
	public get(key: number | string, isString = false) {
		const { skill, skillName } = this;
		if (typeof key === "number") {
			return skill.get(key);
		} else {
			const isNumber = parseInt(key);
			if (isNaN(isNumber) || isString) return skillName.get(key);

			return skill.get(isNumber);
		}
	}
	public has(key: number | string, isString = false) {
		const { skill, skillName } = this;
		if (typeof key === "number") {
			return skill.has(key);
		} else {
			const isNumber = parseInt(key);
			if (isNaN(isNumber) || isString) return skillName.has(key);

			return skill.has(isNumber);
		}
	}
	public push(value: Skills, id: number = this.skill.size) {
		const { skill, skillName } = this;
		if (/^\d+$/gim.test(value.name)) {
			throw new Error(`Skill名字不能为纯数字:${value.name},ID:${id}`);
		}
		let _id = id <= 0 ? 1 : id;
		if (skill.has(_id)) {
			_id = id++;
			while (skill.has(_id)) {
				_id++;
			}
		}
		skill.set(_id, value);

		skillName.set(value.name, _id);
	}
	public toObject() {
		return Object.fromEntries(this.skill);
	}
	public toJson(replacer?: (this: any, key: string, value: any) => any, space?: string | number) {
		return JSON.stringify(this.toObject(), replacer, space);
	}
	public toString() {
		return this.toJson();
	}
	public entries() {
		return this.skill.entries();
	}
	[Symbol.iterator]() {
		return this.entries() as IterableIterator<[indexSkill, Skills]>;
	}
}
const skillManager = new SkillManager();
skillManager.push(new Skills("CS"));
skillManager.push(new Skills("sc4"));
skillManager.push(new Skills({}));
Object.assign(window, { skillManager });
