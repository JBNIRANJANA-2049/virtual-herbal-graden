const mongoose = require('mongoose');
const Plant = require('./models/Plant'); // Import the model

mongoose.connect("mongodb://localhost:27017/herbal-garden", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const plants = [
  { name: "Tulsi", description: "Used in Ayurveda for medicinal purposes.",scientificName: "Ocimum sanctum",
  growingRegion: "India, Southeast Asia", imageUrl: "/images/tulsi.jpg" },
  { name: "Neem", description: "Known for its antibacterial properties.", scientificName: "Azadirachta indica",
  growingRegion: "India, Africa, Southeast Asia",imageUrl: "/images/neem.jpg" },
  { name: "Aloe Vera", description: "Used to treat skin problems and digestion issues.",scientificName: "Aloe barbadensis miller",
  growingRegion: "Arid regions worldwide",
imageUrl: "/images/aloe-vera.jpg" },
  { name: "Ashwagandha", description: "Helps reduce stress and anxiety.",scientificName: "Withania somnifera",
  growingRegion: "India, North Africa, the Middle East",
imageUrl: "/images/ashwagandha.jpg" },
  { name: "Brahmi", description: "Improves brain function and memory.",scientificName: "Bacopa monnieri",
  growingRegion: "India, Southeast Asia",
imageUrl: "/images/brahmi.jpg" },
  { name: "Ginger", description: "Effective for treating nausea and indigestion.",scientificName: "Zingiber officinale",
  growingRegion: "Tropical regions worldwide", imageUrl: "/images/ginger.jpg" },
  { name: "Amla", description: "Rich in Vitamin C, boosts immunity.",scientificName: "Phyllanthus emblica",
  growingRegion: "India, Southeast Asia",
imageUrl: "/images/amla.jpg" },
  { name: "Turmeric", description: "Has anti-inflammatory and antioxidant properties.",scientificName: "Curcuma longa",
  growingRegion: "India, Southeast Asia",
imageUrl: "/images/turmeric.jpg" },
{name: "Shatavari",
    description: "Known for boosting immunity and reproductive health.",
    scientificName: "Asparagus racemosus",
    growingRegion: "India, Sri Lanka",
    imageUrl: "/images/shatavari.jpg"
},


  {
    name: "Shatavari",
    description: "Known for boosting immunity and reproductive health.",
    scientificName: "Asparagus racemosus",
    growingRegion: "India, Sri Lanka",
    imageUrl: "/images/shatavari.jpg"
  },
  {
    name: "Manjistha",
    description: "Used for blood purification and detoxification.",
    scientificName: "Rubia cordifolia",
    growingRegion: "Himalayan regions, India, Southeast Asia",
    imageUrl: "/images/manjistha.jpg"
  },
  {
    name: "Arjuna",
    description: "Supports heart health and improves circulation.",
    scientificName: "Terminalia arjuna",
    growingRegion: "India, Sri Lanka, Bangladesh",
    imageUrl: "/images/arjuna.jpg"
  },
  {
    name: "Triphala",
    description: "A combination of three fruits, aids digestion and detox.",
    scientificName: "Emblica officinalis, Terminalia bellirica, Terminalia chebula",
    growingRegion: "India, Southeast Asia",
    imageUrl: "/images/triphala.jpg"
  },
  {
    name: "Guduchi",
    description: "Enhances immunity and supports liver function.",
    scientificName: "Tinospora cordifolia",
    growingRegion: "India, Myanmar",
    imageUrl: "/images/guduchi.jpg"
  },
  {
    name: "Moringa",
    description: "Packed with nutrients and antioxidants, boosts energy.",
    scientificName: "Moringa oleifera",
    growingRegion: "India, Africa, Southeast Asia",
    imageUrl: "/images/moringa.jpg"
  },
  {
    name: "Licorice",
    description: "Used to treat a variety of ailments, including digestive issues.",
    scientificName: "Glycyrrhiza glabra",
    growingRegion: "Mediterranean region, Asia",
    imageUrl: "/images/licorice.jpg"
  },
  {
    name: "Amalaki",
    description: "Rich in Vitamin C, it supports digestion, immunity, and detoxification.",
    scientificName: "Emblica officinalis",
    growingRegion: "India, Southeast Asia",
    imageUrl: "/images/amalaki.jpg"
  },
  {
    name: "Haritaki",
    description: "One of the three fruits in Triphala, known for supporting digestion and detoxification.",
    scientificName: "Terminalia chebula",
    growingRegion: "India, Nepal, China",
    imageUrl: "/images/haritaki.jpg"
  },
  {
    name: "Bael",
    description: "Used to treat digestive issues, ulcers, and respiratory problems.",
    scientificName: "Aegle marmelos",
    growingRegion: "India, Bangladesh, Sri Lanka",
    imageUrl: "/images/bael.jpg"
  },
  {
    name: "Kalmegh",
    description: "Boosts immunity, supports liver health, and is used for treating fevers and infections.",
    scientificName: "Andrographis paniculata",
    growingRegion: "India, China, Southeast Asia",
    imageUrl: "/images/kalmegh.jpg"
  },
  {
    name: "Jatamansi",
    description: "Used for its calming properties, supports mental health, reduces stress, and promotes sleep.",
    scientificName: "Nardostachys jatamansi",
    growingRegion: "Himalayan regions, India, Nepal",
    imageUrl: "/images/jatamansi.jpg"
  },
  {
    name: "Gotu Kola",
    description: "Promotes wound healing, reduces anxiety, and improves circulation.",
    scientificName: "Centella asiatica",
    growingRegion: "India, China, Southeast Asia",
    imageUrl: "/images/gotu_kola.jpg"
  },
  {
    name: "Shankhpushpi",
    description: "Used in Ayurveda for improving memory and cognitive function.",
    scientificName: "Convolvulus pluricaulis",
    growingRegion: "India",
    imageUrl: "/images/shankhpushpi.jpg"
  },
  {
    name: "Safed Musli",
    description: "Enhances physical strength and sexual vitality.",
    scientificName: "Chlorophytum borivilianum",
    growingRegion: "India",
    imageUrl: "/images/safed_musli.jpg"
  },
  {
    name: "Guggul",
    description: "Used for lowering cholesterol, treating arthritis, and managing weight.",
    scientificName: "Commiphora wightii",
    growingRegion: "India, Bangladesh, Pakistan",
    imageUrl: "/images/guggul.jpg"
  },
  {
    name: "Gokshura",
    description: "Supports urinary health and boosts vitality and muscle strength.",
    scientificName: "Tribulus terrestris",
    growingRegion: "India, China, Mediterranean region",
    imageUrl: "/images/gokshura.jpg"
  },
  {
    name: "Punarnava",
    description: "Known for its diuretic properties and for supporting kidney health.",
    scientificName: "Boerhavia diffusa",
    growingRegion: "India, Africa",
    imageUrl: "/images/punarnava.jpg"
  },
  {
    name: "Kutki",
    description: "Supports liver health and detoxification.",
    scientificName: "Picrorhiza kurroa",
    growingRegion: "Himalayan regions, India, Nepal",
    imageUrl: "/images/kutki.jpg"
  },
  {
    name: "Giloy",
    description: "Boosts immunity and helps in fighting fevers and infections.",
    scientificName: "Tinospora cordifolia",
    growingRegion: "India, Myanmar",
    imageUrl: "/images/giloy.jpg"
  },
  {
    name: "Acorus",
    description: "Supports mental clarity and is used in Ayurveda to improve memory and focus.",
    scientificName: "Acorus calamus",
    growingRegion: "India, Nepal, China",
    imageUrl: "/images/acorus.jpg"
  },
  {
    name: "Dandelion",
    description: "Rich in vitamins and used for supporting liver function and digestion.",
    scientificName: "Taraxacum officinale",
    growingRegion: "Worldwide",
    imageUrl: "/images/dandelion.jpg"
  },
  {
    name: "Yarrow",
    description: "Used for wound healing and reducing inflammation.",
    scientificName: "Achillea millefolium",
    growingRegion: "North America, Europe, Asia",
    imageUrl: "/images/yarrow.jpg"
  },



];

const seedDatabase = async () => {
  try {
    await Plant.deleteMany({});
    await Plant.insertMany(plants);
    console.log("Database seeded!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.disconnect();
  }
};

seedDatabase();
