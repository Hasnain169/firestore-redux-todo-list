import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { compose } from "redux";
import index from "./reducer/index";
const comp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    index,
    comp(applyMiddleware(thunk))
);
export default store;