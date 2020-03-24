/* eslint no-magic-numbers: ["off"] */

export default function createToastStyle({
  primaryFont,
  toasterHeight,
  toastErrorColor,
  toastFontSize,
  toastIconWidth,
  toastInfoColor,
  toastSuccessColor,
  toastTextPadding,
  toastWarnColor
}) {
  return {
    '&.webchat__toast': {
      fontFamily: primaryFont,
      fontSize: toastFontSize,
      minHeight: toasterHeight,

      '&.webchat__toast--error': {
        color: toastErrorColor,
        fill: toastErrorColor
      },

      '&.webchat__toast--info': {
        color: toastInfoColor,
        fill: toastInfoColor
      },

      '&.webchat__toast--success': {
        color: toastSuccessColor,
        fill: toastSuccessColor
      },

      '&.webchat__toast--warn': {
        color: toastWarnColor,
        fill: toastWarnColor
      },

      '& .webchat__toast__icon-box': {
        alignItems: 'center',
        display: 'flex',
        flexShrink: 0,
        height: toasterHeight,
        justifyContent: 'center',
        width: toastIconWidth
      },

      '& .webchat__toast__dismiss-button': {
        alignItems: 'center',
        appearance: 'none',
        backgroundColor: 'Transparent',
        border: 0,
        display: 'flex',
        height: toasterHeight,
        justifyContent: 'center',
        outline: 0,
        padding: 0,
        width: toasterHeight,

        '&:focus .webchat__toast__dismiss-button-focus': {
          borderColor: 'rgba(26, 10, 0, .7)'
        },

        '&:hover .webchat__toast__dismiss-button-focus': {
          backgroundColor: 'rgba(0, 0, 0, .12)'
        }
      },

      '& .webchat__toast__dismiss-button-focus': {
        alignItems: 'center',
        borderColor: 'Transparent',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        display: 'flex',
        height: 22,
        justifyContent: 'center',
        width: 22
      },

      '& .webchat__toast__text': {
        alignSelf: 'center',
        paddingBottom: toastTextPadding,
        paddingTop: toastTextPadding
      }
    }
  };
}
