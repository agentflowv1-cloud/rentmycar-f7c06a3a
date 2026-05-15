const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const(pool) = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'database',
  password: 'password',
  port: 5432,
});

router.get('/api/car-models', async (req, res) => {
  try {
    const carModels = await pool.query('SELECT * FROM car_models');
    res.json(carModels.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching car models' });
  }
});

module.exports = router;