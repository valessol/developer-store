import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getData } from '../../helpers/getData'
import { Spin } from 'antd'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(false)
    const { id } = useParams()

    useEffect(()=>{
        setLoader(true)
        getData()
            .then((response) => {
                setProduct(response.find(item=>Number(item.id) === Number(id)))
            })
            .catch(err=> console.log(err))
            .finally(setLoader(false))
        
    }, [])


    return (
        
        <>
            {
               
                loader 
                    ? <Spin size="large" className="spin"/>
                    : <ItemDetail {...product} /> 
            }
            
        </>
    )
}

export default ItemDetailContainer
