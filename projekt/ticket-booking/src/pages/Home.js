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
      <footer className="home-footer">
        <p>Created by Bartosz Kolaj and Wiktor Halke</p>
        <p>&copy; {new Date().getFullYear()} TicketBooking</p>
      </footer>
    </div>
  );
};

export default Home;