
import React,{useState} from 'react';
import Navbar from '../Navbar';
import about from '../assets/about.svg';
import map from '../assets/map3.svg'
import AboutSlider from './AboutSlider'
import Testimonial from './Testimonial'
import Footer from '../Footer';
import { FaMapMarkerAlt, FaClock, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import { useNavigate, Link } from 'react-router-dom';
import garden from '../assets/garden.jpg'
const About = () => {
      const [showBuyDropdown, setShowBuyDropdown] = useState(false);
      const [showSellDropdown, setShowSellDropdown] = useState(false);
      const [showRentDropdown, setShowRentDropdown] = useState(false);
      const [showContractDropdown, setShowContractDropdown] = useState(false);
      const [isOpen, setIsOpen] = useState(false);
      const [selectedLang, setSelectedLang] = useState("English (US)");
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const navigate = useNavigate();
    
      const languages = ["English (US)", "English (UK)", "French", "Spanish"];
    
      const toggleDropdown = () => {
        setShowBuyDropdown(false);
        setShowSellDropdown(false);
        setShowRentDropdown(false);
        setShowContractDropdown(false);
        setIsOpen(!isOpen);
      };
    
      const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    
      const handleSelect = (lang) => {
        setSelectedLang(lang);
        setIsOpen(false);
      };
    
      const toggleBuyDropdown = () => {
        setShowBuyDropdown(!showBuyDropdown);
        setShowSellDropdown(false);
        setShowRentDropdown(false);
        setShowContractDropdown(false);
        setIsOpen(false);
      };
    
      const toggleSellDropdown = () => {
        setShowSellDropdown(!showSellDropdown);
        setShowBuyDropdown(false);
        setShowRentDropdown(false);
        setShowContractDropdown(false);
        setIsOpen(false);
      };
    
      const toggleRentDropdown = () => {
        setShowRentDropdown(!showRentDropdown);
        setShowBuyDropdown(false);
        setShowSellDropdown(false);
        setShowContractDropdown(false);
        setIsOpen(false);
      };
    
      const toggleContractDropdown = () => {
        setShowContractDropdown(!showContractDropdown);
        setShowBuyDropdown(false);
        setShowSellDropdown(false);
        setShowRentDropdown(false);
        setIsOpen(false);
      };
    return (
        <>
             <div style={{ zIndex: '20000' }} className="w-full font-sans">
                  {/* Custom CSS for 850px breakpoint */}
                  <style>
                    {`
                      @media (min-width: 850px) {
                        .hide-above-850 {
                          display: none;
                        }
                        .show-above-850 {
                          display: flex;
                        }
                      }
                      @media (max-width: 849.98px) {
                        .show-above-850 {
                          display: none;
                        }
                        .hide-above-850 {
                          display: block;
                        }
                      }
                    `}
                  </style>
            
                  {/* Top Bar */}
                  <div style={{ fontFamily: 'Poppins' }} className="bg-[#8A1538] text-white text-sm flex justify-between items-center px:12 lg:px-28 py-1 md:flex-row flex-col space-y-2 md:space-y-0">
                    <div className="flex items-center space-x-1">
                      <FaMapMarkerAlt className="text-xs" />
                      <span>47 W 13th St, New York, NY 10011, USA</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaClock className="text-xs" />
                      <span>9am - 6pm EST, Monday - Friday</span>
                    </div>
                  </div>
            
                  {/* Main Nav */}
                  <div className="relative bg-white shadow">
                    <div className="flex justify-between lg:justify-evenly items-center px-8 md:px-20 py-4">
                      {/* Logo */}
                      <div className="text-2xl lg:mr-4 font-bold">
                        <img src={logo} alt="HomeVill Logo" />
                      </div>
            
                      {/* Hamburger Menu for Mobile */}
                      <div className="hide-above-850">
                        <button onClick={toggleMobileMenu} className="text-2xl">
                          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                      </div>
            
                      {/* Links - Desktop */}
                      <div className="hidden show-above-850 space-x-6 text-[18px] font-medium relative">
                        <a style={{ fontFamily: 'Poppins' }} href="#">Home</a>
            
                        {/* Buy with dropdown */}
                        <div
                          className="relative"
                          onMouseEnter={() => setShowBuyDropdown(true)}
                          onMouseLeave={() => setShowBuyDropdown(false)}
                        >
                          <a style={{ fontFamily: 'Poppins' }} href="#" className="hover:text-[#8A1538] relative z-10">
                            Buy
                          </a>
                          {showBuyDropdown && (
                            <div className="fixed left-0 top-[76px] w-[100vw] bg-white border-t border-gray-200 py-6 px-20 flex shadow-lg z-50">
                              <div className="flex w-full">
                                {/* Homes for Sale - Split into two columns */}
                                <div className="w-1/3 flex">
                                  <div style={{ fontFamily: 'Roboto' }} className="w-1/2">
                                    <h4 className="font-semibold font-roboto mb-2 text-[20px]">Homes for sale</h4>
                                    <ul className="text-[16px] font-roboto space-y-4">
                                      <li><Link to={'/homeforsale'} className="hover:text-[#8A1538]">Homes for sale</Link></li>
                                      <li><Link to={'/forclosure'} className="hover:text-[#8A1538]">Foreclosures</Link></li>
                                      <li><Link to={'/forowner'} className="hover:text-[#8A1538]">For sale by owner</Link></li>
                                      <li><Link to={'/open'} className="hover:text-[#8A1538]">Open house</Link></li>
                                    </ul>
                                  </div>
                                  <div style={{ fontFamily: 'Roboto' }} className="w-1/2">
                                    <ul className="text-[16px] font-roboto space-y-4 mt-8">
                                      <li><Link to={'/newly'} className="hover:text-[#8A1538]">Newly constructed homes</Link></li>
                                      <li><Link to={'/properties'} className="hover:text-[#8A1538]">Properties coming to market</Link></li>
                                      <li><Link to={'/recently'} className="hover:text-[#8A1538]">Recently sold properties</Link></li>
                                      <li><Link to={'/listed'} className="hover:text-[#8A1538]">All listed properties</Link></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="border-l border-gray-300 mx-10"></div>
                                <div style={{ fontFamily: 'Roboto' }} className="w-1/3">
                                  <h4 className="font-semibold mb-2 text-[20px]">Resources</h4>
                                  <ul className="text-[16px] space-y-4">
                                    <li><Link to={'/purchase'} className="hover:text-[#8A1538]">Home purchase guide</Link></li>
                                    <li><Link to={'/foreclosureinform'} className="hover:text-[#8A1538]">Foreclosure information center</Link></li>
                                    <li><Link to={'/financial'} className="hover:text-[#8A1538]">Financial assistance for down payments</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
            
                        {/* Sell with dropdown */}
                        <div
                          className="relative"
                          onMouseEnter={() => setShowSellDropdown(true)}
                          onMouseLeave={() => setShowSellDropdown(false)}
                        >
                          <a style={{ fontFamily: 'Poppins' }} href="#" className="hover:text-[#2DC937] relative z-10">
                            Sell
                          </a>
                          {showSellDropdown && (
                            <div className="fixed left-0 top-[76px] w-[100vw] bg-white border-t border-gray-200 py-6 px-20 flex shadow-lg z-50">
                              <div className="flex w-full">
                                <div style={{ fontFamily: 'Roboto' }} className="">
                                  <h4 className="font-semibold font-roboto mb-3 text-[20px]">Seller Resources</h4>
                                  <ul className="text-[16px] font-roboto space-y-4">
                                    <li><Link to={'/review'} className="hover:text-[#8A1538]">Review available selling strategies</Link></li>
                                    <li><Link to={'/review'} className="hover:text-[#8A1538]">See your home’s HomVill Estimate</Link></li>
                                    <li><Link to={'/market'} className="hover:text-[#8A1538]">Market property values</Link></li>
                                    <li><Link to={'/homeguide'} className="hover:text-[#8A1538]">Home seller's guide</Link></li>
                                  </ul>
                                </div>
                                <div className="border-l border-gray-300 mx-10"></div>
                                <div style={{ fontFamily: 'Roboto' }} className="w-1/3">
                                  <h4 className="font-semibold mb-3 text-[20px]">Property sale methods</h4>
                                  <ul className="text-[16px] space-y-2">
                                    <li><Link to={'/signin'} href="#" className="hover:text-[#8A1538]">Post for sale</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
            
                        {/* Rent with dropdown */}
                        <div
                          className="relative"
                          onMouseEnter={() => setShowRentDropdown(true)}
                          onMouseLeave={() => setShowRentDropdown(false)}
                        >
                          <a style={{ fontFamily: 'Poppins' }} href="#" className="hover:text-[#FFD500] relative z-10">
                            Rent
                          </a>
                          {showRentDropdown && (
                            <div className="fixed left-0 top-[76px] w-[100vw] bg-white border-t border-gray-200 py-6 px-20 flex shadow-lg z-50">
                              <div className="flex w-full">
                                <div style={{ fontFamily: 'Roboto' }} className="">
                                  <h4 className="font-semibold font-roboto mb-3 text-[20px]">Find a place to rent</h4>
                                  <ul className="text-[16px] font-roboto space-y-4">
                                    <li><Link to={'/rent'} className="hover:text-[#8A1538]">Apartments you can rent</Link></li>
                                    <li><Link to={'/homeavailable'} className="hover:text-[#8A1538]">Homes available to rent</Link></li>
                                    <li><Link to={'/rent'} className="hover:text-[#8A1538]">Browse all rentals</Link></li>
                                    <li><a href="#" className="hover:text-[#8A1538]">View all rental buildings</a></li>
                                  </ul>
                                </div>
                                <div className="border-l border-gray-300 mx-10"></div>
                                <div style={{ fontFamily: 'Roboto' }} className="w-1/3">
                                  <h4 className="font-semibold mb-3 text-[20px]">Your rental activity</h4>
                                  <ul className="text-[16px] space-y-2">
                                    <li><Link to={'/signin'} className="hover:text-[#8A1538]">Your saved searches</Link></li>
                                    <li><Link to={'signin'} className="hover:text-[#8A1538]">Your messages</Link></li>
                                    <li><Link to={'/signin'} className="hover:text-[#8A1538]">Rentals you’ve reached out to</Link></li>
                                    <li><Link to={'/signin'} className="hover:text-[#8A1538]">Your applications</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
            
                        <Link to={'/listrent'} style={{ fontFamily: 'Poppins' }} >List for Rent</Link>
            
                        {/* Contractors with dropdown */}
                        <div
                          className="relative"
                          onMouseEnter={() => setShowContractDropdown(true)}
                          onMouseLeave={() => setShowContractDropdown(false)}
                        >
                          <a style={{ fontFamily: 'Poppins' }} href="#" className="hover:text-[#2F94FF] relative z-10">
                            Contractors
                          </a>
                          {showContractDropdown && (
                            <div className="fixed left-0 top-[76px] w-[100vw] bg-white border-t border-gray-200 py-6 px-20 flex shadow-lg z-50">
                              <div className="flex w-full">
                                <div className="w-1/3 flex">
                                  <div style={{ fontFamily: 'Roboto' }} className="w-1/2">
                                    <h4 className="font-semibold font-roboto mb-2 text-[20px]">Find your contractors</h4>
                                    <ul className="text-[16px] font-roboto space-y-4">
                                      <li><Link to={'/build'} className="hover:text-[#8A1538]">Builders</Link></li>
                                      <li><Link to={'/renovation'} className="hover:text-[#8A1538]">Renovation</Link></li>
                                      <li><Link to={'/build'} className="hover:text-[#8A1538]">Contractors</Link></li>
                                      <li><a href="#" className="hover:text-[#8A1538]">Designers</a></li>
                                    </ul>
                                  </div>
                                  <div style={{ fontFamily: 'Roboto' }} className="w-1/2">
                                    <ul className="text-[16px] font-roboto space-y-4 mt-8">
                                      <li><a href="#" className="hover:text-[#8A1538]">Architect</a></li>
                                      <li><a href="#" className="hover:text-[#8A1538]">Lorem Ipsum</a></li>
                                      <li><a href="#" className="hover:text-[#8A1538]">Lorem Ipsum</a></li>
                                      <li><a href="#" className="hover:text-[#8A1538]">Lorem Ipsum</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
            
                        <Link to={'/signin'} style={{ fontFamily: 'Poppins' }}>Furniture</Link>
                        <Link to={'/signin'} style={{ fontFamily: 'Poppins' }} >Partner with HomeVill</Link>
                        <div className="flex items-center space-x-1 cursor-pointer">
                          <div className="relative inline-block text-left">
                            <div
                              onClick={toggleDropdown}
                              className="flex items-center space-x-1 cursor-pointer"
                            >
                              <span>{selectedLang}</span>
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.188l3.71-3.957a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            {isOpen && (
                              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                                <ul className="py-1 text-sm">
                                  {languages.map((lang) => (
                                    <li
                                      key={lang}
                                      onClick={() => handleSelect(lang)}
                                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${lang === selectedLang ? "font-semibold text-pink-600" : ""}`}
                                    >
                                      {lang}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
            
                      {/* Right-side: Language & Login - Desktop */}
                      <div style={{ fontFamily: 'Poppins' }} className="hidden show-above-850 items-center space-x-4 text-sm">
            
                        <button onClick={() => {
                          navigate('/signin');
                        }} className="bg-[#8A1538] text-white px-4 py-1 rounded-full hover:bg-[#6d112b]">
                          Login
                        </button>
                      </div>
                    </div>
            
                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                      <div className="fixed top-[120px] left-0 w-full h-[calc(100vh-100px)] bg-white z-50 flex flex-col pt-6 space-y-4 text-[20px] overflow-y-auto mobile-menu">
                        <a style={{ fontFamily: 'Poppins' }} href="#" onClick={toggleMobileMenu} className="px-4">Home</a>
                        <div className="w-full">
                          <button
                            onClick={toggleBuyDropdown}
                            style={{ fontFamily: 'Poppins' }}
                            className="w-full text-left hover:text-[#8A1538] px-4"
                          >
                            Buy
                          </button>
                          {showBuyDropdown && (
                            <div style={{ fontFamily: 'Roboto' }} className="pl-8 pt-2 space-y-2 text-[16px]">
                              <h4 className="font-semibold mb-2 text-[20px]">Homes for sale</h4>
                              <ul className="space-y-2">
                                <li><Link to={'/homeforsale'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Homes for sale</Link></li>
                                <li><Link to={'/forclosure'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Foreclosures</Link></li>
                                <li><Link to={'/forowner'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>For sale by owner</Link></li>
                                <li><Link to={'/open'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Open house</Link></li>
                                <li><Link to={'/newly'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Newly constructed homes</Link></li>
                                <li><Link to={'/properties'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Properties coming to market</Link></li>
                                <li><Link to={'/recently'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Recently sold properties</Link></li>
                                <li><Link to={'/listed'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>All listed properties</Link></li>
            
                              </ul>
                              <h4 className="font-semibold mb-2 mt-4 text-[20px]">Resources</h4>
                              <ul className="space-y-2">
                                <li><Link to={'/purchase'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Home purchase guide</Link></li>
                                <li><Link to={'/foreclosureinform'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Foreclosure information center</Link></li>
                                <li><Link to={'/financial'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Financial assistance for down payments</Link></li>
            
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="w-full">
                          <button
                            onClick={toggleSellDropdown}
                            style={{ fontFamily: 'Poppins' }}
                            className="w-full text-left hover:text-[#2DC937] px-4"
                          >
                            Sell
                          </button>
                          {showSellDropdown && (
                            <div style={{ fontFamily: 'Roboto' }} className="pl-8 pt-2 space-y-2 text-[16px]">
                              <h4 className="font-semibold mb-3 text-[20px]">Seller Resources</h4>
                              <ul className="space-y-2">
                                <li><Link to={'/review'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Review available selling strategies</Link></li>
                                <li><Link to={'/review'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>See your home’s HomVill Estimate</Link></li>
                                <li><Link to={'/market'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Market property values</Link></li>
                                <li><Link to={'/homeguide'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Home seller's guide</Link></li>
            
                              </ul>
                              <h4 className="font-semibold mb-3 mt-4 text-[20px]">Property sale methods</h4>
                              <ul className="space-y-2">
                                <li><Link to={'/signin'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Post for sale</Link></li>
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="w-full">
                          <button
                            onClick={toggleRentDropdown}
                            style={{ fontFamily: 'Poppins' }}
                            className="w-full text-left hover:text-[#FFD500] px-4"
                          >
                            Rent
                          </button>
                          {showRentDropdown && (
                            <div style={{ fontFamily: 'Roboto' }} className="pl-8 pt-2 space-y-2 text-[16px]">
                              <h4 className="font-semibold mb-3 text-[20px]">Find a place to rent</h4>
                              <ul className="space-y-2">
                                <li><Link to={'/rent'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Apartments you can rent</Link></li>
                                <li><Link to={'/homeavailable'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Homes available to rent</Link></li>
                                <li><Link to={'/rent'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Browse all rentals</Link></li>
                                <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>View all rental buildings</a></li>
                              </ul>
                              <h4 className="font-semibold mb-3 mt-4 text-[20px]">Your rental activity</h4>
                              <ul className="space-y-2">
                                <li><Link to={'/signin'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Your saved searches</Link></li>
                                <li><Link to={'/signin'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Your messages</Link></li>
                                <li><Link to={'/signin'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Rentals you’ve reached out to</Link></li>
                                <li><Link to={'/signin'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Your applications</Link></li>
                              </ul>
                            </div>
                          )}
                        </div>
                        <Link to={'/listrent'} style={{ fontFamily: 'Poppins' }} href="#" onClick={toggleMobileMenu} className="px-4">List for Rent</Link>
                        <div className="w-full">
                          <button
                            onClick={toggleContractDropdown}
                            style={{ fontFamily: 'Poppins' }}
                            className="w-full text-left hover:text-[#2F94FF] px-4"
                          >
                            Contractors
                          </button>
                          {showContractDropdown && (
                            <div style={{ fontFamily: 'Roboto' }} className="pl-8 pt-2 space-y-2 text-[16px]">
                              <h4 className="font-semibold mb-2 text-[20px]">Find your contractors</h4>
                              <ul className="space-y-2">
                                <li><Link to={'/build'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Builders</Link></li>
                                <li><Link to={'/renovation'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Renovation</Link></li>
                                <li><Link to={'/build'} className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Contractors</Link></li>
                                <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Designers</a></li>
                                <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Architect</a></li>
                                <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Lorem Ipsum</a></li>
                                <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Lorem Ipsum</a></li>
                                <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Lorem Ipsum</a></li>
                              </ul>
                            </div>
                          )}
                        </div>
                        <Link to={'/signin'} style={{ fontFamily: 'Poppins' }} href="#" onClick={toggleMobileMenu} className="px-4">Furniture</Link>
                        <Link to={'/signin'} style={{ fontFamily: 'Poppins' }} href="#" onClick={toggleMobileMenu} className="px-4">Partner with HomeVill</Link>
                        <div className="w-full">
                          <button
                            onClick={toggleDropdown}
                            style={{ fontFamily: 'Poppins' }}
                            className="w-full text-left text-[20px] px-4"
                          >
                            {selectedLang}
                          </button>
                          {isOpen && (
                            <div className="pl-8 pt-2 space-y-2 text-[16px]">
                              <ul className="space-y-2">
                                {languages.map((lang) => (
                                  <li
                                    key={lang}
                                    onClick={() => {
                                      handleSelect(lang);
                                      toggleMobileMenu();
                                    }}
                                    className={`hover:text-[#8A1538] cursor-pointer ${lang === selectedLang ? "font-semibold text-pink-600" : ""}`}
                                  >
                                    {lang}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <button onClick={() => {
                          toggleMobileMenu();
                          navigate('/signup');
                        }} className="bg-[#8A1538] text-white px-4 py-1 rounded-full hover:bg-[#6d112b] mx-4 text-sm w-fit">
                          Login
                        </button>
                      </div>
                    )}
                  </div>
                </div>
            {/* <Navbar /> */}

            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 md:py-0  py-10 gap-10 bg-white">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl lg:text-[55px]  font-bold text-[#333333] mb-4 font-[Poppins] leading-[1.2]">
                        Affordable property<br />service
                    </h2>
                    <p className="text-[12px]  lg:text-[16px] text-[#333333cc] mb-6 leading-relaxed font-[Poppins] max-w-md mx-auto md:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                    <button className="bg-[#7A0C2E] text-white text-[16px] md:text-[18px] font-medium py-2 px-6 rounded-lg font-[Poppins]">
                        Learn More
                    </button>
                </div>

                <div className="w-full md:w-1/2">
                    <img src={about} alt="House" className="w-full max-w-md mx-auto md:max-w-full" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-12 mt-10 bg-white gap-10">
                {/* Left Text Section */}
                <div className="w-full lg:w-1/2 font-[Poppins] text-center lg:text-left">
                    <h2 className="text-3xl text-[7vw] lg:text-[48px] font-bold text-gray-900 mb-6 leading-[1.3]">
                        Our secure partners <br /> helps you.
                    </h2>
                    <p className="text-[16px] lg:text-[18px] text-[#333333CC] mb-4 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                    <p className="text-[16px] lg:text-[18px] text-[#333333CC] mb-4 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                    <p className="text-[16px] lg:text-[18px] text-[#333333CC] leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                </div>

                {/* Partner Logos Grid */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 justify-items-center">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-[120px] sm:w-[130px] lg:w-[164px] h-[70px] sm:h-[80px] lg:h-[100px] bg-[#D9D9D9] rounded-xl mb-2"></div>
                            <span className="text-[16px] lg:text-[25px] font-[Poppins] font-semibold text-gray-800">
                                Partners LOGO
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col bg-[#F7F7F7] mt-10 mb-12 md:flex-row items-center px-4 sm:px-8 md:px-12 w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                <div className="md:w-1/2 font-[Poppins] px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl font-bold font-[Poppins] text-gray-800 mb-4 md:mb-6">Visit our office</h2>
                    <p className="text-base sm:text-lg md:text-[18px] text-[#333333CC] mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                    <p className="text-base sm:text-lg md:text-[18px] text-[#333333CC] mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                    <p className="text-base sm:text-lg md:text-[18px] text-[#333333CC]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </p>
                </div>
                <div className="md:w-1/2 w-full">
                    <img
                        src={map}
                        alt="Map"
                        className="w-full h-auto md:h-full object-cover"
                    />
                </div>
            </div>
            <AboutSlider />
            <Testimonial />
            {/* <div
                className="h-[687px] bg-cover bg-center flex items-center justify-start px-12"
                style={{ backgroundImage: `url(${garden})`, fontFamily: 'Poppins' }}
            >
                <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact</h2>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Us!</h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-[#F8EDEF] placeholder-gray-500"
                        />
                        <input
                            type="email"
                            placeholder="Your mail id"
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-[#F8EDEF] placeholder-gray-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#830A35] text-white py-3 rounded-md font-semibold hover:bg-[#6e082c] transition"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div> */}
            <div
                className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-[687px] bg-cover bg-center flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12"
                style={{ backgroundImage: `url(${garden})`, fontFamily: 'Poppins' }}
            >
                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg w-full max-w-[90%] sm:max-w-[80%] md:max-w-lg lg:max-w-md">
                    <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Contact
                    </h2>
                    <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Us!
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>

                    <form className="space-y-3 sm:space-y-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full p-2 sm:p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-[#F8EDEF] placeholder-gray-500 text-sm sm:text-base"
                        />
                        <input
                            type="email"
                            placeholder="Your mail id"
                            className="w-full p-2 sm:p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-[#F8EDEF] placeholder-gray-500 text-sm sm:text-base"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#830A35] text-white py-2 sm:py-3 rounded-md font-semibold hover:bg-[#6e082c] transition text-sm sm:text-base"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
