import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/cart.css';
import '../styles/resteraunts.css'; // Corrected typo
import cheeseburger from '../resources/images/cheesburger.jpg'; // Corrected typo
import { CartContext } from './cartContext';

const blocks1 = [
    { imgSrc: cheeseburger, link: 'https://google.com' },
    // Add more blocks as needed
];

const foodItems = [
    { imgSrc: cheeseburger, description: 'Delicious Cheeseburger', price: '599' },
    { imgSrc: cheeseburger, description: 'Yummy Fries', price: '299' },
    { imgSrc: cheeseburger, description: 'Tasty Milkshake', price: '399' },
    { imgSrc: cheeseburger, description: 'Scrumptious Salad', price: '499' },
    { imgSrc: cheeseburger, description: 'Delightful Ice Cream', price: '399' },
    // Add more food items as needed
];

function RestaurantPage() {
    const [items, setItems] = useState(foodItems);
    const { addToCart } = useContext(CartContext);
    const [note, setNote] = useState('');
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        const newItem = { ...item, id: Date.now() };
        addToCart(newItem);
        setNote('Added to cart');
        console.log(newItem);
    };

    const handleCheckout = () => {
        navigate('/cart');
    };

    useEffect(() => {
        if (note) {
            const timer = setTimeout(() => {
                document.querySelector('.note-space p').classList.add('fade-out');
                setTimeout(() => setNote(''), 500); // Wait for the fade-out transition
            }, 200); // Start fading out after 0.2 seconds
            return () => clearTimeout(timer);
        }
    }, [note]);

    return (
        <div className="simple-page">
            <h1>That One Restaurant</h1>

            <div className="blocks-container1">
                {blocks1.map((block, index) => (
                    <a href={block.link} key={index} className="block1">
                        <div>
                            <img src={block.imgSrc} alt={`Block ${index + 1}`} />
                        </div>
                    </a>
                ))}
            </div>

            <div className="note-space">
                {note && <p>{note}</p>}
            </div>

            <div className="food-items-container1">
                <h2>Food Items</h2>
                <ul className="food-items1">
                    {items.map((item, index) => (
                        <li key={index} className="food-item1">
                            <img src={item.imgSrc} alt={`Food Item ${index + 1}`} />
                            <div className="item-details1">
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                            </div>
                            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                        </li>
                    ))}
                </ul>
            </div>

            <button onClick={handleCheckout} className="checkout-button">Checkout</button>
        </div>
    );
}

export default RestaurantPage;