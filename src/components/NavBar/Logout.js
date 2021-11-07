import React from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../Context/AuthContext'

const Logout = () => {
    const { isAuth, logout } = useContext(AuthContext)
    const { push } = useHistory()

    const handleLogout = () => {
        isAuth && logout()
        push('/')       
    }
   
    return (
        <>
            {
                isAuth && <span onClick={handleLogout}>Log Out</span>
            }
        </>
    )
}

export default Logout
