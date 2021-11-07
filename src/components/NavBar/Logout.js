import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Logout = () => {
    const { isAuth, logout } = useContext(AuthContext)

   
    return (
        <>
            {
                isAuth && <span onClick={logout}>Log Out</span>
            }
        </>
    )
}

export default Logout
