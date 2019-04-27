import React from 'react';
import styles from './styles/styles.css';

const Event = ({event}) => {
  const getYear = () => {
    let currentDate = event.date;
    let index = currentDate.indexOf('/');
    if (index >= 0) {
      currentDate = currentDate.slice(0, index);
    }
    return currentDate;
  }

  return (
    <li className={styles.event}>
      <div> {getYear()} </div>
      <div> {event.description} </div>
    </li>
  )
}

export default Event;