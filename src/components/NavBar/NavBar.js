import React from 'react'
import { CartWidget } from './CartWidget'
import './navBar.css'

export const NavBar = ({brand, icon}) => {
    return (
        <header>
            <div className="title">
               <h1>{brand}</h1>
               <CartWidget icon={icon} />
            </div>
            <hr />
            <nav>
                <p>Hombre</p>
                <p>Mujer</p>
                <p>Accesorios</p>
            </nav>
            <hr />
        </header>
    )
}
