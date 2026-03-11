const express = require('express');
const pool = require('./src/db');
require('dotenv').config();

const app = express();
app.use(express.json());

// temp test route
app.get('/api/test', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', db: 'connected' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));