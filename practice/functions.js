var data = [4,7,2,45,6]
const data1 = data.map((item)=>{
  return item
})
console.log(data1)

const fil = data.filter((item)=>{
    if(item == 2)
    return item
})
console.log(fil)

const red = data.reduce((item)=>{
    return item
})
console.log(red)
var out = ["a","f","g"]
const data2 = data.forEach((item) => {
    return item
})
console.log(data2)

let myArray = [1, 2, 3, 4]; 
      
const returnValue = myArray.forEach((element) => { 
    return element * element; 
})
console.log(returnValue); 