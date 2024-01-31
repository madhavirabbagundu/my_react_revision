import { createStore } from "redux";
import { Reducer } from "./Reducer";
import {ReducerString} from "./Reducer"
import { combineReducers } from "redux";
import { LoginReducer } from "./Reducer";
import { ApiCallingReducer } from "./Reducer";
import { applyMiddleware } from "redux";

import { thunk } from "redux-thunk";

let reducers = combineReducers(
 {
    counting : Reducer,
    stringData :ReducerString
});
const store = createStore(ApiCallingReducer,applyMiddleware(thunk));

export default store;