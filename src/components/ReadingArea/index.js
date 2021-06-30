import { readingAreaAnimations } from '../../hooks';
import './styles.css';
import Images from '../../assets/images';
import { useEffect } from 'react';

const ReadingArea = () => {
  const { pages } = Images;

  useEffect(
    readingAreaAnimations,
    [],
  );

  return (
    <div className="reading-area">
      {
        pages.map((page) => <img src={page.image} alt="" srcset="" className="page" />)
      }
      
    </div>
  );
};

export default ReadingArea;
