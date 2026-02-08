const express = require('express');
const logger = require('./logger');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

app.post('/login', (req, res) => {
  const { loginId, password } = req.body;

  // 1️⃣ Input validation
  if (!loginId || !password) {
    return res.status(400).json({
      message: 'loginId and password are required'
    });
  }

  // 2️⃣ Log input using logger
  logger.info(`Login attempt - loginId: ${loginId}, password: ${password}`);

  return res.status(200).json({
    message: 'Login data received'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
