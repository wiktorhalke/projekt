const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const events = {
  featured: [
    { id: 1, name: 'Concert XYZ', date: '2024-06-01', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Football Match ABC', date: '2024-06-05', image: 'https://via.placeholder.com/150' },
  ],
  sports: [
    { id: 3, name: 'Basketball Game', date: '2024-06-10', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Tennis Tournament', date: '2024-06-15', image: 'https://via.placeholder.com/150' },
  ],
  concerts: [
    { id: 5, name: 'Rock Concert', date: '2024-07-01', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Jazz Night', date: '2024-07-10', image: 'https://via.placeholder.com/150' },
  ],
  others: [
    { id: 7, name: 'Stand-up Comedy', date: '2024-08-01', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Art Exhibition', date: '2024-08-10', image: 'https://via.placeholder.com/150' },
  ]
};

app.get('/api/events/featured', (req, res) => {
  res.json(events.featured);
});

app.get('/api/events/sports', (req, res) => {
  res.json(events.sports);
});

app.get('/api/events/concerts', (req, res) => {
  res.json(events.concerts);
});

app.get('/api/events/others', (req, res) => {
  res.json(events.others);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});