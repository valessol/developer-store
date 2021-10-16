import React from 'react'
import { Button, Image } from 'antd'
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './itemDetail.css';

const ItemDetail = ({id, name, img, description, category, gender, price, color, size}) => {
    //console.log(color)
    const handleStyle = () => {

    }

    return (
        <div className="detail" key= {id} >
            <Image className="detail__image" src={img} />
            <div className="detail__content">
                <h4 className="category">Categoría:  
                    <span> 
                        <Link exact to={`/${gender}`}> 
                            {gender} 
                        </Link> / 
                        <Link exact to={`/${category}`}> 
                            {category}
                        </Link>
                    </span>
                </h4>
                <h2>{name}</h2>
                <h3>ARS {price}</h3>
                <p>¿Sos fan de {description}? Elegí color y talle y llevate tu remera personalizada.</p>
                <div className="style">Color:
                    {/* {[
                        color.map((item)=> {
                            return (
                                <div className="style__color" style={{backgroundColor: item}}></div> 
                            )
                        })
                    ]} */}
                    <div className="style__color" style={{backgroundColor: '#000'}} onClick={() => handleStyle()}></div>
                    <div className="style__color" style={{backgroundColor: '#313030'}}  onClick={() => handleStyle()}></div>
                    <div className="style__color" style={{backgroundColor: '#707070'}} onClick={() => handleStyle()}></div>
                    <div className="style__color" style={{backgroundColor: '#fff'}} onClick={() => handleStyle()}></div>
                    
                </div>
                <div className="style">Talle:
                    {/* {
                        size.map((item)=> (
                           <div className="style__color" >{item}</div> 
                        ))
                    } */}
                    <div className="style__color" onClick={() => handleStyle()}>S</div>
                    <div className="style__color" onClick={() => handleStyle()}>M</div>
                    <div className="style__color" onClick={() => handleStyle()}>L</div>
                    
                </div>
                <div className="buttons-card">
                    <MdFavoriteBorder className="favorite-icon"/>
                    <Link exact to={`/products/${id}`}>
                        <Button type="primary" shape="round" className="button" >Agregar al carrito</Button> 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
