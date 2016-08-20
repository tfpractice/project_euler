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



// // A palindromic number reads the same both ways. 
// // The largest palindrome made from the product 
// // of two 2-digit numbers is 9009 = 91 × 99.

// // Find the largest palindrome made
// //  from the product of two 3-digit numbers.
console.log(999 * 999)
let revNum = (num) => parseInt(num.toString().split('').reverse().join(""));
let sumRev = (num) => num + revNum(num);
let strRev = (num) => parseInt(num.toString() + revNum(num).toString());
let isPalindrome = (num) => num == revNum(num);
console.log(revNum(123) + 2);

console.log(sumRev(321))
console.log("is palindrome 333", isPalindrome(333));



// // start with any number. Call it original number. Reverse the digits of the original number

// Step 2:

// Call the number whose digits are reversed new number. Add the new number to your original number.

// Call the number found by adding the new number to the original number test number

// Step 3:

// If test number is a palindrome, you are done. If not, use your test number as your original number and repeat the steps above

// Sound complicated? However, it is not!Let us illustrate
// 
// 
let q = 3;
let offSet = Math.pow(10, 2);
let num = 1998 + offSet;
console.log(strRev(num));
console.log(999 * 999)
console.log(fermatFactor(strRev(num)))
// Let q = ceiling(m / 2)
// Let offset = p ^ (q - 1)
// Let number = (n - 1) + offset
// Let answer be number expanded as a palindrome
// 
// 
// 
// 1100×n−990×⌊n/10⌋−99×⌊n/100⌋