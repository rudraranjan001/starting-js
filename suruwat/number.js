const runs = 342

// console.log(runs);

const bal = new Number(553)
// console.log(bal);

// console.log(bal.toString()); //int -> string

// console.log(bal.toFixed(4)); //use for decimal precision

const nmm = 23523.623234

// console.log(nmm.toPrecision(5));
//basic diff toprecision aur tofixed me ye hai ki tofixed decimal ke baad round karta hai jabki toprecision shuruwat se hi karta hai 


const hun = 23455555
// console.log(hun.toLocaleString('en-IN'));

//**********maths*********/

//same as c++
// console.log(Math.min(4444,454,436,234));
// console.log(Math.max(523,5245,666,3455));

console.log(Math.random()); // it always gives value between [0,1)
let mini = 24
let maxi = 33
let s = Math.random()*(maxi - mini + 1) + mini
console.log(Math.round(s));
