import React from 'react';
import PropTypes from 'prop-types';
import DATA from '../../DATA.json';
import style from './Description.module.scss';

export const Description = ({ season, episode }) => {
  // season description
  if (episode === undefined) {
    const description = DATA[season].description;

    return (
      <div className={style.description}>
        {description !== undefined ? description : ''}
      </div>
    );
  }

  // episode description
  const description = DATA[season].episodes[episode].description;

  if (description === undefined) {
    return <></>
  }

  return (
    <div className={style.description}>
      {description !== undefined ? description : ''}
    </div>
  )
};

Description.propTypes = {
  season: PropTypes.number,
  episode: PropTypes?.number,
}
