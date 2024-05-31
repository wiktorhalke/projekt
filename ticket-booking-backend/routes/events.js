
const express = require('express');
const router = express.Router();


const connection = require('../index.js')
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


module.exports = router;