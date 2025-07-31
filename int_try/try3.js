// var arr = ["abc", 1, "def", 1, "hello", 10, "jello", 6, "mello"];
// var sum = 0;
// arr.forEach(function (elem) {
//     if (typeof elem === 'number') {
//         sum = sum + elem;
//     }
// })
// console.log(sum);
// --------------------------------------------------------------------------------
// var arr = [
//   { name: "dhruv", gender: "male" },
//   { name: "dhruvi", gender: "female" },
//   { name: "dhruvika", gender: "female" },
//   { name: "dhruva", gender: "male" },
//   { name: "dhruvashi", gender: "female" },
// ];
// var count = 0;
// arr.forEach(function (elem) {
//   if (elem.gender !== "male") {
//     count++;
//   }
// });
// for (var i = 1; i <= count; i++) {
//   for (var j = 0; j < arr.length; j++) {
//     if (arr[j].gender !== "male") {
//       arr.splice(j, 1);
//     }
//   }
// }
// console.log(arr);
// -------------------------------------------------------------------------
// function mapLetters(word) {
//   const result = {};
//   let index = 0;

//   for (let letter of word) {
//     if (!result[letter]) {
//       result[letter] = [];
//     }
//     result[letter].push(index);
//     index++;
//   }

//   return result;
// }
// console.log(mapLetters("dodo"));
// -------------------------------------------------------------------------------------
// console.log("hello");
// let savings = 0;
// let target = 1000;
// while (savings < target) {
//   savings += 100;
//   console.log(`current savings: ${savings}`);
// }
// console.log("goal reached");
// ----------------------------------------------------------------------------------------
// const books = ["english", "hindi", "maths", "science", "gujarati", "social science"];
// const tbooks = "gujarati";
// for (let i = 0; i < books.length; i++) {
//   if (tbooks == books[i]) {
//     console.log(`your book is : ${books[i]}`);
//     break;
//   }
// }
// --------------------------------------------------------------------------------------------
// const fruits = ["apple", "banana", "cherry"];
// for (let index in fruits) {
//   console.log(fruits[index]);
// }
// const fruits1 = ["apple", "banana", "cherry"];
// for (let index in fruits1) {
//   console.log(index);
// }
// --------------------------------------------------------------------------------------------
// for (i = 0; i <= 10; i++){
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(`odd no are : ${i}`);
// }
// ----------------------------------------------------------------------------------------------
try {
  let a = 10;
  console.log(a);

  const b = 10;
  console.log(++b);
} catch (error) {
  console.log("are you fool:", error);
} finally {
  console.log("code exicuted");
}