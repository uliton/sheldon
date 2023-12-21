import React from 'react';
import PropTypes from 'prop-types';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import style from './VideoPlayer.module.scss';

export const VideoPlayer = ({ url }) => {
  console.log(url);
  return (
    <div className={style.videoPlayer}>
      <Video autoPlay>
        <source src={url} type='video/webm'/>
      </Video>
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string,
};
