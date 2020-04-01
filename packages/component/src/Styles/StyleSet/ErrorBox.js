export default function createErrorBoxStyle({ monospaceFont, primaryFont }) {
  return {
    '&.webchat__error-box': {
      // TODO: [P2] We should not set "display" in styleSet, this will allow the user to break the layout for no good reasons.
      display: 'flex',
      flexDirection: 'column',
      fontFamily: primaryFont,
      margin: 0,
      minHeight: 20,
      maxHeight: 200,
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',

      '& .webchat__error-box__title': {
        backgroundColor: '#EF0000',
        color: 'White',
        padding: '5px 10px'
      },

      '& .webchat__error-box__body': {
        borderBottomWidth: 2,
        borderColor: '#EF0000',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderStyle: 'dashed',
        borderTopWidth: 0,
        fontFamily: monospaceFont,
        fontSize: '60%',
        margin: 0,
        overflowY: 'auto',
        padding: 10
      }
    }
  };
}
