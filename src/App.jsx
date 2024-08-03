import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Discover from './pages/discover'
import Resteraunts from  './pages/resteraunts'
import Cart from './pages/cart'
import Recipt from './pages/recipt'
import { CartProvider } from './pages/cartContext';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/restaurants" element={<Resteraunts />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/recipt" element={<Recipt />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
    </>
  )
}
export default App
