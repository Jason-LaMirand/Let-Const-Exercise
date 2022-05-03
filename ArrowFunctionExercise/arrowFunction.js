// ES5 Map Callback
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }
// E2015 Arrow Functions Shorthand

let arr = [1, 2, 3];
let arrDoubled = arr.map(n => n * 2);

//Refactor the following function to use arrow functions:
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }
let arrSquared = arr.map(n => n ** 2);
let arrEvens = arrSquared.filter(function (n, idx) {
    return n % 2 === 0;
});

function squareAndFindEvens(numbers) {
    var squares = numbers.map(function (num) {
        return num ** 2;
    });
    var evens = squares.filter(function (square) {
        return square % 2 === 0;
    });
    return evens;
}

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)
