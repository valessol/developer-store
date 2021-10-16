import React, { useState } from 'react'
import { Button, Image } from 'antd'
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './itemDetail.css';

const ItemDetail = ({product, cart, setCart, id, name, img, description, category, gender, price, color, size}) => {
    const [counter, setCounter] = useState(0)

    //console.log(color)

    const handleAddItems = () => {
        setCounter (counter + 1);
    }

    const handleRemoveItems = () => {
        (counter > 0) && setCounter( counter - 1)
    }

    const handleAddToCart = () => {
        (counter > 0) && setCart([product, ...cart])
        console.log(product, cart)
    }

    return (
        <div className="detail" key= {id} >
            <Image className="detail__image" src={img} alt={name}/>
            <div className="detail__content">
                <h4 className="category">Categoría:  
                    <span> 
                        <Link exact to={`/${gender}`}> 
                            {gender} 
                        </Link> 
                        <span> / </span>
                        <Link exact to={`/${category}`}> 
                            {category}
                        </Link>
                    </span>
                </h4>
                <h2>{name}</h2>
                <h3>ARS {price}</h3>
                {
                    gender !== 'accesorios'
                    ? <p>¿Sos fan de {description}? Elegí color y talle y llevate tu remera personalizada.</p>
                    : <p>¿Sos fan de {description}? Elegí color que más te guste y llevate tu accesorio personalizado.</p>
                }
                
                <div className="detail__quantity">
                    <button className="detail__button" onClick={() => handleRemoveItems()}>-</button>
                    <div className="detail__counter">{counter}</div>
                    <button className="detail__button" onClick={() => handleAddItems()}>+</button>
                </div>
                <div className="style">Color:
                    {/* {[
                        color.map((item)=> {
                            return (
                                <div className="style__color" style={{backgroundColor: item}}></div> 
                            )
                        })
                    ]} */}
                    <div className="style__color" style={{backgroundColor: '#000'}}></div>
                    <div className="style__color" style={{backgroundColor: '#313030'}} ></div>
                    <div className="style__color" style={{backgroundColor: '#707070'}}></div>
                    <div className="style__color" style={{backgroundColor: '#fff'}}></div>
                    
                </div>
                {
                    (gender !== 'accesorios') &&
                    (
                        <div className="style">Talle:
                            {/* {
                                size.map((item)=> (
                                <div className="style__color" >{item}</div> 
                                ))
                            } */}
                            <div className="style__color">S</div>
                            <div className="style__color">M</div>
                            <div className="style__color">L</div>
                            
                        </div>
                    ) 
                }
                
                <div className="buttons-card">
                    <MdFavoriteBorder className="favorite-icon"/>
                    <Button type="primary" shape="round" className="button" onClick={() => handleAddToCart()} >Agregar al carrito</Button> 
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
