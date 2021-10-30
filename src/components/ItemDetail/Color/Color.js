import { Spin } from 'antd'
import React from 'react'


const Color = ({color, setSelectedColor}) => {

    //Elegir color
    const handleSelectedColor = (colorCode, index) => {

        setSelectedColor(colorCode)

        const colors = document.querySelectorAll('.colors')

        colors.forEach((item)=>{
            if (item.id === `color-${index}`) {
                item.classList.add('style--active')
            } else {
                item.classList.remove('style--active')
            }
        })
    }


    return (
        <div className="style">Color:
            {
                color.length === 0
                    ? <Spin size="large" className="spin"/>
                    : color.map((item, index)=> {
                        return (
                            <div className="style__color colors" id={`color-${index}`} style={{backgroundColor: item}} onClick={()=>handleSelectedColor(item, index)}></div> 
                        )
                    })
            }
        </div>
    )
}

export default Color
