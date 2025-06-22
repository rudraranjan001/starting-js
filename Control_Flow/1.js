//control Statement
//if same as cpp
// if(){

// }
//comparision operator
/*
1.>
2.<
3.>=
4.<=
5.==
6.!=
7.=== //Strict equal (check data type as well as value)
*/
//Shorthand notation
const bal = 4124
// if(bal > 500) console.log("hello");


//Falsy value

//false,0,-0,BigInt 0n,null,undefined,Nan

//the unexpected truthy value
//"0" ,'false'," ",[],{},function(){} //empty function

//To find array is empty or not
// const arr = []
// if(arr.length === 0) console.log("Array is empty");

//to check empty object
const obj = {}

if(Object.keys(obj).length === 0) console.log("Object is empty")
//object.keys(obj) -> it convert the object into array

// Nullish Coalescing Operator(??) is all about of null and undefined

let val1
// val1 = 5 ?? 10 // 5
// val1 = null ?? 234 // new operator // 234
// val1 = undefined ?? 15 // 15
val1 = null ?? undefined ?? 235 // 235
console.log(val1); 

//ternary operator
//condition ? true : false   
