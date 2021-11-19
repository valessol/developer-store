import React, { useContext } from 'react'
import { AiOutlineMenu} from 'react-icons/ai'
import Log from './Log';
import { Link } from 'react-router-dom';
import { Switch } from '../Switch/Switch';
import { UIContext } from '../Context/UIContext';


export const Toggler = ({ collapsed, setCollapsed }) => {
    const { darkMode } = useContext(UIContext)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <nav className='nav-container-toggler'>
            <div 
                className="nav-toggler"
                onClick={toggleCollapsed}
            >
                <AiOutlineMenu 
                    className="toggler"
                />
            </div>

            <div className={!collapsed ? "display-none" : "nav-links"}>
                <Log 
                    className='log-collapsed' 
                    onClick={toggleCollapsed}
                />
                <div className="line"></div>
                <Link 
                    exact 
                    to="/cart" 
                    className="nav-link"
                    onClick={toggleCollapsed}
                >
                    Carrito
                </Link>
                <div className="line"></div>
                <Link 
                    exact 
                    to="/" 
                    className="nav-link"
                    onClick={toggleCollapsed}
                >
                    Todos los productos
                </Link>
                <Link 
                    exact 
                    to="/hombre" 
                    className="nav-link"
                    onClick={toggleCollapsed}
                >
                    Hombre
                </Link>
                <Link 
                    exact 
                    to="/mujer" 
                    className="nav-link"
                    onClick={toggleCollapsed}
                >
                    Mujer
                </Link>
                <Link 
                    exact 
                    to="/accesorios" 
                    className="nav-link"
                    onClick={toggleCollapsed}
                >
                    Accesorios
                </Link>
                <div className="line"></div>
                <Switch 
                    className="switch-btn-collapsed"
                    title={darkMode ? 'Tema Claro' : 'Tema Oscuro'}
                    onClick={toggleCollapsed}
                />
            </div>
        </nav>
    );

}
