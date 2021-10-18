import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({gender, category}) => {
    return (
        <h4 className="category">Categoría:  
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
