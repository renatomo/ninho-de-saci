import { gsap } from 'gsap';

export const loadCoverAnimations = (setLoaded) => {
  const colours = [
    'radial-gradient(circle, rgba(63,49,98,1) 0%, rgba(148,147,178,1) 25%, rgba(72,54,92,1) 66%)',
    'radial-gradient(circle, rgba(63,49,98,1) 0%, rgba(148,147,178,1) 21%, rgba(72,54,92,1) 87%)',
    'radial-gradient(circle, rgba(72,54,92,1) 0%, rgba(63,49,98,1) 25%, rgba(148,147,178,1) 66%)',
    'radial-gradient(circle, rgba(72,54,92,1) 0%, rgba(63,49,98,1) 21%, rgba(148,147,178,1) 87%)',
    'radial-gradient(circle, rgba(148,147,178,1) 0%, rgba(72,54,92,1) 25%, rgba(63,49,98,1) 66%)',
    'radial-gradient(circle, rgba(148,147,178,1) 0%, rgba(72,54,92,1) 21%, rgba(63,49,98,1) 87%)',
    ];

  const homeAnimationTL = gsap.timeline({
    repeat: -1,
    onRepeat: function() { this.invalidate(); }
  });

  colours.forEach(function(item, index) {
    homeAnimationTL.to('.cover', {
      background: item,
      duration: 1,
      ease: 'power3',
    });
  });

  gsap.timeline()
    .fromTo(
      '.cover-image',
      {
        opacity: 0,
        webkitFilter: "blur(" + 100 + "px)",
        scale: 2,
      },
      {
        opacity: 1,
        delay: .2,
        duration: 7,
        // duration: 1,
        ease: 'slow',
        webkitFilter: "blur(" + 0 + "px)",
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
    .fromTo(
      '.cover-image',
      {
        duration: .2,
        scale: 1.5,
        webkitFilter: "blur(" + 10 + "px)",
      },
      {
        yoyo: true,
        duration: 1,
        repeat: -1,
        scale: 1,
        ease: 'bounce',
        webkitFilter: "blur(" + 0 + "px)",
      },
    )
    .addPause(60)
    .to(
      '.cover',
      {
        opacity: 0,
        scale: 2,
        webkitFilter: "blur(" + 100 + "px)",
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

