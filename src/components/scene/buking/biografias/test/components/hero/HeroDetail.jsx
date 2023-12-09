import React from 'react'
import './heroDetail.css'

const HeroDetail = ({name , img}) => {
  return (
    <div className="box_hero">
        <h2>{name}</h2>
        <div className="box_img_detail">
            <img
                data-speed=".6"
                className="hero"
                src={img}
                alt="Alt"
            />
        </div>
    </div>
  )
}

export default HeroDetail