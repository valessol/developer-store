import React, { createContext, useEffect, useState } from 'react'
import { getAuth, provider } from '../../firebase/config'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [ isAuth, setIsAuth ] = useState(false);
    const [ currentUser, setCurrentUser ] = useState(null);

    const auth = getAuth();

    //Iniciar sesión

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut();
    }

    const googleLogin = () => {
        return auth.signInWithPopup(provider);
    }

    //Registrarse
    const register = (email, password, fullname, phone) => {
        return auth.createUserWithEmailAndPassword(email, password, fullname, phone)
    }

    useEffect (()=> {
        currentUser
            ? setIsAuth(true)
            : setIsAuth(false)
    }, [currentUser])

    useEffect(()=>{
        const unsuscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            console.log('unsuscribe', user);
        })
        return () => {
            unsuscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            currentUser,
            login,
            logout, 
            googleLogin, 
            register
        }}>
            {children}
        </AuthContext.Provider>
    )
}


