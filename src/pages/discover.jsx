import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/discover.css';
import cheeseburger from '../resources/images/cheesburger.jpg';
import rest8 from '../resources/images/rester8.jpg';
import rest7 from '../resources/images/rester7.jpg';
import rest2 from '../resources/images/rester2.jpg';
import rest3 from '../resources/images/pizza3.jpg';
import rest from '../resources/images/rester.jpg';


function DiscoverPage() {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const blocks1 = [
    { imgSrc: rest8, link: '/restaurants', type: 'local', name: 'Galactic Grill & Tacos', dietary: ['vegan', 'gluten-free'], favorite: true },
    { imgSrc: rest7, link: 'https://google.com', type: 'local', name: 'Nebula Noodles', dietary: ['vegetarian'], favorite: false },
    { imgSrc: rest2, link: 'https://google.com', type: 'local', name: 'Stellar Sushi', dietary: ['gluten-free'], favorite: false },
    { imgSrc: rest3, link: 'https://google.com', type: 'earth', name: 'McGalaxy', dietary: ['gluten-free', 'vegetarian'], favorite: false },
    { imgSrc: rest, link: 'https://google.com', type: 'earth', name: 'KFCosmic', dietary: ['vegan'], favorite: true },
    { imgSrc: rest8, link: 'https://google.com', type: 'earth', name: 'FiveAliens', dietary: ['gluten-free'], favorite: false },
    { imgSrc: rest7, link: 'https://google.com', type: 'interstellar', name: 'Pulsar Pizza', dietary: ['vegetarian'], favorite: false },
    { imgSrc: rest2, link: 'https://google.com', type: 'interstellar', name: 'Supernova Steak', dietary: [], favorite: true },
    { imgSrc: rest3, link: 'https://google.com', type: 'interstellar', name: 'Comet Café', dietary: ['vegan', 'vegetarian'], favorite: false },
    { imgSrc: rest8, link: 'https://google.com', type: 'local', name: 'Cosmic Curry', dietary: ['vegan'], favorite: true },
    { imgSrc: rest7, link: 'https://google.com', type: 'local', name: 'Meteorite Munchies', dietary: ['gluten-free'], favorite: false },
    { imgSrc: rest2, link: 'https://google.com', type: 'local', name: 'Planetary Pizza', dietary: ['vegetarian'], favorite: true },
    { imgSrc: rest3, link: 'https://google.com', type: 'earth', name: 'Starbucks', dietary: ['gluten-free', 'vegetarian'], favorite: false },
    { imgSrc: rest, link: 'https://google.com', type: 'earth', name: 'Galactic Gourmet', dietary: ['vegan'], favorite: true },
    { imgSrc: rest8, link: 'https://google.com', type: 'earth', name: 'Asteroid Appetizers', dietary: ['gluten-free'], favorite: false },
    { imgSrc: rest7, link: 'https://google.com', type: 'interstellar', name: 'Celestial Cuisine', dietary: ['vegetarian'], favorite: false },
    { imgSrc: rest2, link: 'https://google.com', type: 'interstellar', name: 'Quantum Quiche', dietary: [], favorite: true },
    { imgSrc: rest3, link: 'https://google.com', type: 'interstellar', name: 'Nebula Nibbles', dietary: ['vegan', 'vegetarian'], favorite: false },
    { imgSrc: rest8, link: 'https://google.com', type: 'local', name: 'Solar Sizzlers', dietary: ['vegan'], favorite: true },
    { imgSrc: rest7, link: 'https://google.com', type: 'local', name: 'Intergalactic Ice Cream', dietary: ['gluten-free'], favorite: false },
    { imgSrc: rest2, link: 'https://google.com', type: 'local', name: 'Comet Confections', dietary: ['vegetarian'], favorite: true },
    { imgSrc: rest3, link: 'https://google.com', type: 'earth', name: 'Alien Abode', dietary: ['gluten-free', 'vegetarian'], favorite: false },
    { imgSrc: rest, link: 'https://google.com', type: 'earth', name: 'Galactic Grains', dietary: ['vegan'], favorite: true },
    { imgSrc: rest8, link: 'https://google.com', type: 'earth', name: 'Planetary Patisserie', dietary: ['gluten-free'], favorite: false },
    { imgSrc: rest7, link: 'https://google.com', type: 'interstellar', name: 'Universal Udon', dietary: ['vegetarian'], favorite: false },
    { imgSrc: rest2, link: 'https://google.com', type: 'interstellar', name: 'Cosmic Café', dietary: [], favorite: true },
    { imgSrc: rest3, link: 'https://google.com', type: 'interstellar', name: 'Nebula Nosh', dietary: ['vegan', 'vegetarian'], favorite: false }
  ];

  const filteredBlocks = selectedFilter
    ? blocks1.filter(block => block.dietary.includes(selectedFilter))
    : blocks1;

  const searchedBlocks = searchQuery
    ? filteredBlocks.filter(block => block.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : filteredBlocks;

  const finalBlocks = showFavorites
    ? searchedBlocks.filter(block => block.favorite)
    : searchedBlocks;

  return (
    <div className="simple-page2">
      <div className="discover-nav">
        <h1>Discover</h1>
        <div className="search-bar">
          <form className="search-form">
            <input type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
        <div className="filters">
          <select id="dietary-filter" value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
            <option value="">All</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>
        </div>
        <div className="favorites-toggle">
          <button onClick={() => setShowFavorites(!showFavorites)}>
            {showFavorites ? 'Show All' : 'Show Favorites'}
          </button>
        </div>
      </div>
      <h2>Local</h2>
      {finalBlocks.filter(block => block.type === 'local').length > 4 && (
        <Link to="/local">
          <button>Show More</button>
        </Link>
      )}
      <div className="blocks-container">
        {finalBlocks.filter(block => block.type === 'local').slice(0, 4).map((block, index) => (
          <Link to={block.link} key={index} className="block">
            <div className="block-card">
              <div className="imgWrapper">
                <img src={block.imgSrc} alt={`Block ${index + 1}`} />
              </div>
            </div>
            <p style={{ textAlign: 'center' }}>{block.name}</p>
          </Link>
        ))}
      </div>

      <h2>Earth</h2>
      {finalBlocks.filter(block => block.type === 'earth').length > 4 && (
        <Link to="/earth">
          <button>Show More</button>
        </Link>
      )}
      <div className="blocks-container">
        {finalBlocks.filter(block => block.type === 'earth').slice(0, 4).map((block, index) => (
          <a href={block.link} key={index} className="block">
            <div className="block-card">
              <div className="imgWrapper">
                <img src={block.imgSrc} alt={`Block ${index + 1}`} />
              </div>
              <p style={{ textAlign: 'center' }}>{block.name}</p>
            </div>
          </a>
        ))}
      </div>

      <h2>Interstellar</h2>
      {finalBlocks.filter(block => block.type === 'interstellar').length > 4 && (
        <Link to="/interstellar">
          <button>Show More</button>
        </Link>
      )}
      <div className="blocks-container">
        {finalBlocks.filter(block => block.type === 'interstellar').slice(0, 4).map((block, index) => (
          <a href={block.link} key={index} className="block">
            <div className="block-card">
              <div className="imgWrapper">
                <img src={block.imgSrc} alt={`Block ${index + 1}`} />
              </div>
              <p style={{ textAlign: 'center' }}>{block.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default DiscoverPage;
