import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [bgImage, setBgImage] = useState("/img2.jpg"); 

 
  const handleBackgroundChange = () => {
    const newBg = bgImage === "/img2.jpg" ? "/img.jpg" : "/img2.jpg";
    setBgImage(newBg);
  };

  return (
    <div className="home-container">
      <div
        className="background"
        style={{ backgroundImage: `url(${bgImage})` }}
        onClick={handleBackgroundChange}
      ></div>

      {/* Content */}
      <h1 className="text">Investigation Dashboard</h1>
      <button className="animated-button" onClick={handleBackgroundChange}>
        Change Background
      </button>
    </div>
  );
}

export default Home;
