import { createStore } from "redux";
import { Reducer } from "./Reducer";
import {ReducerString} from "./Reducer"
import { combineReducers } from "redux";

// let reducers = combineReducers(
//  {
//     // counting : Reducer,
//     // stringData :ReducerString
// });
const store = createStore(Reducer);

export default store;