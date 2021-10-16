import React from 'react'
import { Card, Button } from 'antd';
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './ItemList.css'


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
                    <Link exact to={`/products/${id}`}>
                        <Button type="primary" shape="round" className="button" >Ver detalle</Button> 
                    </Link>
                </div>
                
            </Card>

           
        </div>
    )
}

export default Item