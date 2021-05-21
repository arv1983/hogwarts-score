import { createStore, combineReducers, applyMiddleware } from "redux";
import { ScoreHandler } from "./modules/housesScore/reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({ list: ScoreHandler });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
