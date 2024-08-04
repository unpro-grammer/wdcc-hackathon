import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Discover from './pages/discover'
import Resteraunts from  './pages/resteraunts'
import Cart from './pages/cart'
import Recipt from './pages/recipt'
import Earth from './pages/earth'
import { CartProvider } from './pages/cartContext';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='BackgroundImage'>
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
                <Route path="/receipt" element={<Recipt />} />
                <Route path="/earth" element={<Earth />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </div>
      </div>
    </>
  )
}
export default App
