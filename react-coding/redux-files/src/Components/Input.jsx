import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Input(){
    const dispatch = useDispatch();
    const [string,setString] = React.useState("");
    const datastring = useSelector((item)=>{
        return item;
    })
   
console.log(datastring,"data")
    return(
        <>
        <input type = "text"
        placeholder="Enter something"
        value = {string}
        onChange = {(e)=>{setString(e.target.value)}}/>
        <button type = "button" onClick = {()=>{dispatch({type:"Todo",payload : string});setString(" ")}}>Submit</button>
       <div>{datastring}</div>
        </>
        
    )
}
export { Input }
