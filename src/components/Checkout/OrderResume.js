import React from 'react'

const OrderResume = ({cart, total}) => {
    return (
        <div className="cart__checklist">
            <h3>Tu pedido:</h3>
            <ul>
                {
                    cart.length !== 0 
                    && cart.map((product, index)=>{
                        return (
                            <li key={index}>{product.selectedQuantity} x {product.name}</li>
                        )
                    })
                }
            </ul>
            <h3>Total: ${total}</h3>
        </div>
    )
}

export default OrderResume
