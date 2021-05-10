import React from 'react';
import { useCount } from "./count-provider";

const CountActions = () => {
    console.log('CountActions');

    const { setCount } = useCount();

    return (
        <div>
            <button onClick={() => setCount(count => count - 1)}>Decrement</button>
            <button onClick={() => setCount(count => count + 1)}>Increment</button>
        </div>
    )
}

export { CountActions };