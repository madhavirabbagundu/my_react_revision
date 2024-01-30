// import { combineReducers } from "redux";

import { Count } from "./Count";

// import store from "./Store";

const login = {
    name:"",
    number:""
}
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

export function LoginReducer(state = login,action){
    console.log(action.payload)
    switch(action.type){
        case "LoginPage":
            return {...state,
                name:action.payload.name,
                number:action.payload.number
               }
           
                default:
                    return state;
    }

}

// store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"DECREMENT"});