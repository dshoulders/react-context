import React from 'react';
import { CountActions } from "./count-actions";
import { CountDisplay } from "./count-display";

const Count = ({}) => {
    console.log('Count');
    return (<div>
        <CountDisplay />
        <CountActions />
    </div>);
};

export { Count };