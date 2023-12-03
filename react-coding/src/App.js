import './App.css';
import React from 'react';
// import { BackgroundColor } from './Components/BackgroundColor';
import { createContext } from 'react';
import {ContextChild} from './Components/ContextChild'

export const userContext = createContext(null);
function App() {
  const [count,setCount] = React.useState("Madhavi")

  return(
 <userContext.Provider value = {{count,setCount}}>
  <div>
<ContextChild />
</div>
 </userContext.Provider>
  )
 
}

export default App;
