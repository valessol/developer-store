import React from 'react'
import 'antd/dist/antd.css';
import './ItemList.css'
import { Card, Button } from 'antd';


const { Meta } = Card;

const Item = ({id, name, img, description, color, price}) => {
    
    const content = '¿Sos fan de '+ description +'? ¡Elegí tu remera personalizada!'


    return (
        <div key={id}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt={description} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title={name} description={content} />
                <Button type="primary" shape="round" className="magenta-6">Agregar al carrito</Button>
            </Card>

            {/* <h3>{name}</h3>
            <img src={img} alt={description}/>
            <p>¿Sos fan de {description}? ¡Elegí tu remera personalizada!</p>
            <div style={{ backgroundColor: color[0]}} className='color'></div>
            <h4>Precio: ${price}</h4>
            <button>Agregar al Carrito</button> */}
        </div>
    )
}

export default Item