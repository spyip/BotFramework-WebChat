import { css } from 'glamor';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import ImageAvatar from './Avatar/ImageAvatar';
import InitialsAvatar from './Avatar/InitialsAvatar';
import useStyleSet from './hooks/useStyleSet';

const ROOT_CSS = css({
  '&.webchat__basic-avatar': {
    overflow: 'hidden',
    position: 'relative',

    '> *': {
      left: 0,
      position: 'absolute',
      top: 0
    }
  }
});

const BasicAvatar = ({ 'aria-hidden': ariaHidden, className, fromUser }) => {
  const [{ basicAvatar: basicAvatarStyleSet }] = useStyleSet();

  return (
    <div
      aria-hidden={ariaHidden}
      className={classNames(ROOT_CSS + '', basicAvatarStyleSet + '', 'webchat__basic-avatar', className + '')}
    >
      <InitialsAvatar fromUser={fromUser} />
      <ImageAvatar fromUser={fromUser} />
    </div>
  );
};

BasicAvatar.defaultProps = {
  'aria-hidden': true,
  className: ''
};

BasicAvatar.propTypes = {
  'aria-hidden': PropTypes.bool,
  className: PropTypes.string,
  fromUser: PropTypes.bool.isRequired
};

export default BasicAvatar;
