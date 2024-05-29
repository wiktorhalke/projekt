import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';

const Sports = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events/sports')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div>
      <h2>Sports Events</h2>
      <EventList events={events} />
    </div>
  );
};

export default Sports;
