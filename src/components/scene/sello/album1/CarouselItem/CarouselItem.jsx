import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import * as styles from './CarouselItem.module.css'

function CarouselItem({ onNavigate, text, title, srcLink }) {
    const navigate = (direction) => {
        // eslint-disable-next-line no-unused-expressions
        onNavigate && onNavigate(direction) // Call the onNavigate prop with the direction argument
    }

    return (
        <main className={`${styles.carousel}`}>
            <article className={`${styles.picture}`}>
                <img src={srcLink} alt="" />
            </article>
            <article className={`${styles.description}`}>
                <p>{text}</p>
            </article>
            <article className={`${styles.title} effect-title`} id="title">
                <div className={`${styles.thing} effect-title`}>
                    <h1 className="effect-title">
                    <br /> 
                        South America
                        <br /> 
                        <br />
                     
                        
                        {title} ✦
                    </h1>

                    <h1 className="effect-title"><br /> ✦</h1>
                </div>
            </article>
            <article className={`${styles.controls}`}>
                <button type="button" onClick={() => navigate('left')}>
                    <img
                        src="src/assets/arrow_left_icon_133703.svg"
                        alt="right"
                        height="50px"
                        width="50px"
                        className="invert-color invert"
                    />
                </button>
                <button type="button" onClick={() => navigate('right')}>
                    <img
                        src="src/assets/coolerarrow.svg"
                        alt="right"
                        height="50px"
                        width="50px"
                        className="invert-color "
                    />
                </button>
            </article>
        </main>
    )
}

CarouselItem.propTypes = {
    // eslint-disable-next-line react/require-default-props
    onNavigate: PropTypes.func,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    srcLink: PropTypes.string.isRequired,
}

export default CarouselItem
