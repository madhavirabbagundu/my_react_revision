import { createStore } from "redux";
import { Reducer } from "./Reducer";
import {ReducerString} from "./Reducer"
import { combineReducers } from "redux";
import { LoginReducer } from "./Reducer";

let reducers = combineReducers(
 {
    counting : Reducer,
    stringData :ReducerString
});
const store = createStore(LoginReducer);

export default store;