import React from 'react';
import '../styles/discover.css';
import cheeseburger from '../resources/images/cheesburger.jpg';

const blocks = [
  { imgSrc: cheeseburger, link: 'https://google.com' },
  { imgSrc: cheeseburger, link: 'https://google.com' },
  { imgSrc: cheeseburger, link: 'https://google.com' },
  // Add more blocks as needed
];

function DiscoverPage() {
  return (
    <div className="simple-page">
      <h1>Discover</h1>
      <p>This is a simple page displaying some text.</p>
      <div className="blocks-container">
        {blocks.map((block, index) => (
          <a href={block.link} key={index} className="block">
            <div>
              <img src={block.imgSrc} alt={`Block ${index + 1}`} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default DiscoverPage;