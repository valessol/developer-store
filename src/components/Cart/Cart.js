import React, { useContext } from 'react'
import { Button } from 'antd'
import { CartContext } from '../Context/CartContext'
import { RiDeleteBin6Line } from 'react-icons/ri'


const Cart = () => {

    const { cart, totalPrice, cleanCart, deleteItem } = useContext(CartContext)
    
    
    return (
        <>
            <table className="first-table">
                <tr>
                    <th className="left">Producto</th>
                    <th className="center">Precio</th>
                    <th className="center"></th>
                </tr>
                {
                    cart.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <table className="second-table">
                                        <tr>
                                            <td>
                                                <img 
                                                    className="cart__image" 
                                                    src={item.img} 
                                                    alt={item.name}/>
                                            </td>
                                            <td>
                                                <div className="cart__text">
                                                    <h4>{item.name}</h4>

                                                    <div className="cart__props">
                                                        <div>
                                                            Color: 
                                                        </div>
                                                        <div className="style__color cart__style" style={{backgroundColor: item.selectedColor}} ></div>
                                                    </div>

                                                    {
                                                        !item.name.includes('Mochila') &&
                                                            <div className="cart__props">
                                                                <div>
                                                                    Talle: 
                                                                </div>
                                                                <div className="cart__style" >{item.selectedSize}</div>
                                                            </div>
                                                    }

                                                    <div className="cart__props">
                                                            Cantidad: {item.selectedQuantity}
                                                    </div>

                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>

                                <td className="center">
                                    {item.price * item.selectedQuantity}
                                </td>

                                <td className="center">
                                    <RiDeleteBin6Line className="delete-btn" onClick={()=> deleteItem(item.id)} />
                                </td>
                            </tr>
                        )
                    })
                }
            </table>

            <div className="cart__resume">

                <div className="resume-item">
                    <h4>Subtotal: </h4>
                    <p> ${totalPrice()}</p>
                </div>

                <div className="resume-item">
                    <h4>IVA:</h4>
                    <p>${totalPrice() * 0.21}</p>
                </div>

                <hr />
                <div className="resume-item">
                    <h3>TOTAL:</h3>
                    <p>${totalPrice() * 1.21}</p>
                </div>

            </div>

            <div className="buttons-card">
                <Button type="primary" shape="round" className="button" >Finalizar compra</Button> 
                <Button shape="round" className="button button--secondary" onClick={cleanCart}>Vaciar Carrito</Button> 
            </div>
        </>
    )
}

export default Cart

//Boton Actualizar carrito