import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

// Connect to MongoDB
const mongoUri = process.env.VITE_MONGODB_URI; // set URI 
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

// Verify connection 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB database');
});

// Template values
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // add more fields here
});

const User = mongoose.model('User', userSchema);

app.use(express.json()); // for parsing

// Example route to create a new user
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Example route to get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Default route for '/api'
app.get('/api', (req, res) => {
  res.send('It works! MongoDB integrated.');
});

// Start the Express server
app.listen(3000, () =>
  console.log('Express server ready on port 3000 - http://localhost:3000')
);
