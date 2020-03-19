export default function createSendBoxStyle({
  sendBoxBackground,
  sendBoxHeight,
  sendBoxBorderBottom,
  sendBoxBorderLeft,
  sendBoxBorderRight,
  sendBoxBorderTop
}) {
  return {
    '&.webchat__basicSendBox': {
      '& .webchat__basicSendBox__main': {
        alignItems: 'stretch',
        backgroundColor: sendBoxBackground,
        borderBottom: sendBoxBorderBottom,
        borderLeft: sendBoxBorderLeft,
        borderRight: sendBoxBorderRight,
        borderTop: sendBoxBorderTop,
        minHeight: sendBoxHeight
      }
    }
  };
}
