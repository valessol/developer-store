import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Log from "./Log";
import {Toggler} from "./Toggler";
import { Switch } from '../Switch/Switch'
import { UIContext } from '../Context/UIContext';

export const NavBar = ({ brand }) => {
    const [ collapsed, setCollapsed ] = useState(false)
    const { darkMode } = useContext(UIContext)
  
    return (
        <header className={darkMode ? 'dark-body' : ''}>

            <div className="container">

                <div className="title">

                    <Link exact to="/" className={collapsed ? 'display-none' : ''}>
                        <h1 className={darkMode ? 'dark-text' : ''}>{brand}</h1>
                    </Link>

                    <div className="nav-buttons">

                        <Log className='log' />
                        <Switch className="switch-btn"/>

                    </div>

                    <Toggler collapsed={collapsed} setCollapsed={setCollapsed} />

                </div>

                <hr className="hr-styleLine" />

                <div className="nav-container">

                    <nav>
                        <NavLink 
                            exact to="/" 
                            className={darkMode ? 'dark-link' : ''} 
                            activeClassName="active"
                        >
                            Todos
                        </NavLink>

                        <NavLink 
                            exact to="/hombre" 
                            className={darkMode ? 'dark-link' : ''} 
                            activeClassName="active"
                        >
                            Hombre
                        </NavLink>

                        <NavLink 
                            exact to="/mujer" 
                            className={darkMode ? 'dark-link' : ''} 
                            activeClassName="active"
                        >
                            Mujer
                        </NavLink>

                        <NavLink 
                            exact to="/accesorios" 
                            className={darkMode ? 'dark-link' : ''}     activeClassName="active"
                        >
                            Accesorios
                        </NavLink>

                    </nav>

                    <Link exact to="/cart">
                        <CartWidget />
                    </Link>

                </div>

                <hr className="hr-styleLine" />

            </div>

        </header>
    );
};
