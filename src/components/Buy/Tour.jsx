
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import bgImage from '../assets/bg2.svg';
import tour from '../assets/tour.jpg';
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
          What to Look for When Touring a House
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
          While open houses can be a great way to get a general feel for a property and the local real estate market, privately touring a home offers distinct advantages. A private tour allows you to spend more time in the house, examine details more closely, and ask your real estate agent questions without the distraction of other potential buyers. Most home buyers surveyed by Zillow in 2024 agreed the only way to understand the layout of a home is to see it in person (80%).
        </p>
        <p className="text-[#303A42] text-base sm:text-lg lg:text-[18px] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          During a private tour, you can thoroughly inspect each room, test appliances, talk to neighbors, and get a true sense of what it’ll be like to live in the home and community. This is when you’ll decide whether the space is the right fit for you, your family, your needs and preferences, and your lifestyle. Here are 11 things to look for when touring a house:
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          1. Signs of damage
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          When touring a house, look for signs of normal wear and tear and more serious damage. For example, stains on ceilings or walls could indicate water damage from a current or previous leak. Normal wear and tear will typically present as faded paint, knicks or dents in walls and molding, and small nail holes from hanging things — all easy fixes compared to severe damage.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          2. Signs of pests
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          Check for any evidence of pest infestations, such as small holes in woodwork, droppings in hidden corners and cabinets, strong musky odors, and gnaw marks on walls, furniture, and packaged food. Pests can carry diseases, cause significant damage, and be challenging to get rid of.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          3. Malfunctioning appliances
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          You’ll also want to test the appliances when touring a home to ensure everything works properly. This includes faucets, the oven, microwave, refrigerator, dishwasher, washer and dryer, and anything else included in the home. While minor issues can be easily fixed, major damage or malfunctions are costly to repair and should be considered in your decision-making process. If you notice an issue, inform your real estate agent. You may receive additional cash to cover the repair as a seller concession.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          4. Storage space
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          Adequate storage space is often overlooked but can significantly impact your daily life in a home. Sixty-five percent of successful buyers surveyed in 2024 said they considered “ample storage” a very or extremely important home characteristic. Note the size and number of closets in bedrooms and hallways. Is there a pantry in the kitchen for storing food and small appliances? Are there enough cabinets for storage if there isn’t a full-sized pantry? <br /> <br />
          Look for other storage areas, such as attics, basements, extra closets, a mudroom, and even an attached garage with enough room for shelving and cabinetry. As you tour the home, consider your current and future storage needs. If you have a growing family or enjoy hobbies that require equipment storage, ensure the house can accommodate your needs.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          5. The floorplan
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          The layout of a home is essential to how you'll live in and enjoy the space. Many property listings now include digital floor plans to help buyers get a feel for the home before touring. Home buyers continue to agree when surveyed that they’re more likely to view a home if the listing includes a floor plan they like (86%). <br /> <br />
          As you tour the house, pay attention to the flow of each room. Is the layout logical and functional for your lifestyle? For example, an open floor plan might be great for entertaining, but it may not suit your needs if you prefer more defined spaces. You’ll also want to pay attention to the location of bedrooms and other rooms relative to living areas. Is there enough separation for privacy? Consider whether the layout would require any major renovations to meet your needs, and the additional cost to make the renovation.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          6. The location and size of each room
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          The placement and dimensions of each room impact what you can do with the space. Ensure the bedrooms are large enough to comfortably fit your furniture and other belongings. Consider how a living room or kitchen's location might impact a bedroom's noise level. Do you prefer bedrooms close together or far apart; on the first floor or second? <br /> <br />
          Ask yourself similar questions when assessing other rooms in the house. How many bathrooms will you need? Are the bathrooms big enough? Will you need to share a bathroom when entertaining guests? While you can use furniture and decorations to alter a space, removing walls to change the size or location of a room may not always be within the budget. Think about what you can live with and what you might want to change in the future.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          7. The exterior
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          A home's exterior isn’t just about curb appeal. It’s part of the home’s structure, which helps protect it from the elements. Make sure the home’s exterior is sturdy and strong, and that the siding and other elements, like fencing, are intact. It’s also necessary to pay close attention to potential hazards, such as large trees that overhang the house, which could pose a risk during storms. <br /> <br />
          Some houses are in locations prone to earthquakes or hurricanes. In these areas, look for relevant safety features or ask about the home's history with such events. Understanding these potential risks can help you make an informed decision and prepare for future home maintenance or homeowners insurance needs.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          8. Parking
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          Adequate parking can greatly impact your daily life and the home's value. If you own multiple vehicles, ensure the property offers sufficient space to park them comfortably. Out of buyers surveyed, 65% considered a home that offered off-street parking or a garage very or extremely important and 55% said the same about a home that offered them their own assigned parking place. Check if there is a driveway, and if so, the number of cars that can fit? If there's a garage, check its size and condition. For homes without off-street parking, find out about the availability and regulations of street parking. <br /> <br />
          Consider your future parking needs. If you're planning to expand your family or purchase additional vehicles, will the current parking situation be sufficient? Where will guests park?
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          9. Structural condition
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          While the home's structural condition will be thoroughly assessed during the home inspection, there are some basic elements you can observe on your own. Look for any cracks in the walls or ceilings, as these can indicate foundation issues. Check if the floors feel level as you walk across them, and be aware of any squeaking or bouncing as you move around. Take note of the roof as well — are there any bald spots or missing shingles? You’ll also want to pay attention to the condition of windows, doors, and roofing. Do they open and close smoothly? Are there gaps in the seams while closed? <br /> <br />
          Structural integrity is crucial for the longevity and safety of the home. If you notice anything concerning, you can have the home inspector address the issues to help inform your decision and the potential cost of repairs.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          10. The minor details
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          Some of a home's most important factors aren't immediately obvious, such as smells, sight lines, noise levels, etc. As you tour the house, engage your senses to see if you notice any odd or musty odors that could indicate mold or mildew. Pay attention to how the layout appears and whether the views are pleasant inside and outside the house. Are the walls well-insulated against sound, or is it noisier than expected? As you move through the space, does it feel comfortable? Is there enough room to move freely, or does it feel cramped? These subtle factors can significantly impact your day-to-day enjoyment of the home.
        </p>

        <h3 className="font-semibold text-base sm:text-lg lg:text-[18px] text-[#303A42] mt-4 sm:mt-5 lg:mt-6 mb-2">
          11. The neighborhood
        </h3>
        <p className="text-base sm:text-lg lg:text-[18px] text-[#303A42] mb-4 leading-relaxed sm:leading-relaxed lg:leading-relaxed">
          The neighborhood and surrounding area are also important to consider when touring a house. Take note of how the neighborhood looks and sounds. If you get the opportunity, talk to the neighbors and ask them what they like best about living there. Additionally, check the proximity to amenities that are most important to you, such as schools, grocery stores, parks, and public transportation. About three in five buyers (62%) considered neighborhood walkability highly important. <br /> <br />
          A house tour is the time to ensure the home is right for you. By paying attention to how it looks and feels, its condition, and everything it has to offer, you’ll be better equipped to make one of the most important decisions of your life. Get started on your home-buying journey by viewing homes for sale in your area and speaking with a qualified agent today.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Tour;