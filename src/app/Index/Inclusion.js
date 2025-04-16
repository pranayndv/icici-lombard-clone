"use client"
import React, { useState } from 'react'

const titles = [
  { text: "Coverage for natural disasters like earthquakes, floods, fires and storms" },
  { text: "₹15 lakh Personal Accident Cover" },
  { text: "Cashless repairs in 5100+ network garages" },
  { text: "9 add ons to choose from" },
  { text: "Coverage for theft, accidents and terrorist activities" },
  { text: "Third-party legal liabilities cover" },
  { text: "No claim bonus up to 50%" },
  { text: "Instant claim settlement via InstaSpect" },
]

const Inclusion = () => {
  const [activeLink, setActiveLink] = useState("/Inclusions")

  return (
    <div className='p-4 sm:p-6 lg:px-16 lg:py-[4.2rem] max-w-[100rem] w-full mx-auto xl:h-[607px]'>
      <div className='text-center mb-9'>
        <h1 className='text-2xl md:text-3xl xl:text-4xl font-mulish font-[550]'>What’s included and what’s not?</h1>
      </div>

      <ul className='border-b-2 border-[#C9C9C9] flex flex-wrap mb-6'>
        <li
          className={`cursor-pointer py-3 px-4 sm:px-6 text-sm sm:text-base ${
            activeLink === "/Inclusions"
              ? "text-[#EC6625] border-b-2 border-[#EC6625]"
              : "text-[#838383]"
          }`}
          onClick={() => setActiveLink('/Inclusions')}
        >
          Inclusions
        </li>
        <li
          className={`cursor-pointer py-3 px-4 sm:px-6 text-sm sm:text-base ${
            activeLink === "/Exclusions"
              ? "text-[#EC6625] border-b-2 border-[#EC6625]"
              : "text-[#838383]"
          }`}
          onClick={() => setActiveLink('/Exclusions')}
        >
          Exclusions
        </li>
      </ul>

      {activeLink === "/Inclusions" && (
        <div className='space-y-4 max-w-7xl  my-[3.2rem] '>
          <h3 className='text-base font-semibold mb-4'>What’s included:</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10'>
            {titles.map((item, index) => (
              <div key={index} className='flex items-start space-x-3 text-sm sm:text-base'>
                <div className='w-4 h-4 flex-shrink-0 '>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="12" r="7" fill="#26BA40" stroke="#26BA40" strokeWidth="1.60524"/>
                    <path d="M4.88879 12.1184L6.77579 14.3346L11.111 9.66797" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeLink === "/Exclusions" && (
        <div className='my-10 text-center px-4'>
          <p>Exclusion details will go here...</p>
        </div>
      )}

      <div className='border-t-2 border-[#C9C9C9] text-[#B2B2B2] py-8 flex flex-col lg:flex-row items-center  space-y-2 lg:space-y-0 lg:space-x-5 text-sm sm:text-base text-center'>
        <h3 className='text-lg font-semibold text-[#434343]'>Policy documents:</h3>
        <a href="#" className='text-[#F26624] font-semibold underline'>Private car package policy wordings</a>
        <span className='hidden lg:inline'>|</span>
        <a href="#" className='text-[#F26624] font-semibold underline'>Stand-alone own damage private car insurance policy wording</a>
        <span className='hidden lg:inline'>|</span>
        <a href="#" className='text-[#F26624] font-semibold underline'>Private car liability policy wording</a>
      </div>
    </div>
  )
}

export default Inclusion
