import React, { useState } from 'react';
import '../styles/recipt.css';
import tick from '../assets/final purple tick.png';
import { useNavigate } from 'react-router-dom';

function ReciptPage() {
  const navigate = useNavigate();

  return (
    <div className="recipt-page">
      <h1>Thank you for shopping with SpaceBites</h1>
      <img src={tick} alt="tick" className='tick-image' />
      <h2 className='subtitle-recipt'>Your order has been placed successfully!</h2>
      <h3>Expected time of arrival: 0.00057 light years</h3>
      <h3>Please prepare your BrainWave™ payment to show upon collection.</h3>
      <button className='home-button-recipt' onClick={() => navigate('/')}>Go Back to Home</button>
      <div className="empty-div"> </div>
    </div>
  );
}

export default ReciptPage;