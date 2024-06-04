const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const mysql = require('mysql')

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'events_db'
  });
  connection.connect()
  const app = express();
  const corsOption = {
    origin: ["http://localhost:3000/"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  };


app.use(bodyParser.json());
app.use(cors(corsOption));

app.use('/api', cors(), authRoutes);
app.use('/api', cors(), eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connection.end()
module.exports = connection;
