// If we list all the natural numbers below 10
// that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// 
// let findAllBelow(num) => [.......num];
// creates an array of len zeroes
let zedArray = (len) => Array(len).fill(0);
// creates a range 0-term exluding term
let exRange = (term) => zedArray(term).map((el, id) => id);
// creates a range 0-term including terminal number
let inRange = (term) => zedArray(term + 1).map((el, id) => id);
// let filFact2 = (f1) => (f2) => (numArr) =>
let emptyArrayWLenght = (len) => Array(len);
// check for multiplicability by base
let isMult = (base) => (num) => num % base === 0;
// let isMult = (base) => (num) => (!!num && (num % base)) === 0;
// filter an array by factor
let filFact = (base) => (numArr) => numArr.filter(isMult(base));
// builds an array of functions partially applied to a set of arguments
let curryArray = (func) => (...args) => args.map(func);
// builds an array of isMult functions with a set of bases
let multArray = (...bases) => curryArray(isMult)(...bases);
// checks if an operand returns true when applied to all functions in an array of fuctions
let satisfyAll = (funcArray) => (operand) => funcArray.every(f => f(operand) === true);
// checks if an operand returns true when applied to any functions in an array of fuctions
let satisfySome = (funcArray) => (operand) => funcArray.some(f => f(operand) === true);
// filter an array by multiple factors
let fizzBoth = (...bases) =>
    (numArr) => numArr.filter(satisfyAll(multArray(...bases)));
let fizzBuzz = (...bases) =>
    (range) => range.filter(satisfySome(multArray(...bases)));
// 
// sums all numbers in an array
let sumArr = (numArr) => numArr.reduce((prev, next) => prev + next, 0);

console.log('the answer is ', sumArr(fizzBuzz(3, 5)(exRange(1000))));





// determine if there is some quality of fizzbuzz sums given a certain interval
// is the sum of fizz buzz periodic?
// let tenRange = exRange(10);
let tenRange = inRange(10).map((el, id) => exRange(id * 10)).slice(0);
let //a0 = exRange(0),
    a5 = exRange(5),
    a10 = exRange(10),
    a20 = exRange(30),
    a100 = exRange(100);
let //fb0 = fizzBuzz(3, 5)(a0),
    fb5 = fizzBuzz(3, 5)(a5),
    fb10 = fizzBuzz(3, 5)(a10),
    fb20 = fizzBuzz(3, 5)(a20),
    fb100 = fizzBuzz(3, 5)(a100);

let fbArray = [fb5, fb10, fb20, fb100];
let sum30 = sumArr(fb20);
console.log(sum30);
console.log(sumArr(fb100) / sum30)
console.log(sum30 * sumArr(inRange(4)))
// fbArray.forEach(el => console.log("fizzBuzz", el.length));
// tenRange.forEach(el => console.log("range of ten", el.length));
fizzRange = tenRange.map(el => fizzBuzz(3, 5)(el));
bothRange = tenRange.map(el => fizzBoth(3, 5)(el));
f3range = fizzRange.map(el => el.filter(mem => !isMult(5)(mem)));
f5range = fizzRange.map(el => el.filter(mem => !isMult(3)(mem)));
// fizzRange.forEach((el, id) => console.log(`multiples in range 0-${(10*(id+1))-1}`, el.length))
// f3range.forEach((el, id) => console.log(`multiples ONLY 3 in range 0-${(10*(id+1))-1}`, el.length))
// f5range.forEach((el, id) => console.log(`multiples ONLY 5 in range 0-${(10*(id+1))-1}`, el.length))
// bothRange.forEach((el, id) => console.log(`multiples OF BOTH in range 0-${(10*(id+1))-1}`, el.length))


