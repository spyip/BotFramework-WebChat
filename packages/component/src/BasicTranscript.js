import { css } from 'glamor';
import { Panel as ScrollToBottomPanel } from 'react-scroll-to-bottom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';

import BasicTypingIndicator from './BasicTypingIndicator';
import ScrollToEndButton from './Activity/ScrollToEndButton';
import SpeakActivity from './Activity/Speak';
import useActivities from './hooks/useActivities';
import useDirection from './hooks/useDirection';
import useRenderActivity from './hooks/useRenderActivity';
import useRenderAttachment from './hooks/useRenderAttachment';
import useStyleOptions from './hooks/useStyleOptions';
import useStyleSet from './hooks/useStyleSet';

const ROOT_CSS = css({
  '&.webchat__basic-transcript': {
    overflow: 'hidden',
    position: 'relative',

    '& .webchat__basic-transcript__activities': {
      listStyleType: 'none'
    },

    '& .webchat__basic-transcript__filler': {
      flex: 1
    },

    '& .webchat__basic-transcript__panel': {
      display: 'flex',
      flexDirection: 'column',
      WebkitOverflowScrolling: 'touch'
    }
  }
});

function useMemoize(fn) {
  return useMemo(() => {
    let cache = [];

    return run => {
      const nextCache = [];
      const result = run((...args) => {
        const { result } = [...cache, ...nextCache].find(
          ({ args: cachedArgs }) =>
            args.length === cachedArgs.length && args.every((arg, index) => Object.is(arg, cachedArgs[index]))
        ) || { result: fn(...args) };

        nextCache.push({ args, result });

        return result;
      });

      cache = nextCache;

      return result;
    };
  }, [fn]);
}

const BasicTranscript = ({ className }) => {
  const [{ basicTranscript: basicTranscriptStyleSet }] = useStyleSet();
  const [{ hideScrollToEndButton }] = useStyleOptions();
  const [activities] = useActivities();
  const [direction] = useDirection();
  const renderAttachment = useRenderAttachment();
  const renderActivity = useRenderActivity(renderAttachment);
  const renderActivityElement = useCallback(
    (activity, nextVisibleActivity) =>
      renderActivity({
        activity,
        nextVisibleActivity
      }),
    [renderActivity]
  );

  const memoizeRenderActivityElement = useMemoize(renderActivityElement);

  const activityElementsWithMetadata = useMemo(
    () =>
      memoizeRenderActivityElement(renderActivityElement => {
        const { result: activityElementsWithMetadata } = [...activities].reverse().reduce(
          ({ nextVisibleActivity, result }, activity, index) => {
            const element = renderActivityElement(activity, nextVisibleActivity);

            // Until the activity passes through middleware, it is unknown whether the activity will be visible.
            // If the activity does not render, it will not be spoken if text-to-speech is enabled.
            if (element) {
              result = [
                {
                  activity,
                  element,
                  key: (activity.channelData && activity.channelData.clientActivityID) || activity.id || index,

                  // TODO: [P2] #2858 We should use core/definitions/speakingActivity for this predicate instead
                  shouldSpeak: activity.channelData && activity.channelData.speak
                },
                ...result
              ];

              nextVisibleActivity = activity;
            }

            return { nextVisibleActivity, result };
          },
          { nextVisibleActivity: undefined, result: [] }
        );

        return activityElementsWithMetadata;
      }),
    [activities, memoizeRenderActivityElement]
  );

  return (
    <div className={classNames(ROOT_CSS + '', basicTranscriptStyleSet + '', 'webchat__basic-transcript', className + '')} dir={direction} role="log">
      <ScrollToBottomPanel className="webchat__basic-transcript__panel">
        <div className="webchat__basic-transcript__filler" />
        <ul
          aria-atomic="false"
          aria-live="polite"
          aria-relevant="additions text"
          className="webchat__basic-transcript__activities"
          role="list"
        >
          {activityElementsWithMetadata.map(({ activity, element, key, shouldSpeak }) => (
            <li
              // Because of differences in browser implementations, aria-label=" " is used to make the screen reader not repeat the same text multiple times in Chrome v75 and Edge 44
              aria-label=" "
              className="webchat__basic-transcript__activity"
              key={key}
              role="listitem"
            >
              {element}
              {shouldSpeak && <SpeakActivity activity={activity} />}
            </li>
          ))}
        </ul>
        <BasicTypingIndicator />
      </ScrollToBottomPanel>
      {!hideScrollToEndButton && <ScrollToEndButton />}
    </div>
  );
};

BasicTranscript.defaultProps = {
  className: ''
};

BasicTranscript.propTypes = {
  className: PropTypes.string
};

export default BasicTranscript;

export { useMemoize };
