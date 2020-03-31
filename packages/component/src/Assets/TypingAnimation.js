import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

import ScreenReaderText from '../ScreenReaderText';
import useDirection from '../hooks/useDirection';
import useLocalizer from '../hooks/useLocalizer';
import useStyleSet from '../hooks/useStyleSet';

const ROOT_CSS = css({
  '&.webchat__typing-animation': {
    '&.webchat__typing-animation--rtl': {
      transform: 'scale(-1, 1)'
    }
  }
});

const TypingAnimation = () => {
  const [{ typingAnimation: typingAnimationStyleSet }] = useStyleSet();
  const [direction] = useDirection();
  const localize = useLocalizer();

  return (
    <React.Fragment>
      <ScreenReaderText text={localize('TYPING_INDICATOR_ALT')} />
      <div
        aria-hidden={true}
        className={classNames(
          ROOT_CSS + '',
          typingAnimationStyleSet + '',
          'webchat__typing-animation',
          { 'webchat__typing-animation--rtl': direction === 'rtl' }
        )}
      />
    </React.Fragment>
  );
};

export default TypingAnimation;
