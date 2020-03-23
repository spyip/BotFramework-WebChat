/* eslint no-magic-numbers: ["error", { "ignore": [2] }] */

export default function CarouselFilmStrip({ bubbleMaxWidth, bubbleMinWidth, paddingRegular }) {
  return {
    '&.webchat__carousel-filmstrip': {
      // Browser quirks: Firefox has no way to hide scrollbar and while keeping it in function
      // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
      '@supports (-moz-appearance: none)': {
        marginBottom: -17
      },

      // Block

      '&:not(.webchat__carousel-filmstrip--rtl)': {
        paddingLeft: paddingRegular
      },

      '&.webchat__carousel-filmstrip--rtl': {
        paddingRight: paddingRegular
      },

      // Element "content"

      '&:not(.webchat__carousel-filmstrip--rtl)': {
        '& .webchat__carousel-filmstrip__content': {
          paddingRight: paddingRegular
        }
      },

      '&.webchat__carousel-filmstrip--rtl': {
        '& .webchat__carousel-filmstrip__content': {
          paddingLeft: paddingRegular
        }
      },

      // Element "list-item"

      '&:not(.webchat__carousel-filmstrip--rtl)': {
        '& .webchat__carousel-filmstrip__list-item:not(:last-child)': {
          marginRight: paddingRegular
        }
      },

      '&.webchat__carousel-filmstrip--rtl': {
        '& .webchat__carousel-filmstrip__list-item:not(:last-child)': {
          marginLeft: paddingRegular
        }
      },

      // Modifier "indented-content" with element "content"

      '&:not(.webchat__carousel-filmstrip--rtl).webchat__carousel-filmstrip--indented-content': {
        '& .webchat__carousel-filmstrip__content': {
          marginLeft: paddingRegular
        },
      },

      '&.webchat__carousel-filmstrip--rtl.webchat__carousel-filmstrip--indented-content': {
        '& .webchat__carousel-filmstrip__content': {
          marginRight: paddingRegular
        }
      },

      // Modifier "item-indented" with element "activity-status" and "list"

      '&:not(.webchat__carousel-filmstrip--rtl).webchat__carousel-filmstrip--item-indented': {
        '& .webchat__carousel-filmstrip__activity-status, & .webchat__carousel-filmstrip__list': {
          marginLeft: paddingRegular
        }
      },

      '&.webchat__carousel-filmstrip--rtl.webchat__carousel-filmstrip--item-indented': {
        '& .webchat__carousel-filmstrip__activity-status, & .webchat__carousel-filmstrip__list': {
          marginRight: paddingRegular
        }
      },

      // Modifier "extra-right-indent" with element "content"

      '&:not(.webchat__carousel-filmstrip--rtl).webchat__carousel-filmstrip--extra-right-indent': {
        '& .webchat__carousel-filmstrip__content': {
          paddingRight: paddingRegular * 2
        }
      },

      '&.webchat__carousel-filmstrip--rtl.webchat__carousel-filmstrip--extra-right-indent': {
        '& .webchat__carousel-filmstrip__content': {
          paddingLeft: paddingRegular * 2
        }
      },

      '& .webchat__carousel-filmstrip__list:not(:first-child)': {
        marginTop: paddingRegular
      },

      '& .webchat__carousel-filmstrip__list-item': {
        maxWidth: bubbleMaxWidth,
        minWidth: bubbleMinWidth
      }
    }
  };
}
