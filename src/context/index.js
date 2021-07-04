import React, { createContext } from 'react';
import { useState } from 'react';
import media from '../assets/media';

const INITIAL_PAGES_STATUS = media.pages.map(() => true);
const INITIAL_COVER_STATUS = true;
const INITIAL_BACKCOVER_STATUS = true;
const INITIAL_STATE = {
  fetching: {
    cover: INITIAL_COVER_STATUS,
    backCover: INITIAL_BACKCOVER_STATUS,
    pages: INITIAL_PAGES_STATUS,
  },
  media,
};

const AppContext = createContext(INITIAL_STATE);

const AppProvider = ({ children }) => {
  const [fetchingCover, useFetchingCover] = useState(INITIAL_COVER_STATUS);
  const [fetchingPages, useFetchingPages] = useState(INITIAL_PAGES_STATUS);
  const [fetchingBackCover, useFetchingBackCover] = useState(INITIAL_BACKCOVER_STATUS);
  const [isCoverLoaded, useIsCoverLoaded] = useState(false);
  const [audioOff, useAudioOff] = useState(false);

  const useLoadedPageMedia = (index) => useFetchingPages(
    (current) => ({ ...current, [index]: false })
  );

  const context = {
    fetching: {
      cover: fetchingCover,
      pages: fetchingPages,
      backCover: fetchingBackCover,
    },
    media,
    states: {
      isCoverLoaded,
      audioOff,
    },
    hooks: {
      useAudioOff,
      useIsCoverLoaded,
      useFetchingCover,
      useLoadedPageMedia,
      useFetchingPages,
      useFetchingBackCover,
    },
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
};

export {
  AppContext,
  AppProvider,
};
