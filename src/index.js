import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'

let renderTree = (state) => {
    ReactDOM.render(
        <Provider store={store}>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}/>
        </Provider>,
        document.getElementById('root'));
};

renderTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderTree(state);
});

serviceWorker.unregister();
