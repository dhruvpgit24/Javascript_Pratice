// ----------------------Check if One Array can be Nested in Another-----------------------------------
// Create a function that returns true if the first array can be nested inside the second and false otherwise.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false
// ----------------------------------------------------------------------------------->

// function nestarr(arr1, arr2) {
//     const min1 = Math.min(...arr1);
//     const max1 = Math.max(...arr1);
//     const min2 = Math.min(...arr2);
//     const max2 = Math.max(...arr2);
//     return min1 > min2 && max1 < max2;
// }
// console.log(nestarr([1, 2, 3, 4], [0, 6]));

// -------------------------------------------------------------------------------------<
// ---------------------------------------Tuck in Array--------------------------------------------------

// Create a function that takes two arrays and insert the second array in the middle of the first array.
// Examples
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
// ---------------------------------------------------------------------------------->

// function tuckarr(arr1, arr2) {
//     return [arr1[0], ...arr2, arr1[1]];
// }
// console.log(tuckarr([[1, 2], [5, 6]], [[3, 4]]));

// -------------------------------------------------------------------------------------<
// -------------------------------------------number split---------------------------------------

// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
// Examples
// numberSplit(4) ➞ [2, 2]
// numberSplit(10) ➞ [5, 5]
// numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]
// ---------------------------------------------------------------------------------->

// function arrsplit(num) {
//     let half = Math.floor(num / 2)
//     return [half, num - half];
// }
// console.log(arrsplit(11));

// ----------------------------------------------------------------------------------<
// --------------------------Filter out Strings from an Array---------------------------------------

// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
// ---------------------------------------------------------------------------------->

// function filterArray(arr) {
//    return arr.filter(item => typeof item === 'number')
// }
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

// ----------------------------------------------------------------------------------<
// ------------------------------------Sort by String Length------------------------------
// Create a function that returns an array of strings sorted by length in ascending order.
// Examples
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
// sortByLength([]) ➞ []
// ---------------------------------------------------------------------------------->

// function sortlen(arr) {
//     return arr.sort((a, b) => a.length - b.length);
// }
// console.log(sortlen(["a", "ccc", "dddd", "bb"]));

// ----------------------------------------------------------------------------------<
// ------------------------------------sum of cube---------------------------------------
// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples
// sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([3, 4, 5]) ➞ 216
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0
// ---------------------------------------------------------------------------------->

// function sumofcube(arr) {
//     return arr.reduce((sum, num) => sum + Math.pow(num, 3), 0);
// }
// console.log(sumofcube([1,5,9]));

// ----------------------------------------------------------------------------------<
//-------------------------------------Even All the Way---------------------------------------
// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.
// Example
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]
// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]
// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []
//-------------------------------------------------------------------------------------------->
// function evenall(arr) {
    
//    return arr.filter((item,index) => item % 2 === 0 && index % 2 === 0);
// }
// console.log(evenall([1, 3, 2, 6, 4, 8]));
// --------------------------------------------------------------------------------------------<
//----------------------------short an array by string length-----------------------------------
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.
// Examples
// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]
// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// sortByLength(["Turing", "Einstein", "Jung"])
// ➞ ["Jung", "Turing", "Einstein"]
// ----------------------------------------------------------------------------------------------->
// function shortbylen(arr) {
//     return arr.sort((a, b) => a.length - b.length);
// }
// console.log(shortbylen(["Google", "Apple", "Microsoft"]));
// ------------------------------------------------------------------------------------------------<
//---------------------------Is the Average of All Elements a Whole Number?-------------------------
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
// Examples
// isAvgWhole([1, 3]) ➞ true
// isAvgWhole([1, 2, 3, 4]) ➞ false
// isAvgWhole([1, 5, 6]) ➞ true
// isAvgWhole([1, 1, 1]) ➞ true
// isAvgWhole([9, 2, 2, 5]) ➞ false
//------------------------------------------------------------------------------------------>

// function isAvgWhole(arr) {
//     const sum = arr.reduce((total, num) => total + num, 0);
//     const average = sum / arr.length;
//     return average % 1 === 0;
// }

//-------------------------------------------------------------------------------------------<