import React from 'react';
import PropTypes from 'prop-types';
import DATA from '../../DATA.json';
import { Button } from '../../c_ui/Button';

export const AllSeasons = ({ season, setSeason }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      justifyContent: 'center',
    }}>
      {DATA.map((item, i) => (
        <Button
          key={i}
          text='сезон'
          value={item.season}
          setter={setSeason}
          currentValue={season}
        />
      ))}
    </div>
  );
};

AllSeasons.propTypes = {
  season: PropTypes.number,
  setSeason: PropTypes.func,
};
