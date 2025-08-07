// -------------------------------What's Hiding Amongst the Crowd?--------------------------------
// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
// The wanted word is in lowercase
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// Examples
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
//------------------------------------------------------------------------------------------->

// function detectword(str) {
//     return [...str].filter(char => char === char.toLowerCase()).join('');
// }
// console.log(detectword("UcUNFYGaFYFYGtNUH"));

//--------------------------------------------------------------------------------------------<
//-----------------------------------find the amount of potato----------------------------------
// Create a function to return the amount of potatoes there are in a string.
// Examples
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1
//--------------------------------------------------------------------------------->

// let potatocount = 0;
// function potato(str) {
//     return str.split("potato").length-1;
// }
// console.log(potato("potatoappleapplepotatoapple"));

//---------------------------------------------------------------------------------<
//---------------------------Count Instances of a Character in a String----------------------------------
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Examples
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4
//--------------------------------------------------------------------------------->

// function charcount(char,str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++){
//         if (str[i] === char) {
//             count++;

//         }
//     }
//     return count++;
// }
// console.log(charcount("c", "Chamber of secrets"));

//---------------------------------------------------------------------------------<
//-----------------------------------------Error Messages----------------------------------------------
// Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.
// The input error will be 1 to 5:
// 1 >> "Check the fan: e1"
// 2 >> "Emergency stop: e2"
// 3 >> "Pump Error: e3"
// 4 >> "c: e4"
// 5 >> "Temperature Sensor Error: e5"
// For any other value, return 101 (you can use an if statement here).
// Examples
// error(1) ➞ "Check the fan: e1"
// error(2) ➞ "Emergency stop: e2"
// error(3) ➞ "Pump Error: e3"
//--------------------------------------------------------------------------------->

// function error(num) {
//   const errors = {
//     1: "Check the fan: e1",
//     2: "Emergency stop: e2",
//     3: "Pump Error: e3",
//     4: "c: e4",
//     5: "Temperature Sensor Error: e5"
//     };
//     return errors[num] || "101";
// }
// console.log(error(3));

//---------------------------------------------------------------------------------<
//--------------------------Incorrect Import Statement----------------------------------------------
// When importing objects from a module in Python, the syntax usually is as follows:
// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.
// Examples
// fixImport("import object from module_name") ➞ "from module_name import object"
// fixImport("import randint from random") ➞ "from random import randint"
// fixImport("import pi from math") ➞ "from math import pi"
//--------------------------------------------------------------------------------->

// function fiximport(str) {
//   const part = str.split(' ')
//   return `${part[2]} ${part[3]} ${part[0]} ${part[1]}`
// }
// console.log(fiximport("import object from module_name"));
// console.log(fiximport("import randint from random"));
// console.log(fiximport("import pi from math"));

//---------------------------------------------------------------------------------<
//-------------------------------------Repeating Letters----------------------------------------------
// Create a function that takes a string and returns a string in which each character is repeated once.
// Examples
// doubleChar("String") ➞ "SSttrriinngg"
// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") ➞ "11223344!!__  "
//--------------------------------------------------------------------------------->

// function doublechar(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result = result + str[i] + str[i];
//   }
//   return result;
// }
// console.log(doublechar("String"));

//---------------------------------------------------------------------------------<
//------------------------------------Emotify the Sentence----------------------------------------------
// Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.
// word	emoticon
// smile =	:D
// grin =	:)
// sad =	:(
// mad =	:P
// Examples
// emotify("Make me smile") ➞ "Make me :D"
// emotify("Make me grin") ➞ "Make me :)"
// emotify("Make me sad") ➞ "Make me :("
//--------------------------------------------------------------------------------->

// function emotify(sentence) {
//   const emote = {
//     smile: ":D",
//     grin: ":)",
//     sad: ":(",
//     mad: ":P",
//   };
//   let word = sentence.split(' ');
//   let mood = word[word.length - 1];
//   word[word.length - 1] = emote[mood];
//   return word.join(' ');
// }
// console.log(emotify("Make me sad"));

