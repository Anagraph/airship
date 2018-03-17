import React from 'react';
import PropTypes from 'prop-types';

const MinusIcon = ({
  width = 12,
  height = 1,
  color = '#1785fb',
  ...others
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      {...others}
      viewBox="0 0 12 1"
    >
      <path d="M0 0h12v1H0z" />
    </svg>
  );
};

MinusIcon.propTypes = {
  width: PropTypes.oneOf([12, 24, 32, 48]),
  height: PropTypes.oneOf([1, 2, 3, 4]),
  color: PropTypes.string
};

export default MinusIcon;
