
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import bgImage from '../assets/fore.svg';
import tour from '../assets/buy1.svg';
import Navbar2 from '../Navbar2';
import { useAuth } from '../Authprovider/AuthContext';
const Tour = () => {
   const { isLoggedIn } = useAuth();
  return (
    <>
      {/* <Navbar /> */}
      {isLoggedIn ? <Navbar2 /> : <Navbar />}
      <div
        className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-12 lg:px-12"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2
          className="text-2xl sm:text-3xl lg:text-[48px] font-bold mulish-font"
        >
          How to Find a Foreclosure
        </h2>
        <p
          style={{ fontFamily: 'Poppins' }}
          className="mt-3 sm:mt-4 lg:mt-5 text-lg sm:text-xl lg:text-[32px] font-medium"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div
        style={{ fontFamily: 'Poppins' }}
        className="max-w-full   mx-auto bg-[#F7F7F7] mt-8 sm:mt-10 lg:mt-12 rounded-lg overflow-hidden shadow-md p-4 sm:p-8 lg:p-12"
      >
        <img
          src={tour}
          alt="Touring a House"
          className="w-full h-64 sm:h-96 lg:h-[600px] object-cover rounded-md mb-4 sm:mb-6"
        />
        <p className="text-[#303A42] text-base sm:text-lg lg:text-[18px] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
            Want to buy a foreclosure but don’t know where to start? Seasoned investors  know where to find foreclosure listings, and there are plenty of  unscrupulous companies out there that have built ad-based, subscription  websites to pull you in. Just beware: Many of these sites are filled  with listings that are often inaccurate or outdated.
        </p>
        <p className="text-[#303A42] text-base sm:text-lg lg:text-[18px] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
            Below are eight ways to find foreclosure listings:
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          1. Foreclosure real estate agent
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
            Find a real estate agent who specializes in foreclosed properties. Search for agents in your area who have foreclosure experience. Your agent will be able to guide you  to foreclosure property listings on the Multiple Listing Service (MLS) — a database to which consumers do not have direct access.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          2. Check
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
            Of course, you can also find pre-foreclosures and bank-owned properties for free through app name. Go toexample.com, enter your search area and click 'Listing Type.' Then select  'Foreclosures' in the 'For Sale' section to view what's available now.  For what may become available in the future, select 'Foreclosed' or  'Pre-Foreclosure' in the 'Potential Listings' section.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          3. Newspaper
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
            A requirement for filing a foreclosure is that the Notice of Sale be  published in the local newspaper of record. Check the legal notices in  your local paper to find real auction houses operating in your area.  Once you’ve identified several legitimate companies, go online to check  their websites for listings and upcoming auctions.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          4. Bank websites
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
         Some banks — especially larger ones — list inventory of foreclosed  properties on their websites. The sites are generally searchable by  state and city and include prices, photos, descriptions and agent  contact information for each listing. <br /> <br />
         Some lenders hire asset management companies to handle their foreclosure  listings, so it's worthwhile to check those websites as well.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          5. Government agencies
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
         Some government agencies require that offers be submitted through a real estate agent, while others will accept them directly from consumers.  Check websites for online foreclosure listings and purchase procedures  from agencies including: Fannie Mae, the Federal Housing Administration, Treasury Department and Small Business Administration.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          6. Public records
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
         
Throughout the foreclosure process, various legal notices must be filed  in your County Recorder's Office. This information is public record and  available to anyone. Just visit your county's office and you can search  for a Notice of Default (NOD), lis pendens or Notice of Sale. Two benefits to searching public records? It's free,  and you may find newly posted properties that haven't yet reached many  of the online foreclosure data providers.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          7. Do a drive-by
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
        Tour the neighborhoods in which you’d like to buy and check for real  estate signs; you’ll likely see some marked “Foreclosure” or “Bank  Repo.” Call the agents whose names are on the signs and ask about other  foreclosure listings that may be coming on the market — you just may get a jump on other buyers by asking about new foreclosures not yet listed.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          8. Auction houses
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
        Auction companies often hold huge foreclosure auctions, sometimes  selling hundreds of properties in a single day. Experts disagree about  whether auctions are great places to buy foreclosures; sometimes the  excitement of bidding falsely escalates prices, and there are risks to  buying properties “as is.” But it is possible to find deals — as long as you do your homework.
        </p>

       
      </div>
      <Footer />
    </>
  );
};

export default Tour;