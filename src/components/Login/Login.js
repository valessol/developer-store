import React, { useState } from 'react'
import { RegisterForm } from './RegisterForm'
import { LoginForm } from './LoginFom'
import { useHistory } from 'react-router'

export const Login = ({fromCheckout}) => {
    const [ isRegister, setIsRegister] = useState(true);
    const { goBack, push } = useHistory()


    const handleRegister = () => {
        return setIsRegister(!isRegister)
    }

    const handleRedirect = () => {
        if (fromCheckout) {
            push('/checkout')
        } else {
            goBack()
        }
    }


    return (
        <div className="cardContainer">
            {
                isRegister 
                    ?
                        <>
                            <h2>Inicia Sesión</h2>
                            <LoginForm 
                                handleRegister={handleRegister}
                                handleRedirect={handleRedirect}
                            />
                        </>
                    :
                        <>
                            <h2>Crear cuenta</h2>
                            <RegisterForm 
                                handleRegister={handleRegister}
                                handleRedirect={handleRedirect}
                            />
                        </>
            }
        </div>
    )
}

