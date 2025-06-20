//always avoid var
//always remember global scope in browser is different from the code editor
if(true){ //scope
    let a =34
    const b = 45
    var c = 66
}
// console.log(a);
console.log(c); //var does obey the rule of local scope and global scope it always on global scope
// console.log(b);

//nested scope
function ooe(){
    const name = "nikaido"

    function twii(){
        const web1 = "tumse milna"
        console.log(name)
    }
    console.log(web1)
}