import { css } from 'glamor';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import useStyleSet from '../hooks/useStyleSet';
import VideoContent from './VideoContent';

const ROOT_CSS = css({
  '&.webchat__video-attachment': {
    display: 'flex',
    flexDirection: 'column'
  }
});

const VideoAttachment = ({ attachment }) => {
  const [{ videoAttachment: videoAttachmentStyleSet }] = useStyleSet();

  return (
    <div className={classNames(videoAttachmentStyleSet + '', ROOT_CSS + '', "webchat__video-attachment")}>
      <VideoContent alt={attachment.name} src={attachment.contentUrl} />
    </div>
  );
};

VideoAttachment.propTypes = {
  attachment: PropTypes.shape({
    contentUrl: PropTypes.string.isRequired,
    name: PropTypes.string
  }).isRequired
};

export default VideoAttachment;
