// same as cpp  but there is a function keyword provided to define function


function heell(){
    console.log('s');
    console.log('a');
    console.log('y');
    console.log('m');
    console.log('y');
    console.log('n');
    console.log('a');
    console.log('m');
    console.log('e');
}

//heell()
///to the same as other programming language
// function add(number1 ,number2){
//     let result = number1 + number2
//     return result
// }
// const result = add(4443523524,234345252352352324)
// console.log(result);

// `` -> this is known as backticks
//string function
function checkloggedin(username){
    return `${username} Just logged in`
}
// console.log(checkloggedin("hellboy"));
// console.log(checkloggedin());//interview question if we dont pass any value then what will it display meanwhile its output is undefined Just logged in .this clears that no string pass means leads to the undefined name

//using default value
function burbak(username = "H S Prasad"){
    return `${username} just logged in`
}
// console.log(burbak("bhosdiyawala"));

//rest operator ->...
//if we dont know how many arguments will come then we will use this trick
function calculate(...num1){
    return num1
}
// console.log(calculate(455,3523,545,56));

//Interview Question
function cal(val1,val2,...num3){
    return num3
}
// console.log(cal(234,2356,12,6756,45));

//function for object
// const user = {
//     username1 : "rudra",
//     id : "23525"
// }
function handle(otherobject){
    // console.log(`Username is ${otherobject.username1} \nid is ${otherobject.id}`);
}
// handle(user)


//function for object
const arr = [2523,575,4344]

function arrr(newarray){
    return newarray[4]//if you demand the higher index which is not available it returns undefined
}
// console.log(arrr(arr));


//this and arrow function

const user = {
    username : "nikaido",
    ability :"control time",
    //this is same as cpp it is used to point out the variable in the scope
    welcomeMess:function(){//new declaration of function
        console.log(`${this.username} ,welcome to website`);  
        console.log(this);
              
    }
}

// user.welcomeMess()
// user.username = "Noi"
// user.welcomeMess()

// console.log(this); // now this points to the empty object because there is no global object in this
//Interview question browser ke andar jo object hai wo window object hai and in code editor this refers to the empty object
/*what is empty object -> 
    let obj = {}
    ex: 
    let student = {}
    console.log(student);//output {}
*/
// Arrow function
// function chai(){
//     let name = "sakura"
//     console.log(this.name);//undefined
//     //we cant use this in function we use this only in nested 
// }
// chai()

// const chai = function (){
//     let name = "sakura"
//     console.log(this.name);//undefined
// }
// chai()

//Arrow Function
// const chai = () => {
//     let name = "sakura"
//     console.log(this);//undefined
// }
// chai()

//implicit return: if you have only one line code
// const adding = (numb1,numb2) => numb1 + numb2
// console.log(adding(43,63432542351351325325));

//if we use curly braces then always use return keyword and if we use paranthese then no need to use return .Very useful in react
//explicit return means use return keyword 
// if we have  to  return object then 
const addtwo = (nums1,nums2) => ({username : "Noi"})

console.log(addtwo(2342,23523));
