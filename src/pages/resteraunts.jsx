import React, { useState } from 'react';
import '../styles/resteraunts.css';
import cheeseburger from '../resources/images/cheesburger.jpg'; // Corrected typo

const blocks1 = [
    { imgSrc: cheeseburger, link: 'https://google.com' },
    // Add more blocks as needed
];

const foodItems = [
    { imgSrc: cheeseburger, description: 'Delicious Cheeseburger', price: '$5.99' },
    { imgSrc: cheeseburger, description: 'Yummy Fries', price: '$2.99' },
    { imgSrc: cheeseburger, description: 'Tasty Milkshake', price: '$3.99' },
    { imgSrc: cheeseburger, description: 'Scrumptious Salad', price: '$4.99' },
    { imgSrc: cheeseburger, description: 'Delightful Ice Cream', price: '$3.99' },
    // Add more food items as needed
];

function RestaurantPage() {
    const [items, setItems] = useState(foodItems);

    return (
        <div className="simple-page">
            <h1>That One Restaurant</h1>

            <div className="blocks-container scrollable">
                {blocks1.map((block, index) => (
                    <a href={block.link} key={index} className="block1">
                        <div>
                            <img src={block.imgSrc} alt={`Block ${index + 1}`} />
                        </div>
                    </a>
                ))}
            </div>

            <div className="food-items-container">
                <h2>Food Items</h2>
                <ul className="food-items">
                    {items.map((item, index) => (
                        <li key={index} className="food-item">
                            <img src={item.imgSrc} alt={`Food Item ${index + 1}`} />
                            <div className="item-details">
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                            </div>
                            <button>Add to Cart</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantPage;