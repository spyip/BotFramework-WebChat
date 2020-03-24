export default function createScrollToEndButtonStyle({
  paddingRegular,
  transcriptOverlayButtonBackground,
  transcriptOverlayButtonBackgroundOnFocus,
  transcriptOverlayButtonBackgroundOnHover,
  transcriptOverlayButtonColor,
  transcriptOverlayButtonColorOnFocus,
  transcriptOverlayButtonColorOnHover
}) {
  return {
    '&.webchat__scroll-to-end-button': {
      // TODO: [P3] Can we not to unset borderWidth and outline earlier?
      '@media screen and (-ms-high-contrast: active)': {
        borderWidth: 'initial',
        outline: 'initial'
      },

      backgroundColor: transcriptOverlayButtonBackground,
      borderRadius: paddingRegular,
      borderWidth: 0,
      bottom: 5,
      color: transcriptOverlayButtonColor,
      outline: 0,
      padding: paddingRegular,
      position: 'absolute',

      '&:hover': {
        backgroundColor: transcriptOverlayButtonBackgroundOnHover,
        color: transcriptOverlayButtonColorOnHover || transcriptOverlayButtonColor
      },

      '&:focus': {
        backgroundColor: transcriptOverlayButtonBackgroundOnFocus,
        color: transcriptOverlayButtonColorOnFocus || transcriptOverlayButtonColor
      },

      ':not(.webchat__scroll-to-end-button--rtl)': {
        right: 20
      },

      '&.webchat__scroll-to-end-button--rtl': {
        left: 20
      }
    }
  };
}
