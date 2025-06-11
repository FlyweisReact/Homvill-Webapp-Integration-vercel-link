
// import React, { useState } from 'react';
// import eligible from '../assets/eligibility.svg'
// import Navbar from '../Navbar'
// const data = [
//   {
//     program: 'City Of Dallas Homebuyer Assistance Program (DHAP)',
//     amount: 'Up to $60,000 Assistance',
//     price: '$318,000',
//   },
//   {
//     program: 'City Of Dallas Anti-Displacement Homebuyer Assistance...',
//     amount: 'Up to $50,000 Assistance',
//     price: 'See Program For Maximum Assistance',
//   },
//   {
//     program: 'City Of Dallas Targeted Occupations Homebuyer Assistance...',
//     amount: 'Up to $50,000 Assistance',
//     price: 'See Program For Maximum Assistance',
//   },
//   {
//     program: 'Overview',
//     amount: 'Up to $25,354 Assistance',
//     price: '$531,300',
//   },
//   {
//     program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
//     amount: 'Up To $23,393 Assistance',
//     price: '$492,500',
//   },
//   {
//     program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
//     amount: 'Up To $23,393 Assistance',
//     price: '$492,500',
//   },
//   {
//     program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
//     amount: 'Up To $13,000 Assistance',
//     price: 'See Program For Maximum Assistance',
//   },
//   {
//     program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
//     amount: 'See Program For Maximum Assistance',
//     price: 'See Program For Maximum Assistance',
//   },
//   {
//     program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
//     amount: 'See Program For Maximum Assistance',
//     price: 'See Program For Maximum Assistance',
//   },
//   {
//     program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
//     amount: 'See Program For Maximum Assistance',
//     price: 'See Program For Maximum Assistance',
//   },
//   {
//     program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
//     amount: 'See Program For Maximum Assistance',
//     price: 'See Program For Maximum Assistance',
//   },
//   {
//     program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
//     amount: 'See Program For Maximum Assistance',
//     price: 'See Program For Maximum Assistance',
//   },
//   {
//     program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
//     amount: 'See Program For Maximum Assistance',
//     price: 'See Program For Maximum Assistance',
//   },
// ];

// const ProgramTable = () => {
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 13;

//   const startIndex = (page - 1) * rowsPerPage;
//   const currentData = data.slice(startIndex, startIndex + rowsPerPage);
//   const totalPages = Math.ceil(data.length / rowsPerPage);

//   return (
//     <>
//       <Navbar />
//       <div
//         className="w-full bg-cover bg-center text-white py-6 px-4 sm:py-8 sm:px-8 lg:py-12 lg:px-12 text-start relative"
//         style={{ backgroundImage: `url(${eligible})` }}
//       >
//         {/* Overlay */}
//         {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

//         <div className="relative z-10 max-w-full sm:max-w-4xl lg:max-w-[78rem] mx-auto">
//           <h2 className="text-xl sm:text-3xl lg:text-[48px] font-bold mb-2 sm:mb-4 mulish-font">
//             You may be eligible for 38 programs
//           </h2>
//           <p
//             style={{ fontFamily: 'Poppins' }}
//             className="text-sm sm:text-xl lg:text-[28px] mb-6 sm:mb-8 lg:mb-12 pt-3 sm:pt-4 lg:pt-6 "
//           >
//             Based on your answers, the following 38 programs, offering up to $60,000 in down payment assistance, may be available to you.
//           </p>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto p-4">
//         <div style={{ fontFamily: 'Poppins' }} className="overflow-x-auto border rounded-md shadow">

