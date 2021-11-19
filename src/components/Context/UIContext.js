import React, { createContext, useEffect, useState } from 'react'


export const UIContext = createContext();

const initialTheme = JSON.parse(localStorage.getItem('theme')) || false;

export const UIProvider = ({children}) => {
    const [ loader, setLoader] = useState(false)
    const [ darkMode, setDarkMode ] = useState(initialTheme)


    useEffect(()=>{
        localStorage.setItem('theme', JSON.stringify(darkMode))
    }, [darkMode])

    return (
        <UIContext.Provider value={{
            loader,
            darkMode,
            setLoader,
            setDarkMode
        }}>
            {children}
        </UIContext.Provider>
    )
}


