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