import React, { useContext } from "react";
import { userContext } from "../App";

function GetApi(){
    const {data,setData} = useContext(userContext);

    React.useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then((json)=>setData(json))
    },[])
    console.log(data)
    return(
        <>
    {
        data.map((item)=>(
            <div>
                {item.title}
            </div>
        ))
    }
        </>
    )
}
export { GetApi }