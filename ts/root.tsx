import React from 'react';
import { Count } from './count';
import { DateWrapper } from './date';

const Root = () => {
    console.log('Root')
    return (
        <div>
            <Count />
            <DateWrapper />
        </div>
    )
};

export { Root }; 