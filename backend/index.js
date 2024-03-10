import cors from 'cors';
import express from 'express';
import { auth } from 'express-oauth2-jwt-bearer';
import mongoose from 'mongoose';

import UserSettings from './UserSettings.js';

import 'dotenv/config';

const app = express();

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI; // set URI
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

// Verify connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB database');
});

const jwtCheck = auth({
  audience: 'https://mapnosis.co/api/',
  issuerBaseURL: `https://${process.env.VITE_AUTH0_DOMAIN}/`,
  tokenSigningAlg: 'RS256'
});

// cors fix in dev
app.use(cors({ origin: 'http://localhost:5173' }));

// for parsing
app.use(express.json());

app.get('/api', (_req, res) => {
  res.send('It works!');
});

// all routes beyond this line are protected
app.use(jwtCheck);

app.get('/api/settings', async (req, res) => {
  const userId = req.auth.payload.sub;
  const data = await UserSettings.findOne({ auth0Id: userId });
  res.json({ success: true, data });
});

app.post('/api/settings', async (req, res) => {
  const userId = req.auth.payload.sub;
  console.log(req.body);
  await UserSettings.findOneAndUpdate(
    { auth0Id: userId },
    { ...req.body, auth0Id: userId },
    { upsert: true }
  );
  res.json({ success: true });
});

// Start the Express server
app.listen(3000, () =>
  console.log('Express server ready on port 3000 - http://localhost:3000')
);
