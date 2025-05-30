import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Footer from '../Footer';
import bgImage from '../assets/bg3.svg';
import home1 from '../assets/buy1.svg';
import home2 from '../assets/buy2.svg';
import home3 from '../assets/buy3.svg';
import home4 from '../assets/buy4.svg';
import home5 from '../assets/buy5.svg';
import home6 from '../assets/buy6.svg';
import home7 from '../assets/buy7.svg';
import home8 from '../assets/buy8.svg';
import home9 from '../assets/home9.svg';

const Purchase = () => {
    const cards = [
        {
            img: home1,
            label: 'Buying',
            title: 'How to Find a Foreclosure',
            link: '/findforeclosure'
        },
        {
            img: home2,
            label: 'Financing',
            title: 'HUDs Pre-Foreclosure Sales Program',
        },
        {
            img: home3,
            label: 'Financing',
            title: 'What Are the Types of Foreclosure?',
        },
        {
            img: home4,
            label: 'Buying',
            title: 'Overview of Buying a Foreclosure',
        },
        {
            img: home5,
            label: 'Buying',
            title: 'Buying a Pre-Foreclosure Property',
        },
        {
            img: home6,
            label: 'Buying',
            title: 'Buying a Home at a Foreclosure Auction',
        },
        {
            img: home7,
            label: 'Buying',
            title: 'How to Investigate Liens on Foreclosures',
        },
        {
            img: home8,
            label: 'Financing',
            title: 'What Is a Foreclosure Estimate?',
        },
        {
            img: home9,
            label: 'Buying',
            title: 'Understanding Local and State Foreclosure Laws',
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <Navbar />
            <div
                className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-10 lg:px-12"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h2
                    className="text-3xl sm:text-4xl lg:text-[48px] font-bold mulish-font"
                >
                    Forclosures{' '}
                    <span className="text-xl sm:text-2xl lg:text-[32px] font-semibold mulish-font">
                        (185 Articles)
                    </span>
                </h2>
                <p
                    style={{ fontFamily: 'Poppins' }}
                    className="mt-5 text-xl sm:text-2xl lg:text-[32px] font-medium"
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className="bg-[#FFE0E9] px-4 sm:px-6 py-10 sm:py-16 lg:pt-20 lg:pb-20 mt-8 sm:mt-10 lg:mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
                    {cards.map((card, index) => (
                        <Link to={card.link} key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                        >
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-32 sm:h-40 lg:h-48 p-2 object-cover"
                            />
                            <div className="p-4">
                                <span className="inline-block bg-[#8A1538CC]/80 text-white text-xs sm:text-sm lg:text-[14px] font-semibold px-4 sm:px-6 py-1 rounded-full mb-2 mulish-font">
                                    {card.label}
                                </span>
                                <h3 className="text-[#000000] font-medium text-sm sm:text-base lg:text-[16px] leading-snug mulish-font">
                                    {card.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center justify-center pt-8 sm:pt-10 lg:pt-12 space-x-2 text-sm sm:text-base lg:text-[16px] text-black">
                    <button
                        onClick={() => handleClick(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="disabled:text-gray-300 bg-white rounded-full p-2 sm:p-3 hover:bg-gray-100 transition-all"
                    >
                        <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        const isActive = page === currentPage;
                        return (
                            <button
                                key={page}
                                onClick={() => handleClick(page)}
                                className={`w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all
                  ${isActive
                                        ? 'bg-pink-100 border border-[#832333] text-black'
                                        : 'bg-white hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        );
                    })}

                    <button
                        onClick={() => handleClick(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="disabled:text-gray-300 bg-white rounded-full p-2 sm:p-3 hover:bg-gray-100 transition-all"
                    >
                        <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Purchase;