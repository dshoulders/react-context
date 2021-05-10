import React from 'react';
import { useCount } from "./count-provider";

const CountDisplay = () => {
    console.log('CountDisplay');

    const { count } = useCount();

    return (
        <div>
            { count }
        </div>
    )
}

export { CountDisplay };