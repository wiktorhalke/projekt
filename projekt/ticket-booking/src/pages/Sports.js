import React, { useEffect, useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events/sports')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch sports events');
        }
        return response.json();
      })
      .then(data => {
        setEvents(data);
      })
      .catch(error => {
        console.error('There was an error fetching the sports events!', error);
      });
  }, []);

  return (
    <div>
      <h2>Sports Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
