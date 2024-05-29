import React from 'react';
import EventItem from './EventItem';

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      {events.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;