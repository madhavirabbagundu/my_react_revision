var arr = [3,5,7,9,2]
// var out = arr.reverse();
// console.log(out)

var replaceValue = 0;
var index = 2
var res = [... arr.slice(0,index),replaceValue, ...arr.slice(index+1)]
console.log(res)

var deleteNumber = 2;
var output = [...arr.slice(0,deleteNumber),...arr.slice(deleteNumber+1)]
console.log(output)

//unique

function unique(arr){
    var out = 0;
    for(var i = 0; i< arr.length; i++){
        for(var j = i+1; j< arr.length-1;j++){
            if(arr[i] !== arr[j]){
               out = arr[i]
            }
        }
    }
    return out;

}
console.log(unique([4,7,4,2,2,8]))