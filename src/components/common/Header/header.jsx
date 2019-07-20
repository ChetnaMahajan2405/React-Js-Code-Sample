/**
 *  Imports
 */
import React from 'react';
import { Image } from '../index';
import '../../index.css';
import './header.css';

/**
 *  Common header component for app with logo and seatch text
 */
const Header = () => {
  return (
    <div className="search-logo-parent">
      
        <Image src="assets/images/logo.jpg" alt="logo" className="logo" />
      
    </div>
  );
};

export default Header;
