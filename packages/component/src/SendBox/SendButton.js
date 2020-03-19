import classNames from 'classnames';
import React from 'react';

import connectToWebChat from '../connectToWebChat';
import SendBoxButton from './SendBoxButton';
import SendIcon from './Assets/SendIcon';
import useDisabled from '../hooks/useDisabled';
import useLocalizer from '../hooks/useLocalizer';
import useStyleSet from '../hooks/useStyleSet';
import useSubmitSendBox from '../hooks/useSubmitSendBox';

const connectSendButton = (...selectors) =>
  connectToWebChat(
    ({ disabled, language, submitSendBox }) => ({
      disabled,
      language,
      submitSendBox
    }),
    ...selectors
  );

const SendButton = () => {
  const [{ sendButton: sendButtonStyleSet }] = useStyleSet();
  const [disabled] = useDisabled();
  const localize = useLocalizer();
  const submitSendBox = useSubmitSendBox();

  return (
    <div className={classNames(sendButtonStyleSet + '', 'webchat__send-button')}>
      <SendBoxButton
        alt={localize('TEXT_INPUT_SEND_BUTTON_ALT')}
        className="webchat__send-button__button"
        disabled={disabled}
        onClick={submitSendBox}
      >
        <SendIcon />
      </SendBoxButton>
    </div>
  );
};

export default SendButton;

export { connectSendButton };
