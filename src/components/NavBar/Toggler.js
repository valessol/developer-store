import React, { useContext } from 'react'
import { AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Switch } from '../Switch/Switch';
import { UIContext } from '../Context/UIContext';
import Log from './Log';


export const Toggler = ({ collapsed, setCollapsed }) => {
    const { darkMode } = useContext(UIContext)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }


    const menuItems = [
        {
            to: '/products/favoritos',
            title: 'Mis favoritos',
            separator: true
        },
        {
            to: '/cart',
            title: 'Carrito',
            separator: true
        },
        {
            to: '/',
            title: 'Todos los productos',
            separator: true
        },
        {
            to: '/products/hombre',
            title: 'Hombre'
        },
        {
            to: '/products/mujer',
            title: 'Mujer'
        },
        {
            to: '/products/accesorios',
            title: 'Accesorios'
        }
    ]


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

                {
                    menuItems.map((item, index)=>{
                        return (
                            <>
                                {
                                    item.separator && <div className="line"></div>
                                }
                                
                                <Link 
                                    key={index}
                                    exact 
                                    to={item.to}
                                    className='log-collapsed'
                                    onClick={toggleCollapsed}
                                >
                                    {item.title}
                                </Link>
                            </>
                        )
                    })
                }

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
