import React, { createContext, useState } from 'react'


export const UIContext = createContext();


export const UIProvider = ({children}) => {
    const [ loader, setLoader] = useState(false)

    return (
        <UIContext.Provider value={{
            loader,
            setLoader
        }}>
            {children}
        </UIContext.Provider>
    )
}


