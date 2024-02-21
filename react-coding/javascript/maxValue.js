var arr = [2,6,9,3,7]
var min = arr[0]
var max = 0;
for(var i = 0; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i]
    }
    // if(arr[i] < min){
    //     console.log(min);
    // }
  
}
console.log(min)

var alpha = ['madhu','ravi','raju','lakshmi']
var out = []
for(var i = 0; i < alpha.length; i++){
    out.push(alpha[i].toUpperCase()+alpha[i].substring(1));
}
console.log(out)

var result = alpha.join("-")
console.log(result)