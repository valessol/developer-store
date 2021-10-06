import React from 'react'
import 'antd/dist/antd.css';
import './ItemList.css'
import { Card, Button } from 'antd';
import { MdFavoriteBorder } from "react-icons/md";


const { Meta } = Card;

const Item = ({id, name, img, description, category, gender, price}) => {
    


    return (
        <div key={id}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt={description} src={img} />}
            >
                <Meta title={name}/>
                <p className="category">Categoría: <span>{category}</span></p>
                <p className="price">Precio: <span>${price}</span></p>
                <div className="buttons-card">
                    <MdFavoriteBorder className="favorite-icon"/>
                    <Button type="primary" shape="round" className="button">Agregar al carrito</Button> 
                </div>
                
            </Card>

            {/* <h3>{name}</h3>
            <img src={img} alt={description}/>
            <p>¿Sos fan de {description}? ¡Elegí tu remera personalizada!</p>
            <div style={{ backgroundColor: color[0]}} className='color'></div>
            <h4>Precio: ${price}</h4>
            <button>Agregar al Carrito</button> */}
        </div>
    )
}

export default Item