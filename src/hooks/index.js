import { gsap } from 'gsap';

export const loadCoverAnimations = (setLoaded) => {
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
        // duration: 1,
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
        // delay: 1,
        duration: 5,
        // duration: 1,
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
        scrollTrigger: {
          trigger: '.cover',
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      },
    )
};

export const loadReadingAreaTransition = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.reading-area',
      pin: true,
      scrub: true,
      pinSpacing: true,
    }
  })
    .fromTo(
      '.reading-area',
      {
        opacity: 0,
        xPercent: 100,
      },
      {
        opacity: 1,
        xPercent: 0,
      }
    )
};

export const loadPageText = (mainImage, textImage) => {
  gsap.fromTo(
      textImage,
      {
        opacity: 0,
      },
      {
        delay: .8,
        opacity: 1,
      },
    );
};

export const changeImages = (pageElement) => {
  gsap.fromTo(
    pageElement,
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
        duration: 1,
        ease: 'power3'
      },
    );
};

