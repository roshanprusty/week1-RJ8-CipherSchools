//In Javascript, we can declare a variable in 3 ways
//1. by using var
//2. by using let
//3. by using const

// let , const, var
// var -> where you can re-declare & re-assign.
// let -> you can't re-declare & but you can re-assign.
// const -> neither you can't re-declare nor you can re-assign.

// var myName = [];
// console.log(myName);
// myName.push("John");
// console.log(myName);

// let v1="roshan";
// let v2="prusty";
// console.log(`${v1} ${v2}`);

//Defaut Params
// function addTwoNumber(num1, num2) {
//     return num1+num2;
// }
// console.log(addTwoNumber(1,2));

//arrow function
// let addTwoNumber =(num1, num2) => {
//     return num1+num2;
// };
// console.log(addTwoNumber(1,2));

// let addTwoNumber = (num1, num2=5) => {
//     console.log(num1);
//     console.log(num2);
//     return num1 + num2;
// }
// //console.log(addTwoNumber(1,2));
// console.log(addTwoNumber(1,10));

//rest and spread operator are applicable in arrays and object in js
// let array = [5, 10, 15, 20, 25];
// let newArray = [...array,30 , 35, 40];
// console.log(newArray);

//Spread Operator -> ...
// console.log(array);
// console.log(...array);

//Rest => ...
// let maxOfNumbers = (...numbers) => {
//     let maximum = Number.MIN_VALUE;
//     for(let number of  numbers) {
//         maximum = Math.max(maximum,number);
//     }
//     return maximum;
// };
//console.log(maxOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));
//let maxOfTwoNumbers = (num1, num2) => Math.max(num1, num2);
//let maxOfThreeNumbers = (num1, num2, num3) => Math.max(num1, num2, num3);

//spread operator in objects
let object = {
    name: "John",
    age: 24,
    address: {
    city: "New York",
    state: "NY",
    country: "USA",
    },

};
let object2 = {...object, country:"USA", favoritesong: "Numb by number"};
console.log(object2);

