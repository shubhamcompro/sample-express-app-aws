const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('You requested for / path');
});

module.exports = router;
