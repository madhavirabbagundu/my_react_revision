import React from "react";
import { loginDispatch } from "./Action";
import { useDispatch, useSelector } from "react-redux";


function Login(){
    const dispatch = useDispatch()
    const selector = useSelector((item)=>{
        return item;
    })
    const [name,setName] = React.useState("")
    const [number,setNumber] = React.useState("")
    const handleSubmit=(e)=>{
     e.preventDefault()
     dispatch(loginDispatch(name,number))
     console.log(name,number,"submit")
    }
    // console.log(selector,"login page")

return(
    <>
    <form onSubmit={handleSubmit}>
    <input type = "text"
    placeholder="Enter your name"
    onChange={(e)=>{setName(e.target.value)}}
    value = {name}
    />

    <input type = "number"
    placeholder="Enter your name"
    onChange = {(e)=>{setNumber(e.target.value)}}
    value = {number}
    /> 

    <button type ="submit">Submit</button>
    </form>

    <div>
        <h1>{selector.name}</h1>
        <h2>{selector.number}</h2>
    </div>
    </>
)
}
export { Login }