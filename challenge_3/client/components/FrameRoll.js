import React from 'react';
import PropTypes from 'prop-types';

const FrameRoll = ({rollScore}) => {
  return (
    <div className={'frameRoll'}>
      {rollScore}
    </div>
  )
}

FrameRoll.propTypes = {
  rollScore: PropTypes.number,
}

export default FrameRoll;