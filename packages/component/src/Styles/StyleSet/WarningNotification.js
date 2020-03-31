export default function createWarningNotificationStyle({
  connectivityMarginLeftRight,
  connectivityMarginTopBottom,
  connectivityTextSize,
  primaryFont,
  notificationText
}) {
  return {
    '&.webchat__warning-notification': {
      alignItems: 'center',
      color: notificationText,
      // TODO: [P2] We should not set "display" in styleSet, this will allow the user to break the layout for no good reasons.
      display: 'flex',
      fontFamily: primaryFont,
      fontSize: connectivityTextSize,
      marginBottom: connectivityMarginTopBottom,
      marginLeft: connectivityMarginLeftRight,
      marginRight: connectivityMarginLeftRight,
      marginTop: connectivityMarginTopBottom
    }
  };
}
