import React, { createContext } from 'react';
export const SecurityContext = createContext([]);
export const SecurityContextProvider = ({ children }) => {
    return (<SecurityContext.Provider value={[{}, {}]}>
        {children}
    </SecurityContext.Provider>)
}