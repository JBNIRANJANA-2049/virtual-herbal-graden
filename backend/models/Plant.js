const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  scientificName: { type: String, required: true },
  growingRegion: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Plant', PlantSchema);
