import React, { useContext } from 'react';
import { AppContext } from '../../context';
import ReactPlayer from 'react-player';

const AudioPlayer = ({ source, playCallback = null, onEndCallback = () => null }) => {
  const { audioOff } = useContext(AppContext);

  if (audioOff) return null;

  return (
    <ReactPlayer
      volume={ 0.7 }
      onEnded={ onEndCallback }
      playing={ true }
      url={ source }
      style={ { display: 'none' } }
      // style={ { position: 'absolute', display: 'flex', float: 'right', zIndex: 0, left: 0 } }
    />
  );
};

export default AudioPlayer;
