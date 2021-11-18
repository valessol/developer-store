import React from 'react'
import { Card, Button } from 'antd';
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';


const { Meta } = Card;

const Item = ({id, name, img, description, category, price, stock}) => {
    


    return (
        <div key={id}>
            <Link exact to={`/products/${id}`}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={description} src={img} />}
                >
                    <Meta title={name}/>
                    <p className="category">Categoría: <span><Link exact to={`/${category}`}>{category}</Link></span></p>
                    <p className="price">Precio: <span>${price}</span></p>
                    <div className="item-button">
                        <MdFavoriteBorder className="favorite-icon"/>
                            <Button 
                                type="primary" 
                                shape="round" 
                                className="button" 
                                disabled={stock === 0}
                            >
                                Ver detalle
                            </Button> 
                    </div>
                    
                </Card>
            </Link>

           
        </div>
    )
}

export default Item