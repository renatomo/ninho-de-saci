import { loadReadingAreaTransition, loadPagesAnimation } from '../../hooks';
import './styles.css';
import Images from '../../assets/images';
import Page from '../Page';
import { useEffect } from 'react';
import { useRef } from 'react';

const ReadingArea = () => {
  const { pages: pageImages } = Images;
  let readingArea = useRef(null)

  useEffect(
    () => {
      loadReadingAreaTransition();
      // loadPagesAnimation(readingArea);
    },
    [],
  );

  return (
    <div ref={ e => readingArea = e } className="reading-area">
      { pageImages.map((images, index) => <Page key={ index } { ...images } />) }
    </div>
  );
};

export default ReadingArea;
