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

// MY ANSWER - Same as before. I am not putting into a simpiler one line arrow function.
function mergeObjects(...object) {
    return object.reduce(((obj1, obj2) => Object.assign(obj1, obj2)), {});
}
// ACTUAL ANSWER
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })

// doubleAndReturnArgs([1, 2, 3], 4, 4) // [1,2,3,8,8]
// doubleAndReturnArgs([2], 10, 4) // [2, 20, 8]

//MY ANSWER
function doubleAndReturnArgs(arr, ...arg) {
    let doubleArg = arg * 2;
    let newArr = [arr, doubleArg];
    return newArr;
}
//ACTUAL ANSWER
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]

/** remove a random element in the items array
and return a new array without that item. */

// MY ANSWER - Did not work and I got stuck. 
function removeRandom(...items) {
    let removeItems = items.map(value => items.slice(0));
    return removeItems;
}
// ACTUAL ANSWER
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

/** Return a new array with every item in array1 and array2. */
// MY ANSWER - Again not creating a new array with the new arow function. Need to simplify it more.
function extend(array1, array2) {
    let newArr = [...array1, ...array2];
    return newArr;
}
//ACTUAL ANSWER
const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
//MY ANSWER - My asnwer seems to work also..
function addKeyVal(obj, keys, val) {
    var newPair = { keys: val };
    var newObj = { ...obj, ...newPair };
    return newObj;
}
//ACTUAL ANSWER
const addKeyVal = (obj, key, val) => {

    // OPTION 1
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

    // OPTION 2 (uses an object enhancement you'll see in the next unit)
    // return { ...obj, [key]: val };
}

/** Return a new object with a key removed. */
//MY ANSWER - Again need to work on simplifying it witht he arrow functions. Also I didn't make a new obj and I modified orginal.
function removeKey(obj, key) {
    var newObj = delete obj[key];
    return obj;
}
//ACTUAL ANSWER
const removeKey = (obj, key) => {

    // OPTION 1
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;

    // OPTION 2 (uses an object enhancement you'll see in the next unit)
    // ({ [key]: undefined, ...obj } = obj);
    // return obj;
}

/** Combine two objects and return a new object. */
//MY ANSWER - Needing to simplify it with arrow functions.
function combine(obj1, obj2) {
    let newObj = { ...obj1, ...obj2 };
    return newObj;
}
//ACTUAL ANSWER
const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}


/** Return a new object with a modified key and value. */
//MY ANSWER- This questions seemed similar to the one before and I thought the same function could work again. Ofcourse I need to simpliy it with the arrow functions. I will need more practice in the future.
function update(obj, key, val) {
    var newPair = { keys: val };
    var newObj = { ...obj, ...newPair };
    return newObj;
}
//ACTUAL ANSWER
const update = (obj, key, val) => {

    // OPTION 1

    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

    // OPTION 2 this uses an object enhancement you'll see in the next unit)
    // return { ...obj, [key]: val };
}