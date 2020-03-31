/* eslint no-magic-numbers: ["error", { "ignore": [2] }] */

export default function createStackedLayoutStyle({ bubbleMaxWidth, bubbleMinWidth, paddingRegular }) {
  return {
    '&.webchat__stacked-layout': {
      '&.webchat__stacked-layout--extra-left-indent': {
        marginLeft: paddingRegular * 2
      },

      '&:not(.webchat__stacked-layout--extra-left-indent)': {
        marginLeft: paddingRegular
      },

      '&.webchat__stacked-layout--extra-right-indent': {
        marginRight: paddingRegular * 2
      },

      '&:not(.webchat__stacked-layout--extra-right-indent)': {
        marginRight: paddingRegular
      },

      '&:not(.webchat__stacked-layout--rtl):not(.webchat__stacked-layout--from-user), &.webchat__stacked-layout--rtl.webchat__stacked-layout--from-user': {
        '&.webchat__stacked-layout--indented-content .webchat__stacked-layout__avatar': {
          marginRight: paddingRegular
        },

        '& .webchat__stacked-layout__row--indented': {
          marginLeft: paddingRegular
        }
      },

      '&:not(.webchat__stacked-layout--rtl).webchat__stacked-layout--from-user, &.webchat__stacked-layout--rtl:not(.webchat__stacked-layout--from-user)': {
        '&.webchat__stacked-layout--indented-content .webchat__stacked-layout__avatar': {
          marginLeft: paddingRegular
        },

        '& .webchat__stacked-layout__row--indented': {
          marginRight: paddingRegular
        }
      },

      '& .webchat__stacked-layout__bubble': {
        maxWidth: bubbleMaxWidth
      },

      '& .webchat__stacked-layout__bubble--attachment': {
        minWidth: bubbleMinWidth
      },

      '& .webchat__stacked-layout__row:not(:first-child):not(:last-child)': {
        marginTop: paddingRegular
      }
    }
  };
}
