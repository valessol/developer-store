import React, {useState, useEffect} from 'react'
import { getData } from '../../helpers/getData'
import ItemList from './ItemList'
import { Spin } from 'antd';
import './ItemList.css'


export const ItemListContainer = ({path}) => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)


    useEffect(() => {
        setLoader(true)

        getData()
            .then((response) => {
                switch (path) {
                    case 'hombre': 
                        setProducts(response.filter((item)=>
                            item.gender.toLowerCase() === 'hombre'
                        ))
                        break;
                    case 'mujer': 
                        setProducts(response.filter((item)=>
                            item.gender.toLowerCase() === 'mujer'
                        ))
                        break;
                    case 'accesorios': 
                        setProducts(response.filter((item)=>
                            item.gender.toLowerCase() === 'accesorios'
                        ))
                        break;
                    default: setProducts(response)
                        break;
                }
            })
            .finally(() => setLoader(false))
    }, [path]) 

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
