import React from 'react';
import { useDate } from "./date-provider";

const DateActions = () => {
    console.log('DateActions');

    const { setDate } = useDate();

    return (
        <div>
            <button onClick={() => setDate(new Date())}>Capture Date</button>
        </div>
    )
}

export { DateActions };