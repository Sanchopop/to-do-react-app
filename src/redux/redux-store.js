import {createStore} from "redux";
import columnReducer from "./column-reducer";

let store = createStore(columnReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
