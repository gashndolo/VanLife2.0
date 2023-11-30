import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function AboutPage() {
  return <h1>About Page</h1>
}

function Home() {
  return <h1>Home Page</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
