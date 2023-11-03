// there are three types of objects 
// 1. object literals
// 2. instead of an objects
//3. construcor function

const data = {
    name : "madhavi",
    age: 20                              //object literals
}
console.log(data.name)

const data1 = new Object({                       //instead of an object
    name : "chaithu",
    age:23
})
console.log(data1.age)

function Data2(){
    this.name = "lakshmi",                           //constructor function
    this.age = 20
}
var data3 = new Data2()
console.log(data3.name)