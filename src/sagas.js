import {call, put, takeEvery, all} from "redux-saga/effects";

function* helloSaga() {
    console.log("Hello World!");
}

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
    yield call(delay, 1000);
    yield put({type: "INCREMENT"});
}

function* watchIncrementAsync() {
    yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
