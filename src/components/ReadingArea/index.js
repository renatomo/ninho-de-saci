import React, { useEffect, useState, useContext, useRef } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { IoReloadSharp } from 'react-icons/io5';
import { loadReadingAreaTransition, pageChangeAnimation } from '../../hooks/animations';
import { AppContext } from '../../context';
import Button from './Button';
import Page from '../Page';
import './styles.css';

const spinnerCSS = `
  overflow: hidden;
  margin-right: 1em;
`

const ReadingArea = () => {
  // Component state
  const [pageIndex, setPageIndex] = useState(0);
  const [nextPageIndex, setNextPageIndex] = useState(null);
  const [shouldGoToNext, setShouldGoToNext] = useState(false);
  // Context data
  const {
    media: { pages },
    fetching: { pages: fetchingPages }
  } = useContext(AppContext);
  const isFetchingNext = fetchingPages[pageIndex + 1];
  // Component refs
  const currentPage = useRef(null);
  const nextPage = useRef(null);
  const pageArea = useRef(null);
  
  // Button logic
  const isFirstPage = pageIndex === 0;
  const isLastPage = pageIndex === pages.length -1;
  const nextButtonValue = isLastPage ? pageIndex * -1 : 1;
  const nextButtonContent = isLastPage
    ? <><IoReloadSharp /> Voltar ao início</>
    : <>Próxima página <GrLinkNext /></>;
  const goToNextPage = ({ target: { value } }) => {
    setNextPageIndex(pageIndex + Number(value));
    setShouldGoToNext(true);
  };

  useEffect(
    () => {
      loadReadingAreaTransition();
    },
    [],
  );

  useEffect(
    () => {
      const animationParams = {
        current: currentPage.current,
        next: nextPage.current,
        orientation: nextPageIndex - pageIndex,
        callback: () => {
          setShouldGoToNext(false);
          setPageIndex(nextPageIndex);
          setNextPageIndex(null);
          currentPage.current.style.transform = 'translate(0)';
        },
      };
      if (shouldGoToNext) pageChangeAnimation(animationParams);
    },
    [shouldGoToNext],
  );

  return (
    <section className="reading-area">
      <div className="reading-area__page" ref={ e => pageArea.current = e }>
        <Page
          { ...pages[pageIndex] }
          index={ pageIndex }
          pageRef={ currentPage }
        />
        { shouldGoToNext && (
          <Page
            { ...pages[nextPageIndex] }
            index={ pageIndex }
            pageRef={ nextPage }
          /> )}
      </div>
      <div
        className="reading-area__nav"
        { ...(pageIndex === 0) && { style: { justifyContent: 'flex-end' } } }
      >
        { !isFirstPage && (
          <Button value={ -1 } handleOnClick= { goToNextPage }>
            <GrLinkPrevious /> Página anterior
          </Button> )}
        { (isFetchingNext && <PulseLoader css={ spinnerCSS } color="#9190b8" />) || (
          <Button value={ nextButtonValue } handleOnClick= { goToNextPage }>
            { nextButtonContent }
          </Button> )}
      </div>
    </section>
  );
};

export default ReadingArea;
