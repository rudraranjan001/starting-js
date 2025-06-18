let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());
// console.log(mydate.getTimezoneOffset());

// let myydate = new Date(2025,5,18) //set date
// console.log(myydate.toDateString()); 
let myydate = new Date("2025/06/18") //set date as a string
// console.log(myydate.toLocaleDateString());

let mytimestamp = Date.now()

// console.log(mytimestamp);
// console.log(myydate.getTime());
// console.log(Math.floor(Date.now()/1000)); // interview common question convert it into second

let newDate = new Date()
// console.log(newDate.getDay());


console.log(newDate.toLocaleDateString('default',{
        weekday:"long",
        year : "numeric",
        month : "long",
        day : "numeric"
    }))// output Wednesday, June 18, 2025
// console.log(newDate.toLocaleDateString("en-IN"));//it shows indian date
// console.log(newDate);
