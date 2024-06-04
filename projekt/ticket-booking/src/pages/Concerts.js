import React, { useEffect, useState } from 'react';

const Concerts = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events/concerts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setConcerts(data);
      })
      .catch(error => {
        console.error('There was an error fetching the concerts!', error);
      });
  }, []);

  return (
    <div>
      <h2>Concerts</h2>
      <ul>
        {concerts.map(concert => (
          <li key={concert.id}>
            <h3>{concert.name}</h3>
            <p>Date: {concert.date}</p>
            <p>Location: {concert.location}</p>
            <p>Description: {concert.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Concerts;
