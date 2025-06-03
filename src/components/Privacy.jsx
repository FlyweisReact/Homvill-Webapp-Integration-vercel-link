// import React from "react";
// import scrollIcon from "./assets/scroll.svg"; 
// import bg from './assets/bg7.svg'
// import Navbar from "./Navbar";
// const HeroSection = () => {
//     return (
//         <>
//             <Navbar />
//             <div
//                 className="w-full bg-cover bg-center text-white h-[500px] px-4 relative"
//                 style={{ backgroundImage: `url(${bg})`, fontFamily: 'Poppins' }}
//             >
//                 <div className="absolute inset-0 bg-[#00386166] bg-opacity-60"></div>
//                 <div className=" mx-auto text-center space-y-6">
//                     <div className='relative z-10 text-start pt-10 ps-4 md:ps-8'>
//                         <h2 className="text-2xl md:text-[48px] font-semibold leading-[1.2] mulish-font">
//                             Learn how we collect, use, and protect your <br /> personal information to ensure your privacy.
//                         </h2>
//                         <p className="mt-4 md:text-[28px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

//                         {/* Search Input */}

//                     </div>


//                     <div className="relative z-10 text-center space-y-6 pt-24">
//                         <div className="text-3xl md:text-[18px] font-bold mulish-font">
//                             Scroll Down
//                         </div>
//                         <img src={scrollIcon} className="inline-flex items-center text-white text-sm font-semibold px-3 py-1 rounded-full mx-auto">

//                         </img>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// };

// export default HeroSection;
import React from "react";
import scrollIcon from "./assets/scroll.svg";
import bg from './assets/bg7.svg';
import Navbar from "./Navbar";
import Footer from "./Footer";
const HeroSection = () => {
    return (
        <>
            <Navbar />
            <div
                className="w-full bg-cover bg-center text-white h-[500px] px-4 sm:px-6 md:px-8 relative"
                style={{ backgroundImage: `url(${bg})`, fontFamily: 'Poppins' }}
            >
                <div className="absolute inset-0 bg-[#00386166] bg-opacity-60"></div>
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <div className="relative z-10 text-start pt-8 sm:pt-10 ps-4 sm:ps-6 md:ps-8">
                        <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold leading-[1.2] mulish-font">
                            Learn how we collect, use, and protect your <br className="hidden md:block" /> personal information to ensure your privacy.
                        </h2>
                        <p className="mt-4 text-base sm:text-lg md:text-[28px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>

                        {/* Search Input */}
                    </div>

                    <div className="relative z-10 text-center space-y-4 sm:space-y-4 pt-16 lg:md:pt-24">
                        <div className="text-lg sm:text-xl md:text-[18px] font-bold mulish-font">
                            Scroll Down
                        </div>
                        <img
                            src={scrollIcon}
                            className="inline-flex items-center text-white text-sm font-semibold px-3 py-1 rounded-full mx-auto w-8 sm:w-10 md:w-12"
                            alt="Scroll down icon"
                        />
                    </div>
                </div>
            </div>
            <div className="px-6 md:px-20 py-10 bg-white text-[#00000099]">
                {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    <span className="text-purple-700">Privacy Policy</span>
                </h1> */}
                <div className="relative mb-8">
                    {/* Gradient blur circle */}
                    <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-32 h-24 bg-[#8A153866] rounded-full blur-2xl  z-0"></div>

                    {/* Text on top of the blur */}
                    <h1 className="relative text-3xl font-extrabold text-gray-800 z-10">
                        Privacy Policy
                    </h1>
                </div>
                <div style={{fontFamily:'Poppins'}} className="ml-12">

                    <p className="mb-6 text-sm md:text-base">
                        [Your Real Estate Company Name]{" "}
                        (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
                        protecting your privacy. This Privacy Policy explains how we collect,
                        use, disclose, and safeguard your information when you visit our
                        website, use our services, or interact with us.
                    </p>

                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                        Information We Collect
                    </h2>
                    <ul className="mb-6 list-inside space-y-4 text-sm md:text-base">
                        <li>
                            Personal Information: Name, email address, phone number, mailing address, or any other details you provide when contacting us, registering on our site, or using our services.
                        </li>
                        <li>
                            Property Details: Information related to properties you are buying, selling, or renting, such as addresses and preferences.
                        </li>
                        <li>
                            Financial Information: Payment details, mortgage
                            pre-approval status, or other financial data, as required for
                            transactions.
                        </li>
                        <li>
                            Usage Data:Information about your use of our website, such as IP address, browser type, pages visited, and the time spent on the site.
                        </li>
                    </ul>

                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                        How We Use Your Information
                    </h2>
                    <ul className="mb-6  list-inside space-y-4 text-sm md:text-base">
                        <li>
                            Facilitate real estate transactions, such as buying, selling, or renting properties.
                        </li>
                        <li>
                            Communicate with you about properties, inquiries, and services.
                        </li>
                        <li>
                            Provide customer support and respond to your questions or concerns.
                        </li>
                        <li>
                            Personalize your experience on our website and improve its
                            functionality.
                        </li>
                        <li>Comply with legal and regulatory requirements.</li>
                    </ul>

                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                        Information Sharing and Disclosure
                    </h2>
                    <ul className="mb-6  list-inside space-y-4 text-sm md:text-base">
                        <li>
                            Service Providers: Third-party vendors assisting with
                            property listings, marketing, or transaction processes.
                        </li>
                        <li>
                            Legal Authorities: When required by law, court order,
                            or governmental regulation.
                        </li>
                        <li>
                            Business Partners: With your consent, for joint
                            marketing or service offerings.
                        </li>
                    </ul>
                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                        Data Security
                    </h2>
                    <p className="mb-6 text-sm md:text-base">
                        We take appropriate technical and organizational measures to safeguard your information against unauthorized access, disclosure, or misuse. However, no method of transmission over the internet or electronic storage is entirely secure.
                    </p>
                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                        Your Choices
                    </h2>
                    <p className="mb-6 text-sm md:text-base">
                        You may opt out of receiving promotional emails or update your personal information by contacting us directly. Note that some information may be retained to comply with legal obligations or facilitate ongoing transactions.
                    </p>
                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                        Cookies and Tracking Technologies
                    </h2>
                    <p className="mb-6 text-sm md:text-base">
                        You may opt out of receiving promotional emails or update your personal information by contacting us directly. Note that some information may be retained to comply with legal obligations or facilitate ongoing transactions.
                    </p>
                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                        Third-Party Links
                    </h2>
                    <p className="mb-6 text-sm md:text-base">
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites.
                    </p>
                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                        Changes to This Privacy Policy
                    </h2>
                    <p className="mb-6 text-sm md:text-base">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Effective Date" will be updated accordingly.
                    </p>
                </div>
                </div>
                <Footer/>
            </>
            );
};

            export default HeroSection;