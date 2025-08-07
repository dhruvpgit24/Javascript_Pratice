//-----------------------reverce a word in string--------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////
// Given an input string, reverse the string word by word, the first word will be the last, and so on.
// Examples
// reverseWords(" the sky is blue") ➞ "blue is sky the"
// reverseWords("hello   world!  ") ➞ "world! hello"
// reverseWords("a good example") ➞ "example good a"
// -----------------------------------------------------------------------------------------------

// function reverseWords(str) {
//     return str.trim().split(/\s+/).reverse().join(" ");
//   }
//   console.log(reverseWords(" the sky is blue"));

// -----------------------------------------------------------------------------------------------
//-----------------------Currying Functions--------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////
// Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.
// Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
// The returned array should consist of each of the elements from the first array multiplied by the integer.
// Examples
// multiply([1, 2, 3])(2) ➞ [2, 4, 6]
// multiply([4, 6, 5])(10) ➞ [40, 60, 50]
// multiply([1, 2, 3])(0) ➞ [0, 0, 0]
// -----------------------------------------------------------------------------------------------

// function multiply(arr) {
//   return function (num) {
//     return arr.map(Element => Element * num);
//   };
// }
// console.log(multiply([1,2,3])(2));

// -----------------------------------------------------------------------------------------------
//-----------------------------Remove Duplicates from an Array--------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Examples
// removeDups([1, 0, 1, 0]) ➞ [1, 0]
// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
// -----------------------------------------------------------------------------------------------

// function removedups(arr) {
//   return arr.filter((item ,index) => arr.indexOf(item) === index)
// }
// console.log(removedups([1,2,3,2,1]));

// -----------------------------------------------------------------------------------------------
//---------------------------------Find the Missing Number----------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Examples
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
// -----------------------------------------------------------------------------------------------

// function missnum(arr) {
//   let count = 55
//   let acctualcount = arr.reduce((sum, num) => sum + num, 0)
//   return count - acctualcount
// }
// console.log(missnum([1,2,3,4,6,7,5,9,10]));

// -----------------------------------------------------------------------------------------------
//---------------------------------Mubashir's Mystery Challenge----------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////
// Mubashir has written a mysterious function that takes two numbers a and b and returns multiplication?. Solve the riddle of what Mubashir's function is by having a look at some of the examples below.
// Examples
// mubashirFunction(0, 1) ➞ 0
// mubashirFunction(1, 2) ➞ 2
// mubashirFunction(10, 10) ➞ 1
// -----------------------------------------------------------------------------------------------

// function mubashirFunction(num1, num2) {
//   let mul = num1 * num2
//   return mul % 9
// }
// console.log(mubashirFunction(10,10));

// -----------------------------------------------------------------------------------------------
//---------------------------------Check for Anagrams----------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////
// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.
// Examples
// isAnagram("cristian", "Cristina") ➞ true
// isAnagram("Dave Barry", "Ray Adverb") ➞ true
// isAnagram("Nope", "Note") ➞ false
// -----------------------------------------------------------------------------------------------

// function isanagram(str1, str2) {
//   let string1 = str1.toLowerCase().split('').sort().join('')
//   let string2 = str2.toLowerCase().split('').sort().join('')
//   if (string1 === string2) {
//     return true
//   }
//   else {
//     return false
//   }
// }
// console.log(isanagram("Dave Barry", "Ray Adverb"));

// -----------------------------------------------------------------------------------------------
//---------------------------------The Fizz Buzz Test----------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////
// Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.
// Exampl
// fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
// fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
// -----------------------------------------------------------------------------------------------

// function fizzbuzz(num) {
//   let arr = [];
//   for (let i = 0; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//        arr.push("fizzbuzz");
//     } else if (i % 3 === 0) {
//        arr.push("fizz");
//     } else if (i % 5 === 0) {
//        arr.push("buzz");
//     } else {
//        arr.push(i);
//     }
//   }
//   return arr;
// }
// console.table(fizzbuzz(15));

// -----------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
// function runningAthlete(actions, track) {
//   let result = track.split(""); // Convert track string to an array for easy manipulation

