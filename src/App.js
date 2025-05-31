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
import Purchase from './components/Buy/Purchase';
import Tour from './components/Buy/Tour';
import Foreclosureinform from './components/Buy/ForeclosureInform'
import Findforeclosure from './components/Buy/Findforeclosure'
import Financial from './components/Buy/Financial';
import Eligibility from './components/Buy/Eligibility';
import Review from './components/Sell/Review';
import Market from  './components/Sell/Market';
import Homeguide from  './components/Sell/Homeguide';
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
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/foreclosureinform" element={<Foreclosureinform />} />
        <Route path="/findforeclosure" element={<Findforeclosure />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/review" element={<Review />} />
        <Route path="/market" element={<Market />} />
        <Route path="/homeguide" element={<Homeguide />} />
    </Routes>
    </>
  )
}

export default App