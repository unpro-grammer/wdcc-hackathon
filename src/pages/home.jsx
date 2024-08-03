// src/Homepage.jsx
import React from 'react'
import '../styles/home.css'

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to Space Eats</h1>
        <p>Your favorite meals delivered from the stars!</p>
      </header>
      <main className="homepage-main">
        <section className="introduction">
          <h2>About Us</h2>
          <p>Space Eats brings the best cosmic cuisines right to your door. From moon pizzas to Martian burgers, we have it all!</p>
        </section>
        <section className="features">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Fast and reliable space delivery</li>
            <li>Wide variety of intergalactic dishes</li>
            <li>Fresh ingredients from the outer space farms</li>
          </ul>
        </section>
      </main>
      <footer className="homepage-footer">
        <p>&copy; 2024 Space Eats. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Homepage
