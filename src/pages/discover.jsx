import React from 'react';
import '../styles/discover.css';
import cheeseburger from '../resources/images/cheesburger.jpg';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Discover from './discover'
import {Link} from 'react-router-dom'

const blocks1 = [
    { imgSrc: cheeseburger, link: '/restaurants' },
    { imgSrc: cheeseburger, link: 'https://google.com' },
    { imgSrc: cheeseburger, link: 'https://google.com' },
    { imgSrc: cheeseburger, link: 'https://google.com' },
    { imgSrc: cheeseburger, link: 'https://google.com' },
    { imgSrc: cheeseburger, link: 'https://google.com' },
    { imgSrc: cheeseburger, link: 'https://google.com' },
    { imgSrc: cheeseburger, link: 'https://google.com' },
    // Add more blocks as needed
];

function DiscoverPage() {
    return (
        <div className="simple-page">
            <h1>Discover</h1>
            <h2>Local</h2>
            
            <div className="blocks-container scrollable">
                {blocks1.map((block, index) => (
                    <Link to={block.link} key={index} className="block">
                        <div>
                            <img src={block.imgSrc} alt={`Block ${index + 1}`} />
                        </div>
                        {index === 0 && <p style={{ textAlign: 'center' }}>Galactic Grill & Tacos</p>}
                        {index === 1 && <p style={{ textAlign: 'center' }}>Nebula Noodles</p>}
                        {index === 2 && <p style={{ textAlign: 'center' }}>Stellar Sushi</p>}


                    </Link>

                ))}
            </div>
            <h2>Earth</h2>
            <div className="blocks-container scrollable">
                {blocks1.map((block, index) => (
                    <a href={block.link} key={index} className="block">
                        <div>
                            <img src={block.imgSrc} alt={`Block ${index + 1}`} />
                        </div>
                        {index === 0 && <p style={{ textAlign: 'center' }}>McGalaxy</p>}
                        {index === 1 && <p style={{ textAlign: 'center' }}>KFCosmic</p>}
                        {index === 2 && <p style={{ textAlign: 'center' }}>FiveAliens</p>}
                    </a>
                ))}
            </div>
            <h2>Interstellar</h2>
            <div className="blocks-container scrollable">
                {blocks1.map((block, index) => (
                    <a href={block.link} key={index} className="block">
                        <div>
                            <img src={block.imgSrc} alt={`Block ${index + 1}`} />
                        </div>
                        {index === 0 && <p style={{ textAlign: 'center' }}>Pulsar Pizza</p>}
                        {index === 1 && <p style={{ textAlign: 'center' }}>Supernova Steak</p>}
                        {index === 2 && <p style={{ textAlign: 'center' }}>Comet Café</p>}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default DiscoverPage;