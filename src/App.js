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
import Furniture from './components/Furniture/Furniture';
import SellFurniture from './components/Furniture/SellFurniture'
import LivingRoom from './components/Furniture/LivingRoom/LivingRoom';
import Partner from './components/Partner/Partner';
import ViewFurniture from './components/Furniture/ViewFurniture'
import BuyFurniture from './components/Furniture/BuyFurniture'
import Change from './components/Furniture/Change'
import ViewShop from './components/Furniture/ViewShop';
import Seller2 from './components/Partner/Seller2';
import Manager from './components/Partner/Manager';
import Landlord from './components/Partner/Landlord';
import Detail from './components/Partner/Detail';
import Homefeature from './components/Partner/Homefeature';
import Improvement from './components/Partner/Improvement';
import Listing from './components/Partner/Listing';
import Description from './components/Partner/Description';
import Photos from './components/Partner/Photos';
import Video from './components/Partner/Video';
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
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/sellfurniture" element={<SellFurniture />} />
        <Route path="/living" element={<LivingRoom />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/viewfurniture" element={<ViewFurniture />} />
        <Route path="/buyfurniture" element={<BuyFurniture />} />
        <Route path="/change" element={<Change />} />
        <Route path="/viewshop" element={<ViewShop />} />
        <Route path="/sell" element={<Seller2 />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/land" element={<Landlord />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/homefeature" element={<Homefeature />} />
        <Route path="/improvement" element={<Improvement />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/description" element={<Description />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/video" element={<Video />} />
    </Routes>
    </>
  )
}

export default App