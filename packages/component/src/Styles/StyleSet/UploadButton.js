export default function createUploadButtonStyle({ sendBoxButtonColorOnFocus, sendBoxButtonColorOnHover }) {
  return {
    '&.webchat__upload-button': {
      '& .webchat__upload-button__file-input:hover + .webchat__upload-button__button': {
        fill: sendBoxButtonColorOnHover
      },

      '& .webchat__upload-button__file-input:focus + .webchat__upload-button__button': {
        fill: sendBoxButtonColorOnFocus
      }
    }
  };
}
