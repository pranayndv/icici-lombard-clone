"use client"
import React, { useState } from 'react'

const Policies = () => {
  const [activeLink, setActiveLink] = useState("/General")

  return (
    <div className=' bg-[#F8F6F6] pt-5'>
        <div className='text-center mb-6'>
        <h1 className='text-2xl md:text-3xl xl:text-4xl text-center py-6'>Get answers to common questions about car insurance policy</h1>
      </div>
        <div className='md:p-4 p-2  sm:p-6 lg:px-32'>
 

      <ul className='border-b-2 border-[#C9C9C9] flex flex-wrap mb-6'>
        <li
          className={`cursor-pointer py-3 px-3 sm:px-6 text-sm sm:text-base ${
            activeLink === "/General"
              ? "text-[#EC6625] border-b-2 border-[#EC6625]"
              : "text-[#838383]"
          }`}
          onClick={() => setActiveLink('/General')}
        >
          General
        </li>
        <li
          className={`cursor-pointer py-3 px-3 sm:px-6 text-sm sm:text-base ${
            activeLink === "/Cover"
              ? "text-[#EC6625] border-b-2 border-[#EC6625]"
              : "text-[#838383]"
          }`}
          onClick={() => setActiveLink('/Cover')}
        >
          Cover
        </li>

        <li
          className={`cursor-pointer py-3 px-3 sm:px-6 text-sm sm:text-base ${
            activeLink === "/Premium"
              ? "text-[#EC6625] border-b-2 border-[#EC6625]"
              : "text-[#838383]"
          }`}
          onClick={() => setActiveLink('/Premium')}
        >
          Premium
        </li>

        <li
          className={`cursor-pointer py-3 px-3 sm:px-6 text-sm sm:text-base ${
            activeLink === "/Claims"
              ? "text-[#EC6625] border-b-2 border-[#EC6625]"
              : "text-[#838383]"
          }`}
          onClick={() => setActiveLink('/Claims')}
        >
          Claims
        </li>

        <li
          className={`cursor-pointer py-3 px-3 sm:px-6 text-sm sm:text-base ${
            activeLink === "/Policy"
              ? "text-[#EC6625] border-b-2 border-[#EC6625]"
              : "text-[#838383]"
          }`}
          onClick={() => setActiveLink('/Policy')}
        >
          Policy
        </li>
      </ul>

      {activeLink === "/General" && (
        <div>
  <div class="flex gap-2 flex-col text-justify py-4">
    <h2 class="font-mulish text-[16px] font-semibold">Why do I need to insure my car?</h2>
    <p class="font-mulish text-[16px]">
      In India, third-party car insurance is compulsory for all car owners. Moreover, own-damage car insurance covers you in case of accidents, theft and fire. In case of any untoward incident, you don’t have to pay out of pocket for repairs or replacement if you have a valid insurance policy.
    </p>
  </div>

  <div class="flex gap-2 flex-col text-justify py-4">
    <h2 class="font-mulish text-[16px] font-semibold">What are the benefits of buying car insurance online?</h2>
    <p class="font-mulish text-[16px]">
      When you buy car insurance online, you get an instant policy, as there is no documentation or paperwork involved. You also have the advantage of choosing from multiple payment options, e.g., credit card (Visa, Master, AMEX card), net banking, debit card etc.
    </p>
  </div>

  <div class="flex gap-2 flex-col text-justify py-4">
    <h2 class="font-mulish text-[16px] font-semibold">What are the various types of vehicles that I can insure online?</h2>
    <p class="font-mulish text-[16px]">You can insure a private car and two-wheeler online.</p>
  </div>

  <div class="flex gap-2 flex-col text-justify py-4">
    <h2 class="font-mulish text-[16px] font-semibold">How quickly can I buy/ renew car insurance online?</h2>
    <p class="font-mulish text-[16px]">
      It takes just a few minutes to buy or renew car insurance online. You just have to enter the vehicle details, contact info and insured details, and pick the covers you need. Once you make the payment, you receive an instant car insurance policy.
    </p>
  </div>

  <div class="flex gap-2 flex-col text-justify py-4">
    <h2 class="font-mulish text-[16px] font-semibold">Are offline and online car insurance policies the same?</h2>
    <p class="font-mulish text-[16px]">
      Yes, they are. In case of online car insurance, once you make payment, we send the policy documents to your email and your registered address.
    </p>
  </div>

  <div class="flex gap-2 flex-col text-justify py-4">
    <h2 class="font-mulish text-[16px] font-semibold">Where can I check my car insurance policy details?</h2>
    <p class="font-mulish text-[16px]">
      You can check all your car insurance details in your policy documents. You can also login to our website or IL Take Care app to check the below details:
    </p>
    <ul>
    {["Policy number", "Policy start and end date", "Policy type (Comprehensive/OD only/TP only)","Engine & chassis number"].map((item, index) => (
        <li key={index} className="flex gap-2 items-center">
            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M9.99911 4.50319C9.99753 4.6489 9.95388 4.78818 9.87768 4.89211L6.96172 8.82209C6.88473 8.93352 6.77759 8.9978 6.66489 8.99994C6.55218 9.00209 6.44266 8.94316 6.36329 8.83602C6.28392 8.72887 6.23948 8.58209 6.24106 8.42995C6.24265 8.27781 6.28948 8.13316 6.37123 8.02923L8.57764 5.05497H0.422632C-0.140877 5.06568 -0.140877 3.9214 0.422632 3.93212H8.57685L6.37202 0.961065C6.29345 0.856066 6.249 0.712496 6.249 0.563568C6.249 0.413569 6.29265 0.269998 6.37123 0.164999C6.45059 0.0578568 6.55695 0 6.66727 0C6.77838 0 6.88473 0.061071 6.96251 0.167142L9.87848 4.09712C9.95784 4.20426 10.0023 4.35212 9.99991 4.50426" fill="#282828"/>
            </svg>

            <a>{item}</a>       
        </li>
    ))}
  </ul>

  </div>

  <div class="flex gap-2 flex-col text-justify py-4">
    <h2 class="font-mulish text-[16px] font-semibold">What is an endorsement in car insurance?</h2>
    <p class="font-mulish text-[16px]">
      An endorsement is written evidence of an agreed change in the policy. It is a document that incorporates changes in the policy terms.
    </p>
  </div>

  <div class="flex gap-2 flex-col text-justify py-4">
    <h2 class="font-mulish text-[16px] font-semibold">Do I need a valid PUC to drive in India?</h2>
    <p class="font-mulish text-[16px]">
      Yes, you need to hold a valid and effective PUC, and/or fitness certificate, to drive your vehicle and stay compliant with the law.
    </p>
  </div>

  <div class="flex gap-2 flex-col text-justify py-4">
    <h2 class="font-mulish text-[16px] font-semibold">Do I need to have a valid insurance policy to get my new vehicle registered?</h2>
    <p class="font-mulish text-[16px]">
      Yes, you need to have an active and valid insurance policy while registering your new vehicle. Even a valid third party (TP) policy will work for registering your vehicle at the RTO.
    </p>
  </div>
</div>

  )}
    </div>
    </div>
  )
}

export default Policies


