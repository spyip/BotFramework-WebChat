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
    '&.webchat__carousel-flipper': {
      '& .webchat__carousel-flipper__button': {
        backgroundColor: transcriptOverlayButtonBackground,
        color: transcriptOverlayButtonColor,
        outline: 0
      },

      '&:disabled .webchat__carousel-flipper__button': {
        backgroundColor: transcriptOverlayButtonBackgroundOnDisabled,
        color: transcriptOverlayButtonColorOnDisabled
      },

      '&:focus .webchat__carousel-flipper__button': {
        backgroundColor: transcriptOverlayButtonBackgroundOnFocus,
        color: transcriptOverlayButtonColorOnFocus || transcriptOverlayButtonColor
      },

      '&:hover .webchat__carousel-flipper__button': {
        backgroundColor: transcriptOverlayButtonBackgroundOnHover,
        color: transcriptOverlayButtonColorOnHover || transcriptOverlayButtonColor
      }
    }
  };
}
