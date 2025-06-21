//always avoid var
//always remember global scope in browser is different from the code editor
if(true){ //scope
    let a =34
    const b = 45
    var c = 66
}
// console.log(a);
// console.log(c); //var does obey the rule of local scope and global scope it always on global scope
// console.log(b);

//nested scope
function ooe(){
    const name = "nikaido"

    function twii(){
        const web1 = "tumse milna"
        console.log(name)
    }
    // console.log(web1)
    // twii()
}
// ooe()

//+++++++++++Interesting++++++++
console.log(addone(44))
function addone(num){
    return num+1
}

console.log(addtwo(5))// it gives errror because it stores in variable it is discussed in hosting    
const addtwo = function(num){ // also known as expression
    return num+2
}
//In js variable can hold anything like json value ,function ,etc...


//Json -> It stands for Javascript Object Notation.It is a lightweight data format that is used to store data and exchange the data.Especially for client and a server.
/*
this is Json
{
  "name": "Rudra",
  "age": 22,
  "isStudent": true,
  "skills": ["C++", "JavaScript", "Python"],
  "address": {
    "city": "Delhi",
    "zip": "110001"
  }
}
It is used in Web APIs
*/