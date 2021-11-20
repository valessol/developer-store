import React from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../Context/AuthContext'
import { UIContext } from '../Context/UIContext'

const Log = ({className}) => {
    const { isAuth, logout } = useContext(AuthContext)
    const { darkMode } = useContext(UIContext)
    const { push } = useHistory()

    const handleLogin = () => {
        !isAuth &&
        push('/login')       
    }

    const handleLogout = () => {
        isAuth && logout()
        push('/')       
    }
   
    return (
        <>
            {
                isAuth 
                    ? <span className={darkMode ? `${className} dark-hover` : className} onClick={handleLogout}>Log Out</span>
                    : <span className={darkMode ? `${className} dark-hover` : className} onClick={handleLogin}>Log In</span>
            }
        </>
    )
}

export default Log
