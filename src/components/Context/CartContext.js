import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext();

//const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item])
        console.log(cart)
    }


    // useEffect(()=>{
    //     localStorage.setItem('cart', JSON.stringify(cart))
    // }, [cart])


    return (
        <CartContext.Provider value={{
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}


