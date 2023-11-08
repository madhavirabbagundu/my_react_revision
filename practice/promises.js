// promises are the object.the promise will handle the asynchronous operations.

var promise = new Promise(function(res,rej){
    var a = 10;
    var b = 30

    if(a===b){
        res()
    }
    else{
        rej()
    }
})
promise.then(function(){
    console.log("success")
}).catch(function(){
    console.log("failure")
})