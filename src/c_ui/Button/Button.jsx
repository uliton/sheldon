import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './Button.module.scss';

export const Button = ({ text, value, setter, currentValue }) => {
  const handler = () => {
    setter(+value);
  };

  return (
    <button
      type='button'
      className={classNames(style.button, {
        [style['button--isActive']]: value === currentValue,
      })}
      onClick={handler}
    >
      {`${text} ${value}`}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number || PropTypes.string,
  setter: PropTypes.func,
  currentValue: PropTypes.number || PropTypes.string,
};
