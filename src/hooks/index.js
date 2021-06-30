import { gsap } from 'gsap';

export const coverAnimations = (setLoaded) => {
  gsap.timeline()
    .fromTo(
      '.cover-image',
      {
        opacity: 0,
        webkitFilter:"blur(" + 100 + "px)",
        scale: 2,
      },
      {
        opacity: 1,
        delay: .2,
        // duration: 7,
        duration: 1,
        ease: 'slow',
        webkitFilter:"blur(" + 0 + "px)",
        scale: 1,
      },
      'start'
    )
    .fromTo(
      '.cover-text',
      {
        opacity:0,
        scale: .2,
      },
      {
        opacity: 1,
        // delay: 2,
        delay: 1,
        // duration: 5,
        duration: 1,
        scale: 1,
        ease: 'slow',
        onComplete: () => setLoaded(true),
      },
      'start',
    )
    .to(
      '.cover',
      {
        opacity: 0,
        // immediateRender:false,
        scrollTrigger: {
          trigger: '.cover',
          scrub: true,
          pin: true,
          pinSpacing: false,
          // start: '%50',
          // end: 200,
          // markers: true,
        },
      },
    )
    // clipPath: 'polygon(0 0, 37% 0, 0 100%, 0% 100%)',

};

export const readingAreaAnimations = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.reading-area',
      // start: '1%',
      // end: '100%',
      pin: true,
      scrub: true,
      markers: true,
      pinSpacing: true,
    }
  })
    .fromTo(
      '.reading-area',
      {
        opacity: 0,
        xPercent: 100,
        // yPercent: 0,
      },
      {
        opacity: 1,
        xPercent: 0,
        // scale: .5,
        // width: '100vw',
      }
    )
};
