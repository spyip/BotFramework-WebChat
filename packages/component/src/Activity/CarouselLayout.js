import { Composer, Context as FilmContext, createBasicStyleSet, Flipper } from 'react-film';

import { css } from 'glamor';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import CarouselFilmStrip from './CarouselFilmStrip';
import useDirection from '../hooks/useDirection';
import useLocalizer from '../hooks/useLocalizer';
import useStyleSet from '../hooks/useStyleSet';

const ROOT_CSS = css({
  '&.webchat__carousel-layout': {
    overflow: 'hidden',
    position: 'relative'
  }
});

const CarouselLayout = ({ activity, children, nextVisibleActivity }) => {
  const [{ carouselLayout: carouselLayoutStyleSet }] = useStyleSet();
  const [direction] = useDirection();
  const filmStyleSet = createBasicStyleSet({ cursor: null });
  const leftSideFlipper = direction === 'rtl' ? '>' : '<';
  const localize = useLocalizer();
  const rightSideFlipper = direction === 'rtl' ? '<' : '>';

  return (
    <Composer dir={direction} numItems={React.Children.count(children)}>
      <FilmContext.Consumer>
        {({ scrollBarWidth }) => (
          <div
            className={classNames(
              ROOT_CSS + '',
              carouselLayoutStyleSet + '',
              filmStyleSet.carousel + '',
              'webchat__carousel-layout'
            )}
          >
            <CarouselFilmStrip activity={activity} nextVisibleActivity={nextVisibleActivity}>
              {children}
            </CarouselFilmStrip>
            {scrollBarWidth !== '100%' && (
              <React.Fragment>
                <Flipper
                  aria-label={localize('CAROUSEL_FLIPPER_LEFT_ALT')}
                  blurFocusOnClick={true}
                  className={classNames(filmStyleSet.leftFlipper + '', 'webchat__carousel-layout__flipper')}
                  mode="left"
                >
                  <div className="webchat__carousel-layout__flipper-button">{leftSideFlipper}</div>
                </Flipper>
                <Flipper
                  aria-label={localize('CAROUSEL_FLIPPER_RIGHT_ALT')}
                  blurFocusOnClick={true}
                  className={classNames(filmStyleSet.rightFlipper + '', 'webchat__carousel-layout__flipper')}
                  mode="right"
                >
                  <div className="webchat__carousel-layout__flipper-button">{rightSideFlipper}</div>
                </Flipper>
              </React.Fragment>
            )}
          </div>
        )}
      </FilmContext.Consumer>
    </Composer>
  );
};

CarouselLayout.defaultProps = {
  children: undefined,
  nextVisibleActivity: undefined
};

CarouselLayout.propTypes = {
  activity: PropTypes.any.isRequired,
  children: PropTypes.any,
  nextVisibleActivity: PropTypes.any
};

export default CarouselLayout;
