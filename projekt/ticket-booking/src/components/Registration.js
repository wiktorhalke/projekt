import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsRegistered(true);
  };

  return (
    <div className="registration">
      {isRegistered ? (
        <div className="welcome-message">
          <h1>Witaj {name}</h1>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <label>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default Registration;