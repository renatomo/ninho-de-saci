import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { AppContext } from '../../context';

const AudioPlayer = ({ source, playCallback = null, onEndCallback = () => null }) => {
  const { states: { audioOff } } = useContext(AppContext);

  if (audioOff) return null;

  return (
    <ReactPlayer
      volume={ 0.7 }
      onEnded={ onEndCallback }
      playing={ true }
      url={ source }
      style={ { display: 'none' } }
    />
  );
};

export default AudioPlayer;
