import React from 'react';
import FeaturedEvents from '../components/FeaturedEvents';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to TicketBooking</h1>
        <p>Your one-stop destination for all event tickets</p>
      </header>
      <FeaturedEvents />
    </div>
  );
};

export default Home;
