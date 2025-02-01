import React from 'react'

function CapitalText(){
const [text1,setText] = React.useState('')

const changedData = (e)=>
  e.split('').map((item,i)=>(i%2 === 0 ?  item.toUpperCase() :  item.toLowerCase()      
 )).join('')


 
const handleChange = (e)=>{
    const d = e.target.value;
    setText(changedData(d))
}
console.log(text1)

return(
    <>
    <input type = "text" 
    placeholder='Enter the text'
    value = {text1}
    onChange = {handleChange}/>

    <div>{text1}</div>
    </>
)

}
export { CapitalText }