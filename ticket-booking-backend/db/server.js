const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 5000;

const pool = mysql.createPool({
  connectionLimit: 10, 
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'events_db'
});

app.get('/api/events', (req, res) => {
  pool.query('SELECT * FROM events', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});