/* eslint no-empty-pattern: "off" */
/* eslint no-magic-numbers: ["error", { "ignore": [2] }] */

export default function createSuggestedActionsStyle({ paddingRegular, suggestedActionLayout }) {
  const halfPaddingRegular = paddingRegular / 2;

  return {
    '&.webchat__suggested-actions': {
      '&.webchat__suggested-actions--stacked': {
        padding: halfPaddingRegular
      },

      '&:not(.webchat__suggested-actions--stacked)': {
        paddingBottom: halfPaddingRegular,
        paddingTop: halfPaddingRegular
      }
    }
  };
}
