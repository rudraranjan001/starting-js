const p_male = ["Johnny","Jordy","Ryan"]
// console.log(p_male);

const p_female =["Commatozze","Sweetie","Gabbie"]
// console.log(p_female);

// const all_p = p_male.concat(p_female)
// console.log(all_p);

//Spread operator
const all_p = [...p_male,...p_female]
// console.log(all_p);

//if a array is given like this :
const arr = [4,5,6,7,[4,5,6,7,],[5,6,6],[1]]

// to remove all the extra paranthese 
const new_arr = arr.flat(Infinity)
// console.log(new_arr);

// We can also check if given var is array or not
console.log(Array.isArray("hell"));
console.log(Array.from("benke"));

console.log(Array.from({name:"what the"})) // INteresting case it give the empty array

let run1 = 343
let run2 = 55
let run3 = 979
let run4 = 121

console.log(Array.of(run1,run2,run3,run4));
