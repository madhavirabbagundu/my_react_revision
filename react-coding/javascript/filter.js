const data = {
    "students":[
        {
            "id":1,
            "name":"madhavi",
            "age":20
        },
        {
            "id":2,
            "name":"madhu",
            "age":22
        }

    ]
}

var out= data.students.map(function(item) {return item.id <5?item:""}) 
console.log(out)

var res = data.students.filter(function(item){return item.age > 20 ? item : ""})
console.log(res)