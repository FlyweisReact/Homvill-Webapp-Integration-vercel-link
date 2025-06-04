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
import Sellersguide from  './components/Sell/Sellersguide';
import Build from  './components/Contractors/Build';
import Rent from './components/Rent/Rent'
import HomeAvailable from './components/Rent/HomeAva'
import Renovation from './components/Contractors/Renovation'
import About from './components/About/About';
import Privacy from './components/Privacy'
import Subscriptions from './components/Subscriptions'
import Signin from './components/Signin/Signin';
import Password from './components/Signin/Password';
import Signup from './components/Signup/Signup';
import Forgot from './components/Signin/Forgot'
import Terms from './components/Terms'
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
        <Route path="/sellersguide" element={<Sellersguide />} />
        <Route path="/build" element={<Build />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/homeavailable" element={<HomeAvailable />} />
        <Route path="/renovation" element={<Renovation />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/password" element={<Password />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/terms" element={<Terms />} />
    </Routes>
    </>
  )
}

export default App