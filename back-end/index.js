// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Use PORT from environment or default to 5000
const PORT = process.env.PORT || 5000;

// Use MongoDB URI from environment or local MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mern-crud';

// Connect to MongoDB database
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))   // Success message
  .catch((err) => console.error('MongoDB connection error:', err));  // Error handling

// Simple test route to check if server is running
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 