const express = require('express');
const fibonacci = require('fibonacci');

const app = express();

app.use(express.json());

app.get('/fibonacci', (req, res) => {
  const result = fibonacci.iterate(req.query.iterations || 3000);
  return res.json(result);
});

module.exports = { app };
