// 1. .map()
// let array = [3, 10, 15, 20];
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[i]* array[i];
//     }
//     console.log(newArray)

// let array = [5, 10, 15, 20];
// function functionForMap (element) {
// return element * element;
// }
// let newArray = array.map(functionForMap);
// console.log(newArray);

// let array = [5, 10, 15, 20];
// let newArray = array.map((element) => element * element);
// console.log(newArray);

// ForEach()

// let array = [1, 2, 3, 4, 5];
// array.forEach((element, index) => {
// element *= element;
// console.log(element);
// });
// console.log("Array is: ", array);

// 3. .filter()
// let array = [10, 20, 30, 40, 50];
// let newArray = array.filter((element) => element >= 30);
// console.log(newArray);

// .find()

// let array = [10, 20, 30, 40, 50];
// let temp = array.find((value) => {
// return value > 20;
// });
// console.log(temp);

// sort()
// let array = [50, 40, 30, 20, 10];
// let sortedArray = array.sort();
// console.log(sortedArray);

//comparatos
// .sort()
// let array = [50, 40, 111, 30, 20, 10];
// let sortedArray = array.sort((el1, el2) =>{
//     el1 = Number(el1);
//     el2 = Number(el2);
//     return el1-el2;
// });
// console.log(sortedArray);

// sort()
// let array = [50, 40, 111, 30, 20, 10];
// let sortedArray = array.sort();
// console.log(sortedArray);

// let details = {
//     name: "Alex",
//     age: 24,
//     address: {
//         street: "Brooklyn",
//         city: "New York",
//         state: "NY",
//         country: "USA",
//         passportDetail: {
//             passportNumber: "AP1234",
//         },
//     },
// };

//     // let myName = details.name;
//     let { name: myName, age} = details;
//     console.log(myName, age);

//Matching

// let obj1 = { name: "Roshan" };
// let obj2 = { name: "Roshan" };

// function areEqual(objl, obj2) {
//   if (objl === obj2) {
//     return true;
//   }

// if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//   return false;
// }
// for (let key of Object.keys(obj1)) {
//   if (typeof obj2[key] == "undefined") {
//     return false;
//   }
//   if (obj2[key] != obj1[key]) {
//     return false;
//   }
// }
//   return true;
// }

// console.log(areEqual(obj1, obj2));

// In JS, a function is also a JS Object




// Map and set

//map
// let map = new Map();
// map.set(1, "Shantanu");
// map.set(2, "Alex");
// console.log(map);
// map.values()

//set
// let set = new Set();
// set.add(1);
// set.add(-1);
// let arr = [...set]
// console.log(set);

//Class


