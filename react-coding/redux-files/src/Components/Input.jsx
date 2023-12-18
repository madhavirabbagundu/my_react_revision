import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Input(){
    const [string,setString] = React.useState("");
    const data = useSelector((item)=>{
        return item;
    })
    const dispatch = useDispatch();
   

    return(
        <>
        <input type = "text"
        placeholder="Enter something"
        value = {string}
        onChange = {(e)=>{setString(e.target.value)}}/>
        <button type = "button" onClick = {()=>{dispatch({type:"Todo",payload:{string}});setString(" ")}}>Submit</button>
       <div>{data}</div>
        </>
        
    )
}
export { Input }