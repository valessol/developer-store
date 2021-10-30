import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { Spin } from 'antd';
import { useParams } from 'react-router';
import { getFirestore } from '../../firebase/config';


export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)
    const { product } = useParams()


    const getData = (data) => {
        data.get()
            .then(res=>{
                const newItems = res.docs.map((doc)=>{
                    return {id: doc.id, ...doc.data()};
                })
                setProducts(newItems)
            })
            .catch(err=>console.log(err))
            .finally(()=> setLoader(false))
    }


    useEffect(() => {
        setLoader(true);

        const db = getFirestore();
        const itemCollection = db.collection('productos');

        if (product) {

            const filterGenderProds = itemCollection.where('gender', '==', product.toLowerCase())
            const filterCategoryProds = itemCollection.where('category', '==', product.toLowerCase())
            
            if (filterGenderProds.length !== 0) {
                getData(filterGenderProds)
            } else if (filterCategoryProds.length !== 0) {
                getData(filterCategoryProds)
            } 
        } else {
            getData(itemCollection)
        }

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
