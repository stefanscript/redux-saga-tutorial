import test from "tape";
import {fetchUser, incrementAsync} from "./sagas";

import {put, call} from 'redux-saga/effects'
import {delay} from "./delay";
import Api from "./api/Api";

test("incrementAsync Saga test", (assert) => {
    const generator = incrementAsync();
    
    assert.deepEqual(
        generator.next().value,
        call(delay, 1000)
    );
    assert.deepEqual(
        generator.next().value,
        put({type: "INCREMENT"})
    );
    assert.deepEqual(
        generator.next(),
        {done: true, value: undefined}
    );
    assert.end();
});

test("fetchUser saga test", (assert) => {
    const generator = fetchUser({type: "FETCH_USER_REQUESTED", payload: {url: "urlhere"}});
    
    assert.deepEqual(
        generator.next().value,
        call(Api.fetchUser, "urlhere"),
        "should fetch the user with url"
    );
    
    let user = {id: 3};
    assert.deepEqual(
        generator.next({response: user}).value,
        put({type: "FETCH_USER_SUCCEEDED", payload: user}),
        "should dispatch FETCH_USER_SUCCEEDED"
    );
    
    assert.end();
});

test("fetchUser saga test error", (assert) => {
    const generator = fetchUser({type: "FETCH_USER_REQUESTED", payload: {url: "urlhere"}});
    
    generator.next();
    
    let error = {};
    assert.deepEqual(
        generator.next({error: error}).value,
        put({type: "FETCH_USER_FAILED", error: error}),
        "should dispatch FETCH_USER_FAILED"
    );
    
    assert.end();
});