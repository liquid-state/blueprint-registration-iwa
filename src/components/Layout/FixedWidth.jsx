import React from 'react';
import PropTypes from 'prop-types';

const FixedWidthContainer = ({ children }) => (
  <div className="fixed-width-container">
    {children}
  </div>
);

FixedWidthContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FixedWidthContainer;
