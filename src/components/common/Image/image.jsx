/**
 *  Imports
 */
import React from "react";
import PropTypes from "prop-types";

/**
 *  Common Image component for app
 */
const Image = ({ className, src, alt, onErrorImage }) => {
    return (
      <img
        className={className}
        src={src}
        alt={alt}
        onError={e => {
          e.target.src = onErrorImage;
        }}
        title={alt}
      />
    );
}


export default Image;


/**
 *  Checking for image props along with default values for missing fields
 */
Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  onErrorImage: PropTypes.string
};

Image.defaultProps = {
  className: "",
  src: "",
  alt: "",
  onErrorImage: ""
};
