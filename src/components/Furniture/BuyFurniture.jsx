// import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar2 from '../Navbar2';
// import Footer from '../Footer';
// import avtar from '../assets/avtar.png'
// import discover from '../assets/discover.png'
// import amex from '../assets/amex.png'
// const CheckoutPage = () => {
//     const [paymentMethod, setPaymentMethod] = useState('card');
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleOpenModal = () => {
//         setIsModalOpen(true);
//     };
//  const navigate = useNavigate();
//     const handleCloseModal = () => {
//         navigate('/');
//     };

//     return (
//         <>
//             <Navbar2 />
//             <div style={{ fontFamily: 'Poppins' }} className=" mx-12 p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
//                 {/* Left Content */}
//                 <div className="lg:col-span-2 space-y-4">
//                     {/* Delivery Section */}
//                     <div className="bg-white rounded shadow p-4 flex items-start gap-4">
//                         <img
//                             src={avtar}
//                             alt="Profile"
//                             className="w-[98px] h-[130px] rounded-full object-cover"
//                         />
//                         <div>
//                             <p className="font-bold text-[24px]">Delivering to Dulce Lipshutz</p>
//                             <p className="text-[18px] mt-2 mb-4 text-gray-700">
//                                 70 Washington Square South, New York, NY 10012, United States
//                             </p>
//                             <a href="#" className="text-[20px]  text-[#8A1538] underline">
//                                 Add delivery instructions
//                             </a>
//                         </div>
//                         <button className="ml-auto text-[16px] text-[#8A1538] font-semibold">Change</button>
//                     </div>

//                     {/* Upsell Box */}
//                     <div className="bg-[#FFE0E9] h-[100px] text-[#666666] text-[16px] font-bold p-4 rounded-lg">SOME AMAZING UPSELL :)</div>

//                     <div className="bg-[#FFE0E9] p-4 rounded-lg space-y-4">
//                         {/* Header */}
//                         <div className="font-semibold text-sm">Shipment details</div>

//                         {/* Shipping Info */}
//                         <div className="flex items-start gap-2 text-sm">
//                             <input type="radio" checked readOnly className="mt-1" />
//                             <div>
//                                 <span className="font-bold text-[16px] text-[#4F4F4F]">FREE SHIPPING</span>
//                                 <div className="text-[16px] text-[#999999]">Estimated delivery: May 10 2025 – May 12 2025</div>
//                             </div>
//                         </div>

//                         {/* Product Row */}
//                         <div className=" rounded ps-4  flex flex-col sm:flex-row sm:items-center gap-4">
//                             {/* Image Placeholder */}
//                             <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-[12px] text-gray-600 font-semibold">
//                                 PHOTO
//                             </div>

//                             {/* Product Info */}
//                             <div className="flex-1">
//                                 <p className="text-sm font-medium text-[#999999]">Some Awesome Long Product Title</p>
//                                 <p className="text-xs text-[#999999]">Some product choice</p>
//                                 <p className="font-semibold mt-1 text-[#999999]">$249.99</p>


//                             </div>


//                         </div>
//                         <div className="mt-2 border rounded overflow-hidden inline-block">
//                             <div className="flex items-center text-[#4F4F4F]">
//                                 <span className="text-xs px-2 py-1 border-r w-[70px] bg-white text-[#4F4F4F]">Quantity</span>
//                                 <div className="flex items-center divide-x border-l bg-white">
//                                     <button className="px-3 text-lg font-semibold">−</button>
//                                     <span className="px-3 text-sm">1</span>
//                                     <button className="px-3 text-lg font-semibold">+</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                     {/* Payment Method */}
//                     <div className="bg-[#FFE0E9] p-4 rounded-lg space-y-3">
//                         <div className="font-semibold text-[16px] text-[#4F4F4F]">Payment method</div>

//                         <label className="flex items-center gap-2 text-sm">
//                             <input
//                                 type="radio"
//                                 checked={paymentMethod === 'card'}
//                                 onChange={() => setPaymentMethod('card')}
//                             />
//                             Credit or debit card
//                         </label>
//                         <div className="flex gap-2 ml-6 items-center">
//                             <FaCcVisa className="text-3xl text-blue-900" />
//                             <FaCcMastercard className="text-3xl  text-blue-900" />
//                             <img src={discover} className="h-[35px] text-red-500" />
//                             <img src={amex} className="h-[32px] text-red-500" />

//                         </div>

//                         <label className="flex items-center gap-2 text-sm">
//                             <input
//                                 type="radio"
//                                 checked={paymentMethod === 'netbanking'}
//                                 onChange={() => setPaymentMethod('netbanking')}
//                             />
//                             Net Banking
//                         </label>
//                         <div className="ml-6">
//                             <select className="border px-2 py-1 rounded text-sm w-full sm:w-64">
//                                 <option>Choose an option</option>
//                                 <option>ICICI</option>
//                                 <option>HDFC</option>
//                                 <option>SBI</option>
//                             </select>
//                         </div>
//                     </div>

//                     {/* Coupons */}
//                     <div className="bg-pink-100 text-[16px] p-4 text-[#4F4F4F] font-bold rounded-lg">
//                         Gift cards, coupons <a href="#" className="text-[#0066CC] font-medium underline">Apply</a>
//                     </div>
//                 </div>

//                 {/* Sticky Right Section */}
//                 <div className="lg:col-span-1 lg:sticky lg:top-6 h-fit">
//                     <div className="bg-white p-6 rounded shadow-md border">
//                         <button onClick={handleOpenModal} className="w-full bg-[#8A1538] hover:bg-pink-800 text-white font-semibold py-3 rounded-full mb-4">
//                             Use This payment method
//                         </button>
//                         <div className="text-[20px] text-[#000000] space-y-1">
//                             <div className="flex justify-between">
//                                 <span>Items:</span>
//                                 <span>1</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span>Delivery:</span>
//                                 <span>Free</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span>Total:</span>
//                                 <span>$70.00</span>
//                             </div>
//                             <div className="flex justify-between text-[#000000]">
//                                 <span>Promotion Applied:</span>
//                                 <span>--</span>
//                             </div>
//                             <div className="border-t pt-2 mt-2 flex justify-between font-bold">
//                                 <span>Order Total:</span>
//                                 <span>$70.00</span>
//                             </div>
//                         </div>
//                     </div>
//                     {isModalOpen && (
//                         <div className="fixed inset-0 flex items-center justify-center z-50">
//                             {/* Backdrop */}
//                             <div
//                                 className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
//                                 onClick={handleCloseModal}
//                             ></div>

//                             {/* Modal Content */}
//                             <div className="relative bg-white  text-center rounded-xl shadow-lg p-6 max-w-lg w-full mx-4">
//                                 <h2 className="text-lg  font-bold text-gray-800 mb-4">
//                                     ALL TRACKING DETAILS HAVE BEEN SENT TO YOUR MOBILE NUMBER AND EMAIL
//                                 </h2>
//                                 <p className="text-gray-600 text-center text-sm leading-relaxed">
//                                     Lorem ipsum is simply dummy text of the printing and typesetting
//                                     industry. Lorem ipsum has been the industry's standard dummy text
//                                     ever since the 1500s, when an unknown printer took a galley of type
//                                     and scrambled it to make a type specimen book. It has survived not
//                                     only five centuries, but also the leap into electronic typesetting,
//                                     remaining essentially unchanged. It was popularised in the 1960s with
//                                     the release of Letraset sheets containing Lorem ipsum passages, and
//                                     more recently
//                                 </p>
//                                 <button
//                                     className="w-36 mt-6 bg-[#8A1538]  text-white font-semibold py-3 rounded-lg"
//                                     onClick={handleCloseModal}
//                                 >
//                                     Go to Home
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default CheckoutPage;

import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Navbar2';
import Footer from '../Footer';
import avtar from '../assets/avtar.png';
import discover from '../assets/discover.png';
import amex from '../assets/amex.png';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const navigate = useNavigate();
  const handleCloseModal = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar2 />
      <div
        style={{ fontFamily: 'Poppins' }}
        className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-4">
          {/* Delivery Section */}
          <div className="bg-white rounded shadow p-4 flex flex-col sm:flex-row items-start gap-4">
            <img
              src={avtar}
              alt="Profile"
              className="w-20 h-20 sm:w-[98px] sm:h-[130px] rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="font-bold text-lg sm:text-xl md:text-2xl">
                Delivering to Dulce Lipshutz
              </p>
              <p className="text-sm sm:text-base md:text-lg mt-2 mb-4 text-gray-700">
                70 Washington Square South, New York, NY 10012, United States
              </p>
              <a href="#" className="text-base sm:text-lg md:text-xl text-[#8A1538] underline">
                Add delivery instructions
              </a>
            </div>
            <button  onClick={() => navigate('/change')} className="ml-auto text-sm sm:text-base md:text-lg text-[#8A1538] font-semibold">
              Change
            </button>
          </div>

          {/* Upsell Box */}
          <div className="bg-[#FFE0E9] h-24 sm:h-[100px] text-[#666666] text-sm sm:text-base md:text-lg font-bold p-4 rounded-lg flex items-start justify-start">
            SOME AMAZING UPSELL :)
          </div>

          <div className="bg-[#FFE0E9] p-4 rounded-lg space-y-4">
            {/* Header */}
            <div className="font-semibold text-sm sm:text-base">Shipment details</div>

            {/* Shipping Info */}
            <div className="flex items-start gap-2 text-sm sm:text-base">
              <input type="radio" checked readOnly className="mt-1" />
              <div>
                <span className="font-bold text-base sm:text-lg text-[#4F4F4F]">
                  FREE SHIPPING
                </span>
                <div className="text-sm sm:text-base text-[#999999]">
                  Estimated delivery: May 10 2025 – May 12 2025
                </div>
              </div>
            </div>

            {/* Product Row */}
            <div className="rounded p-4 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Image Placeholder */}
              <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-xs sm:text-sm text-gray-600 font-semibold">
                PHOTO
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <p className="text-sm sm:text-base font-medium text-[#999999]">
                  Some Awesome Long Product Title
                </p>
                <p className="text-xs sm:text-sm text-[#999999]">Some product choice</p>
                <p className="font-semibold mt-1 text-[#999999] text-sm sm:text-base">
                  $249.99
                </p>
              </div>
            </div>
            <div className="mt-2 border rounded overflow-hidden inline-block">
              <div className="flex items-center text-[#4F4F4F]">
                <span className="text-xs sm:text-sm px-2 py-1 border-r w-16 sm:w-[70px] bg-white text-[#4F4F4F]">
                  Quantity
                </span>
                <div className="flex items-center divide-x border-l bg-white">
                  <button className="px-2 sm:px-3 text-lg font-semibold">−</button>
                  <span className="px-2 sm:px-3 text-sm">1</span>
                  <button className="px-2 sm:px-3 text-lg font-semibold">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-[#FFE0E9] p-4 rounded-lg space-y-3">
            <div className="font-semibold text-base sm:text-lg text-[#4F4F4F]">
              Payment method
            </div>

            <label className="flex items-center gap-2 text-sm sm:text-base">
              <input
                type="radio"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              />
              Credit or debit card
            </label>
            <div className="flex gap-2 ml-6 items-center flex-wrap">
              <FaCcVisa className="text-2xl sm:text-3xl text-blue-900" />
              <FaCcMastercard className="text-2xl sm:text-3xl text-blue-900" />
              <img src={discover} className="h-6 sm:h-8 md:h-[35px] text-red-500" />
              <img src={amex} className="h-6 sm:h-8 md:h-[32px] text-red-500" />
            </div>

            <label className="flex items-center gap-2 text-sm sm:text-base">
              <input
                type="radio"
                checked={paymentMethod === 'netbanking'}
                onChange={() => setPaymentMethod('netbanking')}
              />
              Net Banking
            </label>
            <div className="ml-6">
              <select className="border px-2 py-1 rounded text-sm sm:text-base w-full sm:w-64">
                <option>Choose an option</option>
                <option>ICICI</option>
                <option>HDFC</option>
                <option>SBI</option>
              </select>
            </div>
          </div>

          {/* Coupons */}
          <div className="bg-pink-100 text-base sm:text-lg p-4 text-[#4F4F4F] font-bold rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span>Gift cards, coupons</span>
            <a href="#" className="text-[#0066CC] font-medium underline">Apply</a>
          </div>
        </div>

        {/* Sticky Right Section */}
        <div className="lg:col-span-1 lg:sticky lg:top-6 h-fit">
          <div className="bg-white p-4 sm:p-6 rounded shadow-md border">
            <button
              onClick={handleOpenModal}
              className="w-full bg-[#8A1538] hover:bg-pink-800 text-white font-semibold py-2 sm:py-3 rounded-full mb-4"
            >
              Use This payment method
            </button>
            <div className="text-base sm:text-lg md:text-xl text-[#000000] space-y-1">
              <div className="flex justify-between">
                <span>Items:</span>
                <span>1</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Total:</span>
                <span>$70.00</span>
              </div>
              <div className="flex justify-between text-[#000000]">
                <span>Promotion Applied:</span>
                <span>--</span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                <span>Order Total:</span>
                <span>$70.00</span>
              </div>
            </div>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                onClick={handleCloseModal}
              ></div>

              {/* Modal Content */}
              <div className="relative bg-white text-center rounded-xl shadow-lg p-4 sm:p-6 max-w-md w-full mx-4">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">
                  ALL TRACKING DETAILS HAVE BEEN SENT TO YOUR MOBILE NUMBER AND EMAIL
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Lorem ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem ipsum passages, and
                  more recently
                </p>
                <button
                  className="w-32 sm:w-36 mt-4 sm:mt-6 bg-[#8A1538] text-white font-semibold py-2 sm:py-3 rounded-lg"
                  onClick={handleCloseModal}
                >
                  Go to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
