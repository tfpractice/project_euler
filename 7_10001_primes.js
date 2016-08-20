let fermFactor = require('./3_prime_factors');
// By listing the first six 
// prime numbers: 2, 3, 5, 7, 11, and 13
// , we can see that the 6th prime is 13.

// What is the 10 001st prime number?
// 
let primeApprox = (n) => n * Math.log(n);
let primeCount = (n) => n / Math.log(n);
let primesAbove = (n) => primeCount(primeApprox(n + 1));
let primesBelow = (n) => primeCount(primeApprox(n));
let p10001 = 92123;
console.log(primeApprox(10003));
// console.log(primeCount(100));
console.log(primeApprox(6));
// console.log(primeCount(10));
console.log(primesBelow(10002));
console.log(primesAbove(10002));
console.log("fermat 92113", fermFactor(92127))