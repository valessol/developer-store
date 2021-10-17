import React from 'react'
import Cart from './Cart'

const CartContainer = ({cart}) => {
   
    console.log(cart.length)

    

    return (
        <>
            {
                cart.length !== 0 
                    ? (
                        <div className="cart" >
                            <h2>Carrito de compras</h2>
                            <Cart cart={cart} />
                        </div>
                    ) : (
                        <h2>El carrito está vacío</h2>
                    )
            }
            
        </>
    )
}

export default CartContainer
