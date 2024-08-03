import React from 'react';
import backgroundImg from '../tempBackgroundImg.jpg'; // Go up one directory level from src/pages
import '../styles/home.css'; // Go up one directory level from src/pages

const Home = () => {
  return (
    <html lang="en">
      <body className="main-home">
        <div className="home-container">
          <image src={backgroundImg} alt="background image" className="home-background" />
          <div className="home-contents">
            <h1>Welcome to Space Bites</h1>
            <h2>Out of this world flavour!</h2>
            <p>Space Bites is the best place to get your snacks! We have a wide variety of snacks to choose from, all with a unique space theme. Our snacks are out of this world!</p>
          </div>
        </div>
      </body>
      <footer className="home-footer">
        <p>footer information there is stuff</p>
      </footer>
    </html>
  );
};

export default Home;
