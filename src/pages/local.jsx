import React from 'react';
import { Link } from 'react-router-dom';
import cheeseburger from '../resources/images/cheesburger.jpg';

function LocalPage() {
  const blocks = [
    { imgSrc: cheeseburger, link: '/restaurants', type: 'local', name: 'Galactic Grill & Tacos', dietary: ['vegan', 'gluten-free'], favorite: true },
    { imgSrc: cheeseburger, link: 'https://google.com', type: 'local', name: 'Nebula Noodles', dietary: ['vegetarian'], favorite: false },
    { imgSrc: cheeseburger, link: 'https://google.com', type: 'local', name: 'Stellar Sushi', dietary: ['gluten-free'], favorite: false },
    { imgSrc: cheeseburger, link: 'https://google.com', type: 'local', name: 'Cosmic Curry', dietary: ['vegan'], favorite: true },
    { imgSrc: cheeseburger, link: 'https://google.com', type: 'local', name: 'Meteorite Munchies', dietary: ['gluten-free'], favorite: false },
    { imgSrc: cheeseburger, link: 'https://google.com', type: 'local', name: 'Planetary Pizza', dietary: ['vegetarian'], favorite: true },
    { imgSrc: cheeseburger, link: 'https://google.com', type: 'local', name: 'Solar Sizzlers', dietary: ['vegan'], favorite: true },
    { imgSrc: cheeseburger, link: 'https://google.com', type: 'local', name: 'Intergalactic Ice Cream', dietary: ['gluten-free'], favorite: false },
    { imgSrc: cheeseburger, link: 'https://google.com', type: 'local', name: 'Comet Confections', dietary: ['vegetarian'], favorite: true }
  ];

  return (
    <div className="simple-page2">
      <h1>Local Cuisine</h1>
      <div className="blocks-container">
        {blocks.map((block, index) => (
          <Link to={block.link} key={index} className="block">
            <div className="imgWrapper">
              <img src={block.imgSrc} alt={`Block ${index + 1}`} />
            </div>
            <p style={{ textAlign: 'center' }}>{block.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LocalPage;
