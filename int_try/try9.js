// console.log('dhruv' > 9);
// console.log('dhruv' < 9);
// console.log('8' > 12);
// ----------------------------------------------------------------------
// // array destructuring
// [a,b] = [1,2,3,4]
// console.log(a,b);
// ----------------------------------------------------------------------
// let a = 100;
// const b = ++a + a++;
// console.log(b);
// ----------------------------------------------------------------------
// let name = 'dhruv';
// name[1] = 'patel';
// console.log(name);
// ----------------------------------------------------------------------
// let sent = 'hello my name is dhruv'
// let split = sent.split(' ')
// function cap() {
//     for (let i = 0; i < split.length; i++) {
//       split[i] = split[i][0].toUpperCase() + split[i].slice(1);
//     }
//     return split.join(' ');
//   }
// let finalsent = sent;
// console.log(cap(finalsent));
// ----------------------------------------------------------------------
// let arr = [[1,2,3,4],[5,6,7,8]];
// let arr2 = [,,,,]
// console.log(arr.length , arr2.length);
// ----------------------------------------------------------------------
// // 1️⃣ Array Literal (most common)
// let arr1 = [1, 2, 3];
// console.log("Array Literal:", arr1); // [1, 2, 3]

// // 2️⃣ Using new Array() constructor
// let arr2 = new Array(3); // creates an array with 3 empty slots
// console.log("new Array(3):", arr2); // [ <3 empty items> ]

// let arr3 = new Array(1, 2, 3); // behaves like literal
// console.log("new Array(1,2,3):", arr3); // [1, 2, 3]

// // 3️⃣ Using Array.of()
// let arr4 = Array.of(3); // ensures [3], not 3 empty slots
// console.log("Array.of(3):", arr4); // [3]

// // 4️⃣ Using Array.from()
// let str = "hello";
// let arr5 = Array.from(str); // converts string to array of chars
// console.log("Array.from('hello'):", arr5); // ['h', 'e', 'l', 'l', 'o']

// // 5️⃣ Using Spread Operator
// let arr6 = [...str]; // spreads each char into an array
// console.log("Spread [...'hello']:", arr6); // ['h', 'e', 'l', 'l', 'o']

// // 6️⃣ Using fill()
// let arr7 = new Array(5).fill(0); // fill 5 spots with 0
// console.log("new Array(5).fill(0):", arr7); // [0, 0, 0, 0, 0]

// // 7️⃣ Using loop + push()
// let arr8 = [];
// for (let i = 0; i < 5; i++) {
//   arr8.push(i); // dynamically populate
// }
// console.log("Built with loop:", arr8); // [0, 1, 2, 3, 4]
// ----------------------------------------------------------------------
// let arr = [8,6,4,2,9,10];

// let  = '';

// function assending(array){
//     for (let i = 0; i < array.length; i++) {
//         if(array[0] > array[i])
//     }
// }