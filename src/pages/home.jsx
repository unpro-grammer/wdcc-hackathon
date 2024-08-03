import React from 'react';
import backgroundImg from '../resources/images/tempBackgroundImg.jpg';
import localfood from '../resources/images/localfood.jpg';
import earthfood from '../resources/images/earthfood.jpg';
import interstellarfood from '../resources/images/interstellarfood.jpg';
import '../styles/home.css';

const Home = () => {
  return (
    <html lang="en">
      <body>
        <div className="main-home">
          <div className="home-container">
            <image src={backgroundImg} alt="background image" className="home-background" />
            <div className="home-contents">
              <h1>Welcome to Space Bites</h1>
              <h2>Out of this world flavour!</h2>
              <p>Space Bites is the best place to get your snacks! We have a wide variety of snacks to choose from, all with a unique space theme. Our snacks are out of this world!</p>
            </div>
          </div>
          <div className="nav-cards">
            <div className="nav-card">
              <div className="imgWrapper">
                <img src={localfood} alt="Local Food" />
              </div>
              <h3>Local Food</h3>
            </div>
            <div className="nav-card">
              <div className="imgWrapper">
                <img src={earthfood} alt="Earth Food" />
              </div>
              <h3>Earth Food</h3>
            </div>
            <div className="nav-card">
              <div className="imgWrapper">
                <img src={interstellarfood} alt="Interstellar Food" />
              </div>
              <h3>Interstellar Food</h3>
            </div>
          </div>

          <div className="planet-map">

          </div>
        </div>
      </body>
    </html>
  );
};

export default Home;
