import React, { useContext } from 'react'
import { UIContext } from '../Context/UIContext'

const ClientResume = ({actualClient}) => {
    const { darkMode } = useContext(UIContext)

    return (
        <div className="cart__checklist cart__checklist-data">
            <h3 className={darkMode ? 'dark-text' : ''}>Tus datos:</h3>
                
            <ul>
                <li>Nombre: {actualClient.displayName}</li>
                <li>Email: {actualClient.email}</li>
                <li>Teléfono: {actualClient.phoneNumber}</li>
            </ul>
                
        </div>
    )
}

export default ClientResume
