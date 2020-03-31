/* eslint complexity: ["error", 30] */
/* eslint react/no-array-index-key: "off" */

import { css } from 'glamor';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import remarkStripMarkdown from '../Utils/remarkStripMarkdown';

import Bubble from './Bubble';
import connectToWebChat from '../connectToWebChat';
import ScreenReaderText from '../ScreenReaderText';
import textFormatToContentType from '../Utils/textFormatToContentType';
import useAvatarForBot from '../hooks/useAvatarForBot';
import useAvatarForUser from '../hooks/useAvatarForUser';
import useDateFormatter from '../hooks/useDateFormatter';
import useDirection from '../hooks/useDirection';
import useLocalizer from '../hooks/useLocalizer';
import useRenderActivityStatus from '../hooks/useRenderActivityStatus';
import useRenderAvatar from '../hooks/useRenderAvatar';
import useStyleOptions from '../hooks/useStyleOptions';
import useStyleSet from '../hooks/useStyleSet';

const ROOT_CSS = css({
  '&.webchat__stacked-layout': {
    display: 'flex',

    '& .webchat__stacked-layout__avatar': {
      flexShrink: 0
    },

    '& .webchat__stacked-layout__content': {
      flexGrow: 1,
      overflow: 'hidden'
    },

    '& .webchat__stacked-layout__row': {
      display: 'flex'
    },

    '& .webchat__stacked-layout__bubble': {
      flexGrow: 1,
      overflow: 'hidden'
    },

    '& .webchat__stacked-layout__row-filler': {
      flexGrow: 10000,
      flexShrink: 1
    },

    '& .webchat__stacked-layout__filler': {
      flexShrink: 0
    },

    '& .webchat__stacked-layout--from-user': {
      flexDirection: 'row-reverse',
    },

    '& .webchat__stacked-layout__row': {
      flexDirection: 'row-reverse'
    }
  }
});

const connectStackedLayout = (...selectors) =>
  connectToWebChat(
    (
      {
        language,
        styleSet: {
          options: { botAvatarInitials, userAvatarInitials }
        }
      },
      { activity: { from: { role } = {} } = {} }
    ) => ({
      avatarInitials: role === 'user' ? userAvatarInitials : botAvatarInitials,
      language,

      // TODO: [P4] We want to deprecate botAvatarInitials/userAvatarInitials because they are not as helpful as avatarInitials
      botAvatarInitials,
      userAvatarInitials
    }),
    ...selectors
  );

const StackedLayout = ({ activity, children, nextVisibleActivity }) => {
  const [{ initials: botInitials }] = useAvatarForBot();
  const [{ initials: userInitials }] = useAvatarForUser();
  const [{ bubbleNubSize, bubbleFromUserNubSize }] = useStyleOptions();
  const [{ stackedLayout: stackedLayoutStyleSet }] = useStyleSet();
  const [direction] = useDirection();
  const formatDate = useDateFormatter();
  const localize = useLocalizer();
  const renderActivityStatus = useRenderActivityStatus({ activity, nextVisibleActivity });
  const renderAvatar = useRenderAvatar({ activity });

  const {
    attachments = [],
    channelData: { messageBack: { displayText: messageBackDisplayText } = {} } = {},
    from: { role } = {},
    text,
    textFormat,
    timestamp
  } = activity;

  const activityDisplayText = messageBackDisplayText || text;
  const fromUser = role === 'user';
  const initials = fromUser ? userInitials : botInitials;
  const plainText = remarkStripMarkdown(text);
  const indented = fromUser ? bubbleFromUserNubSize : bubbleNubSize;

  const roleLabel = localize(fromUser ? 'CAROUSEL_ATTACHMENTS_USER_ALT' : 'CAROUSEL_ATTACHMENTS_BOT_ALT');
  const ariaLabel = localize(
    fromUser ? 'ACTIVITY_USER_SAID' : 'ACTIVITY_BOT_SAID',
    initials,
    plainText,
    formatDate(timestamp)
  ).trim();

  const ltr = direction !== 'rtl';

  return (
    <div
      className={classNames(
        ROOT_CSS + '',
        stackedLayoutStyleSet + '',
        'webchat__stacked-layout',
        {
          'webchat__stacked-layout--rtl': !ltr,
          'webchat__stacked-layout--from-user': fromUser,
          'webchat__stacked-layout--extra-left-indent':
            (ltr && fromUser && !renderAvatar && bubbleNubSize) ||
            (!ltr && !fromUser && !renderAvatar && bubbleFromUserNubSize),
          'webchat__stacked-layout--extra-right-indent':
            (ltr && !fromUser && !renderAvatar && bubbleFromUserNubSize) ||
            (!ltr && fromUser && !renderAvatar && bubbleNubSize),
          'webchat__stacked-layout--indented-content': renderAvatar && !indented
        }
      )}
    >
      {renderAvatar && <div className="webchat__stacked-layout__avatar">{renderAvatar()}</div>}
      <div className="webchat__stacked-layout__content">
        {!!activityDisplayText && (
          <div className="webchat__stacked-layout__row webchat__stacked-layout__row--message">
            <ScreenReaderText text={ariaLabel} />
            <Bubble aria-hidden={true} className="webchat__stacked-layout__bubble" fromUser={fromUser} nub={!!indented}>
              {children({
                activity,
                attachment: {
                  content: activityDisplayText,
                  contentType: textFormatToContentType(textFormat)
                }
              })}
            </Bubble>
            <div className="webchat__stacked-layout__row-filler" />
          </div>
        )}
        {attachments.map((attachment, index) => (
          // Because of differences in browser implementations, aria-label=" " is used to make the screen reader not repeat the same text multiple times in Chrome v75 and Edge 44
          <div
            aria-label=" "
            className={classNames(
              'webchat__stacked-layout__row',
              { 'webchat__stacked-layout__row--indented': indented }
            )}
            key={index}
          >
            <ScreenReaderText text={roleLabel} />
            <Bubble className="webchat__stacked-layout__bubble webchat__stacked-layout__bubble--attachment" fromUser={fromUser} key={index} nub={false}>
              {children({ attachment })}
            </Bubble>
          </div>
        ))}
        <div className={classNames('webchat__stacked-layout__row', { 'webchat__stacked-layout__row--indented': indented })}>
          {renderActivityStatus()}
          <div className="webchat__stacked-layout__row-filler" />
        </div>
      </div>
      <div className="webchat__stacked-layout__filler" />
    </div>
  );
};

StackedLayout.defaultProps = {
  children: undefined,
  nextVisibleActivity: undefined
};

StackedLayout.propTypes = {
  activity: PropTypes.shape({
    attachments: PropTypes.array,
    channelData: PropTypes.shape({
      messageBack: PropTypes.shape({
        displayText: PropTypes.string
      })
    }),
    from: PropTypes.shape({
      role: PropTypes.string.isRequired
    }).isRequired,
    text: PropTypes.string,
    textFormat: PropTypes.string,
    timestamp: PropTypes.string,
    type: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.any,
  nextVisibleActivity: PropTypes.shape({
    from: PropTypes.shape({
      role: PropTypes.string.isRequired
    }).isRequired,
    timestamp: PropTypes.string
  })
};

export default StackedLayout;

export { connectStackedLayout };
