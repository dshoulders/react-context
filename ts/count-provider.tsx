import React, { createContext, FC, useContext, useState } from 'react';

const CountContext = createContext();

const CountProvider: FC = ({ children }) => {
    const [count, setCount] = useState(0);

    const value = {
        count, 
        setCount,
    }

    return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
};

const useCount = () => {
    const context = useContext(CountContext);

    return context;
};

export { CountProvider, useCount };
