import React, { useEffect } from 'react'

const Quantity = ({ selectedQuantity, setSelectedQuantity, stock }) => {


    //Modificar cantidad
    const handleAddItems = () => {
        (selectedQuantity < stock) && setSelectedQuantity (selectedQuantity + 1);
    }

    const handleRemoveItems = () => {
        (selectedQuantity > 1) && setSelectedQuantity( selectedQuantity - 1)
    }


    return (
        <>
            <div className="detail__quantity">

                <button 
                    className="button detail__button detail__button--quantity" 
                    disabled={selectedQuantity < 2}
                    onClick={() => handleRemoveItems()}
                >
                    -
                </button>

                <div 
                    className="detail__counter"
                >
                    {selectedQuantity}
                </div>

                <button 
                    className="button detail__button detail__button--quantity" 
                    disabled={selectedQuantity > stock}
                    onClick={() => handleAddItems()}
                >
                    +
                </button>

            </div>

            <span className="detail__noStock">{stock === 0 && 'Sin Stock!'}</span>
        </>
    )
}

export default Quantity
