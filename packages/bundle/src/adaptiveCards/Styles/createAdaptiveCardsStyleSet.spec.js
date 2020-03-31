import createStyleSet from './createAdaptiveCardsStyleSet';

describe('createAdaptiveCardsStyleSet', () => {
  it('should contain Adaptive Card styles in createStyleSet', () => {
    const {
      adaptiveCardRenderer,
      animationCardAttachment,
      audioCardAttachment,
      signInCardAttachment,
      videoCardAttachment
    } = createStyleSet();

    expect(adaptiveCardRenderer).not.toBeFalsy();
    expect(animationCardAttachment).not.toBeFalsy();
    expect(audioCardAttachment).not.toBeFalsy();
    expect(signInCardAttachment).not.toBeFalsy();
    expect(videoCardAttachment).not.toBeFalsy();
  });
});
