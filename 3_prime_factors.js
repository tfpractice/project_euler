// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime 
// factor of the number 600851475143 ?

let greaterThan = (base) => (num) => num > base;



let fermatFactor = (num) => {
    if (num < 3) {
        return [num, 1];
    }
    let factors = [];
    if (num % 2 == 0) {
        let halfFax = fermatFactor(oddReduce(num));
        let dFermat = fermWithA(2, oddReduce(num))
            // console.log("fermat with 2", dFermat)
        factors = factors.concat(dFermat);
        return (dFermat);
    } else {
        let a = Math.ceil(Math.sqrt(num));
        let fwa = fermWithA(a, num)
        factors = factors.concat(fwa);
        return (fwa);
    };
    // console.log("factors", factors);

    let rootFax = squareReduce(factors);
    let rFax = primeReduce(factors);
    // console.log("rFax", rFax)

    // console.log(`factors reduces to roots current ${num}`, fermSquares);



    return rootFax;

};
let primeReduce = (fax) => fax.map(fermatFactor);
let includesPrime = (numArr) => numArr.any(n => n === 1);
let oddReduce = (num) => num % 2 == 0 ? oddReduce(num / 2) : num;
let squareReduce = (fax) => fax.map(getRoot);
let isPrime = (num) => includesOne(fermatFactor(num));
let includesOne = (numArr) => numArr.some(n => n === 1);
let checkFaxForPrime = (factors) => factors.some(f => includesOne(fermatFactor(f)))

let getRoot = (num) => isSquare(num) ? Math.sqrt(num) : num

let findSquares = (factors) => factors.filter(isSquare);
let evenFermat = (num) => {
    let a = b = num / 2;
    while (b % 2 == 0) {
        b /= 2;
        a = (num / b);

    }
    return [a, b];
};


let fermWithA = (a, num) => {
    if (a < 2) {
        return a;
    }
    let bxb = (a * a) - num;

    if (!isSquare(bxb)) {
        ++a
        return fermWithA(a, num);
    } else {
        let b = Math.sqrt(bxb);
        return [a - b, a + b];

    }

};
let isSquare = (num) => Number.isInteger(Math.sqrt(num));

let eulerVal = 600851475143;
let rounderRoot = 411 * 411 * 943 * 943;
// console.log(eulerVal);
// console.log(rounderRoot * rounderRoot);

let sqrval = Math.round(Math.sqrt());
// console.log("fermatFactor 126*463", fermatFactor(126 * 463));
// console.log("fermatFactor 11112", fermatFactor(11112));
// console.log("fermatFactor 126", fermatFactor(126));
// console.log("isPrime", isPrime(63));
// CON
// console.log("fermatFactor 463", fermatFactor(411 * 411 * 943 * 943));
// console.log("fermatFactor 463", fermatFactor(600851475143));
let twoRaiseEVal = Math.pow(2, eulerVal);
// console.log(twoRaiseEVal % eulerVal)
// console.log(Math.log(eulerVal) / Math.log(10))
module.exports = fermatFactor;

// 
// 
// 
//Fermat's little theorem states that if p is a prime number, 
// then for any integer a, the number a^p − a is an integer
// multiple of p. In the notation of modular arithmetic, 
// this is expressed as