export default function createVimeoContentStyle({ videoHeight }) {
  return {
    '&.webchat__vimeo-content': {
      border: 0,
      height: videoHeight,
      width: '100%'
    }
  };
}
