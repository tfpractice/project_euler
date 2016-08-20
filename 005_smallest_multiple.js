// 2520 is the smallest 
// number that can be divided by
//  each of the numbers from 1 to 10 
//  without any remainder.

// What is the smallest positive 
// number that is evenly divisible 
// by all of the numbers from 1 to 20?
// 
// 
// 
let zedArray = (len) => Array(len).fill(0);
// creates a range 0-term exluding term
let exRange = (term) => zedArray(term).map((el, id) => id);
// creates a range 0-term including terminal number
let inRange = (term) => zedArray(term + 1).map((el, id) => id);


let bigPrime = 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19;
let dubPrime = bigPrime * 2 * 3 * 4;
// let dubPrime = bigPrime * 3;
console.log(dubPrime)

let to20 = inRange(20).slice(1).map(n => dubPrime % n);
console.log(to20);