//   actions.forEach((action, index) => {
//     if (result[index] === '_') { // Only change the ground ('_')
//       if (action === "run") {
//         result[index] = "_"; // Keep the ground as it is for running
//       } else if (action === "jump") {
//         result[index] = "x"; // Change the ground to 'x' for jumping
//       }
//     }
//   });

//   return result.join(""); // Convert the array back to a string and return
// }

// console.log(runningAthlete(["jump", "jump", "jump", "jump", "run"], "_|_|_"));
//---------------------------------numbers to objects----------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////
// Mubashir needs your help in a simple task.
// Given an array of numbers arr:
// Create an object for each given number.
// The object key will be the number converted to a string.
// The value will be the corresponding character code converted to a string (check ASCII table).
// Return an array of the resulting objects.
// Examples
// numObj([118, 117, 120]) ➞ [{'118':'v'}, {'117':'u'}, {'120':'x'}]
// numObj([101, 121, 110, 113, 103]) ➞ [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]
// numObj([118, 103, 110]) ➞ [{"118":"v"}, {"103":"g"}, {"110":"n"}]
// -----------------------------------------------------------------------------------------------

// function numobj(arr) {
//   const result = [];
//   arr.forEach((num) => {
//     const obj = {};
//     obj[num.toString()] = String.fromCharCode(num);
//     result.push(obj);
//   });
//   return result;
// }
// console.log(numobj([118, 117, 120]));

// -----------------------------------------------------------------------------------------------
//---------------------------------Crowded Carriage Capacity----------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////
// A train has a maximum capacity of n passengers overall, which means each carriage's capacity will share an equal proportion of the maximum capacity.
// Create a function which returns the index of the first carriage which holds 50% or less of its maximum capacity. If no such carriage exists, return -1.
// Worked Example
// findASeat(200, [35, 23, 18, 10, 40]) ➞ 2
// // There are 5 carriages which each have a maximum capacity of 40 (200 / 5 = 40).
// // Index 0's carriage is too full (35 is 87.5% of the maximum).
// // Index 1's carriage is too full (23 is 57.5% of the maximum).
// // Index 2's carriage is good enough (18 is 45% of the maximum).
// // Return 2.
// Examples
// findASeat(20, [3, 5, 4, 2]) ➞ 3
// findASeat(1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60]) ➞ 0
// findASeat(200, [35, 23, 40, 21, 38]) ➞ -1
// -----------------------------------------------------------------------------------------------

// function findaseat(p, arr) {
//   let capacity = p / arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= capacity / 2) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findaseat(20, [3, 5, 4, 2]));

// -----------------------------------------------------------------------------------------------
//---------------------------------How Good is Your Name?----------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////
// Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.
// const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
// "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
// "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
// "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
// Return your result as per the following rules:
// score <= 60:   "NOT TOO GOOD"
// 61 <= score <= 300:  "PRETTY GOOD"
// 301 <= score <= 599:  "VERY GOOD"
// score >= 600:  "THE BEST"
// Examples
// nameScore("MUBASHIR") ➞ "THE BEST"
// nameScore("YOU") ➞ "VERY GOOD"
// nameScore("MATT") ➞ "THE BEST"
// nameScore("PUBG") ➞ "NOT TOO GOOD"
// -----------------------------------------------------------------------------------------------

// function namescore(str) {
//   const scores = {
//     A: 100,
//     B: 14,
//     C: 9,
//     D: 28,
//     E: 145,
//     F: 12,
//     G: 3,
//     H: 10,
//     I: 200,
//     J: 100,
//     K: 114,
//     L: 100,
//     M: 25,
//     N: 450,
//     O: 80,
//     P: 2,
//     Q: 12,
//     R: 400,
//     S: 113,
//     T: 405,
//     U: 11,
//     V: 10,
//     W: 10,
//     X: 3,
//     Y: 210,
//     Z: 23,
//   };

//   let letter = str.split("");
//   let result = 0;

//   for (let i = 0; i < letter.length; i++) {
//     result += scores[letter[i].toUpperCase()];
//   }

//   let finalscore = result;

