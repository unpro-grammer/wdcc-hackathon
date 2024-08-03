import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Discover from './pages/discover'
import Resteraunts from  './pages/resteraunts'
import Cart from './pages/cart'
import Recipt from './pages/recipt'

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
            <Route path="/cart" element={<Cart />} />
            <Route path="/recipt" element={<Recipt />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App
