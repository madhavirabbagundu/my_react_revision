import React from 'react'
function ChildToParent({getcolor}){
    const [data,setData] = React.useState("")
    const handleChange = (e)=>{
        console.log(e.target,e.target.value)
        const {value} = e.target;
        setData(value);
        getcolor(value);
    }
    return(
<>
<h1>This is the child to parent practice</h1>
<input type = "text"
placeholder='Enter the color name'
onChange = {handleChange}
value = {data}/>
    </>
    )
}
export  { ChildToParent }