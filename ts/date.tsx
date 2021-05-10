import React from 'react';
import { DateActions } from "./date-actions";
import { DateDisplay } from "./date-display";

const DateWrapper = ({}) => {
    console.log('Date');
    return (<div>
        <DateDisplay />
        <DateActions />
    </div>);
};

export { DateWrapper };