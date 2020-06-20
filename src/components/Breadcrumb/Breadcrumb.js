import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';

const Breadcrumb = ({ className, children, ...otherProps }) => (
  <div
    className={cn(
      'fui-breadcrumb',
      className,
    )}
    {...otherProps}
  >
    {children}
  </div>
);

Breadcrumb.Item = Item;

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.propTypes = {
  className: PropTypes.string,
};
Breadcrumb.defaultProps = {};

export default Breadcrumb;
