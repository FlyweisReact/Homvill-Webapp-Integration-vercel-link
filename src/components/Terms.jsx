import React from "react";
import scrollIcon from "./assets/scroll.svg";
import bg from './assets/terms2.svg';
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
                            {/* Learn how we collect, use, and protect your <br className="hidden md:block" /> personal information to ensure your privacy. */}
                            Please review our policies to understand your rights and responsibilities when using our services.
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
                        Terms and Conditions

                    </h1>
                </div>
                <div style={{fontFamily:'Poppins'}} className="ml-12">

                    <p className="mb-6 text-sm md:text-base">
                       Your use of our website is governed by the following terms and conditions (“Terms of Use”), as well as the CARDONE CAPITAL Privacy Policy and other operating rules, minimum qualifications and cautions posted throughout the website or presented to you individually during the course of your use of the website (collectively, the “Terms”). The Terms govern your use of the website and CARDONE CAPITAL reserves the right to update or replace the Terms any time without notice.  You are advised to review the Terms for any changes when you visit the website even if you have not received a notification of changes as you are bound by them even if you have not reviewed them. Your viewing and use of the website after such change constitutes your acceptance of the Terms and any changes to such terms. If at any time you do not want to be bound by the Terms you should logout, exit and cease using the website immediately.
                    </p>

                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                        Intended Use of Website
                    </h2>
                    <ul className="mb-6 list-inside space-y-4 text-sm md:text-base">
                        <li>
                            CARDONE CAPITAL is not a broker-dealer or placement agent. At no time does CARDONE CAPITAL offer, broker, advise, purchase, sell or otherwise transact in securities regulated by the SEC or federal or state law. CARDONE CAPITAL does not accept, hold or transfer cash or securities. CARDONE CAPITAL does not guarantee that a Company seeking investment will achieve any level of success or that any proposed offering will qualify under applicable federal and state securities laws.
                        </li>
                        <li>
                            CARDONE CAPITAL is not a personal financial advisor. CARDONE CAPITAL, whether through the website or otherwise, does not provide personal financial advice, loans or credit, banking, consumer credit ratings, credit decisions, financial products, brokerage accounts, insurance, tax advice, legal advice, or financial or legal services of any kind. 

                        </li>
                        <li>
                            CARDONE CAPITAL does not guarantee any results to anyone. All users of the website are responsible for making their own decisions to use the website and for any activity taken on the website, including without limitation registering and making an investment or otherwise.
                        </li>
                        
                    </ul>

                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                        User Registration
                    </h2>
                    <ul className="mb-6  list-inside space-y-4 text-sm md:text-base">
                        <li>
                           If you are accepting the Terms on behalf of an organization or entity, rather than in an individual capacity, you represent and warrant that you are authorized to accept the Terms on that organization or entity’s behalf and bind them to these Terms (in which case, the references to “you” and “your” in these Terms, except for in this sentence, refer to that organization or entity).

                        </li>
                        <li>
                            Only real persons at or above the age of 18 may register for an account and use the website. Registering for an account on the website creates no commitment or obligation on the registered user to make any investment or seek any investment. All information you provide to the website must be truthful, accurate and complete in all material respects. Our registration process may use third-party validation technology, including those provided by third-party social media sites, to attempt to confirm your qualification to use the website.

                        </li>
                        <li>
                           CARDONE CAPITAL may reject any application to register an individual or an organization or entity for failure to achieve validation through available methods or otherwise meet CARDONE CAPITAL’s registration requirements.

                        </li>
                        <li>
                            Your registration and the use of any third-party site is subject to the terms and conditions and policies of such sites and CARDONE CAPITAL is not responsible or liable for any harm resulting from the use or misuse of those sites, including when such harm could or does affect your account on this website or use of the website. 
                        </li>
                    </ul>

                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                       Registered Account Obligations

                    </h2>
                    <ul className="mb-6  list-inside space-y-4 text-sm md:text-base">
                        <li>
                            The named registered user of an account is the only person that may use the account and it may not be transferred to anyone else. 
                        </li>
                        <li>
                            You are responsible for maintaining the confidentiality of your username and password and to periodically change your password to maintain security. If you have concerns that your username or password may have been compromised and suspect that unauthorized access to your account or the website has occurred, you must immediately contact CARDONE CAPITAL’s investor support through a secure method (which may not be through your website account).

                        </li>
                    </ul>
                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                        Content Use Limitations
                    </h2>
                    <p className="mb-6 text-sm md:text-base">
                        Your use of the website and its videos, webinars, images, infographics, alerts, text, articles, assessments, checklists, forms, ratings, design, data, source code, analytics, photos, software, trademarks, copyrights, and other information (“Content”) may only be used for the lawful and intended purposes expressly authorized by CARDONE CAPITAL. If you access this website from outside the United States, you are solely responsible for ensuring compliance with the laws of your specific jurisdiction, as well as any restrictions that you may be subject to by a department of the United States government. Any misuse or unauthorized use of the website and its Content, or other violations of the Terms may violate Applicable Law (see below), including without limitation SEC regulations and applicable state securities laws, copyright laws (including the Digital Millennium Copyright Act), trademark laws, the laws of privacy, laws of publicity, identity theft and communications statutes and regulations, in which case CARDONE CAPITAL is authorized to terminate your account and access to the website at any time and without notice and report you to the appropriate authorities and other interested parties.

                    </p>
                    <h2 className="text-[18px] font-semibold text-gray-900 mb-2">
                        Prospective Investor Accounts

                    </h2>
                    <p className="mb-6 text-sm md:text-base">
                        Any person or entity that is considering making an investment with a Company that posts its fundraising plans on the website, or, after the fundraising plan becomes a qualified offering, makes an investment, does so at his or her own risk. All investment carries risk that you may lose some or all of your investment. No Content on the website is a replacement for performing your own due diligence, exercising good judgement, and seeking financial, investment, tax or legal advice from qualified and licensed professionals with knowledge of your personal circumstances. Any registered financial, legal or tax representatives or firm working for or with CARDONE CAPITAL or communicating with you or users in general through the website are not your personal advisors and do not have knowledge about your personal circumstances and anything they post is for informational purposes only and may not be accurate to your situation and you agree that you shall not rely on Content on the website in making personal decisions about an investment or the potential legal, tax or financial consequences of such investment. You are encouraged to seek personal professional advice from qualified and licensed professionals.

                    </p>
                    <p className="mb-6 text-sm md:text-base">
                        You are solely responsible for your investment decisions. While you may be asked about your identity, individual financial circumstance and investment experience and sophistication during your engagement with the website, CARDONE CAPITAL and its advisors and vendors are not responsible to verify the veracity of the information that you provide, even if you certify to its truth or undergo a suitability review. Whether you are an “Accredited Investor”, as such is defined under securities law, or a non-accredited investor, or an institutional investor, CARDONE CAPITAL and the Companies seeking investment are relying on your representations with respect to your investment experience, your financial status and your eligibility to invest. You may, further, be held personally liable for your fraud, negligence and other bad acts that may result from any false representations you make.


                    </p>
        
                </div>
                </div>
                <Footer/>
            </>
            );
};

            export default HeroSection;