import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
    return (
        <section>
            <h2>Nuestros productos</h2>
            {[
                products.map((item) => {
                return <Item {...item} key={item.id}/>
                })
            ]}
        </section>
    )
}

export default ItemList
