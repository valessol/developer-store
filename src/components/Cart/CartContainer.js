import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import Cart from './Cart'

const CartContainer = () => {
   
    const { cart } = useContext(CartContext)

    return (
        <>
            {
                cart.length !== 0 
                    ? (
                        <div className="cart" >
                            <h2>Carrito de compras</h2>
                            <Cart />
                        </div>
                    ) : (
                        <h2>El carrito está vacío</h2>
                    )
            }
            
        </>
    )
}

export default CartContainer
