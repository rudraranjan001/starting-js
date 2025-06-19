//there are two of declaration of object : 1. literal 2. constructor

//singleton
/*
   if we use constructor then it make singleton object.
   singleton object is object that is only one type of its own
   but when we use literal then it does not make singleton object 
*/

//Object literal
const jsuu = {
    name : "Raju",
    //name is the key and raju is the value 
    //js considered name as an string
    age : 122,
    location : "rgergr",
    isLoggedIn : true,
    email : "gergergrg@efer.com",
    "common hobby" : "cricket"
} 
//In object there are key and value 

//Methods to display objects element
// console.log(jsuu.name);
 
// best method to display objects elements
// console.log(jsuu["location"]);
// console.log(jsuu["common hobby"]);//Interview ques

//Another ques is take a symbol as a key object and print it 

const symbi = Symbol("kaju")

const obbi = {
    sname : "Audi",
    [symbi]: "mykey1",//symbol declaration
}
// console.log(obbi[symbi]);

jsuu.name = "binod"
// console.log(jsuu["name"]);

//if we want to stop overwriting then we use freeze 
// Object.freeze(jsuu)
jsuu.name = "Chaman"
// console.log(jsuu["name"]);

// Js Function
obbi.greeting = function(){
    console.log("chumia");   
}
console.log(obbi.greeting());


//object using constructor
// Object.create