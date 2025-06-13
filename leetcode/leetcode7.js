function reduce(nums, fn, init) {
    let total = init;
    for (let i = 0; i < nums.length; i++) {
        total = fn(total, nums[i]);
    }
    return total;
}
const nums = [1, 2, 3, 4];
const sumFn = (acc, curr) => acc + curr;
const initial = 0;

const result = reduce(nums, sumFn, initial);
console.log(result);