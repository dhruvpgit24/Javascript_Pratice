let str = "dhruv patel";

let result = {};

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if(char === ' ') continue;
  if (result.hasOwnProperty(char)) {
    result[char]++;
  } else {
    result[char] = 1;
  }
}

console.log(result);