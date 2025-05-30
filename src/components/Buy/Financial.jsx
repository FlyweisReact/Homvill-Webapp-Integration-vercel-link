// import React from 'react'
// import Navbar from '../Navbar'
// import finance from '../assets/finance.svg'
// import Footer from '../Footer'
// import money from '../assets/money.svg'
// import { CheckCircle } from 'lucide-react'; 

// const Financial = () => {
//     return (
//         <>
//             <Navbar />
//             <div
//                 className="w-full bg-cover bg-center text-white py-12 px-12 text-start relative"
//                 style={{ backgroundImage: `url(${finance})` }}
//             >
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//                 <div className="relative z-10  mx-auto">
//                     <h2 className="text-2xl sm:text-[48px] font-bold mb-4 mulish-font">
//                         How To Get Down Payment Assistance
//                     </h2>
//                     <p style={{ fontFamily: 'Poppins' }} className="text-sm sm:text-[28px] mb-12  pt-6">
//                         Boost your buying power with local programs that offer down payment assistance.
//                     </p>

//                     <button className="bg-[#8A1538] hover:bg-[#72152e] text-white font-semibold text-sm sm:text-[32px] py-5 px-12 rounded mulish-font flex justify-center items-center">
//                         See if you’re eligible
//                     </button>

//                 </div>
//             </div>
//             <div style={{fontFamily:'Poppins'}} className="bg-[#FFE0E9] mt-12  px-6 py-10">
//                 <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//                     {/* Text Section */}
//                     <div className="md:w-2/3">
//                         <h2 className="text-[30px] md:text-[30px] font-bold mb-4">
//                             Benefits of down payment assistance programs
//                         </h2>
//                         <p className="text-[22px] text-[#000000] mb-6">
//                             It’s possible to qualify for a home loan with no money down or with a&nbsp;
//                             down payment amount as low as 3%. Using a program to get down payment assistance
//                             can provide additional benefits:
//                         </p>

//                         {/* Benefits List */}
//                         <ul className="space-y-4">
//                             {[
//                                 'Build home equity faster',
//                                 'Increase your home budget',
//                                 'Purchase a home sooner',
//                             ].map((benefit, index) => (
//                                     <li key={index} className="flex items-start gap-2 text-[19px] text-[#000000]">
//                                     <CheckCircle className="text-green-600 w-5 h-5 mt-[2px]" />
//                                     <span>{benefit}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Image */}
//                     <div className="md:w-1/4">
//                         <img
//                             src={money}
//                             alt="Down payment benefits"
//                             className="rounded-lg w-full object-cover"
//                         />
//                     </div>
//                 </div>
//             </div>
//             <Footer/>
//         </>
//     )
// }

// export default Financial
import React, { useState } from 'react';
import Navbar from '../Navbar';
import finance from '../assets/finance.svg';
import Footer from '../Footer';
import money from '../assets/money.svg';
import { CheckCircle } from 'lucide-react';

