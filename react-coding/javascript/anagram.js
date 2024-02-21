function checkAnagram(s,s1){
    var a = s.toLowerCase();
     a = a.split("").sort().join("")
     var b = s1.toLowerCase();
     b = b.split("").sort().join("")
    //  console.log(a,b)
     if(a === b){
        return true;
     }
     else{
        return false;
     }


}
console.log(checkAnagram("evil","vile"))