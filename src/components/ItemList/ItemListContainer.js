import React, {useState, useEffect} from 'react'
import { getData } from '../../helpers/getData'
import ItemList from './ItemList'
import { Spin } from 'antd';
import './ItemList.css'
import { useParams } from 'react-router';


export const ItemListContainer = ({path}) => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)
    const { gender } = useParams()
    const { category } = useParams()


    useEffect(() => {
        setLoader(true)

        getData()
            .then((response) => {
                if (gender) {
                    setProducts(response.filter((item)=>
                        item.gender.toLowerCase() === gender))
                } else if (category) {
                    setProducts(response.filter((item)=>
                        item.category.toLowerCase() === category))
                } else {
                    setProducts(response)
                }
            })
            .finally(() => setLoader(false))
    }, [gender, category]) 

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
