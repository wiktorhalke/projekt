import React from 'react';
import './EventItem.css';

const EventItem = ({ event }) => {
  return (
    <div className="event-item">
      <img src={event.image} alt={event.name} className="event-image" />
      <div className="event-details">
        <h3>{event.name}</h3>
        <p>{new Date(event.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default EventItem;