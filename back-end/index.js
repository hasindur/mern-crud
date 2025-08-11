require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users'); 


const app = express();
app.use(cors());
app.use(express.json());

// Use PORT from environment or default to 5000
const PORT = process.env.PORT || 5000;

// Use MongoDB URI from environment or local MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mern-crud';

// Connect to MongoDB database
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB....'))  
  .catch((err) => console.error('MongoDB connection error :', err));  

// Create a new user
app.post('/users', async (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch((error) => res.json({ message: error }));     
});

// Get all users
app.get('/', (req, res) => { 
    UserModel.find({})
    .then(users => res.json(users))
    .catch(error => res.json({ message: error })); 
 // res.send('Hello from Express server!');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 