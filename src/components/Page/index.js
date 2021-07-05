import React, { useRef, useEffect } from 'react';
import { loadPageText } from '../../hooks/animations';
import './styles.css';

const Page = ({ image, text, index, isNext, pageRef }) => {
  let mainImage = useRef(null);
  let textImage = useRef(null);

  useEffect(
    () => {
      loadPageText(mainImage, textImage);
    },
    [index],
  );

  return (
    <div ref={ e => pageRef.current = e } src={ image } className="page">
      <img ref={ e => textImage = e } src={ text } alt="" className="page__text" />
      <img ref={ e => mainImage = e } src={ image } alt="" className="page__image" />
    </div>
  );
};

export default Page;
