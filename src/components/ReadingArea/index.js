import React, { useEffect, useState, useContext } from 'react';
import { loadReadingAreaTransition } from '../../hooks';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { AppContext } from '../../context';
import Page from '../Page';
import './styles.css';

const ReadingArea = () => {
  const {
    media: { pages },
    fetching: { pages: fetchingPages }
  } = useContext(AppContext);
  const [pageIndex, setPageIndex] = useState(0);

  const renderNextButton = () => {
    if (pageIndex < pages.length -1) {
      return (
        <button className="button" onClick={ () => setPageIndex((curr) => curr + 1) }>
          Próxima página <GrLinkNext />
        </button>
      );
    }
  };

  const renderPreviousButton = () => {
    if (pageIndex > 0) {
      return (
        <button className="button" onClick={ () => setPageIndex((curr) => curr - 1) }>
          <GrLinkPrevious /> Página anterior
        </button>
      );
    }
  };

  useEffect(
    () => {
      loadReadingAreaTransition();
    },
    [],
  );

  return (
    <section className="reading-area">
      <Page { ...pages[pageIndex] } index={ pageIndex } />
      <div
        className="page-nav"
        { ...(pageIndex === 0) && { style: { justifyContent: 'flex-end' } } }
      >
        { renderPreviousButton() }
        { renderNextButton() }
      </div>
      
    </section>
  );
};

export default ReadingArea;
