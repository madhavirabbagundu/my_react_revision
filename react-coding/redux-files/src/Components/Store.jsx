import { createStore } from "redux";
import { Reducer } from "./Reducer";
import {ReducerString} from "./Reducer"

const store = createStore(Reducer,ReducerString);

export default store;