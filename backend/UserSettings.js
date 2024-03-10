import mongoose from 'mongoose';

const UserSettingsSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
    unique: true
  },
  vulnerabilities: {
    allergy: Boolean,
    respiratory: Boolean,
    immuneSystem: Boolean
  },
  tolerances: {
    pollenTolerance: Number,
    airQualityTolerance: Number
  }
});

const UserSettings = mongoose.model('UserSettings', UserSettingsSchema);

export default UserSettings;
