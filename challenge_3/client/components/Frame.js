import React from 'react';
import propTypes from 'prop-types';
import FrameRoll from './FrameRoll.js';

const Frame = ({frameNumber}) => {
  return (
    <div className={'frame'}>
      {frameNumber}
      <FrameRoll />
      <FrameRoll />
    </div>
  )
}


Frame.propTypes = {
  frameNumber: propTypes.number,
};



export default Frame;