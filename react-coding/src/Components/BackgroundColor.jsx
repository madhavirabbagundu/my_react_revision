import React from "react";

function BackgroundColor(){
    const [color,setColor] = React.useState({colorname:null})
    console.log(color)

    const handleChange =(e)=>{
        const {name,value} = e.target
        setColor({...color,[name]:value})
    }
    const {colorname} = color;
    return(
        <>
        <div className="container" style = {{backgroundColor:colorname}}></div>
        <input type = "text"value = {colorname} name = "colorname" onChange = {handleChange} 
            />
            <button type = 'submit' value = "submit">Submit</button>
        </>
    )
}
export { BackgroundColor }