export default function createBasicTranscriptStyle({ paddingRegular }) {
  return {
    '&.webchat__basic-transcript': {
      '& .webchat__basic-transcript__activities': {
        margin: 0,
        padding: 0
      },

      '& .webchat__basic-transcript__activity': {
        marginBottom: paddingRegular,

        '&:first-child': {
          marginTop: paddingRegular
        }
      }
    }
  };
}
