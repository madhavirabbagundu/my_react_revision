import React from "react";
import { useContext } from "react";
import { userContext } from "../App";
function Context(){
    const {count,setCount} = useContext(userContext);
    const {input,setInput} = useContext(userContext);
    const {setShow} = useContext(userContext);
    console.log(input,input.name,"input")
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(input,"main Data")

    }
    console.log(input,"main")

    return(
        <>
        <h1 style = {{color:'green',fontFamily:"inte"}}>{count}</h1>
        <button onClick = {()=>setCount(count+1)}>INC</button>
        <button onClick = {()=>setCount(count-1)}>DEC</button>
        <div>
            <form onSubmit={handleSubmit}>
          <input type = "text" placeholder="Enter your name"  onChange = {(e)=>{(setInput(e.target.value))}}/>
          <input type = "number" placeholder="Enter your number"onChange = {(e)=>{(setInput(e.target.value))}}/>
          <button type = "submit" value = 'submit'onClick = {()=>{setShow(true)}}>Submit</button>
          </form>
        </div>
        <div>Name:{input}</div>

        </>
    )
}
export { Context }
