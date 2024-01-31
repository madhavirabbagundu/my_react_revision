import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ApiCalling(){
    const dispatch  = useDispatch()
    const select = useSelector((item)=>{
        return item.details;
})
console.log(select)
    async function apiCalling(dispatch,getState){
        let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data = await res.json();
        dispatch({type : "ADD",payload:data})
        console.log(getState,"getstate")
    }

    return(
        <>
        <div>
        <button onClick = {()=>{dispatch(apiCalling)}}>Click</button>
         </div>
         <div>
            <h1>{select.id}</h1>
            <h1>{select.title}</h1>

         </div>
        </>
    )
}
export { ApiCalling }