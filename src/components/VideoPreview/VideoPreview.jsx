import React from 'react';
import PropTypes from 'prop-types';
import play from './play.svg';
import style from './VideoPreview.module.scss';

export const VideoPreview = ({ episode, setIsReadyForWatch }) => {
  const handlerPlay = () => {
    setIsReadyForWatch(true);
  };

  return (
    <button
      type='button'
      className={style.videoPreview}
      onClick={handlerPlay}
    >
      <img
        src={play}
        alt='play'
        className={style.videoPreview__play}
      />
      <p className={style.videoPreview__text}>
        Дивитись {episode} серію
      </p>
    </button>
  );
};

VideoPreview.propTypes = {
  episode: PropTypes.number,
  setIsReadyForWatch: PropTypes.func,
};
