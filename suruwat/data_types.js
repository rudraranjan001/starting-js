"use strict"; // treat all JS code as newer version

//alert(3+3) // we are using node js not browser

//code readibility should be high
//Types of Variable
/*
number => range 2^53
bigint
string => ""
boolean -> for true/false
null -> standalone value/empty value
undefined -> not assigned
symbol -> uniqueness

//object
*/
//yha pe hum ek word use karte hai saare variable ko declare karne ke lie
// let str="hiii"
// let num = 53423
// let valid = false
// console.log(typeof valid)
// console.log(typeof num)
// console.log(typeof str)
// console.log(typeof null) //object
// console.log(typeof undefined)  //undefined

// Categorisation of data types based on storing:
/*
1.Primitive data type => is a call by value 
7 types of primitive data types:
String,Number,Boolean,null,undefined,Symbol,BigInt
2. Non Primitive data type (Refernce)

Array,Objects,Functions

//Javascipt is dynamic language
*/

// let hello // output is undefined
// let hii = undefined
 
const id = Symbol('34')
const anotherid = Symbol('34')

// console.log(id);
// console.log(id === anotherid); //false

// const bignum = BigInt("22542625414571566343454")
// console.log(bignum); 

//Array
const heros = ["spiderman","ironman","wonder women"]

//object
let obj = {
    name : "Tony",
    age : 68,
}


//function
const mufunc = function(){
    console.log("Hello World");
}
// null ka data type typeof se pata karne par object aata hai