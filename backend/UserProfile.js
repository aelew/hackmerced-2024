const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
  // data fields for the user profile
  // every user profile will have a username, and a boolean for each of the following fields
  auth0Id: { 
    type: String,
    required: true,
    unique: true,
  },
  vulnerabilities:{
    allergy: Boolean,
    respiratory: Boolean,
    immuneSystem: Boolean
  },

  tolerance:{
  // personal tolerances
  pollenTolerance: Number,
  airQualityTolerance: Number,
  covidTolerance: Number,
  fluTolerance: Number
  }
});

const UserProfile = mongoose.model('UserProfile', UserProfileSchema);

module.exports = UserProfile;
