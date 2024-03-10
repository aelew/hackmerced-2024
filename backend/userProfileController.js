const UserProfile = require('../models/userProfile.model'); // right path I believe

const createUserProfile = async (auth0Id, tolerances, vulnerabilities) => {
  try {
    // Check if user already exists
    let userProfile = await UserProfile.findOne({ auth0Id: auth0Id });

    if (userProfile) {
      console.log('User profile already exists, update logic here if necessary');
      // add logic to update with changes to tolerances, vulnerabilities 
    } else {
      // create new user profile
      userProfile = new UserProfile({
        auth0Id: auth0Id,
        vulnerabilities: vulnerabilities || { allergy: false, respiratory: false, immuneSystem: false }, 
        tolerance: tolerances || { pollenTolerance: 0, airQualityTolerance: 0, covidTolerance: 0, fluTolerance: 0 }, 
      });

      await userProfile.save();
      console.log('User profile created successfully');
    }
  } catch (error) {
    console.error('Failed to create or update user profile:', error);
  }
};
