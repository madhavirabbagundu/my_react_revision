import React from "react"

function Count(){
    const [count,setCount] = React.useState(0)
    const [data,setData] = React.useState({})

    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({...data,[name]:value})
    }

    
    const handleCount = () => {
        // console.log(e.target.value)
    setCount(count+1)
    }
    const handleCount1 = () =>{
        setCount(count-1)
    }
    const handleSubmit = (e)=>{
        
        e.preventDefault()
        console.log(data)
   
       }

    const {name,number} = data
return (
    <>
    <h1>This is the counting method</h1>

    <h2>COUNT IS :{ count }</h2>
    <button onClick = {handleCount}>INC</button>
    <button onClick={handleCount1}>DEC</button>
    <form onSubmit = {handleSubmit}>
    <input type = "text"
    value = {name}
    placeholder = "enter your name"
    name = "name"
    onChange={handleChange}/>

    <input type = "number"
    placeholder = "enter a number"
    name = "number"
    value = {number}
    onChange = {handleChange}
    />
    <button type = "submit" value = "submit">Submit</button>
    </form>
    </>
)
}
export { Count }