import React from 'react';
import './App.css';
import { Count } from './Components/Count';
import { Input } from './Components/Input';
import { useSelector } from 'react-redux';
function App() {
  const stringData = useSelector((state)=>{
    return state;
})
  return (
    <div className="App">
      This is the count one
     <Count />
     <Input />
<h1>String is :{stringData}</h1>
    </div>
  );
}

export default App;
