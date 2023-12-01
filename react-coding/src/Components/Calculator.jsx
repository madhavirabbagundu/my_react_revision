import React from 'react'

function Calculator(){
    const [num,setNum] = React.useState('0')

    const handleClick = (e)=>{
        console.log(e,e.target.value)
        setNum(num+e.target.value)
    }
    const handleClear = (e)=>{
        setNum('0')
    }
    const handleEqual=(e)=>{
        console.log(num,"data")
        const data = eval(num)

        // const data = eval(num)
        setNum(data)
    }
    return(
        <>
        <h1>
        This is the calculator 
        </h1>
        <div className='Container'>
            <div className='firstContainer'>
                <input type = "text" value = {num} />
                 </div>
            <div className='secondContainer'>
            <div className='MainCal'>

                    <button className='numbers'value = '7' onClick = {handleClick}>7</button>
                    <button className='numbers'value = '8'onClick = {handleClick}>8</button>
                    <button className='numbers'value = '9'onClick = {handleClick}>9</button>
                    <button className='numbers'value = '/'onClick = {handleClick}>/</button>

              </div>
              <div className='MainCal'>

<button className='numbers'value = '4'onClick = {handleClick}>4</button>
<button className='numbers'value = '5'onClick = {handleClick}>5</button>
<button className='numbers'value = '6'onClick = {handleClick}>6</button>
<button className='numbers'value = '*'onClick = {handleClick}>*</button>

</div>
<div className='MainCal'>

<button className='numbers' value = '1'onClick = {handleClick} >1</button>
<button className='numbers' value = '2'onClick = {handleClick}>2</button>
<button className='numbers' value = '3'onClick = {handleClick}>3</button>
<button className='numbers' value = '-'onClick = {handleClick}>-</button>

</div>
<div className='MainCal'>

<button className='numbers'value = '0'onClick = {handleClick}>0</button>
<button className='numbers'value = '='onClick = {handleEqual}>=</button>
<button className='numbers'value = 'C'onClick = {handleClear}>C</button>
<button className='numbers'value = '+'onClick = {handleClick}>+</button>

</div>
            </div>
            
        </div>
        </>
    )
}
export { Calculator }