import test from "tape";
import { incrementAsync} from "./sagas";

import { put, call } from 'redux-saga/effects'
import {delay} from "./delay";

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