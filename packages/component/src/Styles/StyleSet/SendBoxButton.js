export default function createSendBoxButtonStyle({
  sendBoxButtonColor,
  sendBoxButtonColorOnDisabled,
  sendBoxButtonColorOnFocus,
  sendBoxButtonColorOnHover,
  sendBoxHeight,
  subtle
}) {
  return {
    '&.webchat__send-box-button': {
      appearance: 'none',
      backgroundColor: 'Transparent',
      border: 0,
      fill: sendBoxButtonColor || subtle,
      height: sendBoxHeight,
      outline: 0,
      padding: 0,

      // We use the sendBoxHeight, so the button looks square
      width: sendBoxHeight,

      '&:disabled': {
        fill: sendBoxButtonColorOnDisabled
      },

      '&:not(:disabled)': {
        '&:hover': {
          fill: sendBoxButtonColorOnHover
        },

        '&:focus': {
          fill: sendBoxButtonColorOnFocus
        }
      }
    }
  };
}
