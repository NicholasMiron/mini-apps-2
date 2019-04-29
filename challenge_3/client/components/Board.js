import React from 'react';
import Pin from './Pin.js';

const Board = () => {
  const createRow = (numPins) => {
    let row = [];
    for (let i = 0; i < numPins; i++) {
      row.push(<Pin />)
    }
    return row;
  }

  return (
    <div>
      <div className={'pinRow'}>
        {createRow(4)}
      </div>
      <div className={'pinRow'}>
        {createRow(3)}
      </div>
      <div className={'pinRow'}>
        {createRow(2)}
      </div>
      <div className={'pinRow'}>
        {createRow(1)}
      </div>
    </div>
  )
}

export default Board;