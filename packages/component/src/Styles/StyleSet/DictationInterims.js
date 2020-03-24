export default function createDictationInterimsStyle({ paddingRegular, primaryFont }) {
  return {
    '&.webchat__dictation-interims': {
      fontFamily: primaryFont,
      margin: 0,
      paddingBottom: 0,
      paddingLeft: paddingRegular,
      paddingRight: paddingRegular,
      paddingTop: 0,

      '&:not(.webchat__dictation-interims--dictating)': {
        opacity: 0.5
      },

      '&.webchat__dictation-interims--dictating > .webchat__dictation-interims__interim:not(:first-child)': {
        opacity: 0.5
      }
    }
  };
}
