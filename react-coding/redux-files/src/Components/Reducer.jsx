// import store from "./Store";
const count = 0;
function Reducer(state = count,action){

  
        switch (action.type) {
            case "INCREMENT":
                return state+action.payload;
           case "DECREMENT":
            return state-action.payload;
            default:
                return state;
        }
}
export { Reducer }

// store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"DECREMENT"});