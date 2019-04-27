import React from 'react';
import Event from './Event';
import styles from './styles/styles.css';

const EventList = ({events}) => (
  <ul className={styles.events}>
    {events.map(event => (
      <Event event={event} />
    ))}
  </ul>
)

export default EventList;