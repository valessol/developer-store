import React, {useState, useEffect, useContext} from 'react'
import ItemList from './ItemList'
import { Spin } from 'antd';
import { useParams } from 'react-router';
import { getFirestore } from '../../firebase/config';
import { UIContext } from '../Context/UIContext'
import { FavContext } from '../Context/FavContext';

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { loader, setLoader } = useContext(UIContext)
    const { favorites } = useContext(FavContext)

    //product filtra los productos por 'category' y 'gender' o por favoritos
    const { product } = useParams()


    useEffect(() => {
        setLoader(true);

        if (product === 'favoritos') {
            setProducts(favorites)
            setLoader(false)
            return
        }

        const db = getFirestore();
        const itemCollection = db.collection('productos');

             itemCollection.get()
                .then(res => {
                    const newItems = res.docs.map((doc)=>{
                        return {id: doc.id, ...doc.data()};
                    })
                    
                    const productsForCategory = newItems.filter((item)=>item.category === product)
                    const productsForGender = newItems.filter((item) => item.gender === product)
                    
                    if (productsForCategory.length !== 0){
                        setProducts(productsForCategory)
                    } else if (productsForGender.length !== 0) {
                        setProducts(productsForGender)
                    } else { setProducts(newItems)}
                })
                .finally(()=> setLoader(false))

    }, [product]) 

    return (
        <>
            {
                loader 
                    ? <Spin size="large" className="spin"/>
                    : <ItemList 
                        products={products} 
                        title={
                            product 
                                ? product 
                                : 'Nuestros productos'
                        } 
                    />
            }
            
        </>
    )
}
