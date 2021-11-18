import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Log from "./Log";
import {Toggler} from "./Toggler";


export const NavBar = ({ brand }) => {
    const [ collapsed, setCollapsed ] = useState(false)
  
    return (
        <header className="container">
            <div className="title">
                <Link exact to="/" className={collapsed && 'display-none'}>
                    <h1>{brand}</h1>
                </Link>
                <Log className='log' />
                <Toggler collapsed={collapsed} setCollapsed={setCollapsed} />
            </div>
            <hr className="hr-styleLine" />
            <div className="nav-container">
                <nav>
                    <NavLink exact to="/" activeClassName="active">Todos</NavLink>
                    <NavLink exact to="/hombre" activeClassName="active">Hombre</NavLink>
                    <NavLink exact to="/mujer" activeClassName="active">Mujer</NavLink>
                    <NavLink exact to="/accesorios" activeClassName="active">Accesorios</NavLink>
                </nav>
                <Link exact to="/cart">
                    <CartWidget />
                </Link>
            </div>
            <hr className="hr-styleLine" />
        </header>
    );
};
