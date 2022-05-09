// 1. What does the following code return/print?

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// 2. What does the following code return/print?

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered:1846, yearMarsDiscovered:1659}

// 3. What does the following code return/print?

function getUserData({ firstName, favoriteColor = "green" }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }) // Your name is Alejandro and you like purple
getUserData({ firstName: "Melissa" }) // Your name is Melissa and you like green
getUserData({}) // your name is undefined and you like green

// 4. What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marissa
console.log(third); // Chi

// 5. What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // brigth copper kettles, warm woolen mittens, Brown paper packages tied up with strings

// 6. What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]

// 7. Assigning Variables to Object Properties
//ORGINAL
var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

var a = obj.numbers.a;
var b = obj.numbers.b;
// ES2015 VERSION
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
const { a, b } = obj.numbers;

// 8. Array Swap
//ORGINAL
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
//ES2015 VERSION
let arr = [1, 2];
let temp = arr[0];
[arr[0], arr[1]] = [arr[1], arr[0]];

// 9.
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

{
    first: "Tom",
        second: "Margaret",
            third: "Allison",
                rest: ["David", "Pierre"]
}

const raceResults = ([first, second, third, ...rest]) => ({ first, second, thrid, rest })
