
//! In `` we can add unlimited space

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
//   console.log("404 ERROR fOUND 💀");
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
// !  fliter method
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
//! for one line of code no need to write return and {} this {} brackets
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
// let myName = "swaraj kumar";
// console.log(myName.length);
//! finding String in a string (caseSensitive)
//! using indexOf() method, and if not found returns -1
// const bioData = "i am swaraj kumar";
// console.log(bioData.indexOf("am"));
//! using search() method, and if not found returns -1
// but cant pass the second aurgument, and the index number, from were to start
// const bioData = "i am swaraj kumar";
// console.log(bioData.search("am"));
// Extracting String parts
// There are three methods for exreacting a part of a string:
// slice(start, end)
// substring(start,end)
// substr(start,length)
//! Slice() methodslice(start, end)
// he first number will be startign number and last will be the ending number
// var str = "apple,mango,kiwi";
// let res = str.slice(0,4)
// console.log(res);
// todo: challege time
// To create a application, in which after 280  charaters it will not print, like youtube description.
// let myTweets =
//   "Lorem ipsum dolor sit lla culpa corporis natus expedita repellendus, adipisci iste veniam officia minus hic explicabo qui sunt vero ratione deleniti. Ab dolorum vitae adipisci? f jdfjhfbdf dfbvdshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh Inventore, distinctio. now over guys";
// let tweetsfunc = myTweets.slice(0, 280); //! 0-280 = 280, coz from 0
// console.log(tweetsfunc);
// console.log(myTweets.length);
// console.log(tweetsfunc.length);
//! Replacing String in a string (caseSensitive)
// replace(searchfor,replaceWith) method
// let mybio = "my name is swaraaj kumar";
// let replaceData = mybio.replace("swaraaj",'swaraj');
// console.log(replaceData);
// console.log(mybio);
// points to remmber
// it does not changes the original data, makes a new string
// It replaces only the the first match
// It is case sensitive
//! playing with characters of a string
// CharAt
// CharCodeAt
//
//! CharAT(position) method
// let str = "HELLO WORLD";
// console.log(str.charAt(0));
// todo GAME TIME :
// var gameElements = "fbnzkjwertylsaguiopxhmdqcv";
// console.log(gameElements.length);
// console.log(gameElements.charAt(10));
//! CharCodeAt(position) method
//It returns the unicode of the char at a specific index in a string
// The method returns a UTf-16 code (an integer between 0 and 65535)
// let str = "HELLO WORLD";
// console.log(str.charCodeAt(0));
// console.log(str.charAt(0));
//mojo pizza
// chalenge time 🏁
// find the unicode vaule of last char of the string
// let str = "HELLO WORLD";
// let lastChar = str.length - 1;
// console.log(str.charAt(lastChar));
// console.log(str.charCodeAt(lastChar));
//! property access [ ] on strings
// var str = "HELLO WORLD";
// console.log(str[0]); // this returns the char according to the index number
// let fName = "swaraj";
// let lName = "singh";
// console.log(fName.concat(' kumar')); // can join written string also
// console.log(fName.concat(lName));
// console.log(fName.concat(" ", lName)); // join with space
// console.log(`${fName} ${lName}`);

//! trim property - removes the extra white space from the string
// only the starting and ending witespace
// let str = "    Hello World        "
// console.log(str.trim());

//! split() method NOT UNDERSTOOD
//! to covert a String to array - split() method
// var txt = "a , b, c,d,e";
// console.log(txt.split(','));
// console.log(txt.split(" "));



//! date and time in javascript

//! Date methods(get and set)

//there are 4 ways to create a date object 
// 1. new Date()
//! india is 5hours 30 mins ahead of grennwich mean time
//!  and if we add 5hr 30mins, we get our lovely INDIA TIME 💪
// let currDate = new Date()
// console.log(currDate);
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// console.log(Date.now());
// console.log(new Date(dateString));
var d = new Date(1634404753573);
console.log(d.toLocaleString());



