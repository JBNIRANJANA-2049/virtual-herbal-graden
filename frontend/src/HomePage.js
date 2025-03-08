import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import backgroundImage from "./assets/herbal-garden-background.jpg";  // Import the image

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/plants");
  };

  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${backgroundImage})`,  // Set background inline
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1>Welcome to the Healing Greenscape </h1>
              <p>Your Virtual Herbarium Experience</p>
      <p>Discover the world of medicinal plants used in AYUSH.</p>
      <button className="explore-button" onClick={handleExploreClick}>
        Explore
      </button>
    </div>
  );
};

export default HomePage;
