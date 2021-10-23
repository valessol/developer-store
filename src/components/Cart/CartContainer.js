import { Button } from 'antd'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
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
                        <>
                            <h2>El carrito está vacío</h2>
                            <Link to="/" >
                                <Button 
                                    className="button cart-button"
                                    type="primary"
                                    shape="round"
                                >
                                        Volver al inicio
                                </Button>
                            </Link>
                        </>
                    )
            }
            
        </>
    )
}

export default CartContainer
