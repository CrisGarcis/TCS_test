import React, { createContext } from 'react';
export const SecurityContext = createContext([]);
export const SecurityContextProvider = ({ children }) => {
    const validateText=()=>{
        
    }
    return (<SecurityContext.Provider value={[{}, {validateText}]}>
        {children}
    </SecurityContext.Provider>)
}