const Financial = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [homeOwnership, setHomeOwnership] = useState('');
    const [homeOwnership2, setHomeOwnership2] = useState('');
    const [homeOwnership3, setHomeOwnership3] = useState('');
    const [householdSize, setHouseholdSize] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const closeModal = () => {
        setShowModal(false);
        setHomeOwnership('');
        setHouseholdSize('');
    };
    const closeModal2 = () => {
        setShowModal2(false);
        setHomeOwnership2('');
        setHouseholdSize('');
    };
    const closeModal3 = () => {
        setShowModal3(false);
        setHomeOwnership3('');
        setHouseholdSize('');
    };
    const closeModal4 = () => {
        setShowModal4(false);
        setHomeOwnership('');
        setHouseholdSize('');
    };
    const [incomePeriod, setIncomePeriod] = useState('year');

    const homeOptions = [
        "Yes",
        "No, I have never owned a home",
        "No, but I did within the last three years",
        "No, but I did more than three years ago",
    ];
    const homeOptions2 = [
        "Active Duty",
        "Reserve/National Guard",
        "Veteran",
        "Surviving Spouse",
    ];
    const homeOptions3 = [
        "Law Enforcement",
        "Healthcare",
        "Education",
        "Fire Fighter",
    ];

    const householdOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];

    return (
        <>
            <Navbar />
            <div
                className="w-full bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-12 lg:px-12 text-start relative"
                style={{ backgroundImage: `url(${finance})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                <div className="relative z-10 max-w-full sm:max-w-4xl lg:max-w-[78rem] mx-auto">
                    <h2 className="text-xl sm:text-3xl lg:text-[48px] font-bold mb-2 sm:mb-4 mulish-font">
                        How To Get Down Payment Assistance
                    </h2>
                    <p
                        style={{ fontFamily: 'Poppins' }}
                        className="text-sm sm:text-xl lg:text-[28px] mb-6 sm:mb-8 lg:mb-12 pt-3 sm:pt-4 lg:pt-6"
                    >
                        Boost your buying power with local programs that offer down payment assistance.
                    </p>

                    <button onClick={() => setShowModal(true)} className="bg-[#8A1538] hover:bg-[#72152e] text-white font-semibold text-sm sm:text-lg lg:text-[32px] py-2 sm:py-3 lg:py-5 px-6 sm:px-8 lg:px-12 rounded mulish-font flex justify-center items-center">
                        See if you’re eligible
                    </button>
                    {showModal && (
                        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto px-4 py-10">
                            <div className="bg-white text-black rounded-lg w-full max-w-2xl p-6 relative">
                                {/* Close Button */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-red-600 text-xl font-bold"
                                >
                                    ×
                                </button>

                                {/* Header */}
                                <h2 className=" text-[25px] md:text-[28px] font-bold mb-4 mulish-font">
                                    Find down payment assistance programs
                                </h2>

                                {/* Question 1 */}
                                <div className="mb-6">
                                    <p className="font-semibold mb-2 mulish-font">
                                        1. Do you currently own a home?
                                    </p>

                                    <div className="border rounded overflow-hidden" style={{ borderColor: '#1D1D1D' }}>
                                        {homeOptions.map((option, idx) => (
                                            <div
                                                key={option}
                                                style={{ borderBottom: idx !== homeOptions.length - 1 ? '1px solid #1D1D1D' : 'none' }}
                                            >
                                                <button
                                                    onClick={() => setHomeOwnership(option)}
                                                    className={`w-full py-2 px-4 text-center focus:outline-none mulish-font ${homeOwnership === option ? 'bg-[#FFE0E9] text-[#8A1538] font-semibold' : 'hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {option}
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                {/* Question 2 */}
                                <div>
                                    <p className="font-semibold mb-1 mulish-font">
                                        2. How many people live in your household?
                                    </p>
                                    <p className="text-sm mb-4 ">
                                        Include yourself, spouse, partner, other adults, children, and senior dependents.
                                    </p>
                                    <div className="flex border border-[#1D1D1D] rounded overflow-hidden mb-6">
                                        {householdOptions.map((num, index) => (
                                            <button
                                                key={num}
                                                onClick={() => setHouseholdSize(num)}
                                                className={`
        flex-1 text-center py-2 border-r border-[#1D1D1D] 
        ${index === householdOptions.length - 1 ? 'border-r-0' : ''}
        ${index === 0 ? 'rounded-l' : ''} 
        ${index === householdOptions.length - 1 ? 'rounded-r' : ''} 
        ${householdSize === num
                                                        ? 'bg-[#FFE0E9] text-[#8A1538] font-semibold border-[#8A1538]'
                                                        : 'hover:bg-gray-100'}
      `}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>


                                    {/* Next Button */}
                                    <button
                                        className="w-full bg-[#8A1538] hover:bg-[#72152e] text-white py-2 font-semibold rounded"
                                        onClick={() => {
                                            setShowModal2(true);
                                            setShowModal(false);
                                        }}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {showModal2 && (
                        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto px-4 py-10">
                            <div className="bg-white text-black rounded-lg w-full max-w-2xl p-6 relative">
                                {/* Close Button */}
                                <button
                                    onClick={closeModal2}
                                    className="absolute top-4 right-4 text-red-600 text-xl font-bold"
                                >
                                    ×
                                </button>

                                {/* Header */}
                                <h2 className="text-[28px] font-bold mb-2 mulish-font">
                                    Tell us about yourself
                                </h2>
                                <p className="text-sm mb-4 ">
                                    Select all that apply.
                                </p>

                                {/* Question 1 */}
                                <div className="mb-6">
                                    <p className="font-semibold mb-2 mulish-font">
                                        3. Are you or a co-borrower a current or former member of the U.S. military?

                                    </p>

                                    <div className="border rounded overflow-hidden" style={{ borderColor: '#1D1D1D' }}>
                                        {homeOptions2.map((option, idx) => (
                                            <div
                                                key={option}
                                                style={{ borderBottom: idx !== homeOptions2.length - 1 ? '1px solid #1D1D1D' : 'none' }}
                                            >
                                                <button
                                                    onClick={() => setHomeOwnership2(option)}
                                                    className={`w-full py-2 px-4 text-center focus:outline-none mulish-font ${homeOwnership2 === option ? 'bg-[#FFE0E9] text-[#8A1538] font-semibold' : 'hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {option}
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                {/* Question 2 */}
                                <div>





                                    {/* Next Button */}
                                    <div className="flex gap-2">
                                        <button
                                            className="w-1/2 border border-[#8A1538] text-[#8A1538] py-2 font-semibold rounded"
                                            onClick={() => {
                                                setShowModal2(false);
                                                setShowModal(true);
                                            }}
                                        >
                                            Back
                                        </button>
                                        <button
                                            className="w-1/2 bg-[#8A1538] hover:bg-[#72152e] text-white py-2 font-semibold rounded"
                                            onClick={() => {
                                                setShowModal3(true);
                                                setShowModal2(false);
                                            }}
                                        >
                                            Next
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}

                    {showModal3 && (
                        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto px-4 py-10">
                            <div className="bg-white text-black rounded-lg w-full max-w-2xl p-6 relative">
                                {/* Close Button */}
                                <button
                                    onClick={closeModal3}
                                    className="absolute top-4 right-4 text-red-600 text-xl font-bold"
                                >
                                    ×
                                </button>

                                {/* Header */}
                                <h2 className="text-[28px] mulish-font font-bold mb-4">
                                    A few more questions
                                </h2>

                                {/* Question 1 */}
                                <div className="mb-6">
                                    <p className="font-semibold mb-2 mulish-font">
                                        4. Do you or a co-borrower work in any of these professions?
                                    </p>
                                    <p className="text-sm mb-4 mulish-font ">
                                        Select all that apply.
                                    </p>
                                    <div className="space-y-2 mulish-font">
                                        {homeOptions3.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => setHomeOwnership3(option)}
                                                className={`w-full border py-2 px-4 rounded text-center ${homeOwnership3 === option
                                                    ? 'bg-[#FFE0E9] text-[#8A1538] border-[#8A1538]'
                                                    : 'hover:bg-gray-100 border-[#1D1D1D]'
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Question 2 */}
                                <div>
                                    <p className="font-semibold mb-1">
                                        5. Do you, a co-borrower or dependent household member have a disability?
                                    </p>

                                    <div className="flex space-x-4 mb-2">
                                        <button
                                            className={`flex-1 border border-[#1D1D1D] rounded-md py-2 text-center  ${selectedOption === 'Yes' ? 'bg-[#FFE0E9] text-[#8A1538] border border-[#8A1538]' : ''
                                                }`}
                                            onClick={() => handleOptionClick('Yes')}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            className={`flex-1 border border-[#1D1D1D] rounded-md py-2 text-center  ${selectedOption === 'No' ? 'bg-[#FFE0E9] text-[#8A1538] border border-[#8A1538]' : ''
                                                }`}
                                            onClick={() => handleOptionClick('No')}
                                        >
                                            No
                                        </button>
                                    </div>

                                    {/* Next Button */}
                                    <div className="flex gap-2">
                                        <button
                                            className="w-1/2 border border-[#8A1538] text-[#8A1538] py-2 font-semibold rounded"
                                            onClick={() => {
                                                setShowModal2(true);
                                                setShowModal3(false);
                                            }}
                                        >
                                            Back
                                        </button>
                                        <button
                                            className="w-1/2 bg-[#8A1538] hover:bg-[#72152e] text-white py-2 font-semibold rounded"
                                            onClick={() => {
                                                setShowModal4(true);
                                                setShowModal3(false);
                                            }}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {showModal4 && (
                        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto px-4 py-10">
                            <div className="bg-white text-black rounded-lg w-full max-w-2xl p-6 relative">
                                {/* Close Button */}
                                <button
                                    onClick={closeModal4}
                                    className="absolute top-4 right-4 text-red-600 text-xl font-bold"
                                >
                                    ×
                                </button>

                                {/* Header */}
                                <h2 className="text-[28px] mulish-font font-bold mb-4">
                                    A few more questions
                                </h2>

                                <div className="space-y-4 mb-2">
                                    {/* Question 6: City Search */}
                                    <div>
                                        <p className="font-semibold mb-1 mulish-font">
                                            6. In which city are you looking to buy?
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="Search address, city, zip"
                                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    {/* Question 7: Pre-tax Annual Income */}
                                    <div>
                                        <p className="font-semibold mb-1 mulish-font">
                                            7. What's the estimated pre-tax annual income for your household?
                                        </p>
                                        <p className="text-sm text-gray-500 mb-2">
                                            Include all taxable income for household occupants over 18 years old.
                                        </p>
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-1 relative">
                                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                                                <input
                                                    type="number"
                                                    className="w-full border border-gray-300 rounded-md py-2 pl-8 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <select
                                                value={incomePeriod}
                                                onChange={(e) => setIncomePeriod(e.target.value)}
                                                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="year">/year</option>
                                                <option value="month">/month</option>
                                                <option value="week">/week</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                        <button
                                            className="w-1/2 border border-[#8A1538] text-[#8A1538] py-2 font-semibold rounded"
                                            onClick={() => {
                                                setShowModal3(true);
                                                setShowModal4(false);
                                            }}
                                        >
                                            Back
                                        </button>
                                        <button
                                            className="w-1/2 bg-[#8A1538] hover:bg-[#72152e] text-white py-2 font-semibold rounded"
                                            onClick={() => {
                                                setShowModal4(false);
                                                // setShowModal3(false);
                                            }}
                                        >
                                            View Result
                                        </button>
                                    </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <div
                style={{ fontFamily: 'Poppins' }}
                className="bg-[#FFE0E9] mt-8 sm:mt-10 lg:mt-12 px-4 sm:px-6 lg:px-6 py-6 sm:py-8 lg:py-10"
            >
                <div className="max-w-full sm:max-w-4xl lg:max-w-[78rem] mx-auto flex flex-col md:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                    {/* Text Section */}
                    <div className="md:w-2/3">
                        <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold mb-2 sm:mb-3 lg:mb-4">
                            Benefits of down payment assistance programs
                        </h2>
                        <p className="text-base sm:text-lg lg:text-[22px] text-[#000000] mb-4 sm:mb-6">
                            It’s possible to qualify for a home loan with no money down or with a down payment amount as low as 3%. Using a program to get down payment assistance can provide additional benefits:
                        </p>

                        {/* Benefits List */}
                        <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                            {[
                                'Build home equity faster',
                                'Increase your home budget',
                                'Purchase a home sooner',
                            ].map((benefit, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2 text-sm sm:text-base lg:text-[19px] text-[#000000]"
                                >
                                    <CheckCircle className="text-green-600 w-4 sm:w-5 lg:w-5 h-4 sm:h-5 lg:h-5 mt-[2px]" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/4 mt-4 sm:mt-0">
                        <img
                            src={money}
                            alt="Down payment benefits"
                            className="rounded-lg w-full h-40 sm:h-48 lg:h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Financial;