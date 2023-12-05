import './App.css';
import React from 'react';
// import { BackgroundColor } from './Components/BackgroundColor';
import { createContext } from 'react';
import {ContextChild} from './Components/ContextChild'

export const userContext = createContext(null);
function App() {
  const [count,setCount] = React.useState(0);
  const [input,setInput] = React.useState("")
  const [show,setShow] = React.useState(false);


  return(
 <userContext.Provider value = {{count,setCount,input,setInput,setShow,show}}>
  <div>
<ContextChild />
</div>
 </userContext.Provider>
  )
 
}

export default App;
