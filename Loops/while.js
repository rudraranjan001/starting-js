//While loop
// same as cpp it is used 

let i = 0;
while(i <= 25){
    console.log(i);
    i += 5;
}

//Loops on array
let arr = ['eren','mikasa','armin'];

let index = 0;
while(index <arr.length){
    console.log(`value of ${index}th index of array is ${arr[index]} `);
    index++;
    
}



//do-while loop
let score = 0

do{
    console.log(`Score is ${score}`);
    score += 4;
}while(score <= 33);