import React, { useEffect, useContext } from 'react';
import CircleLoader from "react-spinners/CircleLoader";
import { HiChevronDoubleDown } from 'react-icons/hi';
import { AppContext } from '../../context';
import { loadCoverAnimations, loadMessageIconsAnimation } from '../../hooks';
import AudioPlayer from '../AudioPlayer';
import Media from '../../assets/media';
import './styles.css';
import { useState } from 'react';

const spinnerCSS = `
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
  &:after {
    color: #9190b8;
    content: 'CARREGANDO...';
    font-family: "Schoolbell";
    font-size: 1.5em;
    margin-bottom: 15vh;
    margin-left: max(2.5vw, 1.6em);
  }
`

const Cover = () => {
  const { cover: { image, text, audio } } = Media;
  const {
    hooks: { useIsCoverLoaded },
    fetching: { cover: isCoverMediaFetching, pages },
  } = useContext(AppContext);
  const [showMessage, setShowMessage] = useState(false);
  const isFirstPageLoaded = !pages[0];
  const shouldShowMessage = showMessage && isFirstPageLoaded;

  useEffect(
    () => {
      if (!isCoverMediaFetching) loadCoverAnimations(useIsCoverLoaded, setShowMessage);
    },
    [isCoverMediaFetching, useIsCoverLoaded],
  );

  useEffect(
    () => {
      if (shouldShowMessage) loadMessageIconsAnimation();
    },
    [shouldShowMessage],
  );

  const renderMessage = () => (
    <div className="cover__message">
      <HiChevronDoubleDown className="cover__message__icon" />
      <span className="cover__message__text">
        Role a página para iniciar a leitura
      </span>
      <HiChevronDoubleDown className="cover__message__icon" />
    </div>
  );

  return (
    <section className="cover">
      { isCoverMediaFetching
        ? <CircleLoader css={ spinnerCSS } color="#9190b8" speedMultiplier={ 0.5 } size={ '50vh' } />
        : <>
            { shouldShowMessage && renderMessage() }
            <AudioPlayer source={ audio } />
            <img src={ image } alt="" className="cover__image" />
            <img src={ text } alt="" className="cover__text" />
          </> 
      }
    </section>
  );
};

export default Cover;
