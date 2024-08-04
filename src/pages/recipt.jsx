import React, { useState } from 'react';
import '../styles/recipt.css';
import tick from '../assets/final purple tick.png';


function ReciptPage() {


    return (
        <div className="recipt-page">
            <h1>Thank you for shopping with SpaceBites</h1>
            <img src={tick} alt="tick" className='tick-image' />
            <h2 className='subtitle-recipt'>Your order has been placed successfully!</h2>
            <h3>Please prepare your BrainWave™ payment to show upon collection.</h3>
            <button className='home-button-recipt' onClick={() => window.location.href = '/'}>Go Back to Home</button>
            <div className="empty-div"> </div>
        </div>
    );
}

export default ReciptPage;