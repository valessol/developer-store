import React, { useContext, useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router';
import { CartContext } from '../Context/CartContext';
import { UIContext } from '../Context/UIContext';
import { Button, Spin } from 'antd';
import { AuthContext } from '../Context/AuthContext';
import { Login } from '../Login/Login';
import { createOrders } from '../../firebase/createOrders';
import Swal from 'sweetalert2';
import OrderResume from './OrderResume';
import ClientResume from './ClientResume';
import { NewClientForm } from '../Login/NewClientForm';
import { getFirestore } from '../../firebase/config';



const Checkout = () => {
    const { cart, totalPrice, cleanCart } = useContext(CartContext)
    const { loader, setLoader } = useContext(UIContext)
    const { isAuth, currentClient } = useContext(AuthContext)
    const [actualClient, setActualClient ] = useState(null)
    const { push } = useHistory()

    //Obtener datos de usaurio
    const client = currentClient()

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        //Generar orden de compra
        createOrders(client, cart, totalPrice())
            .then((res)=>{
                Swal.fire({
                    icon: 'success',
                    title: '¡Su orden se ha registrado con éxito!',
                    text: `El código de orden es ${res}`,
        
                    //Vaciar carrito al cerrar el modal
                    willClose: () => {
                        cleanCart();
                        push('/')
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
                      push('/cart')
                    }
                })
            })
            .finally(()=>{
                setLoader(false)
            })
    }
    //Manejo de la inf. del usuario segun se haya logueado con google o haya llenado todos sus datos en el registro
    const handleUser = () => {

        if (isAuth) {
            setLoader(true);
        
            const db = getFirestore();
            const userCollection = db.collection('users');
    
            const newClient = userCollection.where('email', '==', client.email)
            newClient.get()
                .then(res=> {
                    console.log('newClient', res.docs)
                    const clientData = res.docs.map((doc)=> {
                        return {...doc.data()}
                    })
                    setActualClient(clientData[0])
                    console.log('actualClient', clientData[0])
                })
                .catch(err=> console.log(err))
                .finally(()=> setLoader(false))
        }
    }

    //Obtener información del cliente
    useEffect(()=> {
        handleUser()
    }, [isAuth])

        
  return (
      <>
        { cart.length === 0 && <Redirect to="/" />}
        { loader 
            ? <Spin />
            : !isAuth
                ? <Login fromCheckout={true}/>
                :
                    <div className="cart">
                        <h2>Resumen de compra</h2>
                        {
                            actualClient
                                ?
                                    <>
                                        <div className="cart__checkout" >
                                            <OrderResume 
                                                cart={cart} 
                                                total={totalPrice()} 
                                            />
                                            <ClientResume 
                                                client={client} 
                                                actualClient={actualClient} 
                                            />
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
                                    </>
                                :
                                    <NewClientForm email={client.email} handleUser={handleUser} />      
                        }
                    </div>
        }
    </>
  );
};


export default Checkout
