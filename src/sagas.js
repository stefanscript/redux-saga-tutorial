import {call, put, takeEvery, all, takeLatest} from "redux-saga/effects";
import {delay} from "./delay";
import Api from "./api/Api";

function* helloSaga() {
    console.log("Hello World!");
}

export function* incrementAsync() {
    yield call(delay, 1000);
    yield put({type: "INCREMENT"});
}

function* watchIncrementAsync() {
    yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* fetchData(action) {
    try {
        const user = yield call(Api.fetchUser, action.payload.url);
        yield put({
            type: "FETCH_USER_SUCCEEDED",
            payload: user
        })
    } catch (error) {
        yield put({type: "FETCH_USER_FAILED", error});
    }
}

function* watchFetchUser() {
    yield takeLatest("FETCH_USER_REQUESTED", fetchData);
    
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        watchFetchUser()
    ])
}
