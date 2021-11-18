import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from './config';
import Swal from 'sweetalert2';

export const createOrders = (client, cart, total) => {

  return new Promise (async ( resolve, reject ) => {

    //Generar orden
    const order = {
        buyer: client,
        items: cart.map((item)=>({
            id: item.id,
            name: item.name,
            quantity: item.selectedQuantity,
            color: item.selectedColor,
            size: item.selectedSize ? item.selectedSize : '',
            price: item.price
        })), 
        total: total*1.21,
        date: firebase.firestore.Timestamp.fromDate(new Date())
    }

    //Batch de actualización
    const db = getFirestore()
    const orders = db.collection('orders')
  
    const itemsToUpdate = db.collection('productos')
      .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(e => e.id))
    
    const query = await itemsToUpdate.get()
    const batch = db.batch()
    const outOfStock = [];

    query.docs.forEach((doc)=>{
      const itemInCart = cart.find(e=>e.id === doc.id)
      if (doc.data().stock >= itemInCart.selectedQuantity) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.selectedQuantity
        })
      }else {
        outOfStock.push({
          ...doc.data(), 
          id: doc.id
        })
      }
    })
  
    if (outOfStock.length === 0) {
  
      //Enviar orden a firestore
      orders.add(order)
        .then((res)=>{
          batch.commit()
          resolve(res.id)
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Lo sentimos, ha ocurrido un error inesperado',
            text: `Por favor, intente nuevamente.(Cód. de error: ${err})`
          })
        })
    } else {
        reject(outOfStock)
    }
  })
    

}

