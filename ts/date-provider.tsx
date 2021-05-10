import React, { createContext, FC, useContext, useState } from 'react';

const DateContext = createContext();

const DateProvider: FC = ({ children }) => {
    const [date, setDate] = useState(new Date());

    const value = {
        date, 
        setDate,
    }

    return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

const useDate = () => {
    const context = useContext(DateContext);
    
    return context;
};

export { DateProvider, useDate };