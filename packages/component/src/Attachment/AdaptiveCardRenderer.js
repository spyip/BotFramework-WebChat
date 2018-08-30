import React from 'react';

import {
  OpenUrlAction,
  SubmitAction
} from 'adaptivecards';

import Context from '../Context';
import UnknownAttachment from './UnknownAttachment';

import getTabIndex from '../Utils/TypeFocusSink/getTabIndex';

export default ({ adaptiveCard, tapAction }) =>
  <Context.Consumer>
    { ({ adaptiveCardHostConfig, onCardAction, postActivity, styleSet }) =>
      <AdaptiveCardRenderer
        adaptiveCard={ adaptiveCard }
        hostConfig={ adaptiveCardHostConfig }
        onCardAction={ onCardAction }
        postActivity={ postActivity }
        styleSet={ styleSet }
        tapAction={ tapAction }
      />
    }
  </Context.Consumer>

class AdaptiveCardRenderer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleExecuteAction = this.handleExecuteAction.bind(this);

    this.contentRef = React.createRef();

    this.state = {
      error: null
    };
  }

  componentDidMount() {
    this.renderCard();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.adaptiveCard !== this.props.adaptiveCard) {
      this.renderCard();
    }
  }

  handleClick({ target }) {
    const tabIndex = getTabIndex(target);

    // If the user is clicking on something that is already clickable, do not allow them to click the card.
    // E.g. a hero card can be tappable, and image and buttons inside the hero card can also be tappable.
    if (typeof tabIndex !== 'number' || tabIndex < 0) {
      const { props: { onCardAction, tapAction } } = this;

      tapAction && onCardAction(tapAction);
    }
  }

  handleExecuteAction(action) {
    const { props } = this;

    if (action instanceof OpenUrlAction) {
      props.onCardAction({
        type: 'openUrl',
        value: action.url
      });
    } else if (action instanceof SubmitAction) {
      if (typeof action.data !== 'undefined') {
        const { data: cardAction } = action || {};

        if (cardAction && cardAction.__isBotFrameworkCardAction) {
          const { type, value } = cardAction;

          props.onCardAction({ type, value });
        } else {
          props.onCardAction({
            type: typeof action.data === 'string' ? 'imBack' : 'postBack',
            value: action.data
          });
        }
      }
    } else {
      console.error(`Web Chat: received unknown action from Adaptive Cards`);
      console.error(action);
    }
  }

  renderCard() {
    const { current } = this.contentRef;
    const { props: { adaptiveCard, hostConfig } } = this;

    if (current && adaptiveCard) {
      adaptiveCard.hostConfig = hostConfig;
      adaptiveCard.onExecuteAction = this.handleExecuteAction;

      const errors = adaptiveCard.validate();

      if (errors.length) {
        return this.setState(() => ({ error: errors }));
      }

      let element;

      try {
        element = adaptiveCard.render();
      } catch (err) {
        return this.setState(() => ({ errors: err }));
      }

      if (!element) {
        return this.setState(() => ({ error: 'Adaptive Card rendered as empty element' }));
      }

      if (this.state.error) {
        this.setState(() => ({ error: null }));
      }

      const [firstChild] = current.children;

      if (firstChild) {
        current.replaceChild(element, firstChild);
      } else {
        current.appendChild(element);
      }
    }
  }

  render() {
    const {
      props: { styleSet },
      state: { error }
    } = this;

    return (
      error ?
        <UnknownAttachment message="Adaptive Card render error">
          <pre>{ JSON.stringify(error, null, 2) }</pre>
        </UnknownAttachment>
      :
        <div
          className={ styleSet.adaptiveCardRenderer }
          onClick={ this.handleClick }
          ref={ this.contentRef }
        />
    );
  }
}
