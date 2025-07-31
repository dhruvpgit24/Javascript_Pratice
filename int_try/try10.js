// let string = 'lilif';

// function findvowels(str){
//     let vowels = 'aeiouAEIOU'
//     for (let i = 0; i < str.length; i++) {
//         if(vowels.includes(str[i])){
//             return str[i]
//         }
//     }
// }
// console.log(findvowels(string));
// ----------------------------------------------------------------------
// let string = 'hello i am dp'
// let words = string.split(" ")

// let longest = '';

// for (const word of words) {
//     if(word.length > longest.length){
//         longest = word;
//     }
// }

// console.log(longest);
// ----------------------------------------------------------------------
const person = {
  name: "Dhruv",
  age: 22,
  skills: ["HTML", "CSS", "JavaScript"],
};
const jsonText = JSON.stringify(person, null, 2);

console.log("JSON text:", jsonText);

// if want to download
// const blob = new Blob([jsonText], { type: "application/json" });

//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "person.json";
//     link.click();
// ----------------------------------------------------------------------
