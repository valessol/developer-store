import React from 'react'

const Quantity = ({ selectedQuantity, setSelectedQuantity }) => {


    //Modificar cantidad
    const handleAddItems = () => {
        setSelectedQuantity (selectedQuantity + 1);
    }

    const handleRemoveItems = () => {
        (selectedQuantity > 1) && setSelectedQuantity( selectedQuantity - 1)
    }

    return (
        <div className="detail__quantity">

            <button 
                className="button detail__button detail__button--quantity" 
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
                onClick={() => handleAddItems()}
            >
                +
            </button>

        </div>
    )
}

export default Quantity
