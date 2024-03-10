const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
 
  auth0Id: { 
    type: String,
    required: true, //not needed?
    unique: true, // not needed?
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
