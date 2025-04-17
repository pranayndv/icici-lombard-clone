"use client"
import Image from "next/image";
import React, { useState } from "react";


const slides = [
  {
    id: 1,
    image: "/svgs/insurance.svg",
    title: "Comprehensive car insurance policy ",
    description:
      (<>
      <span>Comprehensive car insurance, also known as a private car package policy, is a type of auto insurance that provides complete coverage for your vehicle. It is an optional car insurance policy but is highly recommended for car owners who want the best protection for their four-wheelers.
      </span>
      <span>
      Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.
      </span></>),
  },
  {
    id: 2,
    image: "/svgs/insurance.svg",
    title: "Comprehensive car insurance policy 2",
    description:
    (<>
      <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates maiores sunt voluptatum, praesentium culpa numquam tempore nostrum repudiandae facilis reprehenderit cumque eius vel nam. Possimus, deserunt quaerat iure consequuntur ad necessitatibus corrupti libero saepe ab soluta rem, atque fuga pariatur.
      </span>
      <span>
      Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.
      </span></>),
  },
  {
    id: 3,
    image: "/svgs/insurance.svg",
    title: "Comprehensive car insurance policy 3",
    description:
    (<>
      <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos maiores maxime nesciunt doloremque harum voluptatibus reiciendis obcaecati officia, id aut deserunt. Dolores molestias ipsum at non culpa velit veritatis enim eius ab deserunt sunt quod ea quae, laudantium porro modi.
      </span>
      <span>
      Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.
      </span></>),
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#FFF2EB] py-14 px-4 sm:px-6 lg:px-12 xl:h-[565px]">
      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center font-mulish font-[550] mb-8">
        What are the different types of car insurance policies?
      </h1>

      <div className="relative max-w-7xl mx-auto bg-white rounded-2xl p-6 sm:p-10 ">
      
        <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
                     <Image
                      src={slides[currentIndex].image}
                      alt={slides[currentIndex].title}
                      width={400}
                      height={400}
                       className="w-full sm:w-auto rounded-lg object-contain mx-auto lg:mx-5 "
                      />

          <div className="flex-1 text-left lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
              {slides[currentIndex].title}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex flex-col space-y-2 ">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>


        <button
          className="hidden lg:flex absolute -left-6 lg:-left-14 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full border border-[#CBCDCE] shadow hover:bg-white/80 transition"
          onClick={prevSlide}
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.00141525 7.00496C0.00395489 7.23162 0.0737991 7.44829 0.195707 7.60995L4.86125 13.7232C4.98443 13.8966 5.15586 13.9966 5.33618 13.9999C5.5165 14.0032 5.69175 13.9116 5.81874 13.7449C5.94572 13.5782 6.01684 13.3499 6.0143 13.1133C6.01176 12.8766 5.93684 12.6516 5.80604 12.4899L2.27577 7.86328H15.3238C16.2254 7.87995 16.2254 6.09996 15.3238 6.11663H2.27704L5.80477 1.49499C5.93049 1.33166 6.0016 1.10833 6.0016 0.876661C6.0016 0.643329 5.93176 0.419997 5.80604 0.256665C5.67905 0.0899994 5.50889 0 5.33237 0C5.15459 0 4.98442 0.0949994 4.85998 0.259998L0.194437 6.37329C0.0674486 6.53996 -0.00366402 6.76996 0.000145912 7.00662"
              fill="#CBCDCE"
            />
          </svg>
        </button>

        <button
          className="hidden lg:flex absolute -right-6 lg:-right-14 top-1/2 -translate-y-1/2 bg-[#EC6625] p-3 rounded-full hover:bg-[#EC6625]/80 transition shadow"
          onClick={nextSlide}
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9986 7.00496C15.996 7.23162 15.9262 7.44829 15.8043 7.60995L11.1388 13.7232C11.0156 13.8966 10.8441 13.9966 10.6638 13.9999C10.4835 14.0032 10.3083 13.9116 10.1813 13.7449C10.0543 13.5782 9.98316 13.3499 9.9857 13.1133C9.98824 12.8766 10.0632 12.6516 10.194 12.4899L13.7242 7.86328H0.676211C-0.225404 7.87995 -0.225404 6.09996 0.676211 6.11663H13.723L10.1952 1.49499C10.0695 1.33166 9.9984 1.10833 9.9984 0.876661C9.9984 0.643329 10.0682 0.419997 10.194 0.256665C10.321 0.0899994 10.4911 0 10.6676 0C10.8454 0 11.0156 0.0949994 11.14 0.259998L15.8056 6.37329C15.9326 6.53996 16.0037 6.76996 15.9999 7.00662"
              fill="white"
            />
          </svg>
        </button>
      </div>


      <div className="flex lg:hidden justify-center gap-6 mt-6">
        <button
          onClick={prevSlide}
          className="bg-white border border-[#CBCDCE] p-2 rounded-full shadow"
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.00141525 7.00496C0.00395489 7.23162 0.0737991 7.44829 0.195707 7.60995L4.86125 13.7232C4.98443 13.8966 5.15586 13.9966 5.33618 13.9999C5.5165 14.0032 5.69175 13.9116 5.81874 13.7449C5.94572 13.5782 6.01684 13.3499 6.0143 13.1133C6.01176 12.8766 5.93684 12.6516 5.80604 12.4899L2.27577 7.86328H15.3238C16.2254 7.87995 16.2254 6.09996 15.3238 6.11663H2.27704L5.80477 1.49499C5.93049 1.33166 6.0016 1.10833 6.0016 0.876661C6.0016 0.643329 5.93176 0.419997 5.80604 0.256665C5.67905 0.0899994 5.50889 0 5.33237 0C5.15459 0 4.98442 0.0949994 4.85998 0.259998L0.194437 6.37329C0.0674486 6.53996 -0.00366402 6.76996 0.000145912 7.00662"
              fill="#CBCDCE"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#EC6625] text-white p-2 rounded-full shadow"
        >
         <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9986 7.00496C15.996 7.23162 15.9262 7.44829 15.8043 7.60995L11.1388 13.7232C11.0156 13.8966 10.8441 13.9966 10.6638 13.9999C10.4835 14.0032 10.3083 13.9116 10.1813 13.7449C10.0543 13.5782 9.98316 13.3499 9.9857 13.1133C9.98824 12.8766 10.0632 12.6516 10.194 12.4899L13.7242 7.86328H0.676211C-0.225404 7.87995 -0.225404 6.09996 0.676211 6.11663H13.723L10.1952 1.49499C10.0695 1.33166 9.9984 1.10833 9.9984 0.876661C9.9984 0.643329 10.0682 0.419997 10.194 0.256665C10.321 0.0899994 10.4911 0 10.6676 0C10.8454 0 11.0156 0.0949994 11.14 0.259998L15.8056 6.37329C15.9326 6.53996 16.0037 6.76996 15.9999 7.00662"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;