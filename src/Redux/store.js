import {createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "../Reducers/Index"


const middleware = [thunk];

const InitState = {

}


const store = createStore(rootReducer,InitState,composeWithDevTools(applyMiddleware(...middleware)));


export default store;