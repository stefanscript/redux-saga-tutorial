import React from "react";
import Counter from "./Counter";
import UserView from "./User";

export default function App({store}) {
    console.log("store", store.getState());
    const action = (type, payload) => store.dispatch({type, payload});
    
    return (<div>
        <Counter
            counter={store.getState().counter}
            onIncrement={() => action('INCREMENT')}
            onDecrement={() => action('DECREMENT')}
            onIncrementAsync={() => action('INCREMENT_ASYNC')}
        />
        <UserView user={store.getState().user}
                  onFetchUser={() => action('FETCH_USER_REQUESTED', {url: "http://user.repo.23124124.com"})}
        />
        <div/>
    </div>);
}