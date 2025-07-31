// var a = 1000;
// {
//     var a = 2000;
// }
// let b = a;
// {
//     let b = 3000;
// }
// console.log(b);
// --------------------------------------------------------
// function abc(a,b,c){}
// function xyz(a,b,c=0){}
// function pqr(a=0,b,c){}
// console.log(abc.length,xyz.length,pqr.length);
// --------------------------------------------------------
// const arr1 = []
// const arr = []
// console.log(arr1 == arr);
// console.log(arr1 === arr);

// learn refrence and memory

// --------------------------------------------------------
// if ([]) {
//     console.log('hello');
// } else {
//     console.log('hey');
// }
// --------------------------------------------------------
// console.log('1'+2+2);
// console.log(2+2+'1'+2+2);
// --------------------------------------------------------
// function subtract(a, b) {
//   if (b !== undefined) {
//     return a - b;
//   } else {
//     return function (c) {
//       return a - c;
//     };
//   }
// }
// console.log(subtract(8)(3));
// console.log(subtract(8, 3));
// --------------------------------------------------------
// const arr = ['dhruv', 'ruv'];

// const result = arr[1]
//   .split('')
//   .every(char => arr[0].includes(char));

// console.log(result);
// &&
let result = true;
for (const char of arr[1]) {
  if (!arr[0].includes(char)) {
    result = false;
    break;
  }
}
console.log(result);
