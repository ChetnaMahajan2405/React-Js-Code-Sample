/**
 *  Imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../index';
import './tile.css';

/**
 *  Common footer component for app with logo and seatch text
 */
const Tile = ({ header, text, path }) => {
  return (
    <div className="tile">
        <Image
            src={`assets/images/${path}.jpg`}
            alt="tile"
            className="image"
            />
        <div className="header"> {header} </div>
        <div className="sub-header"> {text} </div>
    </div>
  );
};

export default Tile;

/**
 *  Checking for footer props along with default values for missing fields
 */
Tile.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string
};

Tile.defaultProps = {
  header: '',
  text: '',
  path: 'tile1'
};
