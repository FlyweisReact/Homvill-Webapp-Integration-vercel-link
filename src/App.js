// Updated App.js with new routes
import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from './store/slices/authSlice';
import { FaSpinner } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('./components/Home/Home'));
const HomeForSale = lazy(() => import('./components/Buy/HomeForSale'));
const Forclosure = lazy(() => import('./components/Buy/Forclosures'));
const ForOwner = lazy(() => import('./components/Buy/ForOwner'));
const Open = lazy(() => import('./components/Buy/Open'));
const Newly = lazy(() => import('./components/Buy/Newly'));
const Properties = lazy(() => import('./components/Buy/Properties'));
const Recently = lazy(() => import('./components/Buy/Recently'));
const Listed = lazy(() => import('./components/Buy/Listed'));
const Purchase = lazy(() => import('./components/Buy/Purchase'));
const Tour = lazy(() => import('./components/Buy/Tour'));
const Foreclosureinform = lazy(() => import('./components/Buy/ForeclosureInform'));
const Findforeclosure = lazy(() => import('./components/Buy/Findforeclosure'));
const Financial = lazy(() => import('./components/Buy/Financial'));
const Eligibility = lazy(() => import('./components/Buy/Eligibility'));
const Review = lazy(() => import('./components/Sell/Review'));
const Market = lazy(() => import('./components/Sell/Market'));
const Homeguide = lazy(() => import('./components/Sell/Homeguide'));
const Sellersguide = lazy(() => import('./components/Sell/Sellersguide'));
const Build = lazy(() => import('./components/Contractors/Build'));
const Rent = lazy(() => import('./components/Rent/Rent'));
const HomeAvailable = lazy(() => import('./components/Rent/HomeAva'));
const Renovation = lazy(() => import('./components/Contractors/Renovation'));
const About = lazy(() => import('./components/About/About'));
const Privacy = lazy(() => import('./components/Privacy'));
const Subscriptions = lazy(() => import('./components/Subscriptions'));
const Signin = lazy(() => import('./components/Signin/Signin'));
const Password = lazy(() => import('./components/Signin/Password'));
const Signup = lazy(() => import('./components/Signup/Signup'));
const Forgot = lazy(() => import('./components/Signin/Forgot'));
const Terms = lazy(() => import('./components/Terms'));
const Furniture = lazy(() => import('./components/Furniture/Furniture'));
const SellFurniture = lazy(() => import('./components/Furniture/SellFurniture'));
const LivingRoom = lazy(() => import('./components/Furniture/LivingRoom/LivingRoom'));
const Partner = lazy(() => import('./components/Partner/Partner'));
const ViewFurniture = lazy(() => import('./components/Furniture/ViewFurniture'));
const BuyFurniture = lazy(() => import('./components/Furniture/BuyFurniture'));
const Change = lazy(() => import('./components/Furniture/Change'));
const ViewShop = lazy(() => import('./components/Furniture/ViewShop'));
const Seller2 = lazy(() => import('./components/Partner/Seller2'));
const Manager = lazy(() => import('./components/Partner/Manager'));
const Landlord = lazy(() => import('./components/Partner/Landlord'));
const Detail = lazy(() => import('./components/Partner/Detail'));
const Homefeature = lazy(() => import('./components/Partner/Homefeature'));
const Improvement = lazy(() => import('./components/Partner/Improvement'));
const Listing = lazy(() => import('./components/Partner/Listing'));
const Description = lazy(() => import('./components/Partner/Description'));
const Photos = lazy(() => import('./components/Partner/Photos'));
const Video = lazy(() => import('./components/Partner/Video'));
const Buyer = lazy(() => import('./components/Partner/Buyer'));
const Open2 = lazy(() => import('./components/Partner/Open'));
const ReviewDetail = lazy(() => import('./components/Partner/ReviewDetail'));
const Save = lazy(() => import('./components/Partner/Save'));
const Contract = lazy(() => import('./components/Contractors/Contract'));
const AboutCont = lazy(() => import('./components/Contractors/AboutCont'));
const Faq = lazy(() => import('./components/Faq'));
const Career = lazy(() => import('./components/Career'));
const Favoites = lazy(() => import('./components/Favoites'));
const SellDash = lazy(() => import('./components/SellDash'));
const Postforsale = lazy(() => import('./components/Postforsale'));
const LenderLoan = lazy(() => import('./components/Partner/LenderLoan'));
const Remodeling = lazy(() => import('./components/Partner/Remodeling'));
const Brand = lazy(() => import('./components/Partner/Brand'));
const Savedsearch = lazy(() => import('./components/Savedsearch'));
const Rentals = lazy(() => import('./components/Rentals'));
const UserDashboard = lazy(() => import('./components/UserDashboard'));
const RecentActivity = lazy(() => import('./components/RecentActivity'));
const ManageSettings = lazy(() => import('./components/ManageSettings'));
const ProfileSettings = lazy(() => import('./components/ProfileSettings'));
const Notification = lazy(() => import('./components/Notification'));
const Document = lazy(() => import('./components/Documents'));
const Messages = lazy(() => import('./components/Messages'));
const Applications = lazy(() => import('./components/Applications'));
const Property2 = lazy(() => import('./components/Property2'));
const Boost = lazy(() => import('./components/Boost'));
const PropertyDetail = lazy(() => import('./components/Buy/PropertyDetail'));
const ChatPage = lazy(() => import('./components/Messages'));
const ListForRent = lazy(() => import('./components/ListforRent/RentReview')); // Updated to RentReview
const RentDetail = lazy(() => import('./components/ListforRent/RentDetail'));
const RentHomefeature = lazy(() => import('./components/ListforRent/RentHomefeature'));
const RentImprovement = lazy(() => import('./components/ListforRent/RentImprovement'));
const RentListing = lazy(() => import('./components/ListforRent/RentListing'));
const RentDescription = lazy(() => import('./components/ListforRent/RentDescription'));
const RentPhotos = lazy(() => import('./components/ListforRent/RentPhotos'));
const RentVideo = lazy(() => import('./components/ListforRent/RentVideo'));
const RentBuyer = lazy(() => import('./components/ListforRent/RentBuyer'));
const RentOpen2 = lazy(() => import('./components/ListforRent/RentOpen2'));
const RentReviewDetail = lazy(() => import('./components/ListforRent/RentReviewDetail'));
const RentSave = lazy(() => import('./components/ListforRent/RentSave'));

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

