import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useEffect } from 'react';
// import { loadReadingAreaTransition } from '../../hooks';
import './styles.css';
// import Images from '../../assets/images';
// import { useEffect } from 'react';

const Page = ({ image, text }) => {
  let mainImage = useRef(null);
  let textImage = useRef(null);

  useEffect(
    () => {
      gsap.timeline({
        scrollTrigger: {
          // trigger: '.reading-area',
          // trigger: '.page-container',
          trigger: mainImage,
          start: 1000,
          end: 1000,
          // end: 'bottom 1000%',
          // end: () => `+=${mainImage.offsetHeight}`,
          // end: (e) => `+=${e.cliclientHeight + 1000}`,
          scrub: true,
          // markers: true,
          // pin: true,
          pinSpacing: true,
        },
      })
        .fromTo(
          textImage,
          {
            opacity: 0,
          },
          {
            delay: 2,
            opacity: 1,
          },
        )
    },
    [],
  );

  return (
    <div className="page">
      <img ref={ e => textImage = e } src={ text } alt="" className="page-text" />
      <img ref={ e => mainImage = e } src={ image } alt="" className="page-image" />
    </div>
  );
};

export default Page;
