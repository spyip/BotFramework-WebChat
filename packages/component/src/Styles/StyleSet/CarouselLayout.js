export default function CarouselFlipper({
  transcriptOverlayButtonBackground,
  transcriptOverlayButtonBackgroundOnDisabled,
  transcriptOverlayButtonBackgroundOnFocus,
  transcriptOverlayButtonBackgroundOnHover,
  transcriptOverlayButtonColor,
  transcriptOverlayButtonColorOnDisabled,
  transcriptOverlayButtonColorOnFocus,
  transcriptOverlayButtonColorOnHover
}) {
  return {
    '&.webchat__carousel-layout': {
      '& .webchat__carousel-layout__flipper-button': {
        backgroundColor: transcriptOverlayButtonBackground,
        color: transcriptOverlayButtonColor,
        outline: 0
      },

      '&:disabled .webchat__carousel-layout__flipper-button': {
        backgroundColor: transcriptOverlayButtonBackgroundOnDisabled,
        color: transcriptOverlayButtonColorOnDisabled
      },

      '&:focus .webchat__carousel-layout__flipper-button': {
        backgroundColor: transcriptOverlayButtonBackgroundOnFocus,
        color: transcriptOverlayButtonColorOnFocus || transcriptOverlayButtonColor
      },

      '&:hover .webchat__carousel-layout__flipper-button': {
        backgroundColor: transcriptOverlayButtonBackgroundOnHover,
        color: transcriptOverlayButtonColorOnHover || transcriptOverlayButtonColor
      }
    }
  };
}
