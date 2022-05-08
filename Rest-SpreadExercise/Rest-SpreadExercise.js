// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
// MY ANSWER -Should have pout my in 1 line making use of arrow function.
function filterOutOdds(...nums) {
    return nums.filter(n => n % 2 === 0);
}
// ACTUAL ANSWER
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

// MY ANSWER - Should again have used 1 line arrow function.
function findMin(nums) {
    let min = Math.min(...nums);
    return min;
}
// ACTUAL ANSWER
const findMin = (...args) => Math.min(...args)

// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }) // {a:1, b:2, c:3, d:4}

// MY ANSWER
function mergeObjects(...object) {
    return object.reduce(((obj1, obj2) => Object.assign(obj1, obj2)), {});
}
// ACTUAL ANSWER
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })

// doubleAndReturnArgs([1, 2, 3], 4, 4) // [1,2,3,8,8]
// doubleAndReturnArgs([2], 10, 4) // [2, 20, 8]

function doubleAndReturnArgs(arr, ...arg) {

    let doubleArg = arg * 2;
    let newArr = [arr, doubleArg];
    return newArr;
}


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(...items) {
    let removeItems = items.map(value => items.splice(0));
    return removeItems;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    let newArr = [...array1, ...array2];
    return newArr;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, keys, val) {
    var newPair = { keys: val };
    var newObj = { ...obj, ...newPair };
    return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    var newObj = delete obj[key];
    return obj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    let newObj = { ...obj1, ...obj2 };
    return newObj;
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    var newPair = { keys: val };
    var newObj = { ...obj, ...newPair };
    return newObj;
}