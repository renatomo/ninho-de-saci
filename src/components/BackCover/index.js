import React, { useContext, useRef, useEffect } from 'react';
import { backCoverParallax } from '../../hooks/animations';
import { AppContext } from '../../context';
import './styles.css';

const credits = [
  { name: 'Raoni Assis', role: 'Autor e ilustrador' },
  { name: 'Victor Jucá', role: 'Fotógrafo' },
  { name: 'Rebecka Zamali', role: 'Miniaturista e assistente de arte' },
  { name: 'Thelmo Cristovam', role: 'Designer de som' },
  { name: 'Beatriz Arcoverde', role: 'Produtora' },
  { name: 'Rodrigo Acioli', role: 'Editor' },
  { name: 'Célia Menezes', role: 'Webdesigner' },
  { name: 'Renato Feitosa', role: 'Desenvolvedor Web' },
  { name: 'Naíma Valois', role: 'Locutora' },
  { name: 'Letícia Valois', role: 'Locutora' },
  { name: 'Hrönir', role: 'Trilha sonora' },
];

const creditsMiddle = credits.length / 2 + 1;

const BackCover = () => {
  const { media: { backCover: { image } } } = useContext(AppContext);
  const background = useRef(null);
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  useEffect(
    () => {
      backCoverParallax(background);
    },
    [],
  );

  const renderCredit = ({ name, role }) => (
    <cite className="back-cover__credit">
      <p className="back-cover__credit__name">{ name }</p>
      <p className="back-cover__credit__role">{ role }</p>
    </cite>
  );
  
  return (
    <section className="back-cover">
      <div
        ref={ e => background.current = e }
        className="back-cover__bg"
        style={ backgroundStyle }
      />
      <div>
        { credits.slice(0, creditsMiddle).map(renderCredit) }
      </div>
      <div>
        { credits.slice(creditsMiddle).map(renderCredit) }
      </div>
    </section>
  );
};

export default BackCover;
