import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Concerts = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events/concerts')
      .then(response => {
        setConcerts(response.data);
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