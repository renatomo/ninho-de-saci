import React, { useContext } from 'react';
import { AppContext } from '../../context';
import './styles.css';
import Images from '../../assets/images';

const Cover = () => {
  const context = useContext(AppContext);
  console.log(context);

  return (
    <section className="cover">
      <img src={ Images.cover.image } alt="" className="cover-image" />
      <img src={ Images.cover.text } alt="" className="cover-text" />
    </section>
  );
};

export default Cover;
