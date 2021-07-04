import React, { useEffect, useContext } from 'react';
import CircleLoader from "react-spinners/CircleLoader";
import { AppContext } from '../../context';
import { loadCoverAnimations } from '../../hooks';
import AudioPlayer from '../AudioPlayer';
import Media from '../../assets/media';
import './styles.css';

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
  const { cover: { image, text } } = Media;
  const {
    hooks: { useIsCoverLoaded },
    fetching: { cover: isCoverMediaFetching },
  } = useContext(AppContext);

  useEffect(
    () => {
      if (!isCoverMediaFetching) loadCoverAnimations(useIsCoverLoaded);
    },
    [isCoverMediaFetching, useIsCoverLoaded],
  );

  return (
    <section className="cover">
      { isCoverMediaFetching
        ? <CircleLoader css={ spinnerCSS } color="#9190b8" speedMultiplier={ 0.5 } size={ '50vh' }>
            Carregando
          </CircleLoader>
        : (
          <>
            <AudioPlayer source={ Media.cover.audio } />
            <img src={ image } alt="" className="cover__image" />
            <img src={ text } alt="" className="cover__text" />
          </>
        )
      }
    </section>
  );
};

export default Cover;
