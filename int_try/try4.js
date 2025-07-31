// --------------------------------------------------------------------------------------------------------
//                                 --------------------------------------------
//                                              Code with Technyks
//                                 --------------------------------------------
// --------------------------------------------------------------------------------------------------------
// PRATICE PROBLEM 1

// let num = 0;
// if (num > 0) {
//     console.log("positve");
// }
// else if (num < 0) {
//     console.log("negative");
// }
// else {
//     console.log("its a zero");
// }
// -------------------------------------------------------------------------------
// PRATICE PROBLEM 2

// for (let a = 1; a <= 10; a++){
//     console.log(`printing the number from 1 to 10: ${a}`);
// }
// -------------------------------------------------------------------------------
// PRATICE PROBLEM 3

// function addnums(num1, num2) {
//     return num1 + num2
// }
// console.log(addnums(8, 10));

// const adnums = a => b =>  a + b;

// console.log(adnums(80)(3));
// -------------------------------------------------------------------------------
// PRATICE PROBLEM 4

// const student = [
//     { name: "dhruv", grade: "a" },
//     { name: "dhruva", grade: "b" },
//     { name: "dhruvesh", grade: "a" },
//     { name: "dhruvmil", grade: "b" },
// ]
// const gstudent = student.filter(student => student.grade === "a")
// console.log(gstudent);
// const lstudent = student.filter(student => student.grade === "b")
// console.log(lstudent);
// -------------------------------------------------------------------------------
// PRATICE PROBLEM 5

// const person = {
//     fname: "dhruv",
//     age: "22",
//     address: "13 dinesh bhuvan"
// };
// const { fname, address } = person;
// console.log(fname);
// -------------------------------------------------------------------------------
// PRATICE PROBLEM 6

// const numbers = [1, 2, 3];
// const double = numbers.map((numbers) => numbers * 2);
// console.log(double);
// -------------------------------------------------------------------------------
// PRATICE PROBLEM 7

// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('asynk task is complete');
//         resolve()
//     }, 1000)
// })
// prom.then((answer) => {
//     console.log('promis consumed');
// })


// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ name: 'dhruv', age: 22, email: 'dp18gmail.com' })
//     }, 1000)
// })
// prom.then((answer) => {
//     console.log(answer.name);
// })


let prom = new Promise((resolve , reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({name: 'dhruvpatel', age: 22, email: 'dpa18gmail.com'})
        } else {
            reject('error i am error')
        }
    },1000)
})
// prom.then((user) => {
//     console.log(user);
//     return user.name
// }).then((name) => {
//     console.log(name);
// })
//     .catch((error) => {
//     console.log(error);
// })
Promise.all([
    prom.then(user => {
        console.log('Full User:', user);
        return user;
    }),
    prom.then(user => {
        console.log('Just Name:', user.name);
        return user.name;
    })
]).catch(err => {
    console.log('Error:', err);
});