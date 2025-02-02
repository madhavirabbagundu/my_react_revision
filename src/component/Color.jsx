import React from 'react'

function Color(){
    const [color,setColor] = React.useState('');

    const handleChange =(e)=>{
        setColor(e.target.value);
        console.log(e, color )

    }

    console.log(color)

    return(
        <>
        <div className = "diving" style={{background : color}}></div>
        <input type = "text" 
        placeholder='Enter the color'
        onChange = {handleChange}/>
        </>
    )
}
export { Color }