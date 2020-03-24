export default function createSendStatusStyle({ fontSizeSmall, primaryFont, subtle, timestampColor }) {
  return {
    '&.webchat__send-status': {
      color: timestampColor || subtle,
      fontFamily: primaryFont,
      fontSize: fontSizeSmall,
      paddingTop: 5
    }
  };
}
