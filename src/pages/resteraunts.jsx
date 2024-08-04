import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/cart.css';
import '../styles/resteraunts.css'; // Corrected typo
import banner from '../resources/images/banner_that_one.png'; // Corrected typo
import cheeseburger from '../resources/images/cheesburger.jpg'; // Corrected typo
import { CartContext } from './cartContext';
import milkyway from '../resources/images/e.jpg'; // Added missing image
import mightymars from '../resources/images/i.jpg'; // Added missing image
import chickennugs from '../resources/images/a.jpg'; // Added missing image
import moonburger from '../resources/images/f.jpg'; // Added missing image
import starfries from '../resources/images/g.jpg'; // Added missing image
import supernovasundae from '../resources/images/b.jpg'; // Added missing image
import alienpancake from '../resources/images/c.jpg'; // Added missing image
import sandwich from '../resources/images/d.jpg'; // Added missing image

const blocks1 = [
    { imgSrc: banner },
    // Add more blocks as needed
];

const foodItems = [
    { imgSrc: milkyway, description: 'Milky Way', price: '599' },
    { imgSrc: mightymars, description: 'Mighty Mars', price: '299' },
    { imgSrc: chickennugs, description: 'Chicken McLickin\'', price: '399' },
    { imgSrc: moonburger, description: 'Moon Burger', price: '499' },
    { imgSrc: starfries, description: 'Starfries', price: '399' },
    { imgSrc: supernovasundae, description: 'Supernova Sundae', price: '299' },
    { imgSrc: alienpancake, description: 'The Aliens', price: '399' },
    { imgSrc: sandwich, description: 'Starwich', price: '499' },
    // Add more food items as needed
];

function RestaurantPage() {
    const [items, setItems] = useState(foodItems);
    const { addToCart } = useContext(CartContext);
    const [note, setNote] = useState('');
    const [fadeOut, setFadeOut] = useState(false);
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        const newItem = { ...item, id: Date.now() };
        addToCart(newItem);
        setNote('Added to cart');
        console.log(newItem);
        setFadeOut(false);
    };

    const handleCheckout = () => {
        navigate('/cart');
    };

    useEffect(() => {
        if (note) {
            // Show the note for 2 seconds before starting the fade-out
            setFadeOut(false); // Reset fade-out before showing the note
            const displayTimer = setTimeout(() => {
                setFadeOut(true); // Start fading out after 2 seconds
            }, 2000); // Duration to display the note

            // Remove the note after the fade-out transition (1 second)
            const fadeOutTimer = setTimeout(() => {
                setNote('');
                setFadeOut(false);
            }, 3000); // Total time: 2 seconds display + 1 second fade-out

            return () => {
                clearTimeout(displayTimer);
                clearTimeout(fadeOutTimer);
            };
        }
    }, [note]);



    return (
        <div className="simple-page5">
            <h1>McGalaxy</h1>

            <div className="blocks-container5">
                {blocks1.map((block, index) => (
                    <a href={block.link} key={index} className="block5">
                        <div>
                            <img src={block.imgSrc} alt={`Block ${index + 1}`} />
                        </div>
                    </a>
                ))}
            </div>

            <div className={`fixed-note ${note ? 'show' : ''} ${fadeOut ? 'fade-out' : ''}`}>
                {note}
            </div>

            <div className="food-items-container1">
                <h2 className='fooditemtitle'>Food Items</h2>
                <ul className="food-items1">
                    {items.map((item, index) => (
                        <li key={index} className="food-item1">
                            <img src={item.imgSrc} alt={`Food Item ${index + 1}`} />
                            <div className="item-details1">
                                <p className='item-name999'>{item.description}</p>
                                <p className='item-price'>{item.price}η</p>
                            </div>
                            <button className='add-button1' onClick={() => handleAddToCart(item)}>Add to Cart</button>
                        </li>
                    ))}
                </ul>
            </div>

            <button onClick={handleCheckout} className="checkout-button">Checkout</button>
        </div>
    );
}

export default RestaurantPage;