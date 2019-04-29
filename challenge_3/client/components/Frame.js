import React from 'react';
import propTypes from 'prop-types';
import FrameRoll from './FrameRoll.js';

const Frame = ({frameNumber, frameRoll, frameScore}) => {
  return (
    <div className={'frame'}>
      <div className={'topOfFrame'}>
        {frameNumber}
        <FrameRoll rollScore={frameRoll[0]}/>
        <FrameRoll rollScore={frameRoll[1]}/>
      </div>
      <div className={'frameScore'}> 
        {frameScore}
      </div>
    </div>
  )
}


Frame.propTypes = {
  frameNumber: propTypes.number,
  frameScore: propTypes.number,
  frameRoll: propTypes.array,
};



export default Frame;