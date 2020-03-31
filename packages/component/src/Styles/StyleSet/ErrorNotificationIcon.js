export default function createErrorNotificationIconStyle({ connectivityIconPadding, failedConnectivity }) {
  return {
    '&.webchat__error-notification-icon': {
      fill: failedConnectivity,

      '&:not(.webchat__error-notification-icon--rtl)': {
        paddingRight: connectivityIconPadding
      },

      '.webchat__error-notification-icon--rtl': {
        paddingLeft: connectivityIconPadding
      }
    }
  };
}
