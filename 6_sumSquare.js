// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum 
// of the squares of the first ten natural numbers 
// and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum 
// of the squares of the first one
//  hundred natural numbers and the square of the sum.
//  
let sumNums = (nums) => nums.reduce((pred, succ) => succ + prev, 0);
let sumSqr = (nums) => sumNums(nums.map(n => n * n));
let seqSum = (lim) => (lim * (lim + 1)) / 2;
let seqSqr = (lim) => (lim * (lim + 1) * ((2 * lim) + 1)) / 6;
let sqrSum = (lim) => Math.pow(seqSum(lim), 2);


let seqDiff = (lim) => sqrSum(lim) - seqSqr(lim);
// console.log(seqSum(4));
// console.log(seqSqr(4));
console.log(seqSqr(100));
console.log(sqrSum(100));
console.log(seqDiff(100))

// (a+b+c)^2 ==> a, (a+1), (a+1)+(a+1)
// 0,1,2,3,4 => (n*(n+1))/2
//  a^2 + b^2 + c^2 ==>
//  (n*(n+1)*(2n+1))/6