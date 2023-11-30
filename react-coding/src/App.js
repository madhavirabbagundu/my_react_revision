import './App.css';
import React from 'react';

function App() {
  const [data,setData] = React.useState({
    text:"",
    
  })

  const handleChnage =(e)=>{
const {name,value} = e.target;
setData({...data,[name]:value})
  }
  const handleSubmit = (e)=>{
    console.log(data)

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
    </div>
  );
}

export default App;
