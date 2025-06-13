function createcounter(n){
    let count = n;
    return function(){
        return n++
    };
}
const counter = createcounter(10);
console.log(counter());
console.log(counter());
console.log(counter());