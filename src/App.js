import React, { useContext } from 'react';
import { AppContext } from './context';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cacheFiles from './hooks/preload';
import './App.css';
import Cover from './components/Cover';
import Modal from './components/Modal';
import ReadingArea from './components/ReadingArea';
import { useEffect } from 'react';
import { useState } from 'react';

const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

function App() {
  const [chromeMode, setChromeMode] = useState(isChrome);

  const {
    isCoverLoaded,
    images,
    useFetchingCover,
    useLoadedPageMedia,
  } = useContext(AppContext);

  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(
    () => {
      const coverMedia = Object.values(images.cover);
      const pagesMedia = images.pages.map((page) => Object.values(page));
      cacheFiles(coverMedia, useFetchingCover, false);
      pagesMedia.forEach((page, index) => {
        cacheFiles(coverMedia, useLoadedPageMedia, index);
      });
    },
    [],
  );

  return (
    <main className="app-container">
      { chromeMode
        ? <Modal setMode={ setChromeMode } />
        : <Cover /> }
      { isCoverLoaded && <ReadingArea /> }
    </main>
  );
}

export default App;
