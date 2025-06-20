//Object declareed using constructor 
const insta = new Object() // this object is singleton object

// console.log(insta);

insta.id = "2452"
insta.name = "tanmay"

const regular = { 
    email : "dgsgar4g@gmail.com",
    fullname : {
        userfullname :{
            Firstname:"rudra",
            lastname : "ranjan"
        }
    }
}
//First technique to display object dot operator method
// console.log("Email :",regular.email);
// console.log("firstname :",regular.fullname.userfullname.Firstname);
// console.log("lastname :",regular.fullname.userfullname.lastname);
// console.log("Email :",regular.email);


//Second Technique to display object (bracketing method)
// console.log("Email:",regular["email"]);
// console.log("FirstName:",regular["fullname"]["userfullname"]["Firstname"]);
// console.log("LastName:",regular["fullname"]["userfullname"]["lastname"]);


//combine object
const obj1 = {1:"r",2:"y"}
const obj2 = {4:"r",3:"y"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2) //good practice

//most of the time we used this spread technique
const obj3 = {...obj1,...obj2}
// console.log(obj3 ); 

//In order to work in project data may deal with sql in array
const users = [
    {
        id:1,
        email:"egwegewrg"
    },
    {
        id:1,
        email:"egwegewrg"
    },
    {
        id:1,
        email:"egwegewrg"
    },
    {
        id:1,
        email:"egwegewrg"
    },
]

// users[1].email
// console.log();
// console.log(Object.keys(insta));
// console.log(Object.values(insta));
// console.log(Object.entries(insta));

//find any property in object
// console.log(insta.hasOwnProperty('tanmay'));

//destructing of object

const course = {
    coursename : "WEB DEVELOPMENT",
    price : "234",
    courseInstructor : "someone"
}

//typedef
const {courseInstructor:instructor} = course

console.log(instructor);

//destructer
const {coursename,price,courseInstructor} = course;

console.log(coursename);
console.log(price);
console.log(courseInstructor);