import { css } from 'glamor';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// TODO: [P3] Although this is for development purpose, prettify it
const ROOT_CSS = css({
  '&.webchat__say-alt': {
    color: 'Red',
    margin: 0
  }
});

const SayAlt = ({ speak }) => !!speak && <pre className={classNames(ROOT_CSS + '', 'webchat__say-alt')}>{speak}</pre>;

SayAlt.defaultProps = {
  speak: ''
};

SayAlt.propTypes = {
  speak: PropTypes.string
};

export default SayAlt;
