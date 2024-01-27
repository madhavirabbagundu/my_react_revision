// import { combineReducers } from "redux";

import { Count } from "./Count";

// import store from "./Store";
const count = 0;
const string = "";
export function Reducer(state = count,action){

  
        switch (action.type) {
            case "INCREMENT":
                return state+action.payload;
           
           
            default:
                return state;
        }
}
export function ReducerString(state = count,action){
    console.log(state,action.payload,"payloading")

    switch(action.type){
        case "DECREMENT":
            return state-action.payload;
            default:
                return state;
    }

}

// store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"DECREMENT"});