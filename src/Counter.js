/*eslint-disable no-unused-vars */
import React, {Component} from 'react';
import PropTypes from "prop-types";

const Counter = ({counter, onIncrement, onIncrementAsync, onDecrement}) =>
    (<div>
        <button onClick={onIncrementAsync}>
            Increment after 1 sec
        </button>
        {' '}
        <button onClick={onIncrement}>
            Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
            Decrement
        </button>
        <hr/>
        <div>
            Clicked: {counter} times
        </div>
    </div>);

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrementAsync: PropTypes.func.isRequired
};

export default Counter
