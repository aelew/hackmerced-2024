const mongoose = require('mongoose');

mongoose.connect(process.env.VITE_MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
