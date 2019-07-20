/**
 *  Imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import './checkBox.css';

/**
 *  Common checkbox input component for app
 */
const CheckBox = ({ value, className, name }) => {
  return (
    <input
      type="checkbox"
      name={name}
      value={value}
      className={className}
    />
  );
};

export default CheckBox;

/**
 *  Checking for checkbox input props along with default values for missing fields
 */
CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool
};

CheckBox.defaultProps = {
  className: '',
  name: '',
  value: false,
};
