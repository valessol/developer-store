import React, { useContext, useState } from 'react'
import { UIContext } from '../Context/UIContext'
import { RegisterForm } from './RegisterForm'
import { LoginForm } from './LoginFom'
import { useHistory } from 'react-router'

export const Login = ({fromCheckout}) => {
    const { loader, setLoader } = useContext(UIContext)
    const [ isRegister, setIsRegister] = useState(true)
    const { goBack, push } = useHistory()
//NOTE: enviar loader y set loader directo al registerform?

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
                            <RegisterForm setLoader = {setLoader} loader={loader} handleRegister={handleRegister} handleRedirect={handleRedirect}/>
                        </>
            }
        </div>
    )
}

