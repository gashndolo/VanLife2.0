import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'

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
