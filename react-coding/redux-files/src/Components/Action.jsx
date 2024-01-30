export function dispatch(){
    return {type:"INCREMENT",payload:1}
}
export function dispatch1(){
    return {type:"DECREMENT",payload:1}
}


export function loginDispatch(name,number){
    return {
        type:"LoginPage",
        payload:{name,number}
    }

}

