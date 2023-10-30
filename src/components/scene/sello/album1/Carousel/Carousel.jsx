import React, { useState, useRef } from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
import * as styles from './Carousel.module.css';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const audioRef = useRef(null);

    const items = [
        {
            text: 'Nicolas Nieves, Agustín Bragoni, Simon Di Marzio - Other Side [South America Avenue]',
            title: 'Other Side',
            srcLink: 'https://uploads-ssl.webflow.com/60c73b61baea9c518130ee68/62375338d69258c01fe12876_00_concepts-hero.jpg',
            audioSrc: 'https://res.cloudinary.com/dvnhn35l4/video/upload/v1698687934/Nicolas_Nieves_Agust%C3%ADn_Bragoni_Simon_Di_Marzio_-_Other_Side_South_America_Avenue_zchegh.mp3',
        },
        {
            text: 'Nicolas Nieves, Agustín Bragoni, Simon Di Marzio',
            title: 'Rivera Paradise',
            srcLink: 'https://uploads-ssl.webflow.com/60c73b61baea9c518130ee68/62375338d69258c01fe12876_00_concepts-hero.jpg',
            audioSrc: 'https://res.cloudinary.com/dvnhn35l4/video/upload/v1698689471/Nicolas_Nieves_Agust%C3%ADn_Bragoni_Simon_Di_Marzio_-_Rivera_Paradise_South_America_Avenue_imwpnj.mp3',
        },
        {
            text: 'Nicolas Nieves, Agustín Bragoni, Simon Di Marzio',
            title: 'DirtyPool ',
            srcLink: 'https://uploads-ssl.webflow.com/60c73b61baea9c518130ee68/62375338d69258c01fe12876_00_concepts-hero.jpg',
            audioSrc: 'https://res.cloudinary.com/dvnhn35l4/video/upload/v1698689314/Nicolas_Nieves_Agust%C3%ADn_Bragoni_Simon_Di_Marzio_-_Dirty_Pool_South_America_Avenue_mqp7tw.mp3',
        },
    ];

    function handleNavigate(direction) {
        if (audioRef.current) {
            audioRef.current.pause(); // Pausar la reproducción del audio actual
        }

        if (direction === 'left') {
            setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
        } else if (direction === 'right') {
            setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
        }

        // Cambiar la fuente de audio cuando cambias de índice
        if (audioRef.current) {
            audioRef.current.src = items[activeIndex].audioSrc;
            audioRef.current.play(); // Reproducir el nuevo audio
        }
    }

    return (
        <div>
            <div key={activeIndex}>
                <audio controls ref={audioRef}>
                    <source src={items[activeIndex].audioSrc} type="audio/mpeg" />
                    Tu navegador no soporta la reproducción de audio.
                </audio>
            </div>
            <div className={`${styles.carousel}`}>
                {items.map((item, index) => {
                    const classNames = [styles.item];
                    if (index === activeIndex) {
                        classNames.push(styles.active);
                    } else {
                        classNames.push(styles.inactive);

                    }
                    return (
                        <div className={classNames.join(' ')} key={index}>
                            <CarouselItem
                                onNavigate={handleNavigate}
                                text={item.text}
                                srcLink={item.srcLink}
                                title={item.title}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Carousel;
