
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaBars, FaTimes } from 'react-icons/fa';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showBuyDropdown, setShowBuyDropdown] = useState(false);
  const [showSellDropdown, setShowSellDropdown] = useState(false);
  const [showRentDropdown, setShowRentDropdown] = useState(false);
  const [showContractDropdown, setShowContractDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English (US)");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div style={{zIndex:'20000'}} className="w-full font-sans">
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
      <div style={{ fontFamily: 'Poppins' }} className="bg-[#8A1538] text-white text-sm flex justify-between items-center px-12 py-1 md:flex-row flex-col space-y-2 md:space-y-0">
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
        <div className="flex justify-between items-center px-8 md:px-12 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <img src={logo} alt="HomeVill Logo" />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="hide-above-850">
            <button onClick={toggleMobileMenu} className="text-2xl">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Links - Desktop */}
          <div className="hidden show-above-850 space-x-6 text-[20px] font-medium relative">
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
                <div className="fixed left-0 top-[76px] w-[100vw] bg-white border-t border-gray-200 py-6 px-12 flex shadow-lg z-50">
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
                        <li><a href="#" className="hover:text-[#8A1538]">Home purchase guide</a></li>
                        <li><a href="#" className="hover:text-[#8A1538]">Foreclosure information center</a></li>
                        <li><a href="#" className="hover:text-[#8A1538]">Financial assistance for down payments</a></li>
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
                <div className="fixed left-0 top-[76px] w-[100vw] bg-white border-t border-gray-200 py-6 px-12 flex shadow-lg z-50">
                  <div className="flex w-full">
                    <div style={{ fontFamily: 'Roboto' }} className="">
                      <h4 className="font-semibold font-roboto mb-3 text-[20px]">Seller Resources</h4>
                      <ul className="text-[16px] font-roboto space-y-4">
                        <li><a href="#" className="hover:text-[#8A1538]">Review available selling strategies</a></li>
                        <li><a href="#" className="hover:text-[#8A1538]">See your home’s HomVill Estimate</a></li>
                        <li><a href="#" className="hover:text-[#8A1538]">Market property values</a></li>
                        <li><a href="#" className="hover:text-[#8A1538]">Home seller's guide</a></li>
                      </ul>
                    </div>
                    <div className="border-l border-gray-300 mx-10"></div>
                    <div style={{ fontFamily: 'Roboto' }} className="w-1/3">
                      <h4 className="font-semibold mb-3 text-[20px]">Property sale methods</h4>
                      <ul className="text-[16px] space-y-2">
                        <li><a href="#" className="hover:text-[#8A1538]">Post for sale</a></li>
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
                <div className="fixed left-0 top-[76px] w-[100vw] bg-white border-t border-gray-200 py-6 px-12 flex shadow-lg z-50">
                  <div className="flex w-full">
                    <div style={{ fontFamily: 'Roboto' }} className="">
                      <h4 className="font-semibold font-roboto mb-3 text-[20px]">Find a place to rent</h4>
                      <ul className="text-[16px] font-roboto space-y-4">
                        <li><a href="#" className="hover:text-[#8A1538]">Apartments you can rent</a></li>
                        <li><a href="#" className="hover:text-[#8A1538]">Homes available to rent</a></li>
                        <li><a href="#" className="hover:text-[#8A1538]">Browse all rentals</a></li>
                        <li><a href="#" className="hover:text-[#8A1538]">View all rental buildings</a></li>
                      </ul>
                    </div>
                    <div className="border-l border-gray-300 mx-10"></div>
                    <div style={{ fontFamily: 'Roboto' }} className="w-1/3">
                      <h4 className="font-semibold mb-3 text-[20px]">Your rental activity</h4>
                      <ul className="text-[16px] space-y-2">
                        <li><a href="#" className="hover:text-[#8A1538]">Your saved searches</a></li>
                        <li><a href="#" className="hover:text-[#8A1538]">Your messages</a></li>
                        <li><a href="#" className="hover:text-[#8A1538]">Rentals you’ve reached out to</a></li>
                        <li><a href="#" className="hover:text-[#8A1538]">Your applications</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a style={{ fontFamily: 'Poppins' }} href="#">List for Rent</a>

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
                <div className="fixed left-0 top-[76px] w-[100vw] bg-white border-t border-gray-200 py-6 px-12 flex shadow-lg z-50">
                  <div className="flex w-full">
                    <div className="w-1/3 flex">
                      <div style={{ fontFamily: 'Roboto' }} className="w-1/2">
                        <h4 className="font-semibold font-roboto mb-2 text-[20px]">Find your contractors</h4>
                        <ul className="text-[16px] font-roboto space-y-4">
                          <li><a href="#" className="hover:text-[#8A1538]">Builders</a></li>
                          <li><a href="#" className="hover:text-[#8A1538]">Renovation</a></li>
                          <li><a href="#" className="hover:text-[#8A1538]">Contractors</a></li>
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

            <a style={{ fontFamily: 'Poppins' }} href="#">Furniture</a>
            <a style={{ fontFamily: 'Poppins' }} href="#">Partner with HomeVill</a>
          </div>

          {/* Right-side: Language & Login - Desktop */}
          <div style={{ fontFamily: 'Poppins' }} className="hidden show-above-850 items-center space-x-4 text-sm">
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
            <button className="bg-[#8A1538] text-white px-4 py-1 rounded-full hover:bg-[#6d112b]">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed top-[100px] left-0 w-full h-[calc(100vh-100px)] bg-white z-50 flex flex-col pt-6 space-y-4 text-[20px] overflow-y-auto mobile-menu">
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
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Homes for sale</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Foreclosures</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>For sale by owner</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Open house</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Newly constructed homes</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Properties coming to market</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Recently sold properties</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>All listed properties</a></li>
                  </ul>
                  <h4 className="font-semibold mb-2 mt-4 text-[20px]">Resources</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Home purchase guide</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Foreclosure information center</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Financial assistance for down payments</a></li>
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
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Review available selling strategies</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>See your home’s HomVill Estimate</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Market property values</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Home seller's guide</a></li>
                  </ul>
                  <h4 className="font-semibold mb-3 mt-4 text-[20px]">Property sale methods</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Post for sale</a></li>
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
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Apartments you can rent</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Homes available to rent</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Browse all rentals</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>View all rental buildings</a></li>
                  </ul>
                  <h4 className="font-semibold mb-3 mt-4 text-[20px]">Your rental activity</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Your saved searches</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Your messages</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Rentals you’ve reached out to</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Your applications</a></li>
                  </ul>
                </div>
              )}
            </div>
            <a style={{ fontFamily: 'Poppins' }} href="#" onClick={toggleMobileMenu} className="px-4">List for Rent</a>
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
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Builders</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Renovation</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Contractors</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Designers</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Architect</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Lorem Ipsum</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Lorem Ipsum</a></li>
                    <li><a href="#" className="hover:text-[#8A1538]" onClick={toggleMobileMenu}>Lorem Ipsum</a></li>
                  </ul>
                </div>
              )}
            </div>
            <a style={{ fontFamily: 'Poppins' }} href="#" onClick={toggleMobileMenu} className="px-4">Furniture</a>
            <a style={{ fontFamily: 'Poppins' }} href="#" onClick={toggleMobileMenu} className="px-4">Partner with HomeVill</a>
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
            <button className="bg-[#8A1538] text-white px-4 py-1 rounded-full hover:bg-[#6d112b] mx-4 text-sm w-fit" onClick={toggleMobileMenu}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;