import React, { useContext } from 'react'
import { Button } from 'antd'
import { CartContext } from '../Context/CartContext'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { UIContext } from '../Context/UIContext'


const Cart = () => {

    const { cart, totalPrice, cleanCart, deleteItem } = useContext(CartContext)
    const { darkMode } = useContext(UIContext)
    
    return (
        <>
            <table className="first-table">

                {/* Encabezado */}

                <thead>
                    <tr>
                        <th className="left">Producto</th>
                        <th className="center">Precio</th>
                        <th className="center"></th>
                    </tr>
                </thead>

                {/* Productos en el carrito */}

                <tbody className={darkMode ? 'borderTable dark-tbody' : 'borderTable '}>
                {
                    cart.map((item) => {
                        return (
                            
                            <tr key={item.id}>
                                <td>

                                    <table className="second-table">

                                        <tbody>

                                            <tr>

                                                {/* Imagen de producto */}
                                                <td>
                                                    <img 
                                                        className="cart__image" 
                                                        src={item.img} 
                                                        alt={item.name}/>
                                                </td>

                                                {/* Descripción y detalles de prosucto */}

                                                <td>
                                                    <div className="cart__text">
                                                        <h4 className={darkMode ? 'dark-text' : ''}>{item.name}</h4>

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

                                        </tbody>

                                    </table>

                                </td>

                                {/* Precio y eliminar item */}

                                <td className="center">
                                    ${item.price * item.selectedQuantity}
                                </td>

                                <td className="center">
                                    <RiDeleteBin6Line className="delete-btn" onClick={()=> deleteItem(item.id)} />
                                </td>
                            </tr>
                            
                        )
                    })
                }
                </tbody>
            </table>

            {/* Resumen del carrito */}

            <div className="cart__resume">

                <div className="resume-item">
                    <h4 className={darkMode ? 'dark-text' : ''}>Subtotal: </h4>
                    <p> ${totalPrice()}</p>
                </div>

                <div className="resume-item">
                    <h4 className={darkMode ? 'dark-text' : ''}>IVA:</h4>
                    <p>${totalPrice() * 0.21}</p>
                </div>

                <hr />
                <div className="resume-item">
                    <h3 className={darkMode ? 'dark-text' : ''}>TOTAL:</h3>
                    <p>${totalPrice() * 1.21}</p>
                </div>

            </div>

            <div className="card-buttons">
                <Link exact to="/checkout" >
                    <Button 
                        type="primary" 
                        shape="round" 
                        className={darkMode ? 'button dark-button' : 'button'} 
                    >
                        Finalizar compra
                    </Button> 
                </Link>
                <Button 
                    shape="round" 
                    className={darkMode ? 'button button--secondary dark-button--secondary' : 'button button--secondary'} 
                    onClick={cleanCart}
                >
                    Vaciar Carrito
                </Button> 
            </div>
        </>
    )
}

export default Cart