import React from 'react'

const Item = ({id, name, img, description, color, price}) => {
    return (
        <div key={id}>
            <h3>{name}</h3>
            <img src={img} alt={description}/>
            <p>¿Sos fan de {description}? ¡Elegí tu remera personalizada!</p>
            <div style={{ backgroundColor: color[0]}} className='color'></div>
            <h4>Precio: ${price}</h4>
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default Item
