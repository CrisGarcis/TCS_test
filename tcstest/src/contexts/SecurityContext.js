import React, { createContext, useState } from 'react';
export const STATUS_LOADED = "LOADED";
export const STATUS_LOADING = "LOADING";

const initialState = {
    status: STATUS_LOADED,
    repeats: []
}
export const SecurityContext = createContext([]);
export const SecurityContextProvider = ({ children }) => {
    const [repeats, setrepeats] = useState(initialState);
    const validateText = ({ text_validate }) => {
        if (repeats.status === STATUS_LOADED) {
            setrepeats({ ...repeats, status: STATUS_LOADING });
            //remover caracteres espaciales
            text_validate = removeSpecialCaracters(text_validate);
            //convertir a minùscula y array
            let arrayLower = text_validate.toLowerCase().split(/[\s\.,]+/g);;

            let response = {};
            arrayLower.forEach(text => {
                response[text] = (response[text] || 0) + 1;
            });
            setrepeats({ ...repeats, status: STATUS_LOADED, repeats: Object.entries(response).filter(a => a[1] > 1) });
        }

    }
    const removeSpecialCaracters = (text_validate) => {
        var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
        for (var i = 0; i < specialChars.length; i++) {
            text_validate = text_validate.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
        }
        return text_validate;

    }
    const required = (value) => (value ? undefined : "Ingrese un texto")


    return (<SecurityContext.Provider value={[{ repeats }, { validateText, required }]}>
        {children}
    </SecurityContext.Provider>)
}