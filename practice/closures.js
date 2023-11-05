// closure give you asses to an outer function scope form an inner function

function main(){
    var out = "madhavi"
    function closure(){
        console.log(out)
    }
    closure()
}
main()