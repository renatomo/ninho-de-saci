import React, { useState, useContext } from 'react';
import { GiSoundOn } from 'react-icons/gi';
import { AppContext } from '../../context';
import AudioPlayer from '../AudioPlayer';
import AudioSilence from '../../assets/media/silence.mp3'
import './styles.css';

const Modal = ({ setMode }) => {
  const { hooks: { useAudioOff } } = useContext(AppContext);
  const [play, setPlay] = useState(false);

  const setAudioOn = () => setPlay(true);
  const onPlayEnd = () => setMode(false);
  const useSetAudioOff = () => {
    useAudioOff(true);
    setMode(false);
  };

  return (
    <div className="modal">
        <div className="modal__content">
            <h1><GiSoundOn onClick={ setAudioOn } /></h1>
            <h2>Ative o áudio clicando no ícone acima</h2>
            <p>
              Este site possui sons cuja reprodução depende da sua interação. Caso prefira não reproduzi-los, basta fechar este aviso.
            </p>
            <button onClick={ useSetAudioOff } className="modal__close">&times;</button>
            { play && <AudioPlayer source={ AudioSilence } onEndCallback={ onPlayEnd } /> }
        </div>
    </div>
  );
};

export default Modal;
