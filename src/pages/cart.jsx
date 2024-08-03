import React, { useState } from 'react';
import '../styles/cart.css';
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

function CartPage() {
    const [items, setItems] = useState(foodItems);

    const handleRemoveItem = (item) => {
        setItems(items.filter((i) => i !== item));
    };

    return (
        <div className="simple-page">
            <h1>Checkout</h1>

            <div className="food-items-container">
                <h2>Food Items</h2>
                <div className='vertical-container'>
                    <ul className="food-items">
                        {items.map((item, index) => (
                            <li key={index} className="food-item">
                                <img src={item.imgSrc} alt={`Food Item ${index + 1}`} />
                                <div className="item-details">
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
                                </div>
                                <button onClick={() => handleRemoveItem(item)}>X</button>
                            </li>
                        ))}
                    </ul>
                    <div className='price-info'>
                        <h3>Order breakdown:</h3>
                        <ul>
                            <li>Food total: 3000η</li>
                            <li>Service charge 200η</li>
                            <li>Delivery charge 500η</li>
                            <li>Tax (15%): 555η</li>
                            <li>Total: 4255η</li>
                        </ul>
                        <button id='CheckoutButton'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;