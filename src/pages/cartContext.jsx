import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const addToCart = (cartItems, setCartItems, item) => {
    setCartItems([...cartItems, item]);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCartHandler = (item) => {
        addToCart(cartItems, setCartItems, item);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart: addToCartHandler }}>
            {children}
        </CartContext.Provider>
    );
};

export { addToCart };