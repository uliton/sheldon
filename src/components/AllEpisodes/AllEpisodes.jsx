import React from 'react';
import PropTypes from 'prop-types';
import DATA from '../../DATA.json';
import { Button } from '../../c_ui/Button';

export const AllEpisodes = ({ season, episode, setEpisode }) => {
  const episodeText = 'серія';
  const episodes = DATA[season - 1].episodes;

  return (
    <>
      {episodes.map((_, i) => (
        <Button
          key={i}
          text={episodeText}
          value={i + 1}
          setter={setEpisode}
          currentValue={episode}
        />
      ))}
    </>
  );
};

AllEpisodes.propTypes = {
  season: PropTypes.number,
  setEpisode: PropTypes.func,
  episode: PropTypes.number,
};
