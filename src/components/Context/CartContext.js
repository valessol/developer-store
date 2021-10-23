import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState(init);

    //Saber si un producto existe en el carrito
    const isInCart = (itemId) => {
        return cart.some((item)=>Number(item.id) === Number(itemId))
    }

    //Buscar indice de un producto en el carrito
    const findItem = (itemId) => {
        return cart.findIndex((item)=> Number(item.id) ===  Number(itemId))
    } 
    
    //Añadir al carrito
    const addToCart = (item) => {
        const itemIndexInCart = findItem(item.id)

        if (itemIndexInCart) {
            cart[itemIndexInCart].selectedQuantity = item.selectedQuantity
                setCart(cart)
        } else {
            setCart([...cart, item])
        }
     
        console.log(cart)
    }

    //Vaciar carrito
    const cleanCart = () => {
        setCart([])
    }

    //Total del productos en el carrito
    const totalItems = () => {
        return cart.reduce((ac, items) => ac + items, 0)
    }

    //Monto total del carrito
    const totalPrice = () => {
        return cart.reduce((ac, item)=> ac + item.selectedQuantity * item.price, 0)
    }


    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart)
    }, [cart])


    return (
        <CartContext.Provider value={{
            cart,
            isInCart,
            findItem,
            addToCart,
            cleanCart,
            totalItems,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}