//---------------------------------------------------------------------------------<
//------------------------------------how many vowels----------------------------------------------
// Create a function that takes a string and returns the number (count) of vowels contained within it.
// Examples
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1
// countVowels("Prediction") ➞ 4
//--------------------------------------------------------------------------------->

// function countvowels(str) {
//   let arr = str.toLowerCase().split("");
//   let vowels = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       vowels++;
//     }
//   }
//   return vowels;
// }
// console.log(countvowels("Prediction"));

//--------------------------------------------------OR---ALTERNATE---------------------------
// function countvowels(str) {
//   let vowels = "aeiou";
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

//---------------------------------------------------------------------------------<
//-------------------------Recursion to Repeat a String n Number of Times---------------------------------
// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.
// String.prototype.repeat() is not allowed
// Example
// repetition("ab", 3) ➞ "ababab"
// repetition("kiwi", 1) ➞ "kiwi"
// repetition("cherry", 2) ➞ "cherrycherry"
//--------------------------------------------------------------------------------->

// function repetition(str, val) {
//     if (val <= 0) return "";
//     return str + repetition(str, val - 1);
// }

// console.log(repetition("hello", 2));

//---------------------------------------------------------------------------------<
//----------------------------------------Find the Bomb----------------------------------------------
// Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".
// Examples
// bomb("There is a bomb.") ➞ "Duck!!!"
// bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"
// bomb("This goes boom!!!") ➞ "There is no bomb, relax."
//--------------------------------------------------------------------------------->

// function bomb(str) {
//     let word = str.toLowerCase();
//     if (word.includes('bomb')) {
//         return 'Duck!!!'
//     }
//     else {
//         return 'There is no bomb, relax.'
//     }
// }
// console.log(bomb("Hey, did you think there is a bOmB?"));

//---------------------------------------------------------------------------------<
//--------------------------Remove Every Vowel from a String----------------------------------------------
// Create a function that takes a string and returns a new string with all vowels removed.
// Examples
// removeVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."
// removeVowels("We're gonna build a wall!")
// ➞ "W'r gnn bld  wll!"
// removeVowels("Happy Thanksgiving to all--even the haters and losers!")
// ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
//--------------------------------------------------------------------------------->

// function removevowels(str) {
//    return str.split('').filter(char => !"aeiouAEIOU".includes(char)).join('')
// }
// console.log(removevowels("I have never seen a thin person drinking Diet Coke."));

//---------------------------------------------------------------------------------<
//--------------------------Return the Index of the First Vowel---------------------------------------
// Create a function that returns the index of the first vowel in a string.
// Examples
// firstVowel("apple") ➞ 0
// firstVowel("hello") ➞ 1
// firstVowel("STRAWBERRY") ➞ 3
// firstVowel("pInEaPPLe") ➞ 1
//--------------------------------------------------------------------------------->

// function firstvowel(str) {
//     const vowels = 'aeiouAEIOU';
//     for (i = 0; i < str.length; i++){
//         if (vowels.includes(str[i])) {
//             return i;
//         }
//     }
//     return -1
// }
// console.log(firstvowel("STRAWBERRY"));

//---------------------------------------------------------------------------------<
//-------------------------------------Is it True?---------------------------------------------------
// In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.
// Examples
// isTrue("2=2") ➞ true
// isTrue("8<7") ➞ false
// isTrue("5=13") ➞ false
// isTrue("15>4") ➞ true
//--------------------------------------------------------------------------------->

// function istrue(str) {
//     let expression = str.replace('=', '==');
//     return Function(' return (' + expression + ')')();
//   }
// console.log(istrue("15>4"));

