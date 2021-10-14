//todo Array methods important (splice,indexOf,map,reduce,filter)

//  const arr1 = ["apple", "bannana", "cherry", "narial"];
//  const mango =['mango','rim']
//  arr1.pop()
//  console.log(arr1);
// const indexOfMarch = month.indexOf("march");

// Questions are :-
// Add dec at the last
// chage march to March
// remove march from the Array
// All this using splice

// !To perform curd operation with one single method
//! this method is know as splice()
//! Syntax array.splice()
//? 3 parameters the present in the splice
//? 1 - which place you want to add the number
//? 2- which array element you want to remove it indexNUM else ley it be 0
//? 3 from that number onwards which u want to remove its number

// ! array crud problem with single method splice() starts
// const month = [
//   "jan",
//   "april",
//   "april",
//   "april",
//   "april",
//   "march",
//   "june",
//   "july",
// ];
// const indexOfMarch = month.indexOf("march");

// if (indexOfMarch != -1) {
//   var updatedData = month.splice(
//     indexOfMarch,

//     Infinity
//   );
//   console.log(month);
// } else {
//   console.log("404 ERROR FOUND 💀");
// }

// indexOfMarch != -1 ? month.splice(indexOfMarch,indexOfMarch,"yes bro") : '404 Data not found'
// console.log(month);    using ternary operator
// const string = "A short program to find the array replace or delete ";
// console.log(updatedData);

// ! array crud problem with single method splice() starts

// const arr12 = [2, 5, 9, 19, 37, 48];
// var newArr = arr12.filter((curE, index, array) => {
//   return `Index no. ${index} and the value is ${curE} and the array is ${array}`;
// });
// !  Fliter method

// const arr12 = [2, 5, 9, 19, 37, 48];
// var newArr = arr12.filter((curE, index, array) => {
//   return `Index no. ${index} and the value is ${curE} and the array is ${array}`;
// });

// !for each method
// const arr12 = [2, 5, 9, 19, 37, 48];
// var newArr = arr12.foreach((curE, index, array) => {
//   return `Index no. ${index} and the value is ${curE} and the array is ${array}`;
// });

//! MAP method
// console.log(newArr);
// const arr12 = [2, 5, 9, 19, 37, 48];
// var newArr = arr12.map((curE, index, array) => {
//   return `Index no. ${index} and the value is ${curE} and the array is ${array}`;
// });
// console.log(newArr);

// const arr1 = [2, 5, 9, 19, 37, 48];
// var newArr = arr1.forEach((curE, index, array) => {
//   return `Index no. ${index} and the value is ${curE} and the array is ${array}`;
// });
// console.log(arr1);
// console.log(newArr);

// this experiemnt show that map creates a new array then we play
// with the new array without touching the old one, but not in foreach

// TODO                             Qestion Time
// find the square root of the numbers given 1
// const numbers = [25,36,49,64,81];  2

//! For one line of code no need to write return and {} this {} brackets

// let numbers = [25, 36, 49, 64, 81];

// soln 1
// let arrSqr = numbers.map((curElm) => Math.sqrt(curElm));
// console.log(arrSqr);

// soln 2
// let arr1 = [2, 3, 4, 5, 6, 8];
// let update = arr1.map((curEM) => curEM * 2).filter((newdata) => newdata >= 10);
// console.log(update);

// const newData = update
// console.log(newData);
// const dataHandleer = newData.filter((cE) => {
//   return cE >10
// })

// console.log(dataHandleer);   Simply trying something

// ! Reduce method starts reduce()
// uses :-
//! to find sum,mutipy,divide. the given elemts of the Element and .👇
//! it add the arry and coverts 3 deminsional and 3 deminsional into 1 deminsional
// it has 4 aurguments
// 1 accumulator
// inisial value to be add in the last,
//        this value will be added in the array and add or muut...
// 2 Curent element
// 3 index
// 4 array

// sum

// let arr1 = [5, 5, 5];
// debugger;
// let sum = arr1.reduce((accumulator, curElem, index, array1) => {
//   return (accumulator += curElem);
// }, 1);
// console.log(sum);

//! professional works like this !VERY IMPORTANT 👇
// ? on map all got * 2;
// ? in fliter which is graeter equal to 10
// ? in reduce which all is filter is added

// let arr1 = [2, 3, 4, 5, 6, 8];
// debugger;
// let update = arr1
//   .map((curEM) => curEM * 2)
//   .filter((newdata) => newdata >= 10)
//   .reduce((accumulator, curElm, index, arr) => (accumulator += curElm));
// console.log(update);

//todo : this is 2 dimensional array
//todo :  to make it one dimesional array we do the follwoing
// todo : but we cant covert 3 deme into 2, will do further

// const arr1 = [
//   ["Zone 1", "Zone 2"],
//   ["Zone 3", "Zone 4"],
//   ["Zone 5", ["Zone 3", "Zone 4"]],
// ];

// const flatArr = arr1.reduce((accur, curValue) => {
//   return accur.concat(curValue);
// });
// console.log();

// console.log(arr1);
// console.log(flatArr);

// ! Reduce method OVER reduce()
// ! Array methods over

// ! Strnig  methods Starts

// changing a srting with String contructor 👇
// let myName = "sawraj Kumar";
// letNewName = new String("Swaraj kumar");  //wrong method
// console.log(letNewName);

// How to find the length of the string
// using .length() method
let myName = "swaraj kumar";
console.log(myName.length);


