import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { Spin } from 'antd'
import { getFirestore } from '../../firebase/config'
import { UIContext } from '../Context/UIContext'
import ItemDetail from './ItemDetail'

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
