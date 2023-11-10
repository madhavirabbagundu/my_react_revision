import React from 'react'

function ValidityForm(){
    const [data,setData]= React.useState({
        firstName:"",
        lastName:"",
        email:"",
        number:""
    })

const handleChange = (e)=>{
    console.log(e.target.value)
    const {name,value} = e.target
     setData({...data ,[name]:value})
}
const handleSubmit = (e)=>{
    
e.preventDefault()

if(data.firstName.length === 0){
    alert("please enter the firstname")
}
else if(data.lastName.length === 0){
    alert("please enter the lastname")

}
else if(data.number.length !==10){
    alert("please choose your number    ")
}
else{
    alert(JSON.stringify(data))
}
}
const {firstName,lastName,email,number} = data;

return(
    <>
    <form onSubmit={handleSubmit}>
    <input type = "text" placeholder='Enter your first name' onChange = {handleChange} value = {firstName} name = "firstName" />
    <input type = "text" placeholder='Enter your first name'onChange = {handleChange} value = {lastName} name = "lastName"/>
    <input type = "email" placeholder='Enter your first name'onChange = {handleChange} value = {email} name = "email"required/>
    <input type = "number" placeholder='Enter your first name'onChange = {handleChange} value  = {number} name = "number"/>
    <button type = "submit" value = "submit">Submit</button>
</form>
    </>
)
}
export {ValidityForm}