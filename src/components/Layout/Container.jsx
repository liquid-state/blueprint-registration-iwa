import React from 'react';
import PropTypes from 'prop-types';
import FixedWidth from './FixedWidth';

const Container = (props) => {
  const { children, className, fixed } = props;
  return (
    <div className={`container ${className}`}>
      { fixed ? <FixedWidth>{children}</FixedWidth> : children }
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.bool,
};

Container.defaultProps = {
  children: null,
  className: '',
  fixed: false,
};

export default Container;
