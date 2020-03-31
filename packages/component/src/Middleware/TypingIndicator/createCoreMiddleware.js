import classNames from 'classnames';
import React from 'react';

import TypingAnimation from '../../Assets/TypingAnimation';
import useDirection from '../../hooks/useDirection';
import useLocalizer from '../../hooks/useLocalizer';
import useStyleSet from '../../hooks/useStyleSet';

const DotIndicator = () => {
  const [{ typingIndicator: typingIndicatorStyleSet }] = useStyleSet();
  const [direction] = useDirection();
  const localize = useLocalizer();

  return (
    <div
      className={classNames(typingIndicatorStyleSet + '', { 'webchat__typing-indicator--rtl': direction === 'rtl' })}
    >
      <TypingAnimation aria-label={localize('TYPING_INDICATOR_ALT')} />
    </div>
  );
};

// TODO: [P4] Rename this file or the whole middleware, it looks either too simple or too comprehensive now
export default function createCoreMiddleware() {
  return () => () => ({ visible }) => visible && <DotIndicator />;
}
