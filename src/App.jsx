import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import All from './pages/All'
import Saress from './pages/Saress'
import ChunriPila from './pages/ChunriPila'
import Suits from './pages/Suits'
import Dupatta from './pages/Dupatta'
import Kurtis from './pages/Kurtis'
import IndoWestron from './pages/IndoWestron'
import Reviews from './pages/Reviews'
import TrackOrder from './pages/TrackOrder'
import Lehnaga from './pages/Lehnaga'
import Detailspage from './pages/Detailspage'
import AddToCart from './pages/AddToCart'
import Login from './pages/Login'
import Successfully from './pages/Successfully'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/saress" element={<Saress />} />
        <Route path="/lehnga" element={<Lehnaga />} />
        <Route path="/chunripila" element={<ChunriPila />} />
        <Route path="/suits" element={<Suits />} />
        <Route path="/dupatta" element={<Dupatta />} />
        <Route path="/kurtis" element={<Kurtis />} />
        <Route path="/indowestron" element={<IndoWestron />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="/detailspage" element={<Detailspage />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/successfully" element={<Successfully />} />
      </Routes>
    </Router>
  )
}
