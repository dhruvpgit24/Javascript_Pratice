// ######################## Seven Boom! ########################
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.
// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.
// --------------------------------------------------------------------------------
// function sevenBoom(arr) {
//   let str = arr.toString();
//   if (str.includes("7")) {
//    return "Boom!";
//   } else {
//    return "There is no 7 in the array";
//   }
// }
// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
// ######################## Tower of Hanoi ########################
// There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.
// Tower of Hanoi
// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.
// Examples
// towerHanoi(3) ➞ 7
// towerHanoi(5) ➞ 31
// towerHanoi(0) ➞ 0
// Notes
// The amount of discs is always a positive integer.
// 1 disc can be changed per move.
// --------------------------------------------------------------------------------
// function towerHanoi(disk){
//     return Math.pow(2,disk) - 1;
// }
// console.log(towerHanoi(0));
// ######################## Anonymous Functions All the Way Down ########################
// Create a function which takes a parameter n and returns a function such that it, when called n times, returns the string "edabit".
// Examples
// lambdaDepth(0) ➞ "edabit"
// lambdaDepth(1)() ➞ "edabit"
// lambdaDepth(2)()() ➞ "edabit"
// typeof lambdaDepth(2)() ➞ "function"
// Notes
// num will always be a non-negative integer.
// If num == 0, return "edabit".
// If num > 0, return a function.
// All non-example test cases come in two forms: checking whether lambda_depth(k), after being called k times, returns a string, and checking whether lambda_depth(k) returns a function.
// --------------------------------------------------------------------------------
// function lambdaDepth(n){
//     if(n === 0) return 'edabit';
//     return function(){
//         return lambdaDepth(n - 1);
//     };
// }
// console.log(lambdaDepth(2)()());
// ######################## Number of Boomerangs ########################
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// Some boomerang examples:
// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.
// To illustrate:
// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:
// [1, 7, 1, 7, 1, 7, 1]
// // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
// Examples
// countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
// countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
// countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
// Notes
// [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.
// --------------------------------------------------------------------------------
// function countBoomerangs(arr){
//     boomcount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === arr[i+2] && arr[i] !== arr[i+1]){
//             boomcount ++;
//         }
//     }
//     return boomcount;
// }
// console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));
// ######################## Album in Albumns ########################
// You have an object with years 2015-2020 as keys and some albums released for each year as key values. Write a function that takes an album and returns the year in which it was released.
// Examples
// releaseYear("Ode to Joy") ➞ 2019
// releaseYear("Honeymoon") ➞ 2015
// releaseYear("Fake_album") ➞ "Unknown"
// Note
// Albums object is made for you.
// If the album isn't in the object, return the string "Unknown".
// --------------------------------------------------------------------------------
// const albums = {
//     2015:'Autobiography Of A Yogi',
//     2016:'Easier Said Than Done',
//     2017:'Detox Your Ego',
//     2018:'The Secret',
//     2019:'open',
//     2020:'Driven: The Virat Kohli Story'
// }
// function releaseYear(album){
//     for (let [key,value] of Object.entries(albums)) {
//         if(album === value){
//             return key
//         }
//     }
//     return 'unknown'
// }
// console.log(releaseYear('Driven: The Virat Kohli Story'));
// ######################## Oddish vs. Evenish ########################
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
// Examples
// oddishOrEvenish(43) ➞ "Oddish"
// // 4 + 3 = 7
// // 7 % 2 = 1
// oddishOrEvenish(373) ➞ "Oddish"
// // 3 + 7 + 3 = 13
// // 13 % 2 = 1
// oddishOrEvenish(4433) ➞ "Evenish"
// // 4 + 4 + 3 + 3 = 14
// // 14 % 2 = 0
// --------------------------------------------------------------------------------
// function oddishOrEvenish(num){
//     let str = num.toString().split('')
//     let numarr = str.map(Number)
//     let result = numarr.reduce((val1,val2)=>{
//         return val1 + val2
//     });
//     if(result%2 === 0){
//         return 'Evenish'
//     }
//     else{
//         return 'Oddish'
//     }
// }
// console.log(oddishOrEvenish(47));
// ######################## Sales by Match ########################
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. For example, there are 7 socks with colors [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
// Create a function that returns an integer representing the number of matching pairs of socks that are available.
// Examples
// sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]) ➞ 3
// sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]) ➞ 4
// sockMerchant([]) ➞ 0
// --------------------------------------------------------------------------------
// let count = {}
// let total = 0
// function sockMerchant(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(count.hasOwnProperty(arr[i]) === false){
//             count[arr[i]] = 1;
//         }
//         else{
//             count[arr[i]]++;
//         }
//     }
//     for (const [key,value] of Object.entries(count)) {
//         total += Math.floor(value/2);
//     }
//     return total
// }
// console.log(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]));
// ######################## How Many Days Between Two Dates ########################
// Create a function that takes two dates and returns the number of days between the first and second date.
// Examples
// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// ) ➞ 6
// getDays(
//   new Date("December 29, 2018"),
//   new Date("January 1, 2019")
// ) ➞ 3
// // Dates may not all be in the same month/year.
// getDays(
//   new Date("July 20, 2019"),
//   new Date("July 30, 2019")
// ) ➞ 10
// --------------------------------------------------------------------------------
// function getDays(Date1 , Date2){
//     const milisec = Math.abs(Date2 - Date1);
//     const perday = 1000*60*60*24;
//     return Math.floor(milisec / perday);
// }
// console.log(getDays(new Date("June 14, 2019"),new Date("June 20, 2019")));
// ######################## Length of a Nested Array ########################
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.
// Examples
// getLength([1, [2, 3]]) ➞ 3
// getLength([1, [2, [3, 4]]]) ➞ 4
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5
// Notes
// An empty array should return 0.
// --------------------------------------------------------------------------------
// function getLength(arr){
//     let array = arr.flat(Infinity)
//     return array.length
// }
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
// ######################## Convert camelCase to snake_case ########################
// Create a function that takes a string of words (or just one word) and converts each word from camelCase to snake_case.
// Examples
// camelToSnake("magicCarrots") ➞ "magic_carrots"
// camelToSnake("greatApples for aSmellyRhino") ➞ "great_apples for a_smelly_rhino"
// camelToSnake("thatsGreat") ➞ "thats_great"
// Notes
// You won't get more than two capitals in a row (e.g. "DIYFoods" is not given).
// --------------------------------------------------------------------------------
// function camelToSnake(str){
//     let strarr = Array.from(str);
//     for (let i = 0; i < strarr.length; i++) {
//         if(strarr[i] === strarr[i].toUpperCase() && strarr[i] !== strarr[i].toLowerCase()){
//             strarr.splice(i,0,'_')
//             i++;
//         }
//     }
//     return strarr.join('')
// }
// console.log(camelToSnake('greatApples for aSmellyRhino'));
// ######################## Christmas Tree ########################
// Write a function to create a Christmas tree based on height h.
// Examples
// tree(1) ➞ [
//   "#"
// ]
// tree(2) ➞ [
//   " # ",
//   "###"
// ]
// tree(5) ➞ [
//   "    #    ",
//   "   ###   ",
//   "  #####  ",
//   " ####### ",
//   "#########"
// ]
// tree(0) ➞ []
// --------------------------------------------------------------------------------
// function tree(h) {
//   let result = [];
//   for (let i = 0; i < h; i++) {
//     let spaces = " ".repeat(h - i - 1);
//     let hashes = "#".repeat(2 * i + 1);
//     result.push(spaces + hashes + spaces);
//   }
//   return result;
// }
// console.log(tree(5));
// ######################## A Simple Pair ########################
// Mubashir needs your help to write a simple algorithm of multiplication.
// Given an array of integers arr and an integer n, find out a pair of numbers [x, y] from a given array such that x * y = n .
// If the pair is not found, return null.
// Examples
// simplePair([1, 2, 3], 3) ➞ [1, 3]
// simplePair([1, 2, 3], 6) ➞ [2, 3]
// simplePair([1, 2, 3], 9) ➞ null
// --------------------------------------------------------------------------------
// function simplePair(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] * arr[j] === num) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
//     return null;
// }

// console.log(simplePair([1, 2, 3], 6));
// ######################## Learn Lodash: _.difference, Find the Difference in Arrays ########################
// According to the lodash documentation, _.difference(array, [values]) creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
// If you wanted to use this function in the real world you would just import lodash and use it but this challenge requires you to write your own version using vanilla javascript. Hopefully this enables you to better understand how the function works .
// Arguments
// array (Array): The array to inspect.
// [values] (...Array): The any number of arrays containing the values to exclude.
// Returns
// (Array): Returns the new array of filtered values.
// Examples
// difference([2, 1], [2, 3]);  // => [1]
// difference(["banana", "orange", "apple"], ["orange", "apple"]);  // => ["banana"]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.
// // --------------------------------------------------------------------------------
// function difference(arr, removearr) {
//   let result = [];
//   arr.forEach((elem) => {
//     if (!removearr.includes(elem)) {
//        result.push(elem);
//     }
//   });
//   return result;
// }
// console.log(difference([2, 1 ,3 ,4], [2, 3]));
// ######################## Numbers in Strings ########################
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞ ["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) ➞ ["test1"]
// Notes
// The strings can contain white spaces or any type of characters.
// Bonus: Try solving this without RegEx.
// // --------------------------------------------------------------------------------
// function numInStr(arr) {
//   let result = [];

//   for (let str of arr) {
//     for (let char of str) {
//       if (char >= '0' && char <= '9') {
//         result.push(str);
//         break;
//       }
//     }
//   }

//   return result;
// }
// console.log(numInStr(["1a", "a", "2b", "b"]));
// ######################## Case and Index Inverter ########################
// Write a function that takes a string input and returns the string in a reversed case and order.
// Examples
// invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"
// invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY"
// invert("step on NO PETS") ➞ "step on NO PETS"
// invert("XeLPMoC YTiReTXeD") ➞ "dExtErIty cOmplEx
// Notes
// No empty strings and will neither contain special characters nor punctuation.
// A recursive version of this challenge can be found via this link.
// // --------------------------------------------------------------------------------
// function invert(str){
//     let arr = Array.from(str);
//     let revarr = arr.reverse();
//     let newarr = [];
//     for (let i = 0; i < revarr.length; i++) {
//         if(revarr[i] === revarr[i].toUpperCase()){
//             newarr.push(revarr[i].toLowerCase())
//         }
//         else{
//             newarr.push(revarr[i].toUpperCase())
//         }
//     }
//     let finalstr = newarr.join('')
//     return finalstr
// }
// console.log(invert('dLROW YM sI HsEt'));
// ######################## Combinations ########################
// Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.
// Examples
// combinations(2, 3) ➞ 6
// combinations(3, 7, 4) ➞ 84
// combinations(2, 3, 4, 5) ➞ 120
// Notes
// Don't overthink this one.
// Input may include the number zero.
// // --------------------------------------------------------------------------------
// function combinations(...number){
//   let result =  number.reduce((num1,num2)=>{
//        return num1 * num2
//     },1)
//     return result
// }
// console.log(combinations(7,4,3));
// ######################## Positive Dominant ########################
// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.
// Examples
// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// // There is only 1 unique positive value (1).
// // There are 2 unique negative values (-3, -4).
// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true
// isPositiveDominant([5, 0]) ➞ true
// isPositiveDominant([0, -4, -1]) ➞ false
// Notes
// 0 counts as neither a positive nor a negative value.
// // --------------------------------------------------------------------------------
// function isPositiveDominant(arr){
//     let positive = 0;
//     let negative = 0;
//     let finalarr = [...new Set(arr)]
//     for (let i = 0; i < finalarr.length; i++) {
//         if(finalarr[i] < 0){
//             negative ++;
//         }
//         else if(finalarr[i] > 0){
//             positive ++;
//         }
//     }
//     console.log(`negative: ${negative}`);
//     console.log(`positive: ${positive}`);
//     let result = positive > negative ? true : false;
//     return result
// }
// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
// ######################## Calculate the Total Price of Groceries ########################
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
// Examples
// // 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5
// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4
// // 3 bottles of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5
// // Several groceries:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4
// // Some cheap candy:
// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3
// Notes
// There might be a floating point precision problem in here...
// // --------------------------------------------------------------------------------
// function getTotalPrice(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i].quantity * arr[i].price;
//   }
//   let finalprice = parseFloat(result.toFixed(2));
//   return finalprice;
// }
// console.log(
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.5 },
//     { product: "Cereals", quantity: 1, price: 2.5 },
//   ])
// );
// ######################## Reverse the Odd Length Words ########################
// Given a string, reverse all the words which have odd length. The even length words are not changed.
// Examples
// reverseOdd("Bananas") ➞ "sananaB"
// reverseOdd("One two three four") ➞ "enO owt eerht four"
// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"
// Notes
// There is exactly one space between each word and no punctuation is used.
// // --------------------------------------------------------------------------------
// function reverseOdd(str){
//     let arrstr = str.split(' ')
//     for (let i = 0; i < arrstr.length; i++) {
//         if(arrstr[i].length % 2 === 1){
//             arrstr[i] = arrstr[i].split('').reverse().join('')
//         }
//     }
//     return arrstr.join(' ')
// }
// console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"))