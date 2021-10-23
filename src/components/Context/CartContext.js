import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState(init);

    //Buscar un producto
    const findItem = (itemId) => {
        return cart.find(item => item.id === itemId)
    }

    //Agregar producto al carrito
    const addToCart = (item) => {
        setCart([...cart, item])
        console.log(cart)
    }

    //Eliminar producto del carrito
    const deleteItem = (itemId) => {
        const newCart = cart.filter(item => item.id !== itemId)
        setCart(newCart)
    }

    //Total de pruductos en carrito
    const totalItems = () => {
        return cart.reduce((ac, items) => ac + items, 0)
    }

    //Monto total del carrito
    const totalPrice = () => {
        return cart.reduce((ac, item)=> ac + item.selectedQuantity * item.price, 0)
    }

    //Vaciar carrito
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
            findItem,
            addToCart,
            deleteItem,
            totalItems,
            totalPrice,
            cleanCart
        }}>
            {children}
        </CartContext.Provider>
    )
}


