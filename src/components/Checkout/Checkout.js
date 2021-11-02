import React, { useContext } from 'react'
import { Redirect } from 'react-router';
import { CartContext } from '../Context/CartContext';
import { DataForm } from '../Form/Form';



const Checkout = () => {
    const { cart } = useContext(CartContext)

        
  return (
      <>
        { cart.length === 0 && <Redirect to="/" />}

        <div className="cart">
            <h2>Resumen de compra</h2>
            <div className="cart__checkout" >
                <div className="cart__checklist">
                    <h3>Tu pedido:</h3>
                    <ul>
                        {
                            cart.length !== 0 
                            && cart.map((product)=>{
                                return (
                                    <li>{product.selectedQuantity} x {product.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="cart__form">
                    <h3>Tus datos:</h3>
                    <DataForm />
                </div>
            </div>
        </div>
    </>
  );
};


export default Checkout
