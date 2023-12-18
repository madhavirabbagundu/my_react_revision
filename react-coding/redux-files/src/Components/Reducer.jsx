// import store from "./Store";
const count = 0;
const string = "";
export function Reducer(state = count,action){

  
        switch (action.type) {
            case "INCREMENT":
                return state+action.payload;
           case "DECREMENT":
            return state-action.payload;
           
            default:
                return state;
        }
}
export function ReducerString(state = string,action){

    // switch(action.type){
    //     case "Todo":
    //         return state+action.payload;
    //         default:
    //             return "Enter something"
    // }

}
// store.dispatch({type:"INCREMENT"});
// store.dispatch({type:"DECREMENT"});