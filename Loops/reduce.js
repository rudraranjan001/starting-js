//reduce
//it is a method used to reduce an array to a single value by running a callback function on each element.

//Callback function ek **aisa function hota hai jo kisi doosre function ke andar argument (parameter) ke roop mein bheja jaata hai, aur fir wo function usko baad mein call karta hai.

/*👉 Samjho:
Tumne kisi ko kaam diya aur bola:
"Kaam ho jaaye to mujhe phone (callback) kar dena."
Bas JavaScript mein bhi aisa hi hota hai*/


// let nums = [1,2,3,4]

// let total = nums.reduce((acc,curr) => acc + curr,0)

// console.log(total);


const cart = [
    {
        product : "Jeans",
        price: 799
    },
    {
        product : "Shirt",
        price: 699
    },
    {
        product : "T-Shirt",
        price: 499
    },
    {
        product : "Cargo",
        price: 999
    },
    {
        product : "Pant",
        price: 599
    }
]

const total = cart.reduce((acc,item)=>acc+item.price,0)

console.log(total);
