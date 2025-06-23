//for_in loops
//object
const lang = {
    js : 'Javascipt',
    cpp : 'C++',
    java : 'Java',
    c : 'C',
    html : 'HTML',
    css : 'CSS'
}

//for in loop
// for (const key in lang) {
//     //  console.log(lang[key]);
     
// }

const arr = [2352,45,663,32]

for (const key in arr) {
    //  console.log(arr[key]);
     
}

//forin in map
const map = new Map()
map.set('in',"India")
map.set('un',"United Nation")
map.set('usa',"United state of america")
map.set('aus',"Australia")
map.set('aus',"Australia")

// for (const [key,value] in map) {
//      console.log(key,value);
     
// }
//not applicable in map because map is not iterables