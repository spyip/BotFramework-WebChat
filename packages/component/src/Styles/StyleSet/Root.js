export default function({ backgroundColor, rootHeight, rootWidth }) {
  return {
    '&.webchat__root': {
      backgroundColor,
      height: rootHeight,
      width: rootWidth
    }
  };
}
