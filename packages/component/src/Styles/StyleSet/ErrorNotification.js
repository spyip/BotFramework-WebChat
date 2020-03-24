export default function createErrorNotificationStyle({
  connectivityMarginLeftRight,
  connectivityMarginTopBottom,
  connectivityTextSize,
  failedConnectivity,
  primaryFont
}) {
  return {
    '&.webchat__error-notification': {
      alignItems: 'center',
      color: failedConnectivity,
      display: 'flex',
      fontFamily: primaryFont,
      fontSize: connectivityTextSize,
      fontWeight: 'bold',
      marginBottom: connectivityMarginTopBottom,
      marginLeft: connectivityMarginLeftRight,
      marginRight: connectivityMarginLeftRight,
      marginTop: connectivityMarginTopBottom
    }
  };
}
