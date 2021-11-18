import React, { useEffect, useState } from 'react'
import { getFirestore } from '../../firebase/config'
import { NewClientForm } from '../Login/NewClientForm'

const ClientResume = ({actualClient}) => {

    return (
        <div className="cart__checklist">
            <h3>Tus datos:</h3>
                
            <ul>
                <li>Nombre: {actualClient.displayName}</li>
                <li>Email: {actualClient.email}</li>
                <li>Teléfono: {actualClient.phoneNumber}</li>
            </ul>
                
        </div>
    )
}

export default ClientResume