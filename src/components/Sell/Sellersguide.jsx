
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import bgImage from '../assets/bg5.svg';
import tour from '../assets/sell1.svg';

const Tour = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-12 lg:px-12"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2
          className="text-2xl sm:text-3xl lg:text-[48px] font-bold mulish-font"
        >
         When to Lower the Price of Your House
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
            Every home seller expects their house to sell quickly, especially if you live in a fast-moving real estate market. But what do you do if those offers don’t start rolling in as quickly as you expect — or at all?
        </p>
        <p className="text-[#303A42] text-base sm:text-lg lg:text-[18px] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
            Pricing your home to sell is a bit of an art form, which is why many sellers end up adjusting  their list price within a few weeks. Nationwide, 25% of homes listed for sale had experienced a price cut in September 2024 — the start of the  slower Fall season, according to Zillow® economic data. About half of  sales that month were under list price, while a third sold over list  price, the data shows.
        </p>
        <p className="text-[#303A42] text-base sm:text-lg lg:text-[18px] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
            If you’re thinking about lowering your asking price, consider this: the longer a home is on the market, the lower your odds are of selling it for list price. The reason: Some homes develop a  stigma just by being on the market too long, even if there’s no major  issues with the home. It could be that a series of buyers made offers  but couldn’t obtain financing, but shoppers wouldn’t necessarily know  that. Instead, they see that the house hasn’t sold quickly and assume  there’s something wrong with it.<br/>
What’s more, if you live in a strong sellers market, Zillow data shows your odds of selling for list price, and quickly, are much higher. 
        </p>
        <p className="text-[#303A42] text-base sm:text-lg lg:text-[18px] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
            So is it the right time for you to consider a price adjustment? Consider these factors below.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          Nearby comps are priced lower
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
            When you select a list price for your home, you obviously hope to sell for as much as possible,  while still being competitive with other listings. Take a second look at other similar homes for sale in your neighborhood. Is it possible you priced your home too high  given your current market? Are other similar homes selling more quickly?
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          You’re not receiving offers
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
            While there are multiple possible reasons why nobody’s biting on your home, price is often the culprit. If you’re in a seller’s market with tight inventory, your new listing is likely to get a lot of  attention and/or offers if it’s priced right. For instance, in September 2024, a typical home for sale went from listing to pending in 20 days.  If buyers feel like they can find a similar home at a better value,  they’re unlikely to put in an offer, or even set up a showing. If people are viewing your listing online but not submitting an offer, or if  you’re getting open house attendance with no results, your price could  be the problem.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
         You’re getting showings, but low or no offers
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
            If people are touring your home, and coming with offers slightly below  your asking price, it could be a sign that you’re only a little off the  mark. If they’re coming in with offers way below asking, it’s likely a  sign that your home is desirable, but not competitive with other homes  for sale.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          Your home appraised low
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          Savvy sellers often pay for their own appraisal before they list as a way to  get an objective opinion on an appropriate list price. If you haven’t  gotten an appraisal already, it might be money well spent.<br/><br/>
          If the home appraises well below your asking price, then you have your  answer. If you’ve had a contract fall through due to a low appraisal  from the buyer’s appraiser, that’s another good indicator that a price  adjustment might be a good idea.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          Your home has been listed more than a month
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
            The longer a home sits on the market, the more likely it is that buyers  will assume something is wrong with it. Nationally, homes go from  listing to pending in 20 days on average. Some markets are longer and  others shorter, but if you’re not getting interest after a month – some  agents would say even 10 days — it could be time to adjust. Your agent,  who is a local market expert, will know whether the time on market is  long for your locale and can look up recent sales of comparable homes.  You also can look at the Zillow Home Values Index to see how quickly homes in your zip code sell.
        </p>

       

       
      </div>
      <Footer />
    </>
  );
};

export default Tour;