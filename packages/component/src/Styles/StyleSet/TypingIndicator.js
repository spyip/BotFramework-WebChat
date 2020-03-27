export default function createTypingIndicatorStyle({ paddingRegular }) {
  return {
    paddingBottom: paddingRegular,

    '&:not(.webchat__typing-indicator--rtl)': {
      paddingLeft: paddingRegular
    },

    '&.webchat__typing-indicator--rtl': {
      paddingRight: paddingRegular
    }
  };
}
