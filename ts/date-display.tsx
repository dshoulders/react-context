import React from 'react';
import { useDate } from "./date-provider";

const DateDisplay = () => {
    console.log('DateDisplay');

    const { date } = useDate();

    return (
        <div>
            { date && date.toLocaleString() }
        </div>
    )
}

export { DateDisplay };