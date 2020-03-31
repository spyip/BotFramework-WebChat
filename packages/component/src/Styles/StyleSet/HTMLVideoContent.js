export default function createVideoContentStyle({ videoHeight }) {
  return {
    '&.webchat__html-video-content': {
      height: videoHeight,
      width: '100%'
    }
  };
}
