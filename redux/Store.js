import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducers";
const reducer = combineReducers(Reducer)
export default Store = createStore(reducer,applyMiddleware(thunk))