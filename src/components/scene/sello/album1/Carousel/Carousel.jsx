import React, { useState } from 'react'
import CarouselItem from '../CarouselItem/CarouselItem'
import * as styles from './Carousel.module.css'

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const items = [
        {
            index: 0,
            status: activeIndex === 0 ? 'active' : 'inactive',
            text: 'Nicolas Nieves, Agustín Bragoni, Simon Di Marzio - Other Side [South America Avenue]',
            title: 'Living Stero',
            srcLink:
                'https://uploads-ssl.webflow.com/60c73b61baea9c518130ee68/62375338d69258c01fe12876_00_concepts-hero.jpg ',
        },
        {
            index: 1,
            status: activeIndex === 1 ? 'active' : 'inactive',
            text: 'ANicolas Nieves, Agustín Bragoni, Simon Di Marzio  ',
            title: 'Living Stero',
            srcLink:
                'https://uploads-ssl.webflow.com/60c73b61baea9c518130ee68/62375338d69258c01fe12876_00_concepts-hero.jpg',
        },
    ]
    function handleNavigate(direction) {
        if (direction === 'left') {
            setActiveIndex(
                activeIndex === 0 ? items.length - 1 : activeIndex - 1
            )
        } else if (direction === 'right') {
            setActiveIndex(
                activeIndex === items.length - 1 ? 0 : activeIndex + 1
            )
        }
    }

    return (
        <div className={`${styles.carousel}`}>
            {items.map((item) => {
                const classNames = [styles.item]
                if (item.status === 'active') {
                    classNames.push(styles.active)
                } else {
                    classNames.push(styles.inactive)
                }
                return (
                  
                    <div className={classNames.join(' ')}>
                        <CarouselItem
                            key={item.index}
                            data-index={item.index}
                            // eslint-disable-next-line react/jsx-no-bind
                            onNavigate={handleNavigate}
                            text={item.text}
                            srcLink={item.srcLink}
                            title={item.title}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Carousel
