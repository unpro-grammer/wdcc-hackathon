import React, { useContext } from 'react';
import '../styles/cart.css';
import cheeseburger from '../resources/images/cheesburger.jpg';
import { CartContext } from './cartContext';

const foodItems = [
    { imgSrc: cheeseburger, description: 'Delicious Cheeseburger', price: '$5.99' },
    { imgSrc: cheeseburger, description: 'Yummy Fries', price: '$2.99' },
    { imgSrc: cheeseburger, description: 'Tasty Milkshake', price: '$3.99' },
    { imgSrc: cheeseburger, description: 'Scrumptious Salad', price: '$4.99' },
    { imgSrc: cheeseburger, description: 'Delightful Ice Cream', price: '$3.99' },
];

function CartPage() {
    const { cartItems, setCartItems } = useContext(CartContext);

    const handleRemoveItem = (item) => {
        setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    };

    const calculateTotal = () => {
        const foodTotal = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);
        const serviceCharge = 200;
        const deliveryCharge = 500;
        const tax = foodTotal * 0.15;
        const total = foodTotal + serviceCharge + deliveryCharge + tax;
        return {
            foodTotal: foodTotal.toFixed(2),
            serviceCharge: serviceCharge.toFixed(2),
            deliveryCharge: deliveryCharge.toFixed(2),
            tax: tax.toFixed(2),
            total: total.toFixed(2)
        };
    };

    const totals = calculateTotal();

    return (
        <div className="simple-page">
            <h1>Checkout</h1>

            <div className="food-items-container">
                <h2>Food Items</h2>
                <div className='vertical-container'>
                    <ul className="food-items">
                        {cartItems.map((item, index) => (

                            <li key={index} className="food-item">
                                <img src={item.imgSrc} alt={item.name} className='item-image' />
                                <span className="item-name">{item.description}</span>
                                <span className="item-price">{item.price}</span>
                                <button className="remove-button" onClick={() => handleRemoveItem(item)}>X</button>
                            </li>
                        ))}
                    </ul>
                    <div className='price-info'>
                        <h3>Order breakdown:</h3>
                        <ul>
                            <li>Food total: {totals.foodTotal}η</li>
                            <li>Service charge 200η</li>
                            <li>Delivery charge 500η</li>
                            <li>Tax (15%): 555η</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;