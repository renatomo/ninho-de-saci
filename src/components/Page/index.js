import React, { useEffect } from 'react';
import { useState } from 'react';
import { loadPageText } from '../../hooks/animations';
import './styles.css';

const Page = ({ image, text, pageRef }) => {
  const [willUnmount, setWillUnmount] = useState(false);

  useEffect(
    () => {
      if (!willUnmount) loadPageText();
      return () => setWillUnmount(true);
    },
    [],
  );

  return (
    <article ref={ e => pageRef.current = e } src={ image } className="page">
      { !willUnmount && text.map((layer) => (
        <img src={ layer } alt="" className="page__text" />
      )) }
      <img src={ image } alt="" className="page__image" />
    </article>
  );
};

export default Page;
