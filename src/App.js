import React from 'react';
import { Game } from './component/Game';
import { CapitalText } from './component/CapitalText';
// import { Color } from './component/Color';
// import {Count} from './component/Count' ;
// import { Sum } from './component/Sum';
// import { Map } from './component/Map';
// import {Todo} from './component/Todo'
// import {Forming} from './component/Form'
// import { ChildToParent } from './component/ChildToParent';
import './App.css';
import { Color } from './component/Color';
// import { ValidityForm } from './component/ValidityForm';
// import { createContext } from 'react';
// import { Context } from './component/Context';
// import { ChildComponent } from './component/ChildComponent';
 
// export const store = createContext();
function App() {
  // const store = createContext()
  const [count,setCount] = React.useState(0)
  // const [Color,setColor] = React.useState(null)
  // const getcolor=(e)=>{
  //   setColor(e)
  // }
  
  return (
    <div className="App">
      {/* <div style={{border:"2px solid black",backgroundColor:`${Color}`,height:"100%",width:"40%",margin:"auto" ,marginTop:"5%",padding:"10%"}}></div> */}
      {/* <ChildToParent getcolor={getcolor}/> */}
     {/* <Count/> */}
     {/* <Sum /> */}
     {/* <Map /> */}
     {/* <Todo /> */}
     {/* <ValidityForm /> */}

     {/* <Forming /> */}
     {/* <ChildComponent />
     <store.Provider value = {[count]}>
      <Context />
     </store.Provider> */}
     <Color />
     <Game />
     <CapitalText />
    </div>
  );
}

export default App;
