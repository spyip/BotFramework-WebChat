export default function createWarningNotificationIconStyle({ connectivityIconPadding, slowConnectivity }) {
  return {
    '&.webchat__warning-notification-icon': {
      fill: slowConnectivity,

      '&:not(webchat__warning-notification--rtl)': {
        paddingRight: connectivityIconPadding
      },

      '& .webchat__warning-notification--rtl': {
        paddingLeft: connectivityIconPadding
      }
    }
  };
}
