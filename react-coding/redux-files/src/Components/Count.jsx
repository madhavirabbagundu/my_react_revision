import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { dispatch } from './Action';
import { dispatch1 } from './Action';

function Count(){
    const btn = useDispatch()
    const data = useSelector((state)=>{
        return state;
    })
    console.log(data)
    return (
        <>
        <h1>Count is{data.counting}{data.stringData} </h1>

        <button type = "button" onClick={()=>{btn(dispatch())}}>INCREMENT</button>
        <button type = "button" onClick={()=>{btn(dispatch1())}}>DECREMENT</button>
        <div>
        </div>
        </>
    )
}
export {Count}