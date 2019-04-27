import React from 'react';

const Event = ({event}) => (
  <li>
    <div> {event.date} </div>
    <div> {event.description} </div>
  </li>
)

export default Event;