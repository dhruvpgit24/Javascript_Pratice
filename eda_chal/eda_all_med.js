// ######################################################## how much is true ##################################################
// Create a function which returns the number of true values there are in an array.
// Examples
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0
// ----------------------------------------------------------------------------------------------------------------------------
// function counttrue(arr){
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === true){
//           count++;
//         }
//     }
//     return count;
// }
// console.log(counttrue([true, false, false, true, false]));
// ######################################################## A Redundant Function ##################################################
// Write a function redundant that takes in a string str and returns a function that returns str.
// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"
// const f2 = redundant("pear")
// f2() ➞ "pear"
// const f3 = redundant("")
// f3() ➞ ""
// ----------------------------------------------------------------------------------------------------------------------------
// function redundant(str){
//     return function (){
//        return str
//     };
// }
// const f1 = redundant('hello')
// console.log(f1());
// ############################################## RegEx Exercise: An empty string ##################################################
// If you've completed this RegEx series from I to XXII then you have been exposed to all of MDN's documentation on regular expressions special characters. You can check my Collections under Basic Reg Ex in my profile if you missed any. This next part of the series is to help solidify what you've learned. In order to save time I will be searching the web to find regular expression exercises to post here.

// You can test for empty string like this:
// "".length === 0 ➞ true
// Use a regular expression to test for an empty string.
// const REGEXP = /your solution/
// REGEXP.test("") ➞ true
// Notes
// You can find the solution in the Resources tab.
// ----------------------------------------------------------------------------------------------------------------------------
// const regex = /^$/;
// let result = regex.test("");
// console.log(result);
// ############################################## Tile Teamwork Tactics ##################################################
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
// Examples
// possibleBonus(3, 7) ➞ true
// possibleBonus(1, 9) ➞ false
// possibleBonus(5, 3) ➞ false
// Notes
// You cannot move backward (which is why example #3 doesn't work).
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.
// ----------------------------------------------------------------------------------------------------------------------------
// function possibleBonus(mytile,ftile){
//     if(mytile + 6 >= ftile && mytile < ftile ){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(possibleBonus(5, 3));
// ############################################## Right Shift by Division ##################################################
// The right shift operation is similar to floor division by powers of two.
// Sample calculation using the right shift operator ( >> ):
// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
// Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
// Examples
// shiftToRight(80, 3) ➞ 10
// shiftToRight(-24, 2) ➞ -6
// shiftToRight(-5, 1) ➞ -3
// shiftToRight(4666, 6) ➞ 72
// shiftToRight(3777, 6) ➞ 59
// shiftToRight(-512, 10) ➞ -1
// Notes
// There will be no negative values for the second parameter y.
// This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
// Alternatively, you can solve this challenge via recursion.
// A recursive version of this challenge can be found via this link.
// ----------------------------------------------------------------------------------------------------------------------------
// function shiftToRight(x,y){
//     return Math.floor(x / Math.pow(2,y));
// }
// console.log(shiftToRight(80, 3));
// ############################################## Perimeters with a Catch ##################################################
// Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
// Use the following formulas:
// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.
// The catch is you can only use arithmetic or comparison operators, which means:
// No if... else statements.
// No objects.
// No arrays.
// No formatting methods, etc.
// The goal is to write a short, branch-free piece of code.
// Examples
// perimeter("s", 7) ➞ 28
// perimeter("c", 4) ➞ 25.12
// perimeter("c", 9) ➞ 56.52
// Notes
// No rounding is needed.
// ----------------------------------------------------------------------------------------------------------------------------
// function perimeter(l, num){
//     return (l === "s") * 4 * num + (l === "c") * 6.28 * num;
// }
// console.log(perimeter("s", 7));
// ############################################## Find Number of Digits in Number ##################################################
// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
// Examples
// num_of_digits(1000) ➞ 4
// num_of_digits(12) ➞ 2
// num_of_digits(1305981031) ➞ 10
// num_of_digits(0) ➞ 1
// Note
// Try to solve this challenge without using strings!
// ----------------------------------------------------------------------------------------------------------------------------
// function num_of_digits(num){
//     let count = 0;

//     while(num > 0){
//         num = Math.floor(num / 10);
//         count++;
//     }
//     return count === 0 ? 1 : count;
// }
// console.log(num_of_digits(0));
// ############################################## Burglary Series (04): Add its Name ##################################################
// Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).
// Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }
// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
// Notes
// The value argument will be a number.
// ----------------------------------------------------------------------------------------------------------------------------
// function addName(obj,key,value){
//     let object = {...obj}
//     object[key] = value
//     return object
// }
// console.log(addName({}, "Brutus", 300));
// ############################################## Derivative of a Function ##################################################
// Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.
// Examples
// derivative(1, 4) ➞ 1
// derivative(3, -2) ➞ 12
// derivative(4, -3) ➞ -108
// Notes
// ^ in the context of this challenge means "to the power of", also known as the "exponent" operator.
// ----------------------------------------------------------------------------------------------------------------------------
// function derivative(b, m) {
//     return b * (m ** (b - 1));
// }
// console.log(derivative(4, -3));
// ############################################## Which Generation Are You? ##################################################
// Try finding your ancestors and offspring with code.
// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, "f") ➞ "granddaughter"
// generation(-3, "m") ➞ "great grandfather"
// generation(1, "f") ➞ "daughter"
// Notes
// Check the Resources tab for helpful hints.
// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter
// ----------------------------------------------------------------------------------------------------------------------------
// const obj = {
//     '-3':{
//         'm':'great grandfather',
//         'f':'great grandmother'
//     },
//     '-2':{
//         'm':'grandfather',
//         'f':'grandmother'
//     },
//     '-1':{
//         'm':'father',
//         'f':'mother'
//     },
//     '0':{
//         'm':'me!',
//         'f':'me!'
//     },
//     '1':{
//         'm':'son',
//         'f':'daughter'
//     },
//     '2':{
//         'm':'grandson',
//         'f':'granddaughter'
//     },
//     '3':{
//         'm':'great grandson',
//         'f':'great granddaughter'
//     }
// }
// // console.log(obj[1].m);
// function generation(key,value){
//     return obj[key][value]
// }
// console.log(generation(2,'f'));
// ############################################## Find the nth Tetrahedral Number ##################################################
// A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.
// Create a function that takes an integer n and returns the nth tetrahedral number.
// Alternative Text
// Examples
// tetra(2) ➞ 4
// tetra(5) ➞ 35
// tetra(6) ➞ 56
// Notes
// There is a formula for the nth tetrahedral number.
// ----------------------------------------------------------------------------------------------------------------------------
// //Tn = n(n+1)(n+2)/6
// function tetra(val){
//     return (val * (val + 1) * (val + 2)) / 6;
// }
// console.log(tetra(2));
// ############################################## Learn Lodash (2): Compact #############################################
// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.
// Examples
// compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.
// ----------------------------------------------------------------------------------------------------------------------------
// function compact(arr){
//     let newarr = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]){
//             newarr.push(arr[i])
//         }
//     }
//     return newarr;
// }
// console.log(compact([0, 1, false, 2, "", 3]));
// ############################################## Function Factory #############################################
// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.
// Please check the examples below for a clearer representation of the behavior expected.
// Examples
// // Calling makePlusFunction(5) returns a new function that takes an input,
// // and returns the result when adding 5 to it.
// const plusFive = makePlusFunction(5)
// plusFive(2) ➞ 7
// plusFive(-8) ➞ -3
// // Calling makePlusFunction(10) returns a new function that takes an input,
// // and returns the result when adding 10 to it.
// const plusTen = makePlusFunction(10)
// plusTen(0) ➞ 10
// plusTen(188) ➞ 198
// plusFive(plusTen(0)) ➞ 15
// Notes
// All inputs will be valid numbers.
// ----------------------------------------------------------------------------------------------------------------------------
// function plusfn(val){
//     return function plus(val2){
//         return val + val2
//     }
// }
// const plusFive = plusfn(5);
// console.log(plusFive(2));
// ############################################## Converting Objects to Arrays #############################################
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.
// ----------------------------------------------------------------------------------------------------------------------------
// function toArray(obj) {
//   let arr = [];
//   if (obj) {
//     for (let key in obj) {
//       arr.push([key, obj[key]]);
//     }
//     return arr;
//   }
//   else{
//     return []
//   }
// }
// console.log(toArray({ a: 1, b: 2 }));
// ###################################### Concatenate Variable Number of Input Arrays #############################################
// Create a function that concatenates n input arrays, where n is variable.
// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
// Notes
// Arrays should be concatenated in order of the arguments.
// ----------------------------------------------------------------------------------------------------------------------------
// function concatarr(...arr){
// let newarr = []
// return newarr.concat(...arr)
// }
// console.log(concatarr([1, 2], [3, 4]));
// ###################################### All About Anonymous Functions: Adding Suffixes #############################################
// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
// Examples
// add_ly = add_suffix("ly")
// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"
// add_less = add_suffix("less")
// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"
// ----------------------------------------------------------------------------------------------------------------------------
// function add(str){
// return function(suffix){
//     return str + suffix
// }
// }
// let result = add('total')
// console.log(result('ly'));
// ######################################################### Triangular Number Sequence #############################################
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:
// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.
// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.
// Examples
// triangle(1) ➞ 1
// triangle(6) ➞ 21
// triangle(215) ➞ 23220
// Notes
// Check the Resources for info on triangular number sequence.
// ----------------------------------------------------------------------------------------------------------------------------
// function triangle(n){
//   return  n * (n + 1) / 2
// }
// console.log(triangle(215));
// ######################################################### Make a Circle with OOP #############################################
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).
// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
// Examples
// let circy = new Circle(11)
// circy.getArea()
// // Should return 380.132711084365
// let circy = new Circle(4.44)
// circy.getPerimeter()
// // Should return 27.897342763877365
// Notes
// Don't worry about floating point precision - I've factored in the chance that your answer may be more or less accurate than mine. This is more of a tutorial than a challenge so the topic covered may be considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.
// ----------------------------------------------------------------------------------------------------------------------------
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius ** 2;
//     }

//     getPerimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// }
// let circy1 = new Circle(11);
// console.log(circy1.getArea());
// let circy2 = new Circle(4.44);
// console.log(circy2.getPerimeter());
// ######################################################### Convenience Store #############################################
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
// Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true
// changeEnough([30, 40, 20, 5], 12.55) ➞ true
// changeEnough([10, 0, 0, 50], 3.85) ➞ false
// changeEnough([1, 0, 5, 219], 19.99) ➞ false
// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01
// ----------------------------------------------------------------------------------------------------------------------------
function changeEnough(arr, price) {
  let [quarter, dime, nickel, penny] = arr;
  let total = quarter * 0.25 + dime * 0.10 + nickel * 0.05 + penny * 0.01;
  let result = total >= price ? true : false;
  return result
}
console.log(changeEnough([0, 0, 20, 5], 0.75));
