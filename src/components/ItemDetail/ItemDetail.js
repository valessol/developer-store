import React, { useContext, useState } from 'react'
import { Button, Image } from 'antd'
import { CartContext } from '../Context/CartContext';
import Category from './Category/Category';
import { Description } from './Description/Description';
import Quantity from './Quantity/Quantity';
import Color from './Color/Color';
import Size from './Size/Size';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, img, description, category, gender, price, color, size}) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [ selectedColor, setSelectedColor ] = useState('');
    const [ selectedSize, setSelectedSize] = useState('');

    const { findItem, addToCart } = useContext(CartContext);
    
    const newItem = {
        id,
        name,
        img,
        price,
        selectedColor,
        selectedSize,
        selectedQuantity
    }
    
    //Agregar al carrito
    const handleAddToCart = () => {
        
        if ( (selectedQuantity > 0) && (selectedColor === '' || (selectedSize === '' && gender !== 'accesorios'))) {
            

                const alert = document.createElement('P');
                alert.classList.add('alert-msg')
                gender !== 'accesorios'
                    ? alert.textContent = '¡Elige color y talle antes de agregar al carrito!'
                    : alert.textContent = '¡Elige color antes de agregar al carrito!'
                
                const addToCartSection = document.querySelector('#alert');
                addToCartSection.appendChild(alert)
    
                setTimeout(()=> {
                    addToCartSection.removeChild(alert)
                }, 3000)

                return
        }

        addToCart(newItem);
    }


    return (
        <div className="detail" key= {id} >

            <Image 
                className="detail__image" 
                src={img} alt={name} />

            <div className="detail__content">

                <Category 
                    gender={gender} 
                    category={category} />

                <h2>{name}</h2>

                <h3>ARS {price}</h3>

                <Description 
                    gender={gender} 
                    description={description} />
                
                <Quantity 
                    selectedQuantity={selectedQuantity} 
                    setSelectedQuantity={setSelectedQuantity} />

                <Color 
                    color={color} 
                    setSelectedColor={setSelectedColor} />

                <Size 
                    gender={gender} 
                    size={size} 
                    setSelectedSize={setSelectedSize} />
                
                <div className="button detail__button detail__button--cart">

                    {
                        findItem(id)
                            ? <>
                                <Link to="/">
                                    <Button 
                                        type="primary" 
                                        shape="round" 
                                        className="button" 
                                    >
                                        Continuar comprando
                                    </Button> 
                                </Link>
                                <Link to="/cart">
                                    <Button  
                                        shape="round" 
                                        className="button button--secondary" 
                                    >
                                        Ver carrito
                                    </Button> 
                                </Link>
                            </>
                            :  <Button 
                                type="primary" 
                                shape="round" 
                                className="button" 
                                onClick={() => handleAddToCart()} 
                            >
                                Agregar al carrito

                            </Button> 
                    }

                   

                </div>

                <div id="alert" />
            </div>
        </div>
    )
}

export default ItemDetail
