import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getData } from '../../helpers/getData'
import { Spin } from 'antd'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = ({cart, setCart}) => {
    const [product, setProduct] = useState([])
    const [loader, setLoader] = useState(false)
    const { id } = useParams()

    useEffect(()=>{
        setLoader(true)
        
        getData()
            .then((response) => {
                const idProd = response.find(item=>Number(item.id) === Number(id))
                setProduct(idProd)
            })
            .catch(err=> console.log(err))//pagina 404
            .finally(setLoader(false))
        
    }, [id])


    return (
        
        <>
            {
               
                product.length === 0 
                    ? <Spin size="large" className="spin"/>
                    : <ItemDetail 
                        product={product} 
                        cart={cart}
                        setCart={setCart}
                        {...product} 
                    /> 
            }
            
        </>
    )
}

export default ItemDetailContainer
