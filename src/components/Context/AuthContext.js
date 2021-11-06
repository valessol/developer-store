import React, { createContext, useState } from 'react'
import { getAuth } from '../../firebase/config'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [ isAuth, setIsAuth ] = useState(false)
    const [ currentUser, setCurrentUser ] = useState(null)

    const auth = getAuth();
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }


    return (
        <AuthContext.Provider values={{
            isAuth,
            currentUser,
            login
        }}>
            {children}
        </AuthContext.Provider>
    )
}


