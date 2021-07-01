import React, { useRef, useEffect } from 'react';
import { loadPageText, changeImages } from '../../hooks';
import './styles.css';

const Page = ({ image, text, index }) => {
  let mainImage = useRef(null);
  let textImage = useRef(null);
  let pageElement = useRef(null);

  useEffect(
    () => {
      loadPageText(mainImage, textImage);
      changeImages(pageElement);
    },
    [index],
  );

  return (
    <div ref={ e => pageElement = e } src={ image } className="page">
      <img ref={ e => textImage = e } src={ text } alt="" className="page-text" />
      <img ref={ e => mainImage = e } src={ image } alt="" className="page-image" />
    </div>
  );
};

export default Page;
