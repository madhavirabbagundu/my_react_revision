import React from 'react'

function Sum(){

    const[sum,setSum] = React.useState(0)
    const [sum1,setSum1] = React.useState(0)

   const handleChange = (e)=>{
    setSum(sum+1)
   }
   const handleChange2 = (e)=>{
    setSum1(sum1+1)
   }
const handleSubmit = (e)=>{
    console.log(e.target.value)
    e.preventDefault()
    // var total = sum+sum1;
}

    return (
        <>
      
        <form>
        <input type = "number" placeholder='Enter the first number' name = "sum" onChange = {handleChange} value = {sum}/>
        <input type = "number" placeholder='Enter the second number'name = "sum1"  onChange= {handleChange2} value = {sum1}/>
        <button type = "submit" value = {sum+sum1} onClick = {handleSubmit}>Submit</button>
        </form>
        <h1>First Number is : {sum}</h1>
        <h1>Second Number is : {sum1}</h1>
        <h1>TOTAL IS : {sum+sum1}</h1>
        </>
    )
}
export { Sum }