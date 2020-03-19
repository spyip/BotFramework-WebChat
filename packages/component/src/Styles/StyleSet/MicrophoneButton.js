export default function createMicrophoneButtonStyle({ microphoneButtonColorOnDictate }) {
  return {
    '&.webchat__microphone-button': {
      '&.webchat__microphone-button--dictating .webchat__microphone-button__button': {
        '&, &:focus, &:hover': {
          fill: microphoneButtonColorOnDictate
        }
      }
    }
  };
}
