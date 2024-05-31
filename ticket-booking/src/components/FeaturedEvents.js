import React, { useEffect, useState } from 'react';

const Events = ({ category }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        return response.json();
      })
      .then(data => {
        setEvents(data.filter(event => event.category === category));
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, [category]);

  return (
    <div>
      <h2>{category} Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;