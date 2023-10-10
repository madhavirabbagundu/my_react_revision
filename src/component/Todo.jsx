import React from 'react'

function Todo(){
    const [input,setInput] = React.useState({
        name:""
    })
    const [data,setData] = React.useState([])
    React.useEffect(()=>{
        fetch(`http://localhost:3000/data`)
        .then((res)=>res.json())
        .then((json)=>{setData(json)})
        
    },[])
    const handleChange = (e)=>{
        console.log(e.target.value)
     const {name,value} = e.target
     setInput({...input,[name]:value})
    }
    const handleSubmit = (e)=>{
    e.preventDefault()
    fetch(`http://localhost:3000/data`,{
        method:"POST",
        body:JSON.stringify(input),
        headers:{
            "Content-type":"application/json"
        }


    })
    .then((res)=>res.json())
    .then((json)=>console.log(json))
    
}
    const{name} = input;
    // console.log(data)

    return (
        <>
        <form onSubmit = {handleSubmit}>
        <input type = "text"
         placeholder='Enter the somthing'
         onChange={handleChange}
         name = "name"
        value = {name}
        />
        <button text= "submit" value = "submit">ADD</button>
        </form>

        <div>
            {
                data.map((item)=>(
                    <div>
                    <div key = {item.id}>{item.name}</div>
                        </div>
                ))
            }
        </div>
        </>
    )
}
export {Todo}