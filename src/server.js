require('dotenv').config();

const app = require('./config/app');
const connectDB = require('./config/database');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Routes
app.use('/api/v1', routes);

// 404 handler (must be before error handler)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API Documentation: http://localhost:${PORT}/api/v1/health`);
});