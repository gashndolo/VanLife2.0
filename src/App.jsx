import { useState } from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
