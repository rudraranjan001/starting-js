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
        mentor : "Hitesh chaudhary",
        platform:"Youtube"
    },
    {
        Language : "css",
        mentor : "Hitesh chaudhary",
        platform:"Unacademy"
    },
    {
        Language : "html",
        mentor : "Hitesh chaudhary",
        platform:"Youtube"
    },
    {
        Language : "java",
        mentor : "Hitesh chaudhary",
        platform:"Udemy"
    }
]

// coding.forEach((item) =>{
//     console.log(item.Language);
    
// })


//for each loop does return any value it always return undefined


//Filter operation -> the filter() method is used to create a new array that only contains elemens that pass a certain condition
// it does not change the original array , it returns the new array
/*
    Syntax :
    array.filter(callback)
    callback -> it return true to keep the element other 
    discard it
    Time Complexity : O(n)
*/

// const nums =[1,4,3,4,5,53,5322,344]

//use arrow function for clean code
// const four = nums.filter(nums => nums == 4);

// console.log(four);


let student = coding.filter((us) => us.platform === 'Youtube')
 
// console.log(student);

// student = coding.filter((us) => {
//     return us.platfrom ==='Youtube' && us.mentor === "Hitesh choudhary"
// })

// console.log(student);
