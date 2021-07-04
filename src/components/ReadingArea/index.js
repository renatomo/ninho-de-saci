import { loadReadingAreaTransition } from '../../hooks';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import './styles.css';
import Media from '../../assets/media';
import Page from '../Page';
import { useEffect } from 'react';
import { useState } from 'react';

const ReadingArea = () => {
  // TO DO: Change to context
  const { pages } = Media;
  const [ pageIndex, setPageIndex ] = useState(0);

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
