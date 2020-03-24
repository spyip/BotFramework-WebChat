export default function createSendBoxTextBoxStyle({
  primaryFont,
  sendBoxBackground,
  sendBoxDisabledTextColor,
  sendBoxPlaceholderColor,
  sendBoxTextColor,
  subtle
}) {
  return {
    '&.webchat__send-box-text-box': {
      alignItems: 'center',
      fontFamily: primaryFont,

      '& .webchat__send-box-text-box__input': {
        backgroundColor: sendBoxBackground,
        border: 0,
        fontFamily: 'inherit',
        fontSize: 'inherit',
        height: '100%',
        outline: 0,
        padding: 0,

        '&:not(:disabled)': {
          color: sendBoxTextColor
        },

        '&:disabled': {
          color: sendBoxDisabledTextColor || subtle
        },

        '&::placeholder': {
          color: sendBoxPlaceholderColor || subtle
        }
      }
    }
  };
}