const App = () => {
  const { pathname } = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(isAuthenticated, 'auth in app');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <FaSpinner className="animate-spin text-[#870A28] w-16 h-16" />
        </div>
      }
    >
      <Toaster position="top-right" reverseOrder={false} />
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
        <Route
          path="/property/:id"
          element={<ProtectedRoute><PropertyDetail /></ProtectedRoute>}
        />
        <Route
          path="/chat/:userId"
          element={<ProtectedRoute><ChatPage /></ProtectedRoute>}
        />
        <Route
          path="/furniture"
          element={<ProtectedRoute><Furniture /></ProtectedRoute>}
        />
        <Route
          path="/sellfurniture"
          element={<ProtectedRoute><SellFurniture /></ProtectedRoute>}
        />
        <Route
          path="/living"
          element={<ProtectedRoute><LivingRoom /></ProtectedRoute>}
        />
        <Route
          path="/partner"
          element={<ProtectedRoute><Partner /></ProtectedRoute>}
        />
        <Route
          path="/viewfurniture"
          element={<ProtectedRoute><ViewFurniture /></ProtectedRoute>}
        />
        <Route
          path="/buyfurniture"
          element={<ProtectedRoute><BuyFurniture /></ProtectedRoute>}
        />
        <Route
          path="/change"
          element={<ProtectedRoute><Change /></ProtectedRoute>}
        />
        <Route
          path="/viewshop"
          element={<ProtectedRoute><ViewShop /></ProtectedRoute>}
        />
        <Route
          path="/sell"
          element={<ProtectedRoute><Seller2 /></ProtectedRoute>}
        />
        <Route
          path="/manager"
          element={<ProtectedRoute><Manager /></ProtectedRoute>}
        />
        <Route
          path="/land"
          element={<ProtectedRoute><Landlord /></ProtectedRoute>}
        />
        <Route
          path="/details"
          element={<ProtectedRoute><Detail /></ProtectedRoute>}
        />
        <Route
          path="/homefeature"
          element={<ProtectedRoute><Homefeature /></ProtectedRoute>}
        />
        <Route
          path="/improvement"
          element={<ProtectedRoute><Improvement /></ProtectedRoute>}
        />
        <Route
          path="/listing"
          element={<ProtectedRoute><Listing /></ProtectedRoute>}
        />
        <Route
          path="/description"
          element={<ProtectedRoute><Description /></ProtectedRoute>}
        />
        <Route
          path="/photos"
          element={<ProtectedRoute><Photos /></ProtectedRoute>}
        />
        <Route
          path="/video"
          element={<ProtectedRoute><Video /></ProtectedRoute>}
        />
        <Route
          path="/buyer"
          element={<ProtectedRoute><Buyer /></ProtectedRoute>}
        />
        <Route
          path="/open2"
          element={<ProtectedRoute><Open2 /></ProtectedRoute>}
        />
        <Route
          path="/reviewdetail"
          element={<ProtectedRoute><ReviewDetail /></ProtectedRoute>}
        />
        <Route
          path="/save"
          element={<ProtectedRoute><Save /></ProtectedRoute>}
        />
        <Route
          path="/contract"
          element={<ProtectedRoute><Contract /></ProtectedRoute>}
        />
        <Route
          path="/aboutbuild/:id"
          element={<ProtectedRoute><AboutCont /></ProtectedRoute>}
        />
        <Route
          path="/faq"
          element={<ProtectedRoute><Faq /></ProtectedRoute>}
        />
        <Route
          path="/career"
          element={<ProtectedRoute><Career /></ProtectedRoute>}
        />
        <Route
          path="/fav"
          element={<ProtectedRoute><Favoites /></ProtectedRoute>}
        />
        <Route
          path="/selldash"
          element={<ProtectedRoute><SellDash /></ProtectedRoute>}
        />
        <Route
          path="/postforsale"
          element={<ProtectedRoute><Postforsale /></ProtectedRoute>}
        />
        <Route
          path="/listrent"
          element={<ProtectedRoute><ListForRent /></ProtectedRoute>}
        />
        <Route
          path="/rentdetails"
          element={<ProtectedRoute><RentDetail /></ProtectedRoute>}
        />
        <Route
          path="/renthomfeature"
          element={<ProtectedRoute><RentHomefeature /></ProtectedRoute>}
        />
        <Route
          path="/rentimprovement"
          element={<ProtectedRoute><RentImprovement /></ProtectedRoute>}
        />
        <Route
          path="/rentlisting"
          element={<ProtectedRoute><RentListing /></ProtectedRoute>}
        />
        <Route
          path="/rentdescription"
          element={<ProtectedRoute><RentDescription /></ProtectedRoute>}
        />
        <Route
          path="/rentphotos"
          element={<ProtectedRoute><RentPhotos /></ProtectedRoute>}
        />
        <Route
          path="/rentvideo"
          element={<ProtectedRoute><RentVideo /></ProtectedRoute>}
        />
        <Route
          path="/rentbuyer"
          element={<ProtectedRoute><RentBuyer /></ProtectedRoute>}
        />
        <Route
          path="/rentopen"
          element={<ProtectedRoute><RentOpen2 /></ProtectedRoute>}
        />
        <Route
          path="/rentreviewdetail"
          element={<ProtectedRoute><RentReviewDetail /></ProtectedRoute>}
        />
        <Route
          path="/rentsave"
          element={<ProtectedRoute><RentSave /></ProtectedRoute>}
        />
        <Route
          path="/lenderloan"
          element={<ProtectedRoute><LenderLoan /></ProtectedRoute>}
        />
        <Route
          path="/remodeling"
          element={<ProtectedRoute><Remodeling /></ProtectedRoute>}
        />
        <Route
          path="/brand"
          element={<ProtectedRoute><Brand /></ProtectedRoute>}
        />
        <Route
          path="/savesearches"
          element={<ProtectedRoute><Savedsearch /></ProtectedRoute>}
        />
        <Route
          path="/rentalsreached"
          element={<ProtectedRoute><Rentals /></ProtectedRoute>}
        />
        <Route
          path="/userdashboard"
          element={<ProtectedRoute><UserDashboard /></ProtectedRoute>}
        />
        <Route
          path="/recentactivity"
          element={<ProtectedRoute><RecentActivity /></ProtectedRoute>}
        />
        <Route
          path="/managesettings"
          element={<ProtectedRoute><ManageSettings /></ProtectedRoute>}
        />
        <Route
          path="/profilesettings"
          element={<ProtectedRoute><ProfileSettings /></ProtectedRoute>}
        />
        <Route
          path="/notification"
          element={<ProtectedRoute><Notification /></ProtectedRoute>}
        />
        <Route
          path="/document"
          element={<ProtectedRoute><Document /></ProtectedRoute>}
        />
        <Route
          path="/messages"
          element={<ProtectedRoute><Messages /></ProtectedRoute>}
        />
        <Route
          path="/applications"
          element={<ProtectedRoute><Applications /></ProtectedRoute>}
        />
        <Route
          path="/property1"
          element={<ProtectedRoute><Property2 /></ProtectedRoute>}
        />
        <Route
          path="/boost"
          element={<ProtectedRoute><Boost /></ProtectedRoute>}
        />
      </Routes>
    </Suspense>
  );
};

export default App;