import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UIContext } from '../../Context/UIContext'

const Category = ({gender, category}) => {
    const { darkMode } = useContext(UIContext)
    
    return (
        <h4 className={darkMode ? 'category dark-text' : 'category'}>Categoría:  
            <span> 
                <Link exact to={`/${gender}`}> 
                    {gender} 
                </Link> 
                <span> / </span>
                <Link exact to={`/${category}`}> 
                    {category}
                </Link>
            </span>
        </h4>
    )
}

export default Category
