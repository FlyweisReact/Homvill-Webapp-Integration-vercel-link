import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from './assets/logo.svg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import arrow from './assets/arrow2.svg'
import icon from './assets/Icon (18).svg'
import { useAuth } from "./Authprovider/AuthContext";
import { selectIsAuthenticated } from "../store/slices/authSlice";
import { useSelector } from "react-redux";
const Footer = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated); // Changed from isAuthenticated

  const navigate = useNavigate();
  const handleClick = (targetPath) => {
    if (isAuthenticated) {
      navigate(targetPath); // Go to target path
    } else {
      navigate('/signin'); // Redirect to sign-in
    }
  };
  return (
    <footer className="bg-[#FFF5F8] text-sm text-gray-800">
      <div style={{ fontFamily: 'Poppins' }} className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Email */}
        <div>
          <img src={logo} className="mb-8" />
          <p className="text-[15px] mb-2">Connecting buyers with Sellers, Seamlessly</p>
          <div className="flex border border-gray-300 rounded-md overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 outline-none"
            />

            <button className="bg-[#8d153a] m-1 rounded-md text-white p-2 px-3">
              <img src={icon} />
            </button>
          </div>
        </div>

        {/* HomVill links */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-[#8A1538]">HomVill</h3>
          <ul className="space-y-2">
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/privacy'}>Privacy Policy</Link></li>
            <li><Link to={'/terms'}>Terms and Conditions</Link></li>
            <li><Link to={'/faq'}>FAQ</Link></li>
            <li><Link to={'/career'}>Career</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-[#8A1538]">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to={'/fav'}>Favorites</Link></li>
            <li><Link to={'/subscriptions'}>Subscriptions</Link></li>
            <li><Link to={'/selldash'}>Seller's Dashboard</Link></li>
            {/* <li>Partner with HomVill</li>
            <li>Build Home</li> */}
            <li
              className="cursor-pointer"
              onClick={() => handleClick('/partner')}
            >
              Partner with HomVill
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleClick('/contract')}
            >
              Build Home
            </li>

          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-[#8A1538] flex items-center gap-2">
            Contact Us <span><img src={arrow} alt="arrow" className="w-4 h-4" /></span>
          </h3>

          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#8d153a] text-white text-xs py-3 px-6 flex justify-between items-center">
        <p>Copyright © 2024 | All rights reserved.</p>
        <div className="flex space-x-4">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