//           <table className="min-w-full text-left text-sm">
//             <thead className="bg-[#8A1538] text-white">
//               <tr>
//                 <th className="px-4 py-2 font-semibold">Program Name (Link To Third-Party Site)</th>
//                 <th className="px-4 py-2 font-semibold">Amount</th>
//                 <th className="px-4 py-2 font-semibold">Maximum Purchase Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentData.map((item, index) => (
//                 <tr key={index} className={index % 2 === 0 ? 'bg-[#F7F7F7]' : 'bg-[#FFE0E9]'}>
//                   <td className="px-4 py-2 text-[#981b48] font-medium cursor-pointer">{item.program}</td>
//                   <td className="px-4 py-2 border-l border-[#A8A8A84D]">{item.amount}</td>
//                   <td className="px-4 py-2 border-l border-[#A8A8A84D]">{item.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="flex items-center justify-between p-2 text-sm text-gray-600">
//             <span>
//               Showing {startIndex + 1} to {Math.min(startIndex + rowsPerPage, data.length)} of {data.length} entries
//             </span>
//             <div className="flex items-center gap-1">
//               <button
//                 onClick={() => setPage((p) => Math.max(p - 1, 1))}
//                 className="px-2 py-1 rounded border bg-white hover:bg-gray-100"
//               >
//                 ‹ Previous
//               </button>
//               {[...Array(totalPages)].map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setPage(i + 1)}
//                   className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-[#981b48] text-white' : 'bg-white hover:bg-gray-100'
//                     }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//               <button
//                 onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
//                 className="px-2 py-1 rounded border bg-white hover:bg-gray-100"
//               >
//                 Next ›
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProgramTable;
import React, { useState } from 'react';
import eligible from '../assets/eligibility.svg';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Navbar2 from '../Navbar2';
import { useAuth } from '../Authprovider/AuthContext';
const data = [
  {
    program: 'City Of Dallas Homebuyer Assistance Program (DHAP)',
    amount: 'Up to $60,000 Assistance',
    price: '$318,000',
  },
  {
    program: 'City Of Dallas Anti-Displacement Homebuyer Assistance...',
    amount: 'Up to $50,000 Assistance',
    price: 'See Program For Maximum Assistance',
  },
  {
    program: 'City Of Dallas Targeted Occupations Homebuyer Assistance...',
    amount: 'Up to $50,000 Assistance',
    price: 'See Program For Maximum Assistance',
  },
  {
    program: 'Overview',
    amount: 'Up to $25,354 Assistance',
    price: '$531,300',
  },
  {
    program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
    amount: 'Up To $23,393 Assistance',
    price: '$492,500',
  },
  {
    program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
    amount: 'Up To $23,393 Assistance',
    price: '$492,500',
  },
  {
    program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
    amount: 'Up To $13,000 Assistance',
    price: 'See Program For Maximum Assistance',
  },
  {
    program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
    amount: 'See Program For Maximum Assistance',
    price: 'See Program For Maximum Assistance',
  },
  {
    program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
    amount: 'See Program For Maximum Assistance',
    price: 'See Program For Maximum Assistance',
  },
  {
    program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
    amount: 'See Program For Maximum Assistance',
    price: 'See Program For Maximum Assistance',
  },
  {
    program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
    amount: 'See Program For Maximum Assistance',
    price: 'See Program For Maximum Assistance',
  },
  {
    program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
    amount: 'See Program For Maximum Assistance',
    price: 'See Program For Maximum Assistance',
  },
  {
    program: 'Lubbock Housing Finance Corporation Homeownership Assistance...',
    amount: 'See Program For Maximum Assistance',
    price: 'See Program For Maximum Assistance',
  },
];

const ProgramTable = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 13;

  const startIndex = (page - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);
  const totalPages = Math.ceil(data.length / rowsPerPage);
 const { isLoggedIn } = useAuth();
  return (
    <>
      {/* <Navbar /> */}
       {isLoggedIn ? <Navbar2 /> : <Navbar />}
      <div
        className="w-full bg-cover bg-center text-white py-4 px-4 sm:py-8 sm:px-8 lg:py-12 lg:px-12 text-start relative"
        style={{ backgroundImage: `url(${eligible})` }}
      >
        <div className="relative z-10 max-w-full mx-auto">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[48px] font-bold mb-2 sm:mb-4 mulish-font">
            You may be eligible for 38 programs
          </h2>
          <p
            style={{ fontFamily: 'Poppins' }}
            className="text-xs sm:text-base md:text-xl lg:text-[28px] mb-4 sm:mb-8 lg:mb-12 pt-2 sm:pt-4 lg:pt-6"
          >
            Based on your answers, the following 38 programs, offering up to $60,000 in down payment assistance, may be available to you.
          </p>
        </div>
      </div>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div style={{ fontFamily: 'Poppins' }} className="border rounded-md shadow">
          <table className="w-full text-left text-[10px] sm:text-sm table-fixed">
            <thead className="bg-[#8A1538] text-white">
              <tr>
                <th className="w-[50%] sm:w-auto px-2 py-1 sm:px-4 sm:py-2 font-semibold text-[10px] sm:text-sm break-words">
                  Program Name (Link To Third-Party Site)
                </th>
                <th className="w-[25%] sm:w-auto px-2 py-1 sm:px-4 sm:py-2 font-semibold text-[10px] sm:text-sm break-words">
                  Amount
                </th>
                <th className="w-[25%] sm:w-auto px-2 py-1 sm:px-4 sm:py-2 font-semibold text-[10px] sm:text-sm break-words">
                  Maximum Purchase Price
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-[#F7F7F7]' : 'bg-[#FFE0E9]'}>
                  <td className="px-2 py-1 sm:px-4 sm:py-2 text-[#981b48] font-medium cursor-pointer text-[10px] sm:text-sm break-words">
                    {item.program}
                  </td>
                  <td className="px-2 py-1 sm:px-4 sm:py-2 border-l border-[#A8A8A84D] text-[10px] sm:text-sm break-words">
                    {item.amount}
                  </td>
                  <td className="px-2 py-1 sm:px-4 sm:py-2 border-l border-[#A8A8A84D] text-[10px] sm:text-sm break-words">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 text-[10px] sm:text-sm text-[#1D1D1D]">
            <span className="mb-2 sm:mb-0">
              Showing {startIndex + 1} to {Math.min(startIndex + rowsPerPage, data.length)} of {data.length} entries
            </span>
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                className="px-2 py-1 sm:px-3 sm:py-1.5 rounded border bg-white hover:bg-gray-100 text-[10px] sm:text-sm"
              >
                ‹ Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-2 py-1 sm:px-3 sm:py-1 rounded ${
                    page === i + 1 ? 'bg-[#981b48] text-white' : 'bg-white hover:bg-gray-100'
                  } text-[10px] sm:text-sm`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                className="px-2 py-1 sm:px-3 sm:py-1.5 rounded border bg-white hover:bg-gray-100 text-[10px] sm:text-sm"
              >
                Next ›
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProgramTable;
