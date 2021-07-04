import React, { useContext } from 'react';
import { AppContext } from './context';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cacheFiles from './services/cacheFiles';
import Cover from './components/Cover';
import Modal from './components/Modal';
import ReadingArea from './components/ReadingArea';
import { useEffect } from 'react';
import { useState } from 'react';

const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

function App() {
  const [chromeMode, setChromeMode] = useState(isChrome);

  const {
    media,
    states: { isCoverLoaded },
    hooks: {
      useFetchingCover,
      useLoadedPageMedia,
    },
  } = useContext(AppContext);

  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(
    () => {
      const coverMedia = Object.values(media.cover);
      const pagesMedia = media.pages.map((page) => Object.values(page));
      cacheFiles(coverMedia, useFetchingCover, false);
      pagesMedia.forEach((page, index) => {
        cacheFiles([].concat(...page), useLoadedPageMedia, index);
      });
    },
    [],
  );

  return (
    <main>
      { chromeMode
        ? <Modal setMode={ setChromeMode } />
        : <Cover /> }
      { isCoverLoaded && <ReadingArea /> }
    </main>
  );
}

export default App;
