import React from 'react'

const Size = ({gender, size, setSelectedSize}) => {

    //Elegir talle
    const handleSelectedSize = (itemSize, index) => {

        setSelectedSize(itemSize)

        const sizes = document.querySelectorAll('.sizes')

        sizes.forEach((item)=>{
            if (item.id === `size-${index}`) {
                item.classList.add('style--active')
            } else {
                item.classList.remove('style--active')
            }
        })
    }

    return (
        <>
             {
                    (gender !== 'accesorios') &&
                    (
                        <div className="style">Talle:
                            {
                                size.map((item, index)=> (
                                <div className="style__color sizes" id={`size-${index}`} onClick={()=>handleSelectedSize(item, index)}>{item}</div> 
                                ))
                            }
                            
                        </div>
                    ) 
                }
        </>
    )
}

export default Size
