// function filter(arr,fn){
//     let newarr = []
//     for(let i = 0; i < arr.length; i++){
//         newarr[i]= fn(arr[i],i)
//     }
//     return newarr.push(arr[i])
// }
// function greater(n){
//     return n > 10
// }
// console.log(filter([5,10,20,30,40],greater));
function filter(arr, fn) {
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newarr.push(arr[i])
        }
    }
    return newarr
}

function greater(n) {
    return n > 10
}
function index(n,i){
    return i === 0
}
function plusone(n){
    return n + 1
}

console.log(filter([5, 10, 20, 30, 40], greater));
console.log(filter([5, 10, 20, 30, 40], index));
console.log(filter([5, 10, 20, 30, 40], plusone));