import React, { useContext, useState } from 'react'
import { Button, Image } from 'antd'
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { CartContext } from '../Context/CartContext';
import Category from './Category/Category';

const ItemDetail = ({ id, name, img, description, category, gender, price, color, size}) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [ selectedColor, setSelectedColor ] = useState('');
    const [ selectedSize, setSelectedSize] = useState('');

    const { addToCart } = useContext(CartContext);
    
    const newItem = {
        id,
        name,
        img,
        price,
        selectedColor,
        selectedSize,
        selectedQuantity
    }

    //Modificar cantidad
    const handleAddItems = () => {
        setSelectedQuantity (selectedQuantity + 1);
    }
    
    const handleRemoveItems = () => {
        (selectedQuantity > 0) && setSelectedQuantity( selectedQuantity - 1)
    }

    //Elegir color
    const handleSelectedColor = (colorCode, index) => {

        setSelectedColor(colorCode)

        const colors = document.querySelectorAll('.colors')

        colors.forEach((item)=>{
            if (item.id === `color-${index}`) {
                item.classList.add('style--active')
            } else {
                item.classList.remove('style--active')
            }
        })
    }

    //Elegir talle
    const handleSelectedSize = (itemSize, index) => {

        setSelectedSize(itemSize)

        const sizes = document.querySelectorAll('.sizes')

        sizes.forEach((item)=>{
            if (item.id === `size-${index}`) {
                item.classList.add('style--active')
            } else {
                item.classList.remove('style--active')
            }
        })
    }
    
    //Agregar al carrito
    const handleAddToCart = () => {
        
        if ( (selectedQuantity > 0) && (selectedColor === '' || selectedSize === '')) {
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
            <Image className="detail__image" src={img} alt={name}/>
            <div className="detail__content">

                <Category gender={gender} category={category} />

                <h2>{name}</h2>

                <h3>ARS {price}</h3>
                
                {
                    gender !== 'accesorios'
                    ? <p>¿Sos fan de {description}? Elegí color y talle y llevate tu remera personalizada.</p>
                    : <p>¿Sos fan de {description}? Elegí color que más te guste y llevate tu accesorio personalizado.</p>
                }
                
                <div className="detail__quantity">
                    <button className="button detail__button" onClick={() => handleRemoveItems()}>-</button>
                    <div className="detail__counter">{selectedQuantity}</div>
                    <button className="button detail__button" onClick={() => handleAddItems()}>+</button>
                </div>
                <div className="style">Color:
                    {
                        color.map((item, index)=> {
                            return (
                                <div className="style__color colors" id={`color-${index}`} style={{backgroundColor: item}} onClick={()=>handleSelectedColor(item, index)}></div> 
                            )
                        })
                    }
                </div>
                {
                    (gender !== 'accesorios') &&
                    (
                        <div className="style">Talle:
                            {
                                size.map((item, index)=> (
                                <div className="style__color sizes" id={`size-${index}`} onClick={()=>handleSelectedSize(item, index)}>{item}</div> 
                                ))
                            }
                            
                        </div>
                    ) 
                }
                
                <div className="button detail__button">
                    <MdFavoriteBorder className="favorite-icon"/>
                    <Button type="primary" shape="round" className="button" onClick={() => handleAddToCart()} >Agregar al carrito</Button> 
                </div>
                <div id="alert" />
            </div>
        </div>
    )
}

export default ItemDetail
