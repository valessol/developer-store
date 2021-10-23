import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';

const Quantity = ({id, handleAdd, handleRemove, quantity}) => {
    

    
    //No le tengo que pasar el id a los handle, sino que el id lo riene que pasar el boton que va a actualizar el carrito, para que setee las nuevas cantidades
    return (
        <div className="detail__quantity">

            <button 
                className="button detail__button detail__button--quantity" 
                onClick={() => handleRemove()}
            >
                -
            </button>

            <div 
                className="detail__counter"
            >
                    {quantity}
                {
                    {/* item 
                    ? item.selectedQuantity
                    : quantity */}
                }
            </div>

            <button 
                className="button detail__button detail__button--quantity" 
                onClick={() => handleAdd()}
            >
                +
            </button>

        </div>
    )
}

export default Quantity