// map each array of multiples to their size
let fizzSums = fizzRange.map(el => sumArr(el));
let f3Sums = f3range.map(el => sumArr(el));
let f5Sums = f5range.map(el => sumArr(el));
let fBothSums = bothRange.map(el => sumArr(el));
let fizzSizes = fizzRange.map(el => el.length);
let f3Sizes = f3range.map(el => el.length);
let f5Sizes = f5range.map(el => el.length);
let fBothSizes = bothRange.map(el => el.length);
let diffReduce = (prev, next) => Math.abs(next - prev);

// calculate the diffences in number of multiples found per interval
let rDiffs = (arr) => {
    let diffMap = [];
    arr.reduce((p, n, id) => {
        // let span = id+1 - id
        let min = (id - 1) * 10;
        let max = ((id) * 10) - 1;
        diffMap.push({
            [min + "::" + max]: Math.abs(n - p)
        });
        return n;
    });
    return diffMap;
};
let sDiffs = (arr) => {
    let diffMap = [];
    arr.reduce((p, n, id) => {
        // let span = id+1 - id
        let min = (id - 1) * 10;
        let max = ((id) * 10) - 1;
        diffMap.push({
            [min + "::" + max]: Math.abs(n - p)
        });
        return n;
    });
    return diffMap;

}
let f20_x5 = fb20.filter(el => !isMult(5)(el))
let f20_x3 = fb20.filter(el => !isMult(3)(el))
let fb20XX = fizzBoth(3, 5)(a20);
let f100_x5 = fb100.filter(el => !isMult(5)(el))
let f100_x3 = fb100.filter(el => !isMult(3)(el))
let fb100XX = fizzBoth(3, 5)(a100);
let reduced20_x5 = f20_x5.map(el => el / 3);
let reduced20_x3 = f20_x3.map(el => el / 5);
let reduced20_xx = fb20XX.map(el => el / 15);
// console.log(fizzSums);
console.log(f20_x5);
console.log(f20_x3);
console.log(fb20XX);
// console.log(reduced20_x5);
// console.log(reduced20_x3);
// console.log(reduced20_xx);
// console.log("\n ===== either =====\n", rDiffs(fizzSizes));
// console.log("\n ===== only 3 =====\n", rDiffs(f3Sizes));
// console.log("\n ===== only 5 =====\n", rDiffs(f5Sizes));
// console.log("\n ===== both =====\n", rDiffs(fBothSizes));
// 
// console.log("\n ===== either =====\n", rDiffs(fizzSums));
// console.log("\n ===== either =====\n", rDiffs(fizzSizes));



// ===== either ===== 		||	 ===== both =====
//  [ { '0::9': 4 },  		||	[ { '0::9': 0 },
//   { '10::19': 4 }, 		||	  { '10::19': 1 },
//   { '20::29': 5 }, 		||	  { '20::29': 0 },
//   { '30::39': 5 }, 		||	  { '30::39': 1 },
//   { '40::49': 4 }, 		||	  { '40::49': 1 },
//   { '50::59': 5 }, 		||	  { '50::59': 0 },
//   { '60::69': 5 }, 		||	  { '60::69': 1 },
//   { '70::79': 4 }, 		||	  { '70::79': 1 },
//   { '80::89': 5 }, 		||	  { '80::89': 0 },
//   { '90::99': 5 } ]		||	   { '90::99': 1 } ]

//  ===== only 3 =====		||	===== only 5 ===== 	||	 ===== both =====
//  [ {'00::09': 3 }, [		||	{ '00::09': 1 }, 	||	[ { '00::09': 0/1 }, dep on 0 as natural
//   { '10::19': 2 }, 		||	{ '10::19': 1 }, 	||	  { '10::19': 1 },
//   { '20::29': 3 }, 		||	{ '20::29': 2 }, 	||	  { '20::29': 0 },
//   { '30::39': 3 }, 		||	{ '30::39': 1 }, 	||	  { '30::39': 1 },
//   { '40::49': 2 }, 		||	{ '40::49': 1 }, 	||	  { '40::49': 1 },
//   { '50::59': 3 }, 		||	{ '50::59': 2 }, 	||	  { '50::59': 0 },
//   { '60::69': 3 }, 		||	{ '60::69': 1 }, 	||	  { '60::69': 1 },
//   { '70::79': 2 }, 		||	{ '70::79': 1 }, 	||	  { '70::79': 1 },
//   { '80::89': 3 }, 		||	{ '80::89': 2 }, 	||	  { '80::89': 0 },
//   { '90::99': 3 } ]		||	 { '90::99': 1 } ] 	||	   { '90::99': 1 } ]


