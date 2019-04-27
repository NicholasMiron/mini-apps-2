import React from 'react';
import Event from './Event';

const EventList = ({events}) => (
  <ul>
    {events.map(event => (
      <Event event={event} />
    ))}
  </ul>
)

export default EventList;