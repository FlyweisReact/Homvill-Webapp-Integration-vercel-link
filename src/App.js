import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home'
import HomeForSale from './components/Buy/HomeForSale';
import Forclosure from './components/Buy/Forclosures'
import ForOwner from './components/Buy/ForOwner'
import Open from './components/Buy/Open'
import Newly from './components/Buy/Newly'
import Properties from './components/Buy/Properties'
import Recently from './components/Buy/Recently'
import Listed from './components/Buy/Listed'
const App = () => {
  return (
    <>
    {/* <Home/> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeforsale" element={<HomeForSale />} />
        <Route path="/forclosure" element={<Forclosure />} />
        <Route path="/forowner" element={<ForOwner />} />
        <Route path="/open" element={<Open />} />
        <Route path="/newly" element={<Newly />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/recently" element={<Recently />} />
        <Route path="/listed" element={<Listed />} />
    </Routes>
    </>
  )
}

export default App