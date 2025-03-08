const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (images)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// MongoDB connection
const mongoURI = "mongodb://localhost:27017/herbal-garden"; // Local MongoDB

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Define Plant schema
const plantSchema = new mongoose.Schema({
  name: String,
  description: String,
  
    scientificName: String,
    growingRegion:String,
  imageUrl: String,
});

const Plant = mongoose.model("Plant", plantSchema);

// API to get all plants
app.get("/plants", async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
