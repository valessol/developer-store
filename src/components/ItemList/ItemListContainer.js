import React, {useState, useEffect} from 'react'
import { getData } from '../../helpers/getData'
import ItemList from './ItemList'
import { Spin } from 'antd';
import './ItemList.css'


export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)


    useEffect(() => {
        setLoader(true)

        getData()
            .then((response) => setProducts(response))
            .finally(() => setLoader(false))
    }, []) 

    return (
        <>
            {
                loader 
                    ? <Spin size="large" className="spin"/>
                    : <ItemList products={products} />
            }
            
        </>
    )
}
