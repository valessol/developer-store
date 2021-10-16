import React from 'react'
import Item from './Item'
import { Row } from 'antd';
import './ItemList.css'

const ItemList = ({products}) => {
    return (
        <section className="container">
            <h2>Nuestros productos</h2>
            <Row gutter={[16, 24]}>
                {[
                    products.map((item) => {
                    return (
                        
                        <Item {...item} />
                        
                    )   
                    })
                ]}
            </Row>
           
        </section>
    )
}

export default ItemList
