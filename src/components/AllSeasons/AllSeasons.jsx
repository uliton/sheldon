import React from 'react';
import PropTypes from 'prop-types';
import DATA from '../../DATA.json';
import { Button } from '../../ui/Button';

export const AllSeasons = ({ season, setSeason }) => {
  return (
    <>
      {DATA.map((item, i) => (
        <Button
          key={i}
          text='сезон'
          value={item.season}
          setter={setSeason}
          currentValue={season}
        />
      ))}
    </>
  );
};

AllSeasons.propTypes = {
  season: PropTypes.number,
  setSeason: PropTypes.func,
};
