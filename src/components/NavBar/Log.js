import React from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../Context/AuthContext'

const Log = () => {
    const { isAuth, logout } = useContext(AuthContext)
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
                    ? <span onClick={handleLogout}>Log Out</span>
                    : <span onClick={handleLogin}>Log In</span>
            }
        </>
    )
}

export default Log
