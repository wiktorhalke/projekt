import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';

const Others = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events/others')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div>
      <h2>Other Events</h2>
      <EventList events={events} />
    </div>
  );
};

export default Others;
