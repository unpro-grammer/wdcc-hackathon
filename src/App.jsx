import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Discover from './pages/discover'
// leave commented for now bcoz these break things
import Resteraunts from  './pages/resteraunts'
// import Cart from './pages/cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/restaurants" element={<Resteraunts />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App
