import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";


const PlantsPage = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/plants")
      .then(response => setPlants(response.data))
      .catch(error => console.error("Error fetching plants:", error));
  }, []);

  return (
    <div className="App">
      <h1>Explore Plants</h1>
      <div className="plant-grid">
        {plants.map((plant) => (
          <div className="plant-card" key={plant._id}>
            <img src={`http://localhost:5000${plant.imageUrl}`} alt={plant.name} />
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <p>{plant.scientificName}</p>
            <p>{plant.growingRegion}</p>
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantsPage;
