import React from 'react';
import localfood from '../resources/images/localfood.jpg';
import earthfood from '../resources/images/earthfood.jpg';
import interstellarfood from '../resources/images/interstellarfood.jpg';
import galaxymap from '../resources/images/galaxymap.png';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="main-home">
      <div className="home-container">
        <div className="home-contents">
          <h1>Order bites out of this world here:</h1>
          <form className="search-form">
            <input type="text" placeholder="Search for food..." className="search-input" />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>
      <div className="nav-cards">
        <div className="nav-card">
          <div className="imgWrapper">
            <img src={localfood} alt="Local Food" />
          </div>
          <h3>Local Food</h3>
          <p>Endulge in some of the finest local cuisine</p>
        </div>
        <div className="nav-card">
          <div className="imgWrapper">
            <img src={earthfood} alt="Earth Food" />
          </div>
          <h3>Earth Food</h3>
          <p>Nostalgic food that makes you feel at home</p>
        </div>
        <div className="nav-card">
          <div className="imgWrapper">
            <img src={interstellarfood} alt="Interstellar Food" />
          </div>
          <h3>Interstellar Food</h3>
          <p>New and exciting eats</p>
        </div>
      </div>
      <h2>Find bites near you:</h2>
      <div className="planet-map">
        <img src={galaxymap} alt="Space Bites Logo" />
      </div>
    </div>
  );
};

export default Home;
