/// src/hoc/withTheme.js
import React from 'react';

const withTheme = (WrappedComponent) => {
  const EnhancedComponent = props => {
    return React.createElement(WrappedComponent, props);
  };

  EnhancedComponent.displayName = `WithTheme(${WrappedComponent.name || WrappedComponent.displayName})`;

  return EnhancedComponent;
};

export default withTheme;