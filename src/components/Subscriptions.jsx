
// import React from 'react';
// import Navbar from './Navbar';
// import vector from './assets/vector.svg'
// import vector2 from './assets/Vector (73).svg'
// import vector3 from './assets/Vector (74).svg'
// import Footer from './Footer';
// const PricingPlans = () => {
//     return (
//         <>
//             <Navbar />
//             <div style={{ fontFamily: 'Poppins' }} className="py-12 px-4 bg-white text-center">
//                 {/* Title */}
//                 <h2 className="text-[48px] font-bold text-[#8A1538] mb-4">Choose Your Plan</h2>

//                 {/* Toggle */}
//                 <div className="inline-flex border border-[#8A1538] overflow-hidden mb-4">
//                     <button className=" text-[#8A1538] px-6 py-2 text-sm font-semibold">
//                         Monthly
//                     </button>
//                     <button className="px-6 py-2 text-sm bg-[#FFE0E9] text-[#81A7BA] font-semibold">
//                         Yearly (Save 2.5%)
//                     </button>
//                 </div>

//                 {/* Subtitle */}
//                 <p style={{ fontFamily: 'Poppins' }} className="text-[30px] mb-20">
//                     <span className="text-[#81A7BA] font-semibold">Best Plans For </span>
//                     <span className="text-[#8A1538] font-semibold">Office Management</span>
//                 </p>

//                 {/* Pricing Cards */}
//                 <div className="flex justify-center items-end gap-6 flex-wrap">
//                     {/* Basic Card */}
//                     <div className=" bg-white border border-[#1D1D1D] rounded-xl shadow p-6 flex flex-col justify-between min-h-[380px]">
//                         <div className="text-center mb-4">
//                             <span className=" text-[#1D1D1D] px-4 py-1 rounded-lg text-[24px] font-semibold">
//                                 Basic
//                             </span>
//                             <h3 className="text-4xl font-bold mt-3">$199</h3>
//                             <p className="text-sm">User/Month</p>
//                         </div>

//                         <ul className="space-y-2 text-left flex-1 mt-4">
//                             {[...Array(4)].map((_, i) => (
//                                 <li key={`g-${i}`} className="flex items-start gap-2 text-[#034F75]">
//                                     <img src={vector2} alt="icon" className="w-4 h-4 mt-1" />
//                                     <span>Lorem Ipsum is simply dummy</span>
//                                 </li>
//                             ))}
//                             {[...Array(4)].map((_, i) => (
//                                 <li key={`g-${i}`} className="flex items-start gap-2 text-[#034F75]">
//                                     <img src={vector3} alt="icon" className="w-4 h-4 mt-1" />
//                                     <span className='line-through'>Lorem Ipsum is simply dummy</span>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="w-full mt-6 py-2 rounded-md font-semibold bg-pink-100 text-[#7d0b3e]">
//                             Choose Plan
//                         </button>
//                     </div>

//                     {/* Gold Card — visually taller by negative margin top */}
//                     <div style={{ fontFamily: 'Poppins' }} className="w-80 bg-[#7d0b3e] text-white border rounded-xl shadow p-6 flex flex-col justify-between min-h-[550px] -mt-12 z-10">
//                         <div className="text-center mb-4">
//                             <span className="border border-[white] text-white  px-4 py-1 rounded-lg text-[24px] font-semibold">
//                                 Gold
//                             </span>
//                             <h3 className="text-4xl font-bold mt-14">$499</h3>
//                             <p className="text-sm">User/Month</p>
//                         </div>

//                         <ul className="space-y-2 text-left flex-1 mt-4">
//                             {[...Array(8)].map((_, i) => (
//                                 <li key={`g-${i}`} className="flex items-start gap-2 text-green-300">
//                                     <img src={vector} alt="icon" className="w-4 h-4 mt-1" />
//                                     <span>Lorem Ipsum is simply dummy</span>
//                                 </li>
//                             ))}
//                         </ul>

//                         <button className="w-full mt-6 py-2 rounded-md font-semibold bg-white text-[#7d0b3e] border-2">
//                             Choose Plan
//                         </button>
//                     </div>

