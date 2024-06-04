
const express = require('express');
const router = express.Router();


const connection = require('../db/db.js')
router.get('/events', async (req, res) => {
  try {
    connection.query("SELECT * FROM events", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/events/sports', (req, res) => {

  connection.query('SELECT * FROM events WHERE category = "sports"', (error, results, fields) => {
    if (error) {
      console.error('Błąd zapytania do bazy danych:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json(results);
  });
});

router.get('/events/concerts', (req, res) => {

  connection.query('SELECT * FROM events WHERE category = "concerts"', (error, results, fields) => {
    if (error) {
      console.error('Błąd zapytania do bazy danych:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json(results);
  });
});

router.get('/events/others', (req, res) => {

  connection.query('SELECT * FROM events WHERE category = "others"', (error, results, fields) => {
    if (error) {
      console.error('Błąd zapytania do bazy danych:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json(results);
  });
});

module.exports = router;