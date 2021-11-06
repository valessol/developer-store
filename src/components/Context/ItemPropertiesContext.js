import { createContext, useState } from "react";

export const ItemPropertiesContext = createContext();
export const ItemPropertiesProvider = ({children}) => {

    const [ properties, setProperties ] = useState([
    //     {
    //     id: '',
    //     color: '',
    //     size: '',
    //     quantity: 1
    // }
])
    
    //Modificar cantidad
    const addQuantity = (item) => {
        item.quantity = item.quantity + 1
        setProperties ([
            ...properties,
            item
        ]);
        console.log(properties)
    }
    
    const removeQuantity = (item) => {
        const updatedItemProperties = properties.find((e)=> e.id === item.id)
        updatedItemProperties.quantity = updatedItemProperties - 1
    }
    
    return (
        <ItemPropertiesContext.Provider values={{ 
            properties,
            addQuantity,
            removeQuantity
        }}>
            {children}
        </ItemPropertiesContext.Provider>
    )
}