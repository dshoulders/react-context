import React from 'react';
import { render } from 'react-dom';

import { CountProvider } from './count-provider';
import { DateProvider } from './date-provider';
import { Root } from './root';

render(
    <CountProvider>
        <DateProvider>
            <Root />
        </DateProvider>
    </CountProvider>, 
    document.getElementById('app'),
);
