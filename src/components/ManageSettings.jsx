import React from 'react';
import { useNavigate } from 'react-router-dom';
import profile1 from './assets/profiles1.svg'
import bgImage from './assets/manage.svg'
import profile2 from './assets/profiles2.svg'
import profile3 from './assets/profiles3.svg'
import Navbar2 from './Navbar2';
import Footer from './Footer';
const features = [
  {
    title: 'Profile',
    description: 'Update Your Profile, Stay Connected!',
    image: profile1, // Replace with actual path
    link: '/profilesettings',
  },
  {
    title: 'Notification',
    description: 'Customize Your Alerts, Stay Informed!',
    image: profile2, // Replace with actual path
    link: '/notification',
  },
  {
    title: 'Document',
    description: 'Manage Your Documents, Stay Organized!',
    image: profile3, // Replace with actual path
    link: '/document',
  },
];

const CardSection = () => {
  const navigate = useNavigate();

  return (
    <>
     <Navbar2 />
                <div
                    className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-10 lg:px-24"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <h2
                        className="text-3xl sm:text-4xl lg:text-[48px] font-bold mulish-font"
                    >
                    Manage Settings
                    </h2>
                    <p
                        style={{ fontFamily: 'Poppins' }}
                        className="mt-5 text-xl sm:text-2xl lg:text-[32px] font-medium"
                    >
                        Customize Your Settings, Control Your Experience!
                    </p>
                </div>
    <div className="flex flex-wrap justify-center gap-4 p-6">
      {features.map((item, index) => (
        <div
          key={index}
          className="w-[336px] border border-pink-100 rounded-lg shadow-md text-center p-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 mx-auto mb-3"
          />
          <h3 className="text-[40px] font-semibold mulish-font text-gray-800">{item.title}</h3>
          <p className="text-[22px] text-[#1D1D1D] mulish-font font-normal leading-[1.1] mt-4 mb-4">{item.description}</p>
          <button
            onClick={() => navigate(item.link)}
            className="bg-[#870A28] hover:bg-[#A31333] text-white text-[22px] mt-4 mulish-font px-6 py-1 rounded"
          >
            Visit
          </button>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default CardSection;
