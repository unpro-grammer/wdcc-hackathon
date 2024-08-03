import React from 'react';
import './discover.css'; // Import a CSS file for styling (optional)

const blocks = [
  { imgSrc: 'image1.jpg', link: 'https://example.com/page1' },
  { imgSrc: 'image2.jpg', link: 'https://example.com/page2' },
  { imgSrc: 'image3.jpg', link: 'https://example.com/page3' },
  // Add more blocks as needed
];

function DiscoverPage() {
  return (
    <div className="simple-page">
      <h1>Hello, Welcome to My React Page!</h1>
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