//                     {/* Premium Card */}
//                     <div className=" bg-white border border-[#1D1D1D] rounded-xl shadow p-6 flex flex-col justify-between min-h-[380px]">
//                         <div className="text-center mb-4">
//                             <span className=" text-[#1D1D1D] px-3 py-1 rounded-lg text-[24px] font-semibold">
//                                 Premium 👑
//                             </span>
//                             <h3 className="text-4xl font-bold mt-3">$999</h3>
//                             <p className="text-sm">User/Month</p>
//                         </div>
//                         {/* <ul className="space-y-2 text-left flex-1 mt-4">
//             {[...Array(8)].map((_, i) => (
//               <li key={`p-${i}`} className="text-green-600">✅ Lorem Ipsum is simply dummy</li>
//             ))}
//           </ul> */}
//                         <ul className="space-y-2 text-left flex-1 mt-4">
//                             {[...Array(8)].map((_, i) => (
//                                 <li key={`g-${i}`} className="flex items-start gap-2 text-[#034F75]">
//                                     <img src={vector2} alt="icon" className="w-4 h-4 mt-1" />
//                                     <span>Lorem Ipsum is simply dummy</span>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="w-full mt-6 py-2 rounded-md font-semibold bg-pink-100 text-[#7d0b3e]">
//                             Choose Plan
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default PricingPlans;

import React from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import vector from './assets/vector.svg';
import vector2 from './assets/Vector (73).svg';
import vector3 from './assets/Vector (74).svg';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../store/slices/authSlice';
import { useGetAllSubscriptionsQuery } from '../store/api/subscriptionApiSlice';

