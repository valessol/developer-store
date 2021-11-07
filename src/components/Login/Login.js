import React, { useContext, useState } from 'react'
import { UIContext } from '../Context/UIContext'
import { RegisterForm } from './RegisterForm'
import { LoginForm } from './LoginFom'

export const Login = () => {
    const { loader, setLoader } = useContext(UIContext)
    const [ isRegister, setIsRegister] = useState(true)
//NOTE: enviar loader y set loader directo al registerform?

    const handleRegister = () => {
        return setIsRegister(!isRegister)
    }


    return (
        <div className="cardContainer">
            {
                isRegister 
                    ?
                        <>
                            <h2>Inicia Sesión</h2>
                            <LoginForm handleRegister={handleRegister}/>
                        </>
                    :
                        <>
                            <h2>Crear cuenta</h2>
                            <RegisterForm setLoader = {setLoader} loader={loader} handleRegister={handleRegister}/>
                        </>
            }
        </div>
    )
}

