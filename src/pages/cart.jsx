import React, { useContext } from 'react';
import '../styles/cart.css';
import cheeseburger from '../resources/images/cheesburger.jpg';
import { CartContext } from './cartContext';
import { useNavigate } from 'react-router-dom';

const foodItems = [
  { imgSrc: cheeseburger, description: 'Delicious Cheeseburger', price: '$5.99' },
  { imgSrc: cheeseburger, description: 'Yummy Fries', price: '$2.99' },
  { imgSrc: cheeseburger, description: 'Tasty Milkshake', price: '$3.99' },
  { imgSrc: cheeseburger, description: 'Scrumptious Salad', price: '$4.99' },
  { imgSrc: cheeseburger, description: 'Delightful Ice Cream', price: '$3.99' },
];

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate('/receipt');
  };

  const calculateTotal = () => {
    const foodTotal = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
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
                <span className="item-price">{item.price}η</span>
                <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>X</button>
              </li>
            ))}
          </ul>
          <div className='price-info'>
            <div className='price-actual-info'>
              <h3>Order breakdown:</h3>
              <ul>
                <li>Food total: {totals.foodTotal}η</li>
                <li>Service charge: 200.00η</li>
                <li>Delivery charge: 500.00η</li>
                <li>Tax (15%): {totals.tax}η</li>
                <div className='totals-container'>
                  <li>Total: {totals.total}η</li>
                </div>
              </ul></div>
            <div className='email-input'>
              <label htmlFor="email">Enter your email:</label>
              <div><input type="email" id="email" name="email" placeholder="you@example.com" /></div>
            </div>
            <div className='email-input'>
              <label htmlFor="email">Enter your location address:</label>
              <div><input type="email" id="email" name="email" placeholder="e.g. Klorb Land" /></div>
            </div>
            <div className='confirm-button'>
              <button type="button" className='confirmation-button' onClick={handleConfirmClick}>Confirm</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CartPage;