/* eslint no-magic-numbers: "off" */

export default function createSuggestedActionStyle({
  accent,
  paddingRegular,
  paddingWide,
  primaryFont,
  suggestedActionBackground,
  suggestedActionBorderColor,
  suggestedActionBorderStyle,
  suggestedActionBorderWidth,
  suggestedActionBorderRadius,
  suggestedActionImageHeight,
  suggestedActionTextColor,
  suggestedActionDisabledBackground,
  suggestedActionDisabledBorderColor,
  suggestedActionDisabledBorderStyle,
  suggestedActionDisabledBorderWidth,
  suggestedActionDisabledTextColor,
  suggestedActionHeight,
  subtle
}) {
  return {
    '&.webchat__suggested-action': {
      paddingBottom: paddingRegular / 2,
      paddingLeft: paddingRegular / 2,
      paddingRight: paddingRegular / 2,
      paddingTop: paddingRegular / 2,

      '& .webchat__suggested-action__button': {
        alignItems: 'center',
        borderRadius: suggestedActionBorderRadius,
        fontFamily: primaryFont,
        fontSize: 'inherit',
        height: suggestedActionHeight,
        justifyContent: 'center',
        paddingLeft: paddingWide,
        paddingRight: paddingWide,

        '&:disabled': {
          background: suggestedActionDisabledBackground || suggestedActionBackground,
          borderColor: suggestedActionDisabledBorderColor,
          borderStyle: suggestedActionDisabledBorderStyle,
          borderWidth: suggestedActionDisabledBorderWidth,
          color: suggestedActionDisabledTextColor || subtle
        },

        '&:not(:disabled)': {
          background: suggestedActionBackground,
          borderColor: suggestedActionBorderColor || accent,
          borderStyle: suggestedActionBorderStyle,
          borderWidth: suggestedActionBorderWidth,
          color: suggestedActionTextColor || accent
        }
      },

      '& .webchat__suggested-action__image': {
        height: suggestedActionImageHeight
      },

      '&:not(.webchat__suggested-action--rtl) .webchat__suggested-action__image': {
        paddingRight: paddingRegular
      },

      '&.webchat__suggested-action--rtl .webchat__suggested-action__image': {
        paddingLeft: paddingRegular
      },

      '& .webchat_suggested-action__text': {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }
  };
}
