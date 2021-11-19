import { Spin } from 'antd'
import React, { useContext } from 'react'
import { UIContext } from '../../Context/UIContext'

const Size = ({gender, size, setSelectedSize}) => {
    const { darkMode } = useContext(UIContext)

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
                size && size.length === 0 
                    ? <Spin size="large" className="spin"/>
                    : ((gender !== 'accesorios') &&
                        (
                            <div className="style">Talle:
                                {
                                    size.map((item, index)=> (
                                    <div 
                                        key={index}
                                        className={darkMode ? 'style__color dark-text sizes' : 'style__color sizes'} 
                                        id={`size-${index}`} 
                                        onClick={()=>handleSelectedSize(item, index)}
                                    >
                                        {item}
                                    </div> 
                                    ))
                                }
                                
                            </div>
                        )
                    ) 
            }
        </>
    )
}

export default Size