//---------------------------------------------------------------------------------<
//-------------------------------------Regex Series: Even Number?---------------------------------------
// Write a regular expression that matches only an even number. Numbers will be presented as strings.
// Examples
// "2341" ➞ false
// "132" ➞ true
// "29" ➞ false
// "5578" ➞ true
//--------------------------------------------------------------------------------->

// function regex(num) {
//     return /^[0-9]*[02468]$/.test(num)
// }
// console.log(regex("298"));

//---------------------------------------------------------------------------------<
//-------------------------------------say hi say bye---------------------------------------
// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
// Examples
// sayHelloBye("alon", 1) ➞ "Hello Alon"
// sayHelloBye("Tomi", 0) ➞ "Bye Tomi"
// sayHelloBye("jose", 0) ➞ "Bye Jose"
//--------------------------------------------------------------------------------->

// function sayhellobye(str, num) {
//     if (num === 1) {
//        let sent = str.charAt(0).toUpperCase() + str.slice(1, str.length)
//         return 'Hello'+' '+ sent
//     }
//     else if (num === 0) {
//        let sent = str.charAt(0).toUpperCase() + str.slice(1, str.length)
//         return 'Bye'+' '+ sent
//     }
//     else {
//         return ('Value should be either 1 or 0');
//     }
// }
// console.log(sayhellobye('dhruv',1));

//---------------------------------------------------------------------------------<

// --------------------------------------------------------------------------------------------------
// function asciiCapitalize(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         let ascii = char.charCodeAt(0);

//         if (/[a-zA-Z]/.test(char)) {
//             if (ascii % 2 === 0) {
//                 result += char.toUpperCase();
//             } else {
//                 result += char.toLowerCase();
//             }
//         } else {
//             result += char; // keep non-letter characters as they are
//         }
//     }

//     return result;
// }

// // Test cases
// console.log(asciiCapitalize("to be or not to be!"));         // ➞ "To Be oR NoT To Be!"
// console.log(asciiCapitalize("THE LITTLE MERMAID"));          // ➞ "THe LiTTLe meRmaiD"
// console.log(asciiCapitalize("Oh what a beautiful morning.")); // ➞ "oH wHaT a BeauTiFuL moRNiNg."

//-------------------------------------------------------------------------------------------------------
// Hashes and Pluses------------------------------------------------------------------------------------
////////////////////
// Create a function that returns the number of hashes and pluses in a string.
// Examples
// hashPlusCount("###+") ➞ [3, 1]
// hashPlusCount("##+++#") ➞ [3, 3]
// hashPlusCount("#+++#+#++#") ➞ [4, 6]
// hashPlusCount("") ➞ [0, 0]
// ----------------------------------------------------------------------------------------------------->

// function hashpluscount(str) {
//     let hashcount = 0;
//     let pluscount = 0;
//     for (let i = 0; i < str.length; i++){
//         if (str[i] === '#') {
//             hashcount++
//         }
//         else if (str[i] === '+') {
//             pluscount++
//         }
//     }
//     return [hashcount , pluscount];
// }
// console.log(hashpluscount("#+++#+#++#"));

//------------------------------------------------------------------------------------------------------<
//secet society------------------------------------------------------------------------------------------
///////////////
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
// ----------------------------------------------------------------------------------------------------->

// function societyname(arr) {
//     return arr.map(value => value[0]).sort().join('')
// }
// console.log(societyname(["Harry", "Newt", "Luna", "Cho"]));

//------------------------------------------------------------------------------------------------------<
//reverce the case---------------------------------------------------------------------------------------
//////////////////
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// Examples
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
// reverseCase("MANY THANKS") ➞ "many thanks"
// reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"
// ----------------------------------------------------------------------------------------------------->

// function reversecase(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if (char === char.toUpperCase()) {
//             result = result + char.toLowerCase();
//         } else {
//             result = result + char.toUpperCase();
//         }
//     }

//     return result;
// }
// console.log(reversecase('Happy Birthday'));

//------------------------------------------------------------------------------------------------------<