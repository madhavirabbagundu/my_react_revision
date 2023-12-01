import './App.css';
import React from 'react';
// import { BackgroundColor } from './Components/BackgroundColor';
import { Calculator } from './Components/Calculator';

function App() {
  const [data,setData] = React.useState({
    text:"",
    
  })

  const handleChnage =(e)=>{
console.log(e.target.value)
const {name,value} = e.target;
setData({...data,[name]:value})
  }
  const handleSubmit = (e)=>{

e.preventDefault()
  }
  const {text} = data
  return (

    <div className="App">
     <h1> input taking data:: {data.text}</h1>
     <form onSubmit={handleSubmit}>
   <input type = "text"
   placeholder='Enter something'
   onChange={handleChnage}
   value= {text}
   name = "text"/>
   <button type = "submit" value = "submit">Update</button>
   </form>
   {/* <BackgroundColor /> */}
   <Calculator />
    </div>
  );
}

export default App;
