import React, { useContext } from 'react'
import { Button } from 'antd'
import { CartContext } from '../Context/CartContext'
import Quantity from '../ItemDetail/Quantity/Quantity'

const Cart = () => {

    const { cart, totalPrice } = useContext(CartContext)
    

    return (
        <>

            <div className="cart__layout">

                <div>
                    <h3>Producto</h3>
                    {
                        cart.map((item)=>{
                            return (
                                <div key={item.id} className="cart__description">

                                    <img 
                                        className="cart__image" 
                                        src={item.img} 
                                        alt={item.name}/>
                                    
                                    <div className="cart__text">
                                        <h4>{item.name}</h4>
                                        <div className="cart__props">
                                            <div>
                                                Color: 
                                            </div>
                                            <div className="style__color cart__style" style={{backgroundColor: item.selectedColor}} ></div>
                                        </div>
                                        <div className="cart__props">
                                            <div>
                                                Talle: 
                                            </div>
                                            <div className="cart__style" >{item.selectedSize}</div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

                <div>
                    <h3>Cantidad</h3>
                 
                    {
                        cart.map((item)=>{
                            return (
                                <div key={item.id}>

                                    <Quantity>{item.selectedQuantity}</Quantity>
                                    
                                </div>
                            )
                        })
                    }
                </div>

                <div>
                    <h3>Precio</h3>
                    {[
                        cart.map((item)=>{
                            return (
                                <p>{item.price * item.selectedQuantity}</p>
                            )
                        })
                    ]}
                </div> 

            </div> 

            <div className="cart__resume">

                <div className="resume-item">
                    <h4>Subtotal</h4>
                    <p>{totalPrice()}</p>
                </div>

                <div className="resume-item">
                    <h4>IVA</h4>
                    <p>{totalPrice() * 0.21}</p>
                </div>

                <hr />

                <div className="resume-item">
                    <h3>TOTAL</h3>
                    <p>{totalPrice() * 1.21}</p>
                </div>
                
            </div>
                
            
            
                <div className="buttons-card">
                    <Button type="primary" shape="round" className="button" >Finalizar compra</Button> 
                </div>
        </>
    )
}

export default Cart
