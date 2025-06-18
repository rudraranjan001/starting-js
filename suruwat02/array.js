//Array in js

// const myArr = [0,4,352,3,66,22,true,false,"heei","rgerg","fger"]//javascript provide us array which contains various types of elements
//after that all same 
// it just like vector in cpp
// const myar = new Array
// push is used to add element at the end. Pop is used to del the element from the end of the array just like the vector
//unshift is used to add element in the front 

let arr = [1,3,4,6,7]
// console.log(arr);

// arr.unshift(0);
// console.log(arr);
// arr.shift();//delete the element which is lastly pushed in array
// console.log(arr);
//include is just like find function in cpp
// console.log(arr.includes(5));
// console.log(arr.includes(7));

// console.log(arr.indexOf(7));
// console.log(arr.indexOf(55));

const newarr = arr.join()

// console.log(newarr);

// console.log(typeof(newarr));

//Slice, Splice
 
// slice me original array mein kuchh bhi badlaw nahi hote hai jabki splice me original array me badlaaw hote hai 

let num = [1,2,3,4,5,6,7]
console.log("Original array is :",num);
 
let num1 = num.slice(0,3)
console.log("Sliced Array = ",num1);
console.log("original array after performing slice :" ,num);//slice does not affect array 

let num2 = num.splice(0,3)
console.log("Spliced Array :",num2);
console.log("original array after performing slice :" ,num); // splice affect array it del the element which is contained in spliced array