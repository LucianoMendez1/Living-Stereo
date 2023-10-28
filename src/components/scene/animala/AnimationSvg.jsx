import  { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './animationsvg.css'

function AnimationSvg() {
  const boxPresent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxPresent.current,
        start: 'top 0%',
        end: '+=100',
        pin: true,
      },
    });

    tl.fromTo('.myPath', {
      opacity: 0,
    },
    {
      duration: 0.5,
      strokeDashoffset: 0,
      ease: "linear",
      opacity: 1,
    }, "-=1.8");

  }, []);

  return (
    <div className="boxPresent" ref={boxPresent}>
      <div className="box_svg">
        <div className="draw-line is-inview" data-svg-path-length="399">
          <svg width="303" height="221" viewBox="0 0 233 121" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1C24.1778 10.741 47.0701 20.9782 69.1085 33.1274C92.4583 45.9995 115.893 61.3548 132.06 83.0048C137.065 89.7066 142.941 98.5964 142.819 107.411C142.742 112.934 135.615 117.475 131.082 118.815C123.229 121.138 113.118 119.82 105.652 116.818C99.8574 114.489 89.8256 108.254 89.8256 100.977C89.8256 88.2399 117.102 86.4402 124.369 85.6229C160.566 81.5519 197.278 87.3847 232 97.3822"
              stroke="#c90000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="399"
              strokeDashoffset="399"
              className='myPath'
            ></path>
          </svg>
        </div>
      </div>
    
    </div>
  );
}

export default AnimationSvg;
