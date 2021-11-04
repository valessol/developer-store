import React from 'react'

const Quantity = ({ selectedQuantity, setSelectedQuantity, stock }) => {

//NOTE: hacer estilos para cuando esta desabilitados los botones o no hay stock. Agregar la frase son stock


    //Modificar cantidad
    const handleAddItems = () => {
        (selectedQuantity < stock) && setSelectedQuantity (selectedQuantity + 1);
    }

    const handleRemoveItems = () => {
        (selectedQuantity > 1) && setSelectedQuantity( selectedQuantity - 1)
    }

    return (
        <div className="detail__quantity">

            <button 
                className="button detail__button detail__button--quantity" 
                disabled={selectedQuantity = 1 || selectedQuantity > stock}
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
    )
}

export default Quantity
