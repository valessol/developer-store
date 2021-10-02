import React from 'react'
import { BsBag } from 'react-icons/bs'
import './navBar.css'

export const NavBar = ({brand}) => {
    return (
        <header>
            <div className="title">
               <h1>{brand}</h1>
               <BsBag className="bs-icon"/>
            </div>
            <hr />
            <nav>
                <p>Todos</p>
                <p>Hombre</p>
                <p>Mujer</p>
                <p>Accesorios</p>
            </nav>
            <hr />
        </header>
    )
}
