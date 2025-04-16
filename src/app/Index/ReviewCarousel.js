"use client"
import React, { useState } from "react";
import Image from "next/image";


const reviews = [
  {
    name: "Kumar Ambuj",
    rating: 4,
    review:
      "The interaction was good. The customer service associate gave me answers to all my queries. Her presence while making the decision to buy was helpful. I will definitely recommend ICICI Lombard to my friends and family for the way they treat customers."
  },
  {
    name: "Sanjay Achliya",
    rating: 3,
    review:
      "Very good experience. The agent gave me all the information clearly and didn't mind repeating certain points until I understood. I don't fully get technology, but she offered to take care of the whole process of buying the car insurance policy without any hassle. I am truly thankful."
  },
  {
    name: "Priya Mehta",
    rating: 5,
    review:
      "Excellent customer support. The representative was polite and guided me through the entire process smoothly. Will definitely choose them again."
  },
  {
    name: "Rahul Verma",
    rating: 4,
    review:
      "Quick and helpful service. All my queries were resolved promptly. Highly recommend for hassle-free insurance experience."
  }
];

const StarRating = ({ rating }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <span key={i}>{i < rating ? 
      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Fill 1 Copy 3" fillRule="evenodd" clipRule="evenodd" d="M3.19833 11.8796C2.73881 12.1387 2.47366 11.9658 2.60596 11.4922L3.70141 7.57611L0.256635 4.98694C-0.159874 4.67395 -0.0586056 4.39377 0.48204 4.35998L4.96128 4.08715L6.63385 0.339075C6.83639 -0.113025 7.16361 -0.113025 7.3656 0.339075L9.03872 4.08715L13.518 4.35998C14.0586 4.39377 14.1599 4.67395 13.7434 4.98694L10.2991 7.57611L11.394 11.4922C11.5258 11.9658 11.2617 12.1387 10.8017 11.8796L6.99973 9.73228L3.19833 11.8796Z" fill="#FAA61A"/>
        </svg>
         :
         <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Fill 1 Copy 4" fillRule="evenodd" clipRule="evenodd" d="M3.19833 11.8796C2.73881 12.1387 2.47366 11.9658 2.60596 11.4922L3.70141 7.57611L0.256635 4.98694C-0.159874 4.67395 -0.0586056 4.39377 0.48204 4.35998L4.96128 4.08715L6.63385 0.339075C6.83639 -0.113025 7.16361 -0.113025 7.3656 0.339075L9.03872 4.08715L13.518 4.35998C14.0586 4.39377 14.1599 4.67395 13.7434 4.98694L10.2991 7.57611L11.394 11.4922C11.5258 11.9658 11.2617 12.1387 10.8017 11.8796L6.99973 9.73228L3.19833 11.8796Z" fill="#CBCDCE"/>
</svg>

         }</span>
    ))}
  </div>
);

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  const visibleReviews = 2;
  const next = () => setIndex((prev) => (prev + visibleReviews) % reviews.length);
  const prev = () => setIndex((prev) => (prev - visibleReviews + reviews.length) % reviews.length);

  const displayedReviews = [
    reviews[index],
    reviews[(index + 1) % reviews.length]
  ];

  return (
    <div className="max-w-6xl mx-auto text-center p-8 py-[5.60rem] xl:h-[681px]">
      <h2 className="text-[2rem]  font-mulish font-[550] mb-3 text-[#282828]">Ratings and reviews</h2>
      <div className="text-xl mb-6 flex justify-center items-center space-x-3 py-2">
        <span className="flex space-x-2 items-center justify-center border-r-2 border-slate-300 pr-2"><span>4.6 </span>
        <Image src="/svgs/star.svg"
                  alt="star"
                        width={400}
                        height={400}
                        className="w-auto"
                        />
         </span> 
        <span className="text-start  text-base "><h4>Our customers have rated us</h4><p className="text-gray-500 text-sm"> Based on 456 reviews</p ></span>
      </div>



      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
        className="  p-3 h-10 rounded-full border border-[#CBCDCE] shadow-lg hover:bg-white/80"
        onClick={prev} 
      >
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Path" fillRule="evenodd" clipRule="evenodd" d="M0.00141525 7.00496C0.00395489 7.23162 0.0737991 7.44829 0.195707 7.60995L4.86125 13.7232C4.98443 13.8966 5.15586 13.9966 5.33618 13.9999C5.5165 14.0032 5.69175 13.9116 5.81874 13.7449C5.94572 13.5782 6.01684 13.3499 6.0143 13.1133C6.01176 12.8766 5.93684 12.6516 5.80604 12.4899L2.27577 7.86328H15.3238C16.2254 7.87995 16.2254 6.09996 15.3238 6.11663H2.27704L5.80477 1.49499C5.93049 1.33166 6.0016 1.10833 6.0016 0.876661C6.0016 0.643329 5.93176 0.419997 5.80604 0.256665C5.67905 0.0899994 5.50889 0 5.33237 0C5.15459 0 4.98442 0.0949994 4.85998 0.259998L0.194437 6.37329C0.0674486 6.53996 -0.00366402 6.76996 0.000145912 7.00662" fill="#CBCDCE"/>
        </svg>
        </button>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-start md:h-[234px]">
        {displayedReviews.map((r, i) => (
            <div
                key={i}
                className={`md:p-6 rounded-2xl text-left flex flex-col justify-between ${
                i === 1 ? "hidden lg:block" : ""
                }`}
            >
                <span className="flex justify-between pr-4">
                <span className="flex items-center space-x-4">
                    <h3 className="text-lg font-bold">{r.name}</h3>
                    <span className="text-slate-400">|</span>
                    <StarRating rating={r.rating} />
                </span>
                <span>
                    <Image src="/svgs/double.svg"
                         alt="star"
                        width={400}
                        height={400}
                        className="w-auto"
                        />
                </span>
                </span>
                <p className="mt-2 text-gray-700 ">{r.review}</p>
            </div>
            ))}

      </div>

      <button
        className="h-10 bg-[#EC6625] p-3 rounded-full hover:bg-[#EC6625]/80 shadow-lg"
        onClick={next}
      >
       <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Path" fillRule="evenodd" clipRule="evenodd" d="M15.9986 7.00496C15.996 7.23162 15.9262 7.44829 15.8043 7.60995L11.1388 13.7232C11.0156 13.8966 10.8441 13.9966 10.6638 13.9999C10.4835 14.0032 10.3083 13.9116 10.1813 13.7449C10.0543 13.5782 9.98316 13.3499 9.9857 13.1133C9.98824 12.8766 10.0632 12.6516 10.194 12.4899L13.7242 7.86328H0.676211C-0.225404 7.87995 -0.225404 6.09996 0.676211 6.11663H13.723L10.1952 1.49499C10.0695 1.33166 9.9984 1.10833 9.9984 0.876661C9.9984 0.643329 10.0682 0.419997 10.194 0.256665C10.321 0.0899994 10.4911 0 10.6676 0C10.8454 0 11.0156 0.0949994 11.14 0.259998L15.8056 6.37329C15.9326 6.53996 16.0037 6.76996 15.9999 7.00662" fill="white"/>
        </svg>

      </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(reviews.length / visibleReviews) }).map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === Math.floor(index / visibleReviews) ? "bg-orange-500 w-4" : "bg-gray-300"}`}
          ></span>
        ))}
      </div>

      <div className="mt-12 mb-3">
        <button className="bg-white text-orange-500 border border-orange-500 hover:bg-orange-100 px-6 py-2 rounded-lg">
          Read all reviews
        </button>
      </div>
    </div>
  );
}
