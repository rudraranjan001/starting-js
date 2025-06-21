//IIFE-> Immediately Invoked Function Expression
//IIFE mtlb jo function immediately execute hojae aur global scope ke pollution se problem hoti hai usse bachne/hatana ke lie use karte hai
 
//declaration
(function chai(){
    //named iife 
    let secret = "hidden";
    console.log(secret)
})();//always use semicolon in iife

//using arrow function

((name) => {
    //simple iife or arrow function iife    
    console.log(`hello ${name}`)
}) (`caiman`)