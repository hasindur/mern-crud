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



// Get a user by ID
app.get('/', (req, res) => { 
    UserModel.find({})
    .then(users => res.json(users))
    .catch(error => res.json({ message: error })); 

});

// Get a user by ID
app.get('/user/:id ', (req, res) => { 
    const id= req.params.id;
    UserModel.findById({_id: id})
    .then(users => res.json(users))
    .catch(error => res.json({ message: error })); 

});

// Update a user
app.put('/user/:id ', (req, res) => { 
    const id= req.params.id;
    UserModel.findByIdAndUpdate({_id: id},{name: req.body.name, email: req.body.email, age: req.body.age})
    .then(users => res.json(users))
    .catch(error => res.json({ message: error })); 

});

// Create a new user
app.post('/createUsers', async (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch((error) => res.json({ message: error }));     
});
 
// Delete a user
app.delete('/deleteUser/:id', async (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then(() => res.json({ message: 'User deleted successfully' }))
    .catch((error) => res.json({ message: error }));
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 