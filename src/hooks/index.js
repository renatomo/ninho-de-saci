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

export const loadReadingAreaTransition = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.reading-area',
      // start: '1%',
      // end: '100%',
      pin: true,
      scrub: true,
      // markers: true,
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
        // onComplete: () => console.log('onComplete'),
        // onInterrupt: () => console.log('onInterrupt'),
        // onCompleteParams: () => console.log('onCompleteParams'),
        // onRepeat: () => console.log('onRepeat'),
        // onReverseComplete: () => console.log('onReverseComplete'),
        // onUpdate: () => console.log('onUpdate'),
        // onUpdateParams: (a) => console.log('onUpdateParams', a),
        // onStart: () => console.log('onStart'),
      }
    )
};

export const loadPagesAnimation = (readingArea) => {
  const pages = gsap.utils.toArray('.page');
  const size = 100 * pages.length;
  const container = readingArea;
  gsap.set('.reading-area', { y: size + 'vw', x: size + 'vh'});

  gsap.to(container, {
    x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
      trigger: container,
      invalidateOnRefresh: true,
      pin: true,
      scrub: 1,
      end: () => "+=" + container.offsetWidth
    }
  })
  // gsap.set('.reading-area', { y: size + 'vw', x: size + 'vh'});
  // pages.forEach((page, index) => {
  //   console.log(window.innerWidth * 'px');
  //   const tl = gsap.timeline();
  //   tl.set(page, { xPercent: 100 * index})
  //     .to(
  //       page,
  //       {
  //         xPercent: 10 * index,
  //         ease: "none",
  //         // duration: 10 * index,
  //         scrollTrigger: {
  //           // trigger: page,
  //           start: window.innerWidth * index + 'px',
  //           end: '+=1000',
  //           scrub: true,
  //           // pin: true,
  //           // pinSpacing: true,
  //         },
  //       }
  //     )
  // });
};

export const loadPageText = (mainImage, textImage) => {
  gsap.fromTo(
      textImage,
      {
        opacity: 0,
      },
      {
        delay: 2,
        opacity: 1,
      },
    );
};
