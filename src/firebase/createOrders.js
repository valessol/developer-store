import React from 'react'

export const createOrders = async () => {
     //Generar orden
     const order = {
        buyer: {
            email: register.email,
            password: register.password,
            fullName: register.fullName,
            phone: register.phone,
            message: register.message ? register.message : ''
        },
        items: cart.map((item)=>({
            id: item.id,
            name: item.name,
            quantity: item.selectedQuantity,
            color: item.selectedColor,
            size: item.selectedSize ? item.selectedSize : '',
            price: item.price
        })), 
        total: totalPrice(),
        date: firebase.firestore.Timestamp.fromDate(new Date())
    }
    
    //Consulta a la base de datos
    const db = getFirestore()

    //Creación de colección para las órdenes de compra
    const orders = db.collection('orders')

    //Batch de actualización
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
      setLoader(true)

      //Enviar orden a firestore
      orders.add(order)
        .then((res)=>{
          batch.commit()

          Swal.fire({
            icon: 'success',
            title: '¡Su orden se ha registrado con éxito!',
            text: `El código de orden es ${res.id}`,
            buttonsStyling: false,

            //Vaciar carrito al cerrar el modal
            willClose: () => {
              cleanCart();
            }
          })
        })
        .catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Lo sentimos, ha ocurrido un error inesperado',
            text: `Por favor, intente nuevamente.(Cód. de error: ${err})`,
            buttonsStyling: false
          })
        })
        .finally(()=>{
          setLoader(false)
        })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Los siguientes items ya no están en stock:',
        text: outOfStock.map(e=>e.name).join(', '),
        confirmButtonText: 'Modificar Carrito',
        willClose: () => {
          //NOTE: agregar redireccion al cart
        },
        buttonsStyling: false
      })
    }
}

