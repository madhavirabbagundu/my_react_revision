// Hoisting in javascript is a behaviour in which the variables, functions are declare before the code excution .
// a = 10
// console.log(a)
// let a;
// a  = 20;

console.log(b)
var b = 20;

// console.log(c)
// const c = 30;

data()
function data(){
    console.log(a)

    var a = 30
}
var out;
console.log(out,"out")
out = 40;

data1()
const data1 = ()=>{
    var main = "madhaivi"
    console.log(main)
}