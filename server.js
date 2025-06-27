// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(logger);
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);

// Global Error Handler
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Welcome to the Product API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export for testing
module.exports = app;