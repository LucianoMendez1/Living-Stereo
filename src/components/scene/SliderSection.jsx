import React, { useRef, useEffect, useState } from 'react';
import './sliderSection.css';

const sectionData = [
  { name: 'Mellino', background: 'https://res.cloudinary.com/dvnhn35l4/video/upload/v1696907182/ProyectAgustin/1_iiwrbe.mp4' },
  { name: 'Agustin Bragoni', background: 'https://res.cloudinary.com/dvnhn35l4/video/upload/v1697520511/2550f605-d1ef-4035-91a9-db4619c37d4b_joy6bd.mov' },
  { name: 'Uno', background: 'https://res.cloudinary.com/dvnhn35l4/video/upload/v1696907183/ProyectAgustin/3_dgsoa2.mp4' },
  { name: 'Carpa Servian', background: 'https://res.cloudinary.com/dvnhn35l4/video/upload/v1696907204/ProyectAgustin/4_uisfb1.mp4' },
];

const SliderSection = () => {
  const sectionsRef = useRef([]);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll('.section');

    const handleScroll = (event) => {
      const delta = event.deltaY;
      let newIndex = activeSectionIndex;

      if (delta > 0 && activeSectionIndex < sectionsRef.current.length - 1) {
        newIndex += 1;
      } else if (delta < 0 && activeSectionIndex > 0) {
        newIndex -= 1;
      }

      scrollToSection(newIndex);
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activeSectionIndex]);

  const scrollToSection = (index) => {
    if (index >= 0 && index < sectionsRef.current.length) {
      sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
      setActiveSectionIndex(index);
    }
  };

  const handleEnterScene = (sceneName) => {
    // Handle entering a specific scene
  };

  return (
    <div className="scene-scroll-container">
      {sectionData.map((section, index) => (
        <section
          key={index}
          className={`section ${activeSectionIndex === index ? 'active' : 'inactive'}`}
        >
          <video autoPlay muted loop playsInline  className="video-background" playbackrate={1.5}>
            <source src={section.background} type="video/mp4" />
          </video>
          <div className="content">
            <h1>{section.name}</h1>
            <button className="start-button1" onClick={() => handleEnterScene(`Scene${index + 1}`)}></button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SliderSection;
