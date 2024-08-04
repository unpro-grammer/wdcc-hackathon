import React from 'react';
import localfood from '../resources/images/13.jpg';
import earthfood from '../resources/images/14.jpg';
import interstellarfood from '../resources/images/12.jpg';
import galaxymap from '../resources/images/download.png';
import '../styles/home.css';
import { useState, useEffect } from 'react';
import logo from '../assets/SpaceBites_logo__2.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  // for SOME REASON the second letter of the text is not showing up, hence the zero width space next in Order
  const fullText = 'O​rder bites out of this world here...';
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length - 1) {
        clearInterval(interval);
      }
    }, 100); // Adjust the speed by changing the interval time (in milliseconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/discover?query=${encodeURIComponent(searchInput)}`);
  };

  return (
    <div className="main-home">
      <div className="home-container">
        <img src={logo} alt='logo' className='home-logo' />
        <div className="home-contents">
          <h1>​{displayedText}</h1>
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search for your craving..."
              className="search-input"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>
      <div className="nav-cards">
        <a href="/discover">
          <div className="nav-card">
            <div className="imgWrapper">
              <img class="pics" src={localfood} alt="Local Food" />
            </div>
            <h3>Local Food</h3>
            <p>Indulge in some of the finest local cuisine</p>
          </div>
        </a>
        <a href="/discover">
          <div className="nav-card">
            <div className="imgWrapper">
              <img class="pics" src={earthfood} alt="Earth Food" />
            </div>
            <h3>Earth Food</h3>
            <p>Nostalgic food that makes you feel at home</p>
          </div>
        </a>
        <a href="/discover">
          <div className="nav-card">
            <div className="imgWrapper">
              <img class="pics" src={interstellarfood} alt="Interstellar Food" />
            </div>
            <h3>Interstellar Food</h3>
            <p>New and exciting eats from all around the galaxy</p>
          </div>
        </a>
      </div>
      <div className="map-divider">
        <h2>Find bites near you:</h2>
        <div className="planet-map">
          <img src={galaxymap} alt="galaxy map" />
        </div>
      </div>
    </div>
  );
};

export default Home;
