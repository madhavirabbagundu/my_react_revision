import React from 'react';
import './App.css';
// import { Count } from './Components/Count';
import { Login } from './Components/Login';
import { ApiCalling } from './Components/ApiCalling';
// import { Input } from './Components/Input';

function App() {
 
  return (
    <div className="App">
      This is the count one
     {/* <Count /> */}
     <Login />
     <ApiCalling />
     {/* <Input /> */}
    </div>
  );
}

export default App;
