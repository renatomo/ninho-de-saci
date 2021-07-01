import { loadReadingAreaTransition, loadPagesAnimation } from '../../hooks';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import './styles.css';
import Images from '../../assets/images';
import Page from '../Page';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const ReadingArea = () => {
  const { pages: pageImages } = Images;
  const [ pageIndex, setPageIndex ] = useState(0);
  let readingArea = useRef(null)

  const renderNextButton = () => {
    if (pageIndex < pageImages.length -1) {
      return (
        <button className="button" onClick={ () => setPageIndex(pageIndex + 1) }>
          Próxima página <GrLinkNext />
        </button>
      );
    }
  };

  const renderPreviousButton = () => {
    if (pageIndex > 0) {
      return (
        <button className="button" onClick={ () => setPageIndex(pageIndex - 1) }>
          <GrLinkPrevious />  Página anterior
        </button>
      );
    }
  };

  useEffect(
    () => {
      loadReadingAreaTransition();
      // loadPagesAnimation(readingArea);
    },
    [],
  );

  return (
    <section ref={ e => readingArea = e } className="reading-area">
      <Page { ...pageImages[pageIndex] } />
      <div
        className="page-nav"
        { ...(pageIndex === 0) && { style: { justifyContent: 'end' } } }
      >
        { renderPreviousButton() }
        { renderNextButton() }
      </div>
      
    </section>
  );
};

export default ReadingArea;
