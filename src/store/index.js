import { createStore, combineReducers } from "redux";
import resultReducer from "./modules/Result/reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({ result: resultReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
