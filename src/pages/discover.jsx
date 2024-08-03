import React, { useState } from 'react';
import '../styles/discover.css';
import cheeseburger from '../resources/images/cheesburger.jpg';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Discover from './discover'
import { Link } from 'react-router-dom'

const blocks1 = [
  { imgSrc: cheeseburger, link: '/restaurants', type: 'local', name: 'Galactic Grill & Tacos', dietary: ['vegan', 'gluten-free'] },
  { imgSrc: cheeseburger, link: 'https://google.com', type: 'local', name: 'Nebula Noodles', dietary: ['vegetarian'] },
  { imgSrc: cheeseburger, link: 'https://google.com', type: 'local', name: 'Stellar Sushi', dietary: ['gluten-free'] },
  { imgSrc: cheeseburger, link: 'https://google.com', type: 'earth', name: 'McGalaxy', dietary: ['gluten-free', 'vegetarian'] },
  { imgSrc: cheeseburger, link: 'https://google.com', type: 'earth', name: 'KFCosmic', dietary: ['vegan'] },
  { imgSrc: cheeseburger, link: 'https://google.com', type: 'earth', name: 'FiveAliens', dietary: ['gluten-free'] },
  { imgSrc: cheeseburger, link: 'https://google.com', type: 'interstellar', name: 'Pulsar Pizza', dietary: ['vegetarian'] },
  { imgSrc: cheeseburger, link: 'https://google.com', type: 'interstellar', name: 'Supernova Steak', dietary: [] },
  { imgSrc: cheeseburger, link: 'https://google.com', type: 'interstellar', name: 'Comet Café', dietary: ['vegan', 'vegetarian'] },
  // Add more blocks as needed
];


function DiscoverPage() {
  const [selectedFilter, setSelectedFilter] = useState('');

  const filteredBlocks = selectedFilter
    ? blocks1.filter(block => block.dietary.includes(selectedFilter))
    : blocks1;

  return (
    <div className="simple-page">
      <h1>Discover</h1>
      <div className="filters">
        <button onClick={() => setSelectedFilter('vegan')}>Vegan</button>
        <button onClick={() => setSelectedFilter('vegetarian')}>Vegetarian</button>
        <button onClick={() => setSelectedFilter('gluten-free')}>Gluten-Free</button>
        <button onClick={() => setSelectedFilter('')}>All</button>
      </div>

      <h2>Local</h2>
      <div className="blocks-container scrollable">
        {filteredBlocks.filter(block => block.type === 'local').map((block, index) => (
          <Link to={block.link} key={index} className="block">
            <div>
              <img src={block.imgSrc} alt={`Block ${index + 1}`} />
            </div>
            <p style={{ textAlign: 'center' }}>{block.name}</p>
          </Link>
        ))}
      </div>
      <h2>Earth</h2>
      <div className="blocks-container scrollable">
        {filteredBlocks.filter(block => block.type === 'earth').map((block, index) => (
          <a href={block.link} key={index} className="block">
            <div>
              <img src={block.imgSrc} alt={`Block ${index + 1}`} />
            </div>
            <p style={{ textAlign: 'center' }}>{block.name}</p>
          </a>
        ))}
      </div>
      <h2>Interstellar</h2>
      <div className="blocks-container scrollable">
        {filteredBlocks.filter(block => block.type === 'interstellar').map((block, index) => (
          <a href={block.link} key={index} className="block">
            <div>
              <img src={block.imgSrc} alt={`Block ${index + 1}`} />
            </div>
            <p style={{ textAlign: 'center' }}>{block.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}


export default DiscoverPage;