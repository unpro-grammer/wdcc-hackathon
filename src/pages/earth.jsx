import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/discover.css';
import '../styles/earth.css';
import rest8 from '../resources/images/rester8.jpg';
import rest7 from '../resources/images/rester7.jpg';
import rest2 from '../resources/images/rester2.jpg';
import rest3 from '../resources/images/pizza3.jpg';
import rest from '../resources/images/rester.jpg';
import restf from '../resources/images/rester1 (2).jpg';
import mcdon from '../resources/images/mcrester6.jpg';
import kfc from '../resources/images/kfcrester5.jpg';
import fiveguys from '../resources/images/fiveguys4.jpg';
import coolone from '../resources/images/rester1.jpg';

// Custom hook to get query parameters
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function EarthPage() {
// Initialize query parameter
  const query = useQuery();
  const [searchQuery, setSearchQuery] = useState(query.get('query') || '');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  // Effect to handle initial search with the query parameter
  useEffect(() => {
    if (searchQuery) {
      console.log(`Searching for: ${searchQuery}`);
      // Perform search logic here
    }
  }, [searchQuery]);

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    // Perform search logic here
  };

    // Sample data
    const blocks1 = [
        { imgSrc: coolone, link: '/restaurants', type: 'local', name: 'Galactic Grill & Tacos', dietary: ['vegan', 'gluten-free'], favorite: true },
        { imgSrc: rest7, link: '/restaurants', type: 'local', name: 'Nebula Noodles', dietary: ['vegetarian'], favorite: false },
        { imgSrc: rest2, link: '/restaurants', type: 'local', name: 'Stellar Sushi', dietary: ['gluten-free'], favorite: false },
        { imgSrc: mcdon, link: '/restaurants', type: 'earth1', name: 'McGalaxy', dietary: ['gluten-free'], favorite: false },
        { imgSrc: kfc, link: '/restaurants', type: 'earth1', name: 'KFCosmic', dietary: [], favorite: true },
        { imgSrc: fiveguys, link: '/restaurants', type: 'earth', name: 'FiveAliens', dietary: ['gluten-free'], favorite: false },
        { imgSrc: rest7, link: '/restaurants', type: 'interstellar', name: 'Pulsar Pizza', dietary: ['vegetarian'], favorite: false },
        { imgSrc: rest2, link: '/restaurants', type: 'interstellar', name: 'Supernova Steak', dietary: [], favorite: true },
        { imgSrc: rest3, link: '/restaurants', type: 'interstellar', name: 'Comet Café', dietary: ['vegan', 'vegetarian'], favorite: false },
        { imgSrc: rest8, link: '/restaurants', type: 'local', name: 'Cosmic Curry', dietary: ['vegan'], favorite: true },
        { imgSrc: rest7, link: '/restaurants', type: 'local', name: 'Meteorite Munchies', dietary: ['gluten-free'], favorite: false },
        { imgSrc: rest3, link: '/restaurants', type: 'local', name: 'Planetary Pizza', dietary: ['vegetarian'], favorite: true },
        { imgSrc: restf, link: '/restaurants', type: 'earth1', name: 'Starbucks', dietary: ['gluten-free', 'vegetarian'], favorite: false },
        { imgSrc: rest, link: '/restaurants', type: 'earth1', name: 'Galactic Gourmet', dietary: ['vegan'], favorite: true },
        { imgSrc: rest8, link: '/restaurants', type: 'earth2', name: 'Asteroid Appetizers', dietary: ['gluten-free'], favorite: false },
        { imgSrc: rest7, link: '/restaurants', type: 'interstellar', name: 'Celestial Cuisine', dietary: ['vegetarian'], favorite: false },
        { imgSrc: rest2, link: '/restaurants', type: 'interstellar', name: 'Quantum Quiche', dietary: [], favorite: true },
        { imgSrc: rest3, link: '/restaurants', type: 'interstellar', name: 'Nebula Nibbles', dietary: ['vegan', 'vegetarian'], favorite: false },
        { imgSrc: rest8, link: '/restaurants', type: 'local', name: 'Solar Sizzlers', dietary: ['vegan'], favorite: true },
        { imgSrc: rest7, link: '/restaurants', type: 'local', name: 'Intergalactic Ice Cream', dietary: ['gluten-free'], favorite: false },
        { imgSrc: rest2, link: '/restaurants', type: 'local', name: 'Comet Confections', dietary: ['vegetarian'], favorite: true },
        { imgSrc: rest3, link: '/restaurants', type: 'earth2', name: 'Alien Abode', dietary: ['gluten-free', 'vegetarian'], favorite: false },
        { imgSrc: rest2, link: '/restaurants', type: 'earth2', name: 'Galactic Grains', dietary: ['vegan'], favorite: true },
        { imgSrc: rest8, link: '/restaurants', type: 'earth2', name: 'Planetary Patisserie', dietary: ['gluten-free'], favorite: false },
        { imgSrc: rest7, link: '/restaurants', type: 'interstellar', name: 'Universal Udon', dietary: ['vegetarian'], favorite: false },
        { imgSrc: rest2, link: '/restaurants', type: 'interstellar', name: 'Cosmic Café', dietary: [], favorite: true },
        { imgSrc: rest3, link: '/restaurants', type: 'interstellar', name: 'Nebula Nosh', dietary: ['vegan', 'vegetarian'], favorite: false }
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
            <h1>Foods from Earth</h1>
            <div className="search-bar">
              <form className="search-form12">
                <input type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
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

          </div>
          <div className="blocks-containerEarth">
            {finalBlocks.filter(block => block.type === 'earth1').slice(0, 4).map((block, index) => (
              <Link to={block.link} key={index} className="block">
                <div className="block-card">
                  <div className="imgWrapper">
                    <img src={block.imgSrc} alt={`Block ${index + 1}`} />
                  </div>
                  <p style={{ textAlign: 'center' }}>{block.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="blocks-containerEarth">
            {finalBlocks.filter(block => block.type === 'earth2').slice(0, 4).map((block, index) => (
              <Link to={block.link} key={index} className="block">
                <div className="block-card">
                  <div className="imgWrapper">
                    <img src={block.imgSrc} alt={`Block ${index + 1}`} />
                  </div>
                  <p style={{ textAlign: 'center' }}>{block.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
}

export default EarthPage;