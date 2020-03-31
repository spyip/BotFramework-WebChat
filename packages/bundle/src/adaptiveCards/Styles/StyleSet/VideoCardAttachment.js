export default function createVideCardAttachmentStyle({ paddingRegular }) {
  return {
    '&.webchat__video-card-attachment': {
      // TODO: [P2] We should not set "display" in styleSet, this will allow the user to break the layout for no good reasons.
      display: 'flex',
      flexDirection: 'column',

      '& .webchat__video-card-attachment__media-list': {
        // TODO: [P2] We should not set "listStyleType" in styleSet, the user have no good reasons to change this.
        listStyleType: 'none',
        margin: paddingRegular,
        padding: 0
      }
    }
  };
}
