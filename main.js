import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import createSageMiddleware from "redux-saga";
import Counter from './Counter'
import reducer from './reducers'
import {helloSaga} from "./sagas";

const sagaMiddleware = createSageMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(helloSaga);

const action = type => store.dispatch({type});

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => action('INCREMENT')}
            onDecrement={() => action('DECREMENT')}/>,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
