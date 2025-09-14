const express = require('express');
const router = express.Router();
const bookRoutes = require('./bookRoutes');

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// API routes
router.use('/books', bookRoutes);

module.exports = router;