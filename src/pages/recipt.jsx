import React, { useState } from 'react';
import '../styles/recipt.css';
import tick from '../resources/images/tick.png';

function ReciptPage() {


    return (
        <div className="recipt-page">
            <h1>Thank you for shopping with Space Bites</h1>
            <img src={tick} alt="tick" className='tick-image' />
            <h2 className='subtitle-recipt'>Your order has been placed successfully</h2>
            <button className='home-button-recipt' onClick={() => window.location.href = '/'}>Home</button>
        </div>
    );
}

export default ReciptPage;