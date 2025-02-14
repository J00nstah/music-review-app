import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing.tsx'
import Home from './pages/Home.tsx'
import Song from './pages/Song.tsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/song' element={<Song/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
