import React, { useRef, useEffect } from 'react';
import { loadPageText } from '../../hooks';
import './styles.css';

const Page = ({ image, text }) => {
  let mainImage = useRef(null);
  let textImage = useRef(null);

  useEffect(
    () => {
      loadPageText(mainImage, textImage);
    },
    [],
  );

  return (
    <div className="page">
      <img ref={ e => textImage = e } src={ text } alt="" className="page-text" />
      <img ref={ e => mainImage = e } src={ image } alt="" className="page-image" />
    </div>
  );
};

export default Page;
