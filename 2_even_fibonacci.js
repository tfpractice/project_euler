// Each new term in the Fibonacci
//  sequence is generated by adding 
//  the previous two terms. 
//  By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// // By considering the terms
//  in the Fibonacci sequence whose
//  values do not exceed four million, 
//  find the sum of the even-valued terms.
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
// let fibUnder=(max)=>


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

let fibArray = (len) => Array(len).fill(0).map((el, id) => getFib(id));
// console.log(fibArray(20));
let convertBase = (base) => (val) => Math.log(val) / Math.log(base);
let fibToVal = (index) => getFib(index) * phi() + getFib(index - 1);
// to convert a fibonacci index into a phi-reference
// phi^n = getFib(n)*phi + getFib(n-1)	
// then log_b_phi(getFib(n))= n
// to use a non-standard base, you must create a ratio in a standard base 
// console.log(convertBase(phi())(fibToVal(8)));
// console.log(pow(phi())(5));
// console.log(getFib(5))
// console.log(getFib(3) + getFib(4))
// since phi^2 = phi+1 then for 
// every n>=0 phi^n = (phi+1)^n if n 
// is even and (phi^n)*phi if n is odd.
// if 4000000 = phi^n, then we find the exponent that gives us 400000
// which is to say that every even value of phi^n will sum to 
// 

let base_4_mil = () => convertBase(phi())((4000000 * root_5()));
// console.log(base_4_mil());
// 33.262
// so the 33rd fibonacci number is under 4000000
// console.log(getFib(31))
// console.log(getFib(31) < 4000000);
// console.log(getFib(33) < 4000000);
// console.log(getFib(32))
console.log(getFib(34));
console.log(getFib(34) < 4000000);

// console.log((root_5()) * (4000000));


let sumArr = (arr) => arr.reduce((prev, next) => prev + next, 0);
let sumProp = (n) => getFib(n + 2) - sumArr(fibArray(n));
console.log("getFib x:::", getFib(5))
console.log("getFib x+2:::", getFib(7))
console.log("(get fib x+2)- 1:::", getFib(7) - 1)
console.log("sum of fib x:::", sumArr(fibArray(5)))
console.log("diff of fibx+2 and sum of fibs to x:::", sumProp(5))

let tenFibs = fibArray(34);
// console.log(tenFibs)
let even_fibs = tenFibs.map(el => el % 2)
let third_fibs = tenFibs.filter((el, id) => id % 3 === 0);
let ele_fibs = tenFibs.filter((el, id) => id % 11 === 0);
let e_fibs = tenFibs.filter((el, id) => el % 2 === 0);
let f3_fibs = tenFibs.filter((el, id) => el % 3 === 0);
let o_fibs = tenFibs.filter((el, id) => el % 2 !== 0);
// console.log(even_fibs)
console.log(e_fibs)
// console.log(third_fibs)
// console.log(f3_fibs);
console.log(sumArr(e_fibs))
// console.log(sumArr(o_fibs))

// console.log(getFib(6));
// [ 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1 ]
// 
// every third number is even
//. whats the relationship between fib(n) and fib(n-3)?
//
//filter by index % 3 ==0
//





// console.log(getFib(15))
// console.log(fib(15))

// let fibUnder = (max) =>



// let getFib = (n) => halve(pow(phi()(n)))
// console.log(phi());
// console.log(negate(phi()))
// console.log(inverse(2))


// 
// 
// 
// 
// 
//