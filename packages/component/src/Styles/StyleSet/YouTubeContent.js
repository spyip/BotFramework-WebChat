export default function createYouTubeContentStyle({ videoHeight }) {
  return {
    '&.webchat__youtube-content': {
      border: 0,
      height: videoHeight,
      width: '100%'
    }
  };
}
