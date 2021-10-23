import React, { useContext, useEffect, useState } from 'react'
import { Button, Image } from 'antd'
import { MdFavoriteBorder } from 'react-icons/md';
import { CartContext } from '../Context/CartContext';
import Category from './Category/Category';
import { Description } from './Description/Description';
import Quantity from './Quantity/Quantity';
import Color from './Color/Color';
import Size from './Size/Size';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, img, description, category, gender, price, color, size}) => {
    
    const [ selectedColor, setSelectedColor ] = useState('');
    const [ selectedSize, setSelectedSize] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const { isInCart, addToCart } = useContext(CartContext);
    
    const newItem = {
        id,
        name,
        img,
        price,
        selectedColor,
        selectedSize,
        selectedQuantity
    }
    
    //Modificar la cantidad a agregar
    const handleAddItems = () => {
        // const itemIndex = findItem(id)
        // itemIndex
        //      setSelectedQuantity(cart[itemIndex].selectedQuantity += 1)
        //     : setSelectedQuantity (selectedQuantity + 1)
        setSelectedQuantity (selectedQuantity + 1)
    }

    const handleRemoveItems = () => {
        // const itemRemove = findItem(id)
        // if (selectedQuantity > 1 && itemRemove) {
        //     setSelectedQuantity(cart[itemRemove].selectedQuantity -= 1)
        // } else if (selectedQuantity > 1) {
        //     setSelectedQuantity (selectedQuantity - 1)
        // }
        selectedQuantity > 1 &&
        setSelectedQuantity (selectedQuantity - 1)
    }


    //Agregar al carrito
    const handleAddToCart = () => {
        
        if ( selectedColor === '' || (selectedSize === '' && gender !== 'accesories')) {
            

                const alert = document.createElement('P');
                alert.textContent = '¡Elige color y talle antes de agregar al carrito!';
                alert.classList.add('alert-msg')
                
                const addToCartSection = document.querySelector('#alert');
                addToCartSection.appendChild(alert)
    
                setTimeout(()=> {
                    addToCartSection.removeChild(alert)
                }, 3000)
            
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
                    id={id} 
                    handleAdd={handleAddItems} 
                    handleRemove={handleRemoveItems}
                    quantity={selectedQuantity}
                />

                <Color 
                    color={color} 
                    setSelectedColor={setSelectedColor} />

                <Size 
                    gender={gender} 
                    size={size} 
                    setSelectedSize={setSelectedSize} />
                
                <div className="button detail__button detail__button--cart">

                    <MdFavoriteBorder className="favorite-icon"/>

                    {
                        isInCart(id)
                            ? 
                                <Link to="/cart" className="button">
                                    Ver Carrito
                                </Link>
                            : 
                                <Button 
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
