/**
 * @license
 * JSzUtils v1.0.0
 * (c) 2020 Jan Szotkowski
 * Released under the MIT License.
 */
'use strict';

const JSzUtils = (function() {
	const version = 'v1.0.0';
	const inBrowser = typeof window !== 'undefined';
	const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let warn = (msg) => console.warn(msg);
	let error = (msg) => console.error(msg);

	/**
	 * Check type of given value
	 * @param {any} val 
	 * 
	 * Return type of given value
	 */
	let getType = (val) => isArray(val) ? 'array' : typeof val;

	/**
	 * Return user enviroment
	 */
	let userAgent = () => inBrowser && window.navigator.userAgent.toLowerCase();

	/**
	 * Check if given value is integer
	 * @param {any} val 
	 * 
	 * Return boolean (true | false)
	 */
	let isInt = (val) => Number.isInteger(val);

	/**
	 * Transfer given value to integer
	 * @param {any} val 
	 * 
	 * Return integer
	 */
	let toInt = (val) => +val;

	let parseJSON = (val) => val ? JSON.parse(val) : error('Error: parseJSON, no value');

	let stringifyJSON = (val) => val ? JSON.stringify(val) : error('Error: stringifyJSON, no value');

	/**
	 * Check if given value is string
	 * @param {any} val 
	 * 
	 * Return boolean (true | false)
	 */
	let isStr = (val) => getType(val) === 'string' ? true : false;

	/**
	 * Transfer given value to string
	 * @param {any} val 
	 * 
	 * Return string
	 */
	let toStr = (val) => String(val).toString();

	/**
	 * Transfer given value to string and lower case
	 * @param {any} val 
	 * 
	 * Return lower case string
	 */
	let lowerCase = (val) => toStr(val).toLocaleLowerCase();

	/**
	 * Transfer given value to string and upper case
	 * @param {any} val 
	 * 
	 * Return upper case string
	 */
	let upperCase = (val) => toStr(val).toUpperCase();

	/**
	 * Check if given value is in correct email format
	 * @param {string} val 
	 * 
	 * Return boolean (true | false)
	 */
	let isEmail = (val) => emailRegExp.test(lowerCase(val));

	/**
	 * Check if given value is null
	 * @param {any} val 
	 * 
	 * Return boolean (true | false)
	 */
	let isNull = (val) => val === null ? true : false;

	/**
	 * Check if given value is undefined
	 * @param {any} val 
	 * 
	 * Return boolean (true | false)
	 */
	let isUndefined = (val) => val === undefined ? true : false;

	/**
	 * 
	 * @param {nodelist} val 
	 * 
	 * Return array
	 */
	let toArray = (val) => Array.from(val);

	/**
	 * Check if given value is array
	 * @param {array} val 
	 * 
	 * Return boolean (true | false)
	 */
	let isArray = (val) => Array.isArray(val);

	/**
	 * Sort given array
	 * @param {array} val 
	 * 
	 * Return sorted array
	 */
	let sortArray = (array) => isArray(array) ? array.sort((a,b) => a > b) : error('Error: sortArray, given parameter is not array');

	/**
	 * Check if all given arguments are array type, then create object of given (n) arrays
	 * 
	 * Return object of given (n) arrays
	 */
	let groupArrays = function() {
		let newObject = {};
		for (let i = 0; arguments.length >= i; i++) {
			if(!isUndefined(arguments[i])){
				if (isArray(arguments[i])) {
					newObject[i] = arguments[i]
				} else {
					return error('Error: groupArrays, one or more of given arguments are not array');
				}
			}
		}
		return newObject;
	}

	/**
	 * Check if given value is object type
	 * @param {object} val 
	 * 
	 * Return boolean (true | false)
	 */
	let isObject = (val) => getType(val) === 'object' ? true : false;

	/**
	 * Check if all given arguments are object type, then create object of given (n) objects
	 * 
	 * Return object of given (n) objects
	 */
	let groupObjects = function() {
		let newObject = {};
		for (let i = 0; arguments.length >= i; i++) {
			if(!this.isUndefined(arguments[i])){
				if (this.isObject(arguments[i])) {
					newObject[i] = arguments[i];
				} else {
					return error('Error: groupObjects, one or more of given arguments are not object');
				}
			}
		}
		return newObject;
	}

	/**
	 * @param {any} val 
	 * 
	 * Return always true
	 */
	let toTrue = (val) => val === false ? true : !!val;

	/**
	 * @param {any} val 
	 * 
	 * Return always false
	 */
	let toFalse = (val) => val === false ? false : !val;

	return {
		version,
		getType,
		userAgent,
		isInt,
		toInt,
		parseJSON,
		stringifyJSON,
		isStr,
		toStr,
		lowerCase,
		upperCase,
		isEmail,
		isNull,
		isUndefined,
		toArray,
		isArray,
		sortArray,
		groupArrays,
		isObject,
		groupObjects,
		toTrue,
		toFalse,
	}
}());