const PricingPlans = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const { data: subscriptions, isLoading, isError, error } = useGetAllSubscriptionsQuery();

    // Static fallback data
    const staticSubscriptions = [
        {
            name: "Basic",
            emozi: "🔥",
            price: 19.99,
            Lines: [
                { Feactue_name: "Users", Quantity: 1 },
                { Feactue_name: "Basic Property Listings", Quantity: 10 },
                { Feactue_name: "Email Support", Quantity: 1 },
                { Feactue_name: "Standard Analytics", Quantity: 1 },
            ],
            Feactue_name: "Base pack",
        },
        {
            name: "Gold",
            emozi: "🔥",
            price: 499,
            Lines: [
                { Feactue_name: "Users", Quantity: 1 },
                { Feactue_name: "Premium Property Listings", Quantity: 50 },
                { Feactue_name: "Priority Email Support", Quantity: 1 },
                { Feactue_name: "Advanced Analytics", Quantity: 1 },
                { Feactue_name: "Marketing Tools", Quantity: 1 },
                { Feactue_name: "Custom Branding", Quantity: 1 },
                { Feactue_name: "API Access", Quantity: 1 },
                { Feactue_name: "Dedicated Account Manager", Quantity: 1 },
            ],
            Feactue_name: "Gold pack",
        },
        {
            name: "Premium",
            emozi: "👑",
            price: 999,
            Lines: [
                { Feactue_name: "Users", Quantity: 1 },
                { Feactue_name: "Unlimited Property Listings", Quantity: "Unlimited" },
                { Feactue_name: "24/7 Support", Quantity: 1 },
                { Feactue_name: "Premium Analytics", Quantity: 1 },
                { Feactue_name: "Advanced Marketing Tools", Quantity: 1 },
                { Feactue_name: "Custom Branding", Quantity: 1 },
                { Feactue_name: "API Access", Quantity: 1 },
                { Feactue_name: "Dedicated Account Manager", Quantity: 1 },
            ],
            Feactue_name: "Premium pack",
        },
    ];

    const renderPricingCards = () => {
        if (isLoading) {
            return <p className="text-center text-gray-600">Loading Subscription Plans...</p>;
        }
        if (isError) {
            return (
                <div className="text-center text-red-600">
                    <p>Error loading subscriptions: {error?.data?.message || 'An error occurred'}</p>
                    <p>Displaying fallback data.</p>
                </div>
            );
        }

        const plans = subscriptions?.success && subscriptions?.data?.length
            ? subscriptions.data
            : staticSubscriptions;

        return (
            <div className="flex flex-col sm:flex-row justify-center items-end gap-4 sm:gap-6 flex-wrap">
                {plans.map((plan, index) => {
                    const isGold = plan.name.toLowerCase() === 'gold';
                    const featuresToShow = plan.Lines.slice(0, isGold ? 8 : 4); // Show 8 for Gold, 4 for others
                    const unavailableFeatures = isGold ? [] : plan.Lines.slice(4, 8); // Show unavailable for non-Gold

                    return (
                        <div
                            key={index}
                            style={{ fontFamily: 'Poppins' }}
                            className={`${isGold
                                    ? 'bg-[#7d0b3e] text-white border sm:-mt-10 md:-mt-12 lg:-mt-12 z-10'
                                    : 'bg-white border border-[#1D1D1D]'
                                } rounded-xl shadow p-4 sm:p-6 flex flex-col justify-between min-h-[${isGold ? '400px sm:min-h-[500px] md:min-h-[530px] lg:min-h-[550px]' : '300px sm:min-h-[340px] md:min-h-[360px] lg:min-h-[380px]'}] w-full sm:w-72 md:w-80`}
                        >
                            <div className="text-center mb-4">
                                <span
                                    className={`${isGold ? 'border border-white text-white' : 'text-[#1D1D1D]'
                                        } px-4 py-1 rounded-lg text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold`}
                                >
                                    {plan.name} {plan.emozi}
                                </span>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-${isGold ? '8 sm:mt-10 md:mt-12 lg:mt-14' : '3'}">
                                    ${plan.price}
                                </h3>
                                <p className="text-xs sm:text-sm">User/Month</p>
                            </div>
                            <ul className="space-y-2 text-left flex-1 mt-4">
                                {featuresToShow.map((feature, i) => (
                                    <li key={`f-${index}-${i}`} className={`flex items-start gap-2 ${isGold ? 'text-green-300' : 'text-[#034F75]'} text-xs sm:text-sm`}>
                                        <img src={isGold ? vector : vector2} alt="icon" className="w-3 h-3 sm:w-4 sm:h-4 mt-1" />
                                        <span>{feature.Feactue_name} {feature.Quantity !== 1 ? `(${feature.Quantity})` : ''}</span>
                                    </li>
                                ))}
                                {unavailableFeatures.map((feature, i) => (
                                    <li key={`u-${index}-${i}`} className="flex items-start gap-2 text-[#034F75] text-xs sm:text-sm">
                                        <img src={vector3} alt="icon" className="w-3 h-3 sm:w-4 sm:h-4 mt-1" />
                                        <span className="line-through">{feature.Feactue_name} {feature.Quantity !== 1 ? `(${feature.Quantity})` : ''}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full mt-4 sm:mt-6 py-2 rounded-md font-semibold text-xs sm:text-sm ${isGold ? 'bg-white text-[#7d0b3e] border-2' : 'bg-pink-100 text-[#7d0b3e]'
                                    }`}
                            >
                                Choose Plan
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            {isAuthenticated ? <Navbar2 /> : <Navbar />}
            <div style={{ fontFamily: 'Poppins' }} className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-4 bg-white text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-[#8A1538] mb-4">
                    Choose Your Plan
                </h2>
                <div className="inline-flex border border-[#8A1538] overflow-hidden mb-4">
                    <button className="text-[#8A1538] px-4 py-2 text-xs sm:text-sm font-semibold">
                        Monthly
                    </button>
                    <button className="px-4 py-2 text-xs sm:text-sm bg-[#FFE0E9] text-[#81A7BA] font-semibold">
                        Yearly (Save 2.5%)
                    </button>
                </div>
                <p style={{ fontFamily: 'Poppins' }} className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                    <span className="text-[#81A7BA] font-semibold">Best Plans For </span>
                    <span className="text-[#8A1538] font-semibold">Office Management</span>
                </p>
                {renderPricingCards()}
            </div>
            <Footer />
        </>
    );
};

export default PricingPlans;
