import React, { useContext, useState } from 'react'
import { Button, Image } from 'antd'
import { CartContext } from '../Context/CartContext';
import Category from './Category/Category';
import { Description } from './Description/Description';
import Quantity from './Quantity/Quantity';
import Color from './Color/Color';
import Size from './Size/Size';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { UIContext } from '../Context/UIContext';

const ItemDetail = ({ id, name, img, description, category, gender, price, color, size, stock}) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [ selectedColor, setSelectedColor ] = useState('');
    const [ selectedSize, setSelectedSize] = useState('');

    const { findItem, addToCart } = useContext(CartContext);
    const { darkMode } = useContext(UIContext);
    
    const newItem = {
        id,
        name,
        img,
        price,
        selectedColor,
        selectedSize,
        selectedQuantity
    }

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
        <div className={darkMode ? 'cardContainer dark-body' : 'cardContainer'} key= {id} >
            <div className="cardContainer--item">

                <Image 
                    className="detail__image" 
                    src={img} alt={name} />

                <div className="detail__content">

                    <Category 
                        gender={gender} 
                        category={category} />

                    <h2 className={darkMode ? 'dark-text' : ''}>{name}</h2>

                    <h3 className={darkMode ? 'dark-text' : ''}>ARS {price}</h3>

                    <Description 
                        gender={gender} 
                        description={description} />
                    
                    <Quantity 
                        selectedQuantity={selectedQuantity} 
                        setSelectedQuantity={setSelectedQuantity} 
                        stock={stock}
                        />

                    <Color 
                        color={color} 
                        setSelectedColor={setSelectedColor} />

                    <Size 
                        gender={gender} 
                        size={size} 
                        setSelectedSize={setSelectedSize} />
                    
                        {
                            findItem(id)
                                ? <div className="button detail__button detail__button--cart">
                                    <Link to="/">
                                        <Button 
                                            type="primary" 
                                            shape="round" 
                                            className={darkMode ? 'button dark-button' : 'button'}
                                        >
                                            Continuar comprando
                                        </Button> 
                                    </Link>
                                    <Link to="/cart">
                                        <Button  
                                            shape="round" 
                                            className={darkMode ? 'button button--secondary dark-button--secondary' : 'button button--secondary'} 
                                        >
                                            Ver carrito
                                        </Button> 
                                    </Link>
                                </div>
                                :  <Button 
                                    type="primary" 
                                    shape="round" 
                                    className={darkMode ? 'button dark-button' : 'button'} 
                                    disabled={selectedQuantity > stock}
                                    onClick={() => handleAddToCart()} 
                                >
                                    Agregar al carrito

                                </Button> 
                        }
                    <div id="alert" />
                </div>
            </div>

        </div>
    )
}

export default ItemDetail
