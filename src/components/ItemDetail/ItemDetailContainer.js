import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { Spin } from 'antd'
import ItemDetail from './ItemDetail'
import { getFirestore } from '../../firebase/config'
import { UIContext } from '../Context/UIContext'
//NOTE: realizar respuesta de la vista cuando la url del item no exista, porque por defecto no va a entrar al catch sino que va a renderizar el componente vacio

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { setLoader } = useContext(UIContext)
    const { itemId } = useParams()
   

    useEffect(()=>{
        setLoader(true)
        
        const db = getFirestore();
        const itemCollection = db.collection('productos');
        const item = itemCollection.doc(itemId);

        item.get()
            .then(res=>{
                setProduct({
                    id: res.id, 
                    ...res.data()
                })
            })
            .catch(err=>console.log(err))
            .finally(()=> setLoader(false))
        
    }, [itemId])


    return (
        <>
            {
                product.length === 0 
                    ? <Spin size="large" className="spin"/>
                    : <ItemDetail 
                        {...product} 
                    /> 
            }
        </>
    )
}

export default ItemDetailContainer
