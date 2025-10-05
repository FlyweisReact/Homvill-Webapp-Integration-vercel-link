import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useNavigate, Link } from 'react-router-dom';
import qr from '../assets/qr.svg';
import bg from '../assets/bg6.jpg';
import Footer from '../Footer';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    if (!email) {
      alert('Please enter an email address');
      return;
    }
    sessionStorage.setItem('loginEmail', email);
    navigate('/password');
  };

  return (
    <>
      <Navbar />
      <div className="px-8 w-full flex flex-col md:flex-row items-stretch">
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <button 
            onClick={() => navigate(-1)}
            style={{ fontFamily: 'Poppins' }} 
            className="text-[18px] text-gray-600 mb-6 text-left z-10"
          >
            ← Back
          </button>
          <h1 
            style={{ fontFamily: 'Poppins' }} 
            className="text-3xl md:text-[42px] font-bold leading-[1.2] text-gray-900 mb-3 z-10"
          >
            Buy, sell or rent your dream homes
          </h1>
          <p 
            style={{ fontFamily: 'Poppins' }} 
            className="text-[#000000] mb-8 z-10"
          >
            Lorem Ipsum is simply dummy text
          </p>
          <h2 
            style={{ fontFamily: 'Poppins' }} 
            className="text-[25px] font-medium text-gray-900 mb-3 z-10"
          >
            Get an App
          </h2>
          <div className="relative w-full">
            <img 
              src={bg} 
              alt="House" 
              className="rounded-xl w-full md:w-[680px] h-auto" 
            />
            <div className="absolute top-[-45px] right-0 md:top-[-85px] md:right-[214px] p-2 rounded-md flex items-center justify-center">
              <img 
                src={qr} 
                alt="QR Code" 
                className="w-auto h-[150px] md:h-[263px] object-contain" 
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center px-6 py-10">
          <div className="w-full lg:max-w-sm space-y-8">
            <label style={{ fontFamily: 'Poppins' }} className='text-[#2C2E38]'>
              Enter your email address
              <input
                type="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-2 rounded-md border border-gray-300 placeholder-gray-500"
              />
            </label>
            <button 
              onClick={handleContinue}
              disabled={!email}
              style={{ fontFamily: 'Poppins' }} 
              className="w-full bg-[#8A1538] hover:bg-[#72152e] text-white text-[18px] py-3 rounded-md font-semibold shadow-md disabled:opacity-50"
            >
              Continue
            </button>
            <p 
              style={{ fontFamily: 'Poppins' }} 
              className="text-[16px] text-[#2C2E38] text-center"
            >
              By signing in you agree to our{' '}
              <span className="text-[#8A1538] font-medium cursor-pointer">Terms and Conditions</span>{' '}
              and{' '}
              <span className="text-[#8A1538] font-medium cursor-pointer">Privacy Policy</span>
            </p>
            <p 
              style={{ fontFamily: 'Poppins' }} 
              className="text-[16px] text-[#2C2E38] text-center"
            >
              Don’t have an account? <span className="text-[#8A1538] font-medium cursor-pointer"><Link to={'/signup'}>Sign Up</Link></span> here
            </p>
            <div 
              style={{ fontFamily: 'Poppins' }} 
              className="space-y-3"
            >
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 text-[#7C838A] rounded-md hover:bg-gray-100">
                <img src="https://img.icons8.com/ios-filled/20/000000/mac-os.png" alt="Apple" />
                Continue with Apple
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 text-[#7C838A] rounded-md hover:bg-gray-100">
                <img src="https://img.icons8.com/fluency/20/facebook-new.png" alt="Facebook" />
                Continue with Facebook
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 text-[#7C838A] rounded-md hover:bg-gray-100">
                <img src="https://img.icons8.com/color/20/google-logo.png" alt="Google" />
                Continue with Google
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-12">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;