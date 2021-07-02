import React, { createContext } from 'react';
import images from '../assets/images';

const INITIAL_STATE = {
  loadingStatus: {
    cover: [],
    backCover: [],
    pages: [],
  },
  images,
};

const AppContext = createContext(INITIAL_STATE);

const AppProvider = ({ children }) => {

  const context = {
    app : INITIAL_STATE,
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
