/**
 *  Imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


/**
 *  Common button component for app
 */
const Button = ({ type, className, onClick, value, disabled }) => {
  return (
    <input
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      value={value}
    />
  );
};

export default Button;

/**
 *  Checking for button input props along with default values for missing fields
 */
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  value: '',
  disabled: false,
  onClick: () => {},
};
