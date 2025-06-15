// console.log("4" > 2); // true
// console.log(2 > "6"); //false
console.log(null > 0); // comparision operator change null -> 0
console.log(null == 0); // equality operater nnever changes null -> 0
console.log(null >= 0);
//the reason is that an equality check == and comparision operator < > <= >= works different. Comparision convert null to a number , treating it as 0. that's why null >= 0 is true and null > 0 is false. 
console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
// "===" => strict check
console.log("5" === 5); //false
// strict check checks not only value it also check data type
 