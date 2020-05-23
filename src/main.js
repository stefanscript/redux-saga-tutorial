import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from "redux-saga";
import Counter from './Counter'
import {counter, user} from './reducers'
import rootSaga from "./sagas";
import App from "./App";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({counter, user}),
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

function render() {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    )
}

render();
store.subscribe(render);
