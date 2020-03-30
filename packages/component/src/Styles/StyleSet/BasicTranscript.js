export default function createActivityStyle({ paddingRegular }) {
  return {
    '&.webchat__basic-transcript': {
      '& .webchat__basic-transcript__activity-list': {
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
