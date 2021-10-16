import React from 'react'
import { Button } from 'antd'
import './cart.css'

const Cart = ({cart}) => {
    return (
        <>

            <div className="cart__layout">

                <div>
                    <h3>Producto</h3>
                    {[
                        cart.map((item)=>{
                            return (
                                <div key={item.id}>
                                    <img className="cart__image" src={item.img} alt={item.name}/>
                                    <p>{item.name}</p>
                                </div>
                            )
                        })
                    ]}
                </div>

                <div>
                    <h3>Cantidad</h3>
                 
                    <p>?</p>
                </div>
                <div>
                    <h3>Precio</h3>
                    {[
                        cart.map((item)=>{
                            return (
                                <p>{item.price}</p>
                            )
                        })
                    ]}
                </div> 
            </div> 

            <div className="cart__resume">
                <h3>Subtotal</h3>
                <h3>IVA</h3>
                <hr/>
                <h3>TOTAL</h3>
            </div>
                
            
            
                <div className="buttons-card">
                    <Button type="primary" shape="round" className="button" >Finalizar compra</Button> 
                </div>
        </>
    )
}

export default Cart
