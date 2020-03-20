export default function createYouTubeContentStyle({ videoHeight }) {
  return {
    '&.webchat__youTube-content': {
      border: 0,
      height: videoHeight,
      width: '100%'
    }
  };
}
