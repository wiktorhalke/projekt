const express = require('express');
const pool = require('../db/db');
const router = express.Router();

router.get('/events', async (req, res) => {
  const { category } = req.query;
  try {
    let query;
    let params;

    if (category === 'sports' || category === 'concerts' || category === 'others') {
      query = 'SELECT * FROM events WHERE category = $1';
      params = [category];
    } else {
      query = 'SELECT * FROM events';
      params = [];
    }

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;