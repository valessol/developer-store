import React, { createContext, useEffect, useState } from 'react'
import { getAuth, provider } from '../../firebase/config'
import firebase from 'firebase/app'

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
    const register = (email, password, name, phone) => {
        return auth.createUserWithEmailAndPassword(email, password, name, phone)
    }

    //Obtener los datos del usuario
    const currentClient = () => {
        const user = firebase.auth().currentUser;
        if (user !==null) {
            const client = {
                email: user.email,
                name: user.displayName,
                phone: (user.phoneNumber !== null && user.phoneNumber !== undefined) ? user.phoneNumber : ''
            }
            return client
        }
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
            register,
            currentClient
        }}>
            {children}
        </AuthContext.Provider>
    )
}


