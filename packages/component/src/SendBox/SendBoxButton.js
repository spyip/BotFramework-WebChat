import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import useStyleSet from '../hooks/useStyleSet';

const SendBoxButton = ({ alt, children, className, disabled, onClick }) => {
  const [{ sendBoxButton: sendBoxButtonStyleSet }] = useStyleSet();

  return (
    <button
      className={classNames(sendBoxButtonStyleSet + '', 'webchat__send-box-button', className + '')}
      disabled={disabled}
      onClick={onClick}
      title={alt}
      type="button"
    >
      {children}
    </button>
  );
};

SendBoxButton.defaultProps = {
  alt: '',
  children: undefined,
  className: '',
  disabled: false,
  onClick: undefined
};

SendBoxButton.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default SendBoxButton;
