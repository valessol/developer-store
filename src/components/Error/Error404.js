import React, { useContext } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { UIContext } from '../Context/UIContext'
import Lottie from 'react-lottie'
import error404Json from './error404Json.json'

const Error404 = () => {
    const { darkMode } = useContext(UIContext)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: error404Json
    }

    return (
        <div className="container">
            <div className="error">

                <h2 className={darkMode ? 'dark-text' : ''}>Lo sentimos... parece que esta página no existe</h2>
                <Lottie options={defaultOptions} />

                <Link to="/" >
                    <Button 
                        className={darkMode ? 'button cart-button dark-button' : 'button cart-button'}
                        type="primary"
                        shape="round"
                    >
                            Volver al inicio
                    </Button>
                </Link>
                
            </div>
        </div>
    )
}

export default Error404
