import React from 'react'

export const Description = ({gender, description}) => {
    return (
        <>
            {
                gender !== 'accesorios'
                ? <p>¿Sos fan de {description}? Elegí color y talle y llevate tu remera personalizada.</p>
                : <p>¿Sos fan de {description}? Elegí color que más te guste y llevate tu accesorio personalizado.</p>
            }
        </>
    )
}
