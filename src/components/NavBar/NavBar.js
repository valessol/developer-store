import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import CartWidget from "./CartWidget";
import Log from "./Log";
import {Toggler} from "./Toggler";
import { Switch } from '../Switch/Switch'
import { UIContext } from '../Context/UIContext';
import { FavContext } from "../Context/FavContext";

export const NavBar = ({ brand }) => {
    const [ collapsed, setCollapsed ] = useState(false)
    const { darkMode } = useContext(UIContext)
    const { favorites } = useContext(FavContext)
  
    return (
        <header className={darkMode ? 'dark-body' : ''}>

            <div className="container">

                <div className="title">

                    <Link 
                        exact 
                        to="/" 
                        className={
                            collapsed 
                                ? 'display-none' 
                                : ''
                        }
                    >
                        <h1 
                            className={
                                darkMode 
                                    ? 'dark-text' 
                                    : ''
                            }
                        >
                            {brand}
                        </h1>
                    </Link>

                    <div className="nav-buttons">

                        <Log className='log' />

                        <div className="favs">

                            <Link exact to="products/favoritos" >

                                <div className="favs-link">

                                    {
                                        favorites.length !== 0
                                            ? <>
                                                <span 
                                                    className={
                                                        darkMode 
                                                            ? 'fav dark-hover' 
                                                            : 'fav'
                                                    }
                                                >
                                                    {favorites.length}
                                                </span>

                                                <AiFillHeart className="favorite-icon nav--icon"/>
                                            </>
                                                
                                            : 
                                             <AiOutlineHeart className="favorite-icon nav-icon"/>
                                           
                                    }

                                </div>

                            </Link>

                        </div>

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
                            exact to="/products/hombre" 
                            className={darkMode ? 'dark-link' : ''} 
                            activeClassName="active"
                        >
                            Hombre
                        </NavLink>

                        <NavLink 
                            exact to="/products/mujer" 
                            className={darkMode ? 'dark-link' : ''} 
                            activeClassName="active"
                        >
                            Mujer
                        </NavLink>

                        <NavLink 
                            exact to="/products/accesorios" 
                            className={darkMode ? 'dark-link' : ''}     activeClassName="active"
                        >
                            Accesorios
                        </NavLink>

                    </nav>

                    <Link 
                        exact 
                        to="/cart"
                        className={darkMode ? 'cartWidget-container dark-hover' : 'cartWidget-container'}
                    >
                        <CartWidget />
                    </Link>

                </div>

                <hr className="hr-styleLine" />

            </div>

        </header>
    );
};
