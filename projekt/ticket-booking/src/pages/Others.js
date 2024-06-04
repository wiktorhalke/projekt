import React, { useEffect, useState } from 'react';

const OtherEvents = () => {
  const [otherEvents, setOtherEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events/others')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch other events');
        }
        return response.json();
      })
      .then(data => {
        setOtherEvents(data);
      })
      .catch(error => {
        console.error('There was an error fetching the other events!', error);
      });
  }, []);

  return (
    <div>
      <h2>Other Events</h2>
      <ul>
        {otherEvents.map(event => (
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

export default OtherEvents;