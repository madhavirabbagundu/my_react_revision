import './App.css';
import React from 'react';
// import { IncAction } from './Components/Actions';
// import { DecAction } from './Components/Actions';
// import { BackgroundColor } from './Components/BackgroundColor';
// import { createContext } from 'react';
// import {ContextChild} from './Components/ContextChild'
import { connect } from 'react-redux';
// export const userContext = createContext(null);
function App({ local_state,IncAction,DecAction }) {
  // const [count,setCount] = React.useState(0);
  // const [input,setInput] = React.useState("")
  // const [show,setShow] = React.useState(false);
  // const [data,setData] = React.useState([])

  return(
    <>
    <h1>Redux:{ local_state }</h1>
    <button onClick = {IncAction}>INC</button>
   <button onClick = {DecAction}>DEC</button>
    </>
//  <userContext.Provider value = {{count,setCount,input,setInput,setShow,show,data,setData}}>
//   <div>
// <ContextChild />
// </div>
//  </userContext.Provider>
  )
 
}

const mapStateToProps = (state) =>({
  local_state : state
})
const mapDispatchToProps = (dispatch) => ({
  IncAction: () => dispatch({ type: 'INCREMENT' }),
  DecAction: () => dispatch({ type: 'DECREMENT' }),
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
