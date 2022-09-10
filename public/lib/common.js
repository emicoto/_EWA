function ensureIsArray(x, check = false) {
	if (check) x = ensure(x, []);
	if (Array.isArray(x)) return x;
	return [x];
}

function ensure (x, y) {
	/* lazy comparison to include null. */
	return (x == undefined) ? y : x;
}
/**
 * 
 * @param {number} x 
 * @param {number} min 
 * @param {number} max 
 */
function inrange(x, min, max){
	return (x >= min && x <= max)
}

/**
 * 
 * @param {number} x 
 * @param {number} min 
 * @param {number} max 
 */
function between(x,min,max){
	return (x > min && x < max)
}

/**
 * 
 * @param {number} min 
 * @param {number|undefined} max 
 * @returns {number}
 */
function random(min,max){
	if(!max){
		max = min;
		min = 0;
	}
	return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * 
 * @param {number} int 
 * @param {number} a 
 * @returns {number}
 */
function fixed(int,a){
	if (!a) a = 2;
	return parseFloat(int.toFixed(a));
}

/** @param {Array} arr */
function maybe(arr){
	let txt;
	arr.forEach((v, i) => {
		if (random(100) < v[1]) txt = v[0];
	});

	if (!txt) {
		return arr[0][0];
	}
	return txt;
}

/**
 * @param {string | number} key 
 */
function compares(key){
	return function (m, n) {
		let a = m[key];
		let b = n[key];
		return b - a;
	};
}

/**
 * 
 * @param {number} times 
 * @param {number} max 
 */
function Roll(times,max){
	let re
	
	re = {
		roll: [],
		result: 0,
		bonus: 0,
	};

	for (let i = 0; i < times; i++) {
		let r = random(1, max);
		re.roll[i] = r;
		re.result += r;
		if (r == max) re.bonus++;
	}

	re.roll = re.roll.join()

	return re;
}

function isValid(props){
	const type = typeof(props)
	const isArray = Array.isArray(props)

	if(props === undefined || props === null ) return false;
	
	if(isArray){
		return (props.length > 0)
	}

	if(type=='object'){
		return (JSON.stringify(props) !== '{}');
	}

	return true;
}

/**
 * @param {number} num 
 * @param {number} bit 
 */
function getBit(num, bit){
	return ((num>>bit) % 2 != 0)
}
/**
 * @param {number} num 
 * @param {number} bit 
 */
function setBit(num, bit){
	return num | 1<<bit;
}
/**
 * @param {number} num 
 * @param {number} bit 
 */
function clearBit(num, bit){
	return num & ~(1<<bit);
}
/**
 * @param {number} num 
 * @param {number} bit 
 */
function toggleBit(num, bit){
	return getBit(num, bit) ? clearBit(num, bit) : setBit(num, bit);
}

/** @param {number} c */
function CtoF(c){
	return c*1.8+32
}

/**
 * 
 * @param {number | string} value 
 * @param {number[] | string[]} table 
 */
function groupmatch(value,table){
	return table.includes(value)
}

/**
 * 
 * @param {Array} array 
 */
function draw(array){
	var  a = array.length
	return array[random(0,a)]
}

function sum( obj ) {
  let sum = 0;
  for( var el in obj ) {
	if( obj.hasOwnProperty( el ) ) {
	  sum += parseFloat( obj[el] );
	}
  }
  return sum;
}

window.findkey = function(data,value, compare = (a, b) => a === b) {
  return Object.keys(data).find(k => compare(data[k], value))
}

/**
 * 
 * @param {Array} arr 
 */
function swap(arr, a, b){
	let c = arr[a]
	let d = arr[b]
	arr[b] = c;
	arr[a] = d;
	return arr
}

function isObject(props) {
	return Object.prototype.toString.call(props) === "[object Object]";
}

class SelectCase {
	constructor() {
		this.arr = [];
		this.defaultresult = "";
		this.condtype = "";
	}
	case(cond, result) {
		this.check(cond);
		this.arr.push({ cond, result });
		return this;
	}
	else(result) {
		this.defaultresult = result;
		return this;
	}
	has(pick) {
		for (const element of this.arr) {
			const { cond, result } = element;
			const type = this.type(cond);
			if (type == "number") {
				if (pick >= cond[0] && pick <= cond[1])
					return result;
			}
			if (type == "string array") {
				if (cond.includes(pick))
					return result;
			}
			if (type == "single string") {
				if (pick === cond)
					return result;
			}
		}
		return this.defaultresult;
	}
	check(cond) {
		const check = this.type(cond);
		if (!this.condtype)
			this.condtype = check;
		else if (this.condtype !== check)
			throw new Error("expressions type must be same.");
	}
	type(cond) {
		if (Array.isArray(cond)) {
			switch (typeof cond[0]) {
				case "number":
					if (cond.length !== 2)
						throw new Error("number case must be [number, number]");
					return "number";
				case "string":
					return "string array";
				default:
					throw new Error("selectcase only accept string or number");
			}
		}
		if (typeof cond === "string")
			return "single string";
		throw new Error("selectcase only accept string or number");
	}
}