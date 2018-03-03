import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable max-len */

const Logo = ({ className }) => (
  <div className={className}>
    Save A Girl<br /> Save A World
  </div>
);

Logo.defaultProps = {
  className: '',
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
