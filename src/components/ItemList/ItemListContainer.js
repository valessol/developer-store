import React, {useState, useEffect} from 'react'
import { getData } from '../../helpers/getData'
import ItemList from './ItemList'
import { Spin } from 'antd';
import { useParams } from 'react-router';


export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)
    const { product } = useParams()


    useEffect(() => {
        setLoader(true)
       
        getData()
            .then((response) => {
                if (product) {
                    
                    const genderProds = response.filter((item)=> item.gender.toLowerCase() === product.toLowerCase())
                    const categoryProds = response.filter((item)=> item.category.toLowerCase() === product.toLowerCase())
                    
                    if (genderProds.length !== 0) {
                        setProducts(genderProds)
                    } else if (categoryProds.length !== 0) {
                        setProducts(categoryProds)
                    } 
                } else {
                    setProducts(response)
                }
                
            })
            .finally(() => setLoader(false))
    }, [product]) 

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
