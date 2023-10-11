import React from 'react'

function Forming(){
    const [forming,setForm] = React.useState({
        name:"",
        age:"",
        number:"",
        email:"",  
    })
    const [data,setData] = React.useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setForm({...forming,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/data`,{
            method:"POST",
            body:JSON.stringify(forming),
            headers:{
                "Content-type":"application/json"
            }

        })
        .then((res)=>res.json())
        .then((json)=>console.log(json))
    }
    React.useEffect(()=>{
        fetch(`http://localhost:3000/data`)
        .then((res)=>res.json())
        .then((json)=>setData(json))

    },[])


    const {name,age,number,email} = forming
    console.log(data)
    return(

        <>
        <form onSubmit = {handleSubmit}>
        <input type = "text"
        placeholder = "Enter your name"
        name= "name"
        onChange = {handleChange}
        value = {name}
        
        />
        <input type = "number"
        placeholder = "Enter your age"
        name = "age"
        onChange = {handleChange}
        value = {age}

        
        />
        <input type = "number"
        placeholder = "Enter your number"
        name = "number"
        onChange = {handleChange}
        value = {number}

        />
        <input type = "email"
        placeholder = "Enter your email"
        name = "email"
        onChange = {handleChange}
        value = {email}

        
        />
        <button type = "submit" value = "submit">Submit</button>
        </form>
        <div style = {{border:"1px solid black",backgroundColor:"red",width:"350px",paddingHeight:"150px;",paddingTop:"50px",margin:"auto",padding:"50px"}}>
            {
                data.map((item)=>(
                    <div style = {{height:"250px",width:"250px",height:"50px;",marginTop:"20px",margin:"auto",color:"white",fontSize:"14%;"}}>
                       {item.name}
                       </div>
                ))
            }
        </div>
        </>
    )
}
export { Forming }