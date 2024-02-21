var arr = [2,5,8,1,2,4,6,8,2,8]
var out = arr.filter((ele,index,arr)=>{ return arr.indexOf(ele)!==index})
console.log(out)

var res = arr.filter((ele,i,arrr)=>arrr.indexOf(ele)===i).sort((a,b)=>{return a-b})
console.log(res)