import React from "react";
function Sum(){
    const [first,setFirst] = React.useState({
        firstNumber:0,
        secondNumber:0
    })
    const [sum,setSum] = React.useState(0)
    // var sum = 0;
    const handleChange = (e)=>{
        console.log(e.target.value)
        const {name,value} = e.target;
        // console.log(name,value)
        setFirst({...first,[name]:value})
    }
    const handleSubmit=(e)=>{
    e.preventDefault();
     setSum(Number(first.firstNumber)+Number(first.secondNumber));
    console.log(sum)

    }
    const {firstNumber,secondNumber} = first;
return (
    <>
    <form onSubmit={handleSubmit}>
    <input type = "number" placeholder="Enter your first Number" onChange={handleChange} value = {firstNumber} name = "firstNumber"/>
    <input type = "number" placeholder="Enter your second Number"onChange = {handleChange}value = {secondNumber} name = "secondNumber"/>
    <button type = "submit"value = "submit">Calculate</button>
    </form>
    <div>{sum}</div>
    </>
)
}
export { Sum }