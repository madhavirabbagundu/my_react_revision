import React from "react";
import { useContext } from "react";
import { userContext } from "../App";
function Context(){
    const {count,setCount} = useContext(userContext);
    return(
        <>
        <h1 style = {{color:'green',fontFamily:"obligue"}}>{count}</h1>
        <button onClick = {()=>setCount("Chaithu,deepika,baba,bharath")}>Change</button>

        </>
    )
}
export { Context }
