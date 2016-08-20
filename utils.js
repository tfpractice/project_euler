let zedArray = (len) => Array(len).fill(0);
// creates a range 0-term exluding term
let exRange = (term) => zedArray(term).map((el, id) => id);
// creates a range 0-term including terminal number
let inRange = (term) => zedArray(term + 1).map((el, id) => id);

let isMult = (base) => (num) => num % base === 0;
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
// 
let not = (func) => (arg) => !func(arg);
let xMult = (base) => (num) => num % base != 0;
let xMults = (base) => (numArr) => {
    // let bases = [base];
    return numArr.filter(xMult(base));
    // let nBase = base + 1;
    // bases.push(base + 1);
    // return xMults(nBase)(numArr);
};

let recRemove = (numArr) => (init = 2) => {
    let curr = init;
    let checked = [];
    let modArr = numArr.slice(0);
    let currCheck = (num) => checked.some(el => num % el == 0);
    let modInit = (id) => {
        while (currCheck(id)) {
            return ++id;
        }
    }
    let innerFunc = (subArr, p, lim) => {

        while (currCheck(p)) {
            p++;
        }
        let gtinit = subArr.filter(greaterThan(p));
        let primeArr = xMults(p)(gtinit);
        checked.push(p++);
        if (checked.length < lim) {
            // p = modInit(p);

            return innerFunc(primeArr, p + 1, lim);
        } else {
            return [1].concat(checked).concat(primeArr);
        }

    }
    return innerFunc(numArr, curr, 14).slice(0);



};