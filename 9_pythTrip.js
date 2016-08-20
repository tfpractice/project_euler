let fermFactor = require('./3_prime_factors');

function fibIterRecursive(n, f1, f0) {
    if (n === 0) {
        return f0;
    } else {
        // console.log(n, f1, f0);
        return fibIterRecursive(n - 1, f1 + f0, f1);
    }
};

function fib(n) {
    return fibIterRecursive(n, 1, 0);
}
let sqrt = (num) => Math.sqrt(num);
let inverse = (num) => pow(num, -1);
let negate = (num) => -1 * num;
let pow = (num) => (exp) => Math.pow(num, exp);
let root_5 = () => sqrt(5);
let inc_r5 = () => 1 + root_5();
let dec_r5 = () => 1 - root_5();
let halve = (num) => num / 2;
let divBy = (divisor) => (dividend) => dividend / divisor;
let phi = () => halve(inc_r5());
let neg_phi = () => negate(phi());
let raise_phi = (n) => pow(phi())(n);

let getFib = (n) => Math.round(divBy(root_5())(raise_phi(n) - pow(neg_phi())(negate(n))));
let convertBase = (base) => (val) => Math.log(val) / Math.log(base);
let fibToVal = (index) => getFib(index) * phi() + getFib(index - 1);

let evalTriplet = (c) => (a, b, ...rest) => ((a * a) + (b * b) == (c * c));
// let evalTriplet = (c) => fermFactor(c)[0] ((a * a) + (b * b) == (c * c));

// every second fub number greater than 5
let testFibIndex = 5 + 9
let tFib = getFib(testFibIndex);
let fax = fermFactor(tFib);
console.log(getFib(testFibIndex));
console.log(fermFactor(getFib(testFibIndex)))
console.log(fax[0], fax[1]);
console.log(fax.map(f => f * f));

console.log(evalTriplet(tFib)(fax))


// 
// 
// 
// 
//