import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { Spin } from 'antd';
import { useParams } from 'react-router';
import { getFirestore } from '../../firebase/config';


export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)

    //product funciona como categoria, filtrando los productos por 'category' y 'gender'
    const { product } = useParams()


    useEffect(() => {
        setLoader(true);

        const db = getFirestore();
        const itemCollection = db.collection('productos');

             itemCollection.get()
                .then(res => {
                    const newItems = res.docs.map((doc)=>{
                        return {id: doc.id, ...doc.data()};
                    })
                    
                    console.log('respuesta de la base', newItems)
                

                    const productsForCategory = newItems.filter((item)=>item.category === product)
                    console.log('respuesta a category', productsForCategory)

                    const productsForGender = newItems.filter((item) => item.gender === product)
                    console.log('respuesta a gender', productsForGender)

                    if (productsForCategory.length !== 0){
                        setProducts(productsForCategory)
                    } else if (productsForGender.length !== 0) {
                        setProducts(productsForGender)
                    } else { setProducts(newItems)}
                })
                .finally(()=> setLoader(false))
        // }

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
