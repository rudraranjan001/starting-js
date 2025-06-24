const name ="rudra"
const repocount = 2
// console.log(name + repocount +"523"); //not to use this syntax 

// console.log(`hello bro this is ${name} and my repo count is ${repocount}`); // this is backtrick. This is also known as String interpolation always use this 

//Another way to declare string
const name1 = new String('ranjan')
// console.log(name1);

// console.log(name1.__proto__);

const newstring = name1.substring(0,5) // Sub string is a method 'substring()' used to extract the portion of string without manipulating the real string
// console.log(newstring);

const new2 = name1.slice(0,-5) //reverse
// console.log(new2);

const str = "     rana    "
console.log(str);//     rana
console.log(str.trim());// rana, specially use for form where user intentionally give extra space

const url = "https://hpworld.com/hpcare%20customer"

console.log(url.replace('%20','-')); //clear from the name replace it replace the string with the new string 
console.log(url.includes('ranjan')); //check whether the string is include or not 

const name2 ="saturo-gojo"
console.log(name2.split('-')); //[ 'saturo', 'gojo' ]
//split() ek mathod hai jo string ko array of substring mein bat deta hai.
//It does not modify the string it gives new array.
