import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState(init);

    const addToCart = (item) => {
        setCart([...cart, item])
        console.log(cart)
    }

    const totalItems = () => {
        return cart.reduce((ac, items) => ac + items, 0)
    }

    const totalPrice = () => {
        return cart.reduce((ac, item)=> ac + item.selectedQuantity * item.price, 0)
    }

    const cleanCart = () => {
        setCart([])
    }

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart)
    }, [cart])


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            totalItems,
            totalPrice,
            cleanCart
        }}>
            {children}
        </CartContext.Provider>
    )
}


