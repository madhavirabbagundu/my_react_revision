import React from 'react'

function Map(){
    const [data,setData] = React.useState([])

    React.useEffect(()=>{
     fetch(`https://fakestoreapi.com/products`)
     .then((res)=>res.json())
     .then((res)=>{setData(res)})
    },[])
    return (
        <>
        <h1>This is the useEffect</h1>
        {
            data.map((item)=>(
                <div>
                    <h1>{item.title}</h1>
                    <h1>{item.name}</h1>
                </div>
            ))
        }
        </>
    )
}
export { Map }