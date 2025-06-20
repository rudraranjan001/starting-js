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
function add(number1 ,number2){
    let result = number1 + number2
    return result
}
const result = add(4443523524,234345252352352324)
// console.log(result);

// `` -> this is known as backticks
//string function
function checkloggedin(username){
    return `${username} Just logged in`
}
console.log(checkloggedin("hellboy"));
console.log(checkloggedin());//interview question if we dont pass any value then what will it display meanwhile its output is undefined Just logged in .this clears that no string pass means leads to the undefined name

//using default value
function burbak(username = "H S Prasad"){
    return `${username} just logged in`
}
console.log(burbak("bhosdiyawala"));