// range 00 - 09 => 3x+5y+15z (x= 3, y= 1, z=1) 0*3 = 1*3+2*3+ 3*3 0*5
// 
// sumArr(inRange(3))+ sumArr(1)*5, sumArr(1)+
// ) // range 10 - 19 => 3x+5y+15z (x= 2, y= 1, z=1)
// range 20 - 29 => 3x+5y+15z (x= 3, y= 2, z=0)
// range 30 - 39 => 3x+5y+15z (x= 3, y= 1, z=0)
// range 40 - 49 => 3x+5y+15z (x= 2, y= 1, z=1)
// range 50 - 59 => 3x+5y+15z (x= 3, y= 2, z=0)


// for  every interval i[0-2] and subInterval j [0-10]), sum = 3x+5y+15 ;
// 
// let calculateSum = (fin) =>
let calcFizzSum = (x = 0, y = 0, z = 0) => (3 * makeCoeff(x)) + (5 * makeCoeff(y)) + (15 * makeCoeff(z));
let setCoeffs = (interval) => i % 3;
// let sumFizzByIndex = (coefficients) => (i) => calcFizzSum(...coefficients[i]);
// 
let makeCoeff = (iterations) => sumArr(inRange(iterations));
let coefficients = [
    [3, 1, 1],
    [2, 1, 1],
    [3, 2, 0]
];
let baseCase = calcFizzSum(3, 1);
let case0 = calcFizzSum(...coefficients[0]);
let case1 = calcFizzSum(...coefficients[1]);
// console.log(calcFizzSum(3, 1));
// console.log(3 * 3 + 5 * 1);
// console.log(case1);
// console.log(baseCase + case1);
let secondarray = exRange(20).slice(10);
let secFB = fizzBuzz(3, 5)(secondarray);
let sumSec = sumArr(secFB);
// console.log(secFB);
// console.log(sumSec);/


let getFizzIntervals = (limit) => Math.ceil(limit / 30);
let summThisRound = (i = 0) => calcFizzSum(coefficients[i]);
let sumSegment = (i) => calcFizzSum(coefficients[i]);
// let summByIntervals = (limit) => {
//     let iCount = getFizzIntervals(limit);
//     for (var i = 0; i < iCount; i++) {
//     	for (var s = 0; s < 3; s++) {
//     		console.log()
//     	}

//         if (i === 0) {
//             calcFizzSum(3, 1, 0);
//         } else {
//             calcFizzSum(coefficients[i % 3]);
//         } // }
//     }
// }
// console.log(getFizzIntervals(100))
// for (let i = 0; i < 100 / 3; i++) {
//     if (i === 0) {
//         calcFizzSum(3, 1, 0);
//     } else {
//         calcFizzSum(coefficients[i % 3]);
//     } // }
//     // let currinterval = i % 3;


//     100 / 3]
// }

//  
// let coefficients = {
//     x: [3, 2, 3],
//     y: [1, 1, 2],
//     z: [1, 1, 0]
// };



// the pattern is periodic over every thirty integers[5,4,5]
//   
//   since we know that for every ten integers numbers, 
//   since we know that for every ten numbers, 
//   there occurs three multiples of three and two multipples of five,
//   and that for every thirty numbers there occurs
// console.log(diffReduce(10, 27));

// 
// 
// 
// 
// 
// 
//