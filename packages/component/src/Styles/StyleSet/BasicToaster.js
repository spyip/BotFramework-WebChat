/* eslint no-magic-numbers: ["off"] */

export default function createToasterStyle({
  primaryFont,
  toasterHeight,
  toasterMaxHeight,
  toastErrorBackgroundColor,
  toastErrorColor,
  toasterSingularMaxHeight,
  toastFontSize,
  toastIconWidth,
  toastInfoBackgroundColor,
  toastInfoColor,
  toastSeparatorColor,
  toastSuccessBackgroundColor,
  toastSuccessColor,
  toastWarnBackgroundColor,
  toastWarnColor
}) {
  return {
    '&.webchat__basic-toaster': {
      overflowY: 'hidden',

      '&:not(.webchat__basic-toaster--expandable)': {
        maxHeight: toasterSingularMaxHeight
      },

      '&.webchat__basic-toaster--expandable:not(.webchat__basic-toaster--expanded), & .webchat__basic-toaster__list': {
        height: 0
      },

      '&.webchat__basic-toaster--expandable.webchat__basic-toaster--expanded': {
        maxHeight: toasterMaxHeight
      },

      '& .webchat__basic-toaster__header': {
        alignItems: 'center',
        alignSelf: 'stretch',
        appearance: 'none',
        backgroundColor: 'Transparent',
        border: 0,
        display: 'flex',
        fontFamily: primaryFont,
        fontSize: toastFontSize,
        minHeight: toasterHeight,
        outline: 0,
        padding: 0,
        textAlign: 'left',

        '&:focus .webchat__basic-toaster__expand-icon-focus': {
          borderColor: 'rgba(26, 10, 0, .7)'
        },

        '&:hover .webchat__basic-toaster__expand-iconfocus': {
          backgroundColor: 'rgba(0, 0, 0, .12)'
        }
      },

      '& .webchat__basic-toaster__expand-icon-focus': {
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

      '&.webchat__basic-toaster--error': {
        // TODO: Checks if pass A11y contrast ratio requirement

        '&:not(.webchat__basic-toaster--expandable), & .webchat__basic-toaster__header': {
          backgroundColor: toastErrorBackgroundColor
        },

        '& .webchat__basic-toaster__header': {
          color: toastErrorColor,
          fill: toastErrorColor
        }
      },

      '&.webchat__basic-toaster--info': {
        '&:not(.webchat__basic-toaster--expandable), & .webchat__basic-toaster__header': {
          backgroundColor: toastInfoBackgroundColor
        },

        '& .webchat__basic-toaster__header': {
          color: toastInfoColor,
          fill: toastInfoColor
        }
      },

      '&.webchat__basic-toaster--success': {
        '&:not(.webchat__basic-toaster--expandable), & .webchat__basic-toaster__header': {
          backgroundColor: toastSuccessBackgroundColor
        },

        '& .webchat__basic-toaster__header': {
          color: toastSuccessColor,
          fill: toastSuccessColor
        }
      },

      '&.webchat__basic-toaster--warn': {
        '&:not(.webchat__basic-toaster--expandable), & .webchat__basic-toaster__header': {
          backgroundColor: toastWarnBackgroundColor
        },

        '& .webchat__basic-toaster__header': {
          color: toastWarnColor,
          fill: toastWarnColor
        }
      },

      '& .webchat__basic-toaster__expand-level-icon-box': {
        height: toasterHeight,
        width: toastIconWidth
      },

      '& .webchat__basic-toaster__expand-icon': {
        height: toasterHeight,
        width: toasterHeight
      },

      '& .webchat__basic-toaster__expand-text': {
        padding: '6px 0'
      },

      '& .webchat__basic-toaster__expand-level-icon-box, & .webchat__basic-toaster__expand-icon': {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      },

      '& .webchat__basic-toaster__list': {
        margin: 0,
        overflowY: 'auto',
        padding: 0
      },

      '& .webchat__basic-toaster__list-item:first-child:last-child': {
        overflow: 'hidden'
      },

      '& .webchat__basic-toaster__list-item:not(:first-child), & .webchat__basic-toaster__list-item:not(:last-child)': {
        borderBottomColor: toastSeparatorColor,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        minHeight: 32
      }
    }
  };
}
