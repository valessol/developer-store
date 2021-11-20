import React, { createContext, useEffect, useState } from 'react'

export const FavContext = createContext()

const init = JSON.parse(localStorage.getItem('favorites')) || [];

export const FavProvider = ({children}) => {
    const [favorites, setFavorites] = useState(init);
    
    const addFavorites = (item) => {
        setFavorites([...favorites, item])
    }
    
    const removeFavorites = (itemId) => {
        setFavorites(favorites.filter((item)=>item.id !== itemId))
    }

    const itemAddedToFavorites = (itemId) => {
        return favorites.some((item)=> item.id === itemId)
    }
    
    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return (
        <FavContext.Provider value={
            {
                favorites,
                addFavorites,
                removeFavorites,
                itemAddedToFavorites
            }
        }>
            {children}
        </FavContext.Provider>
    )
}