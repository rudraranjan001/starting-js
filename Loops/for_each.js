//for each loop

const arr = [2352,45,663,32]

// arr.forEach( function(item){
//     console.log(item);
    
// })//normal function

//arrow function
// arr.forEach( (item) =>{
//     console.log(item);
    
// })

//it also have one property to execute function

// function print(kkk){
//     console.log(kkk);
    
// }

// arr.forEach(print)

//the common scenario of array of object
//[{},{},{}]

const coding = [
    {
        Language : "js",
        mentor : "Hitesh chaudhary"
    },
    {
        Language : "css",
        mentor : "Hitesh chaudhary"
    },
    {
        Language : "html",
        mentor : "Hitesh chaudhary"
    },
    {
        Language : "java",
        mentor : "Hitesh chaudhary"
    }
]

coding.forEach((item) =>{
    console.log(item.Language);
    
})