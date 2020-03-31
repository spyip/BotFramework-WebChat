export default function({ backgroundColor, rootHeight, rootWidth }) {
  return {
    '&.webchat__basic-web-chat': {
      backgroundColor,
      height: rootHeight,
      width: rootWidth
    }
  };
}