//   if (finalscore <= 60) {
//     console.log("NOT TOO GOOD");
//   }
//   else if (finalscore >= 61 && finalscore <= 300) {
//     console.log("PRETTY GOOD");
//   }
//   else if (finalscore >= 301 && finalscore <= 599) {
//     console.log("VERY GOOD");
//   }
//   else {
//     console.log("THE BEST");
//   }

//   return finalscore;
// }

// console.log(namescore("dhruv"));

// -----------------------------------------------------------------------------------------------
//---------------------------------Mumbling Challenge----------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////
// Create a function that takes a string str and modifies the given string as per the below examples:
// Examples
// mumbling("MubAshIr") ➞ "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr"
// mumbling("maTT") ➞ "M-Aa-Ttt-Tttt"
// mumbling("EdaBit") ➞ "E-Dd-Aaa-Bbbb-Iiiii-Tttttt"
// -----------------------------------------------------------------------------------------------

// function mumbling(word) {
//   let result = []
//   let letter = word.split("")

//   for (let i = 0; i < letter.length; i++) {
//     let repeated = letter[i].toUpperCase() + letter[i].toLowerCase().repeat(i);
//     result.push(repeated);
//   }
//   return result.join("-");
// }
// console.log(mumbling("maTT"));

// -----------------------------------------------------------------------------------------------
//---------------------------------Matrix Subtraction----------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////
// Two matrices must have an equal number of rows and columns to be subtracted. In which case, the subtracted of two matrices A and B will be a matrix which has the same number of rows and columns as A and B.
// The result of the subtraction of A and B, denoted A - B is computed by subtracting corresponding elements of A and B.
// Create a function that takes 2 x 2D array (matrix A, matrixB) as an argument and returns a 2D array (matrix C). C = A-B.
// Examples
// sub([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ], [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]) ➞ [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]
// -----------------------------------------------------------------------------------------------

// function sub(matrixA, matrixB) {
//   let result = [];
  
//   for (let i = 0; i < matrixA.length; i++) {
//     let row = [];
//     for (let j = 0; j < matrixA[i].length; j++) {
//       row.push(matrixA[i][j] - matrixB[i][j]);
//     }
//     result.push(row);
//   }

//   return result;
// }
// console.log(sub(
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ],
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]
// ));

// -----------------------------------------------------------------------------------------------
// Opposite House 🏘️
// Mubashir was walking through a straight street with exactly n identical houses on both sides. House numbers in the street look like this:

// 1 |   | 6

// 3 |   | 4

// 5 |   | 2
// He noticed that Even numbered houses increase on the right while Odd numbered houses decrease on the left.

// Create a function that takes a house number house and length of the street n and returns the house number on the opposite side.

// Examples
// oppositeHouse(1, 3) ➞ 6

// oppositeHouse(2, 3) ➞ 5

// oppositeHouse(3, 5) ➞ 8
// ------------------------------------------------------------------------------------------------
// function oppositeHouse(house, n) {
//   return (2 * n + 1) - house;
// }
// console.log(oppositeHouse(1, 3)); // ➞ 6
// --------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------
// Find the Unique Letters
// Create a function that takes a string and returns an array of the letters that occur only once.
// Examples
// findLetters("monopoly") ➞ ["m", "n", "p", "l", "y"]
// findLetters("balloon") ➞ ["b", "a", "n"]
// findLetters("analysis") ➞ ["n", "l", "y", "i"]
// Notes
// The final array should not include letters that appear more than once in the string.
// Return the letters in the sequence they were originally in, do not sort them.
// All letters will be in lowercase.
//-------------------------------------------------------------------------------------------------->
// function findLetters(str) {
//     let count = {};
//     let result = [];

//     // Count occurrences of each letter
//     for (let char of str) {
//         count[char] = (count[char] || 0) + 1;
//     }

//     // Push letters that occur only once in the original order
//     for (let char of str) {
//         if (count[char] === 1) {
//             result.push(char);
//         }
//     }

//     return result;
// }

// console.log(findLetters("monopoly")); 
let str = "hellosirji";
for (const char of str) {
    console.log(char);
}
