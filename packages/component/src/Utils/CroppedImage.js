import { css } from 'glamor';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

const ROOT_CSS = css({
  '&.webchat__cropped-image': {
    overflow: 'hidden',
    position: 'relative',

    '& .webchat__cropped-image__image': {
      height: 'auto',
      left: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%'
    }
  }
});

const CroppedImage = ({ alt, className, height, src, width }) => {
  const sizeStyle = useMemo(() => ({ height, width }), [height, width]);

  return (
    <div className={classNames(ROOT_CSS + '', 'webchat__cropped-image', className + '')} style={sizeStyle}>
      <img alt={alt} className="webchat__cropped-image__image" src={src} />
    </div>
  );
};

CroppedImage.defaultProps = {
  alt: '',
  className: ''
};

CroppedImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default CroppedImage;
