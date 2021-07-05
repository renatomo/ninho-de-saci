import React, { useContext, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AppContext } from './context';
import cacheFiles from './services/cacheFiles';
import Cover from './components/Cover';
import Modal from './components/Modal';
import ReadingArea from './components/ReadingArea';
import BackCover from './components/BackCover';

const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

function App() {
  const [chromeMode, setChromeMode] = useState(isChrome);

  const {
    media,
    states: { isCoverLoaded },
    hooks: {
      useFetchingCover,
      useLoadedPageMedia,
      useFetchingBackCover,
    },
  } = useContext(AppContext);

  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(
    () => {
      const coverMedia = Object.values(media.cover);
      const pagesMedia = media.pages.map((page) => Object.values(page));
      const backCoverMedia = Object.values(media.backCover);
      cacheFiles(coverMedia, useFetchingCover, false);
      pagesMedia.forEach((page, index) => {
        cacheFiles([].concat(...page), useLoadedPageMedia, index);
      });
      cacheFiles(backCoverMedia, useFetchingBackCover, false);
    },
    [],
  );

  return (
    <main>
      { chromeMode
        ? <Modal setMode={ setChromeMode } />
        : <Cover /> }
      { isCoverLoaded && (
      <>
        <ReadingArea />
        <BackCover />
      </> )}
    </main>
  );
}

export default App;
