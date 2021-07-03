import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../context';
import { loadCoverAnimations } from '../../hooks';
import CircleLoader from "react-spinners/CircleLoader";
import './styles.css';
import AudioPlayer from '../AudioPlayer';
import Images from '../../assets/images';

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
  const {
    useIsCoverLoaded,
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
            <AudioPlayer source={ Images.cover.audio } />
            <img src={ Images.cover.image } alt="" className="cover-image" />
            <img src={ Images.cover.text } alt="" className="cover-text" />
          </>
        )
      }
    </section>
  );
};

export default Cover;
