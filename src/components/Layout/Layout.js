import React, { useContext } from 'react'
import { UIContext } from '../Context/UIContext'

const Layout = ({children}) => {
    const { darkMode } = useContext(UIContext)

    return (
        <div className={darkMode ? 'layout dark-body' : 'layout'}>
            {children}
        </div>
    )
}

export default Layout
