import { gsap } from 'gsap';
import './styles.css';
import Images from '../../assets/images';
import { useEffect } from 'react';

const Cover = () => {

  return (
    <div className="cover">
      <img src={ Images.cover.image } alt="" className="cover-image" />
      <img src={ Images.cover.text } alt="" className="cover-text" />
    </div>
  );
};

export default Cover;
