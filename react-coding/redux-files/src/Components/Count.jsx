import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';


function Count(){
    const btn = useDispatch()
    const data = useSelector((state)=>{
        return state;
    })
    console.log(data)
    return (
        <>
        <h1>Count is{data} </h1>
        <button type = "button" onClick={()=>{btn({type:"INCREMENT",payload:5})}}>INCREMENT</button>
        <button type = "button" onClick={()=>{btn({type:"DECREMENT",payload:2})}}>DECREMENT</button>
        <div>
        </div>
        </>
    )
}
export {Count}