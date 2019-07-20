/**
 *  Imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import './textInput.css';

/**
 *  Common text input component for app
 */
const TextInput = ({
  type,
  className,
  onChange,
  value,
  placeholder,
  password,
  onBlur,
  onFocus,
  onKeyPress,
  disabled,
  associated,
  onKeyDown
}) => {
  return (
    <input
      type={type}
      className={className}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      placeholder={placeholder}
      password={password}
      onKeyPress={onKeyPress}
      disabled={disabled}
      htmlFor={associated}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onKeyDown();
        }
      }}
    />
  );
};

export default TextInput;

/**
 *  Checking for text input props along with default values for missing fields
 */
TextInput.propTypes = {
  associated: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyDown: PropTypes.func
};

TextInput.defaultProps = {
  associated: '',
  type: 'text',
  className: 'form-control',
  value: '',
  placeholder: '',
  password: 'false',
  onChange: () => {},
  onKeyPress: () => {},
  onKeyDown: () => {}
};
