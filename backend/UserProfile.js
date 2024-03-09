const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({ // data fields for the user profile
  // every user profile will have a username, and a boolean for each of the following fields
  userName: String, 
  userAllergy: boolean, 
  userRespiratory: boolean, 
  userImmuneSystem: boolean, 

  // personal tolerances
  pollenTolerance : Number, 
  airQualityTolerance : Number, 
  radiationTolerance : Number, 
  covidTolerance : Number, 
  fluTolerance : Number, 
});

const UserProfile = mongoose.model('UserProfile', UserProfileSchema);

module.exports = UserProfile;
