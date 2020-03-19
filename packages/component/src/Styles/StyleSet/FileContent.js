export default function createFileContentStyle({ accent, bubbleTextColor, paddingRegular, primaryFont }) {
  return {
    '&.webchat__file-content':{
      color: bubbleTextColor,
      display: 'flex',
      fontFamily: primaryFont,
      padding: paddingRegular,

      '& .webchat__file-content__badge': {
        justifyContent: 'center'
      },

      '& .webchat__file-content__button-link': {
        alignItems: 'center',
        color: bubbleTextColor,
        textDecoration: 'none',

        '&:focus': {
          backgroundColor: 'rgba(0, 0, 0, .1)'
        }
      },

      '& .webchat__file-content__download-icon': {
        fill: accent,
        padding: paddingRegular,

        '&:not(.webchat__file-content__download-icon--rtl)': {
          marginLeft: paddingRegular
        },
        '&.webchat__file-content__download-icon--rtl': {
          marginRight: paddingRegular
        }
      },
      '& .webchat__file-content__file-name': {
        color: accent
      }
    }
  };
}
