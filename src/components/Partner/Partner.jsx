// import React from 'react'
// import Navbar2 from '../Navbar2'
// import guy from '../assets/guy.svg'
// import bgImage from '../assets/bgpart.svg'
// import partner from '../assets/partner.svg'
// import partner2 from '../assets/partner2.svg'
// import partner3 from '../assets/partner5.svg'
// import partner4 from '../assets/partner6.svg'
// import partner5 from '../assets/partner7.svg'
// const Partner = () => {
//     const industries = [
//         {
//             title: "I am a seller",
//             image: guy, 
//         },
//         {
//             title: "I'm a property manager",
//             image: partner,
//         },
//         {
//             title: "I'm a landlord",
//             image: partner2,
//         },
//         {
//             title: "I'm a lender or loan officer",
//             image: partner3,
//         },
//         {
//             title: "I am a Remodeling Company",
//             image: partner4,
//         },
//         {
//             title: "I am a brand or local advertiser",
//             image: partner5,
//         },
//     ];
//     return (
//         <>
//             <Navbar2 />
//             <div
//                 className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-10 lg:px-12"
//                 style={{ backgroundImage: `url(${bgImage})` }}
//             >
//                 <h2
//                     className="text-3xl sm:text-4xl lg:text-[48px] font-bold mulish-font"
//                 >
//                     Partner with HomVill to Grow Your Business.
//                 </h2>
//                 <p
//                     style={{ fontFamily: 'Poppins' }}
//                     className="mt-5 text-xl sm:text-2xl lg:text-[32px] font-medium"
//                 >
//                     Reach millions of buyers, sellers and renters on the largest real estate network on the web.

//                 </p>
//             </div>
//             <div className=" py-8  bg-[#F7F7F7]">
//                 <h2 className="text-[36px] px-12 font-semibold mulish-font mb-6 text-[#1A1A1A]">Select your industry to get started</h2>

//                 <div className="grid grid-cols-1 px-12 sm:grid-cols-2 lg:grid-cols-2 gap-6">
//                     {industries.map((industry, index) => (
//                         <div key={index} className="border rounded-xl overflow-hidden shadow-sm bg-white flex flex-col">
//                             <img src={industry.image} alt={industry.title} className="w-[641px] h-[298px] p-2 rounded-2xl object-cover" />

//                             <div className="p-4 flex items-center justify-between">
//                                 <p className="text-[36px] rozha-one-regular text-[#1A1A1A] font-semibold leading-[1.1]">{industry.title}</p>
//                                 <button
//                                     style={{ fontFamily: 'Poppins' }}
//                                     className="bg-[#8A1538] text-white text-[32px] px-2 py-2 rounded-md whitespace-nowrap"
//                                 >
//                                     Get Started
//                                 </button>

//                             </div>

//                         </div>
//                     ))}
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Partner

import React from 'react'
import Navbar2 from '../Navbar2'
import guy from '../assets/guy.svg'
import bgImage from '../assets/bgpart.svg'
import partner from '../assets/partner.svg'
import partner2 from '../assets/partner2.svg'
import partner3 from '../assets/partner5.svg'
import partner4 from '../assets/partner6.svg'
import partner5 from '../assets/partner7.svg'
import Footer from '../Footer'
const Partner = () => {
    const industries = [
        {
            title: "I am a seller",
            image: guy, 
        },
        {
            title: "I'm a property manager",
            image: partner,
        },
        {
            title: "I'm a landlord",
            image: partner2,
        },
        {
            title: "I'm a lender or loan officer",
            image: partner3,
        },
        {
            title: "I am a Remodeling Company",
            image: partner4,
        },
        {
            title: "I am a brand or local advertiser",
            image: partner5,
        },
    ];
    return (
        <>
            <Navbar2 />
            <div
                className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-10 lg:px-12"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h2
                    className="text-3xl sm:text-4xl lg:text-[48px] font-bold mulish-font"
                >
                    Partner with HomVill to Grow Your Business.
                </h2>
                <p
                    style={{ fontFamily: 'Poppins' }}
                    className="mt-5 text-xl sm:text-2xl lg:text-[32px] font-medium"
                >
                    Reach millions of buyers, sellers and renters on the largest real estate network on the web.
                </p>
            </div>
            <div className="py-8 bg-[#F7F7F7]">
                <h2 className=" text-[20px] md:text-[36px] px-4  md:px-12 font-semibold mulish-font mb-6 text-[#1A1A1A]">Select your industry to get started</h2>

                <div className="grid grid-cols-1 px-4 xs:px-6 sm:px-12 md:px-12 lg:px-12 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
                    {industries.map((industry, index) => (
                        <div key={index} className="border rounded-xl overflow-hidden shadow-sm bg-white flex flex-col">
                            <img 
                                src={industry.image} 
                                alt={industry.title} 
                                className="w-full h-[298px] p-2 rounded-2xl object-cover max-w-full h-auto min-[360px]:max-h-[200px] sm:max-h-[250px] md:max-h-[298px]"
                            />
                            <div className="p-4 flex items-center justify-between flex-col min-[360px]:flex-row gap-2 min-[360px]:gap-4">
                                <p className="text-[36px] rozha-one-regular text-[#1A1A1A] font-semibold leading-[1.1] text-base min-[360px]:text-xl sm:text-2xl md:text-3xl lg:text-[36px]">
                                    {industry.title}
                                </p>
                                <button
                                    style={{ fontFamily: 'Poppins' }}
                                    className="bg-[#8A1538] text-white text-[32px] px-3 py-3 rounded-md whitespace-nowrap text-sm min-[360px]:text-base sm:text-xl md:text-2xl lg:text-[28px] w-full min-[360px]:w-auto"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Partner 