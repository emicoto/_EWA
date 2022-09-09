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


const select=(...args)=>(con)=>args.includes(con)
class SelectCase {
	cases = [];
	default = "";
	add(num1, num2, string) {
	  this.cases.push({ num1, num2, string });
	}
	has(num) {
	  for (const element of this.cases) {
		let { num1, num2, string } = element;
		if (num1 <= num && num <= num2) {
		  return string;
		}
	  }
	  return this.default;
	}
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