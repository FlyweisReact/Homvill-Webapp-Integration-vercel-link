import React from "react";
import review from '../assets/review1.jpg'
import review2 from '../assets/review2.jpg'
import review3 from '../assets/review3.jpg'
import review4 from '../assets/review4.jpg'
import review5 from '../assets/review5.jpg'
import review6 from '../assets/review6.jpg'
import review7 from '../assets/review7.jpg'
const reviews = [
  {
    name: "Pollyn Westerwelt",
    image: review,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    rating: 5,
  },
  {
    name: "Carter Guici",
    image: review2,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    rating: 5,
  },
  {
    name: "Abram Workman",
    image: review3,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    rating: 5,
  },
  {
    name: "Dulce Lipshutz",
    image: review4,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    rating: 5,
  },
  {
    name: "Mireole Vetrouws",
    image: review5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    rating: 5,
  },
  {
    name: "Haylie Philips",
    image: review6,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    rating: 5,
  },
  {
    name: "Zalie Armfield",
    image: review7,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    rating: 4,
  },
];

const StarRating = ({ count }) => {
  return (
    <div className="flex mt-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.062 3.26a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.062 3.26c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.809 2.033c-.784.57-1.838-.197-1.539-1.118l1.061-3.26a1 1 0 00-.364-1.118L3.55 8.687c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.062-3.26z" />
        </svg>
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className=" mx-auto px-12 py-8">
      <h2 style={{fontFamily:'Poppins'}} className="text-xl md:text-[36px] font-semibold mb-6">Reviews</h2>
      <div style={{fontFamily:'Poppins'}} className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white border rounded-lg p-4 flex gap-4 items-start">
            <img
              src={review.image}
              alt={review.name}
              className="w-[98px] h-[130px] rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-[20px] text-[#121111]">{review.name}</p>
              <p className="text-[14px] text-[#121111]">{review.text}</p>
<div className="ml-6" style={{ transform: 'scale(1.8)', display: 'inline-block', color: '#FFCC4E' }}>
  <StarRating count={review.rating} />
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
