import { gsap } from 'gsap';

export const coverAnimations = () => {
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
        duration: 7,
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
        delay: 2,
        duration: 5,
        scale: 1,
        ease: 'slow'
      },
      'start',
    )
};
