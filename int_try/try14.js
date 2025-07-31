// let arr = [1,18,9,81,98,124]

// let result = arr.sort((a,b)=> a - b);
// console.log(result);
// ------------------------------------------------------------------------
// let arr = [1,18,9,81,98,124]
// let result = arr.map((num)=>{
//     return num > 100
// })
// console.log(result);
// ------------------------------------------------------------------------
// let arr = [5,8,9,47,8,3,15]
// let r= arr.splice(0,2)
// console.log(r);
// console.log(arr);

// // &&

// let arr1 = [5,8,9,47,8,3,15]
// let r1= arr.slice(0,5)
// console.log(r1);
// console.log(arr1);
// ------------------------------------------------------------------------
// let arr = [5,89,6,1,8,9]
// while (arr.length){
//     arr.pop()
// }
// console.log(arr);

// ||

// let arr = [5,89,6,1,8,9]
// arr.length = 0
// console.log(arr);
// ------------------------------------------------------------------------
// let arr = new Array(1, 2, 3);  // [1, 2, 3]
// let arr2 = new Array(5);       // [ <5 empty items> ]

//  &&

// let arr = Array.of(5);      // [5]
// let arr2 = Array.of(1, 2);  // [1, 2] or .from to convert from str
// ------------------------------------------------------------------------
// let arr = [2,5,8,5,2,8,9,7,1,3]
// let r = [...new Set(arr)]
// console.log(r);
// ------------------------------------------------------------------------
// function abc(a,b,c){
    
// }
// function pqr(a=0,b,c){

// }
// console.log(abc.length,pqr.length);
// ------------------------------------------------------------------------
// console.log([] === []);
// console.log([] == []);
// ------------------------------------------------------------------------
// let str = 'hello i am dhruv'
// let b = str.split(' ').map((elem)=>elem[0].toUpperCase() + elem.slice(1)).join('\n')
// console.log(b);
// ------------------------------------------------------------------------
// console.log(typeof NaN);
// console.log(typeof []);
// console.log(typeof {});
// console.log(NaN === NaN);
// console.log(NaN == NaN);
// ------------------------------------------------------------------------
var a= 10;
console.log(++a);
console.log(a++);
console.log(a);