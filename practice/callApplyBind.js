//call :  excute a function with a given contxt and pass arguments one by one

//apply : apply function invokes a function and pass argument as a array.

// bind : the bind returns the new array and pass argumnets as a array as well as one by one.
// exmaples


function call(){
    // this.name = "mouni",
    this.village = "thati"                     //call function
    console.log(this.name)
}
var obj = {
    name : "madhavi",
    age:20
}
call.call(obj)


function apply(){
    this.salary=2333,
    console.log(this.company +"  salary is  " + this.salary)    //apply
}
var obj1 = {
    company : "masai" 
}
apply.apply([obj1])

function bind(){
    this.salary=2333,
    console.log(this.father +"salary is" + this.salary)    //apply
}
var data = {
    father:"ramanji"

}
const output = bind.bind(data)
// console.log(output.data)
