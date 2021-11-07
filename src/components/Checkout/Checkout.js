import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router';
import { CartContext } from '../Context/CartContext';
import { UIContext } from '../Context/UIContext';
import { Button, Spin } from 'antd';
import { AuthContext } from '../Context/AuthContext';
import { Login } from '../Login/Login';
import { createOrders } from '../../firebase/createOrders';
import Swal from 'sweetalert2';



const Checkout = () => {
    const { cart, totalPrice, cleanCart } = useContext(CartContext)
    const { loader, setLoader } = useContext(UIContext)
    const { isAuth, currentClient } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        //Obtener datos de usaurio
        const client = currentClient()

        //Generar orden de compra
        setLoader(true)
        createOrders(client, cart, totalPrice())
            .then((res)=>{
                Swal.fire({
                    icon: 'success',
                    title: '¡Su orden se ha registrado con éxito!',
                    text: `El código de orden es ${res}`,
        
                    //Vaciar carrito al cerrar el modal
                    willClose: () => {
                        cleanCart();
                    }
                })
            })
            .catch((err)=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Los siguientes items ya no están en stock:',
                    text: err.map(e=>e.name).join(', '),
                    confirmButtonText: 'Modificar Carrito',
                    willClose: () => {
                      //NOTE: agregar redireccion al cart
                    }
                })
            })
            .finally(()=>{
                setLoader(false)
            })
    }
        
  return (
      <>
        { cart.length === 0 && <Redirect to="/" />}
        { loader && <Spin />}
        {
            !isAuth
                ? <Login fromCheckout={true}/>
                :
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
                            <Button 
                                type="primary" 
                                htmlType="submit"
                                shape="round"
                                className="button login__btn"
                                disabled={loader}
                                onClick={handleSubmit}
                            >
                            Finalizar compra
                            </Button>
                        </div>
                    </div>
        }
    </>
  );
};


export default Checkout
