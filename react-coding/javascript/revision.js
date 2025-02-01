function max(arr){
    var out = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            out = arr[i]
        }
    }
    return out;

}
console.log(max([3,6,4,8,1,9]))

function min(arr){
    var out  = arr[0]
    var res= []
for(i = 1; i < arr.length; i++){
    if(arr[i] < out){
        out  = arr[i]
        // res.push(out)

    }
}
return out;
}
console.log(min([5,8,2,6,1,1]))

// reverse

function reverse(arr){
    var out = []
    for(var i = arr.length-1; i >= 0; i--){
        out.push(arr[i])

    }
    return out;

}
console.log(reverse([5,8,2,7,4,0]))

//asending order

function ascending(arr){
    var out = arr.sort()
    return out;

}
console.log(ascending([6,9,2,4,8,4]))

//duplicate

function duplicate(arr){
    var out = [];
for(var i = 0; i < arr.length; i++){
for(var j = i+1; j < arr.length-1; j++){
if(arr[i] === arr[j]){
    out.push(arr[i])
}
}
}
return out;
}

//duplicate
console.log(duplicate([3,6,2,6,4,2,8]))
function unique(arr){
    var out = [];
    for(var i = 0; i< arr.length; i++){
        for(var j = i+1; j< arr.length-1;j++){
            if(arr[i] !== arr[j]){
               out.push(arr[i])
            }
        }
    }
    return out;

}
console.log(unique([4,7,4,2,2,8]))

//LEADER
function leader(arr){
    var out = arr[arr.length-1]
    var res = [arr[arr.length-1]]
    for(var i = arr.length-2; i >= 0; i--){
        if(out < arr[i]){
            out = arr[i]
            res.push(arr[i])
        }

    }
    return res

}
console.log(leader([16,17,4,3,5,2]))

//sort 

function Sorting(arr){
    var out = []
    // for(var i = 0; i < arr.length; i++){
    //     for(var j = i+1; j < arr.length; j++){
    //         if(arr[i] > arr[j]){

    //         }
    //     }

    // }
    var data = arr.sort()
    console.log(data)

}
console.log(Sorting([0,1,2,1,0]))

//count more than occurence

function Count(arr,n,k){
    var out = n/k;
    

}
console.log(Count([2,4,6,9,2,5,2,4,4],9,3))

 var ar = [3,4,5,5,7,4,4,3]
var item1 ={}
 for(var i = 0; i < ar.length; i++){
    var char = ar[i]
    // console.log(char,"char")
    if(item1[char] === undefined){
        item1[char] = 1
    }
    else{
        var prev = item1[char]
        console.log(prev , "prev")
        item1[char] = prev+1
    }
 }
 console.log(item1)
// for(key in item1){
//     console.log(key+" "+item1[key])
//     if(item1[key]>2){
//         console.log(key)
//     }

// }

//object
function object(arr,n,k){


var obj = {}
for(var i = 0; i < arr.length; i++){
    var temp = arr[i]
    if(obj[temp] === undefined){
        obj[temp] = 1
    }
    else{
        var prev = obj[temp]
        obj[temp] = prev+1
    }
}
// console.log(obj)
    var out = []
var divid = n/k;

for(key in obj){
out.push(obj[key])


}
// console.log(out)
for(var i = 0; i < out.length; i++){
if(divid < out[i]){
    return out[i]
}
}

}
console.log(object([3,5,7,9,2,5,7,5],8,4))

//missing number

function missing(arr){
    var sum = 0
    var out = (arr.length*(arr.length+1))/2;
    console.log(out)
for(var i = 0; i < arr.length; i++){
    sum+=arr[i]
}
console.log(sum)
var res = sum - out;
return res;

}
console.log(missing([1,2,4]),"missing")