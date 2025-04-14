"use client"
import React, { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react'
import Link from 'next/link';
import Dropdown from '../ui/Dropdown';
import Image from 'next/image';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <div className="top-navbar  bg-[#F8F6F6] text-[13px] flex lg:justify-between items-center  lg:px-10 py-1">
        <div className="left py-1 flex lg:space-x-4 space-x-1 text-[13px] mx-2 md:mx-3 lg:mx-0">
          <div className='flex items-center lg:px-3 px-1 space-x-3'>
          <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.9984 0.962891C10.5665 0.962891 6.96094 4.56847 6.96094 9.00032C6.96094 13.4322 10.5665 17.0378 14.9984 17.0378C19.4302 17.0378 23.0358 13.4322 23.0358 9.00032C23.0358 4.56847 19.4302 0.962891 14.9984 0.962891ZM15 18C10.0374 18 6 13.9626 6 9C6 4.03739 10.0374 0 15 0C19.9626 0 24 4.03739 24 9C24 13.9626 19.9626 18 15 18Z" fill="#282828"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M12.9433 3.37332C12.9433 3.37332 13.8691 4.54958 14.2088 5.79142C14.4017 6.62143 13.8514 6.80588 13.4928 6.94373C13.1342 7.08157 12.526 7.52917 13.0559 8.7322C13.5859 9.93523 14.6442 11.0705 15.2141 11.2674C15.784 11.4643 15.9134 11.6158 16.7369 10.9086C17.3239 10.4045 18.2511 11.1205 18.7354 11.5735C18.9306 11.756 19.8576 12.7932 19.8576 12.7932C19.8576 12.7932 20.4806 13.7232 19.1207 14.4967C17.7609 15.2702 17.3709 15.1773 15.9051 14.0426C14.4393 12.9079 11.2742 10.5088 10.0318 5.32069C9.95923 5.01364 10.022 4.72275 10.1081 4.45152C10.2777 3.9167 11.3022 3.11491 11.8461 3.02319C12.2299 2.95843 12.6392 3.01535 12.9433 3.37332Z" fill="#282828"/>
          <path d="M29.5 9.5H23.5" stroke="#282828" strokeLinecap="square"/>
          <path d="M6.5 9.5H0.5" stroke="#282828" strokeLinecap="square"/>
          </svg>

            <a href="Tel:18002666" className='text-[0.9rem]'>1800 2666</a>
          </div>|
          <div className='flex items-center lg:px-3 px-1 lg:ml-3 ml-1  space-x-3 text-[13px]'>
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.9433 0.373318C2.9433 0.373318 3.86914 1.54958 4.20885 2.79142C4.40165 3.62143 3.85137 3.80588 3.49279 3.94373C3.13416 4.08157 2.52596 4.52917 3.05592 5.7322C3.58589 6.93523 4.64416 8.07049 5.21412 8.26738C5.78397 8.46432 5.91341 8.61577 6.73694 7.9086C7.32386 7.40451 8.25115 8.12054 8.73541 8.57346C8.93062 8.75598 9.85756 9.79324 9.85756 9.79324C9.85756 9.79324 10.4806 10.7232 9.12072 11.4967C7.76093 12.2702 7.37091 12.1773 5.9051 11.0426C4.43929 9.9079 1.27423 7.50881 0.0318069 2.32069C-0.0407703 2.01364 0.0220465 1.72275 0.108088 1.45152C0.277668 0.916703 1.30216 0.114911 1.84614 0.0231934C2.22994 -0.0415656 2.63923 0.0153526 2.9433 0.373318Z" fill="#282828"/>
          </svg>

            <a href="Tel:18002666">Call Back</a>
          </div>|
          <div className='lg:px-3 px-1'>
            <span className='bg-white rounded-3xl h-[23px] flex space-x-2 justify-center items-center px-2 text-[13px]'>
              <span className='bg-[#26BA40] rounded-full w-3 h-3'></span>
              <p>Live Chat</p>
            </span>
          </div>
        </div>

        
        <button
            className="flex items-center px-1 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              width="10"
              height="7"
              viewBox="0 0 10 7"
              className={`fill-[#000000] transition-transform duration-200 transform ${
                isOpen ? 'rotate-90' : '-rotate-90'
              }`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1.108L3.898 5.022L5.003 6.128L6.106 5.021L10 1.108L9.957 1.066L8.894 0.001L5.003 3.911L1.104 0L0 1.108Z"
                fill="#000000"
              />
            </svg>
          </button>


        
        <ul className="right hidden lg:flex space-x-4 text-sm ">
           <li className='px-1'><Dropdown name="Renewals" color='black' /></li>
           <li className='px-1'><Dropdown name="Support" color='black' /></li>
           <li className='px-1'><Dropdown name="Info Centre" color='black' /></li>
           <li className='px-1'><Dropdown name="Investor Relations" color='black' /></li>
        </ul>

        {isOpen && (
        <ul className="right lg:hidden flex flex-col space-y-4 text-sm bg-[#F8F6F6] absolute w-full mt-[10rem] z-40 px-3 pb-2">
           <li className='px-1'><Dropdown name="Renewals" color='black' /></li>
           <li className='px-1'><Dropdown name="Support" color='black' /></li>
           <li className='px-1'><Dropdown name="Info Centre" color='black' /></li>
           <li className='px-1'><Dropdown name="Investor Relations" color='black' /></li>
        </ul>
        )}

      </div>
    <div className="bottom-navbar bg-gradient-to-b from-[#F17D01] to-[#AE2120] py-3 px-6 text-white">
      <div className="lg:flex  items-center lg:flex-row">
    
        <div className="flex justify-between items-center w-full lg:w-auto">
        <Image
            src="/logo.svg"
            width={200}
            height={200}
            alt="logo"
            className="lg:h-10"
          />
          {/* <img src={logo} alt="logo" className="h-8" /> */}

        
          {/* <button
  className="lg:hidden text-white focus:outline-none"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (

    <div className="space-y-1">
      <span className="block w-6 h-0.5 bg-white rounded-md"></span>
      <span className="block w-6 h-0.5 bg-white rounded-md"></span>
      <span className="block w-6 h-0.5 bg-white rounded-md"></span>
    </div>
  )}
</button> */}
   <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
        </div>

        
        <div
          className={`flex-col lg:flex-row lg:justify-between lg:flex items-start lg:items-center w-full mt-4 lg:mt-0 ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className="mx-0 lg:mx-7 space-y-3 lg:space-y-0 lg:space-x-3 flex flex-col lg:flex-row items-start lg:items-center text-base md:text-sm xl:text-base">
            <li className="px-1"><Dropdown name="Car Insurance" color="white" /></li>
            <li className="px-1"><Dropdown name="Two Wheeler Insurance" color="white" /></li>
            <li className="px-1"><Dropdown name="Health Insurance" color="white" /></li>
            <li className="px-1"><Dropdown name="Travel Insurance" color="white" /></li>
            <li className="px-1"><Dropdown name="Other Insurance" color="white" /></li>
            <li className="px-1"><Dropdown name="Claims" color="white" /></li>
          </ul>

         
          <div className="flex items-center space-x-3 mt-4 lg:mt-0 ml-0 lg:ml-4">
            <Link href="/login">Login</Link>
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.108 10L5.022 6.102L6.128 4.997L5.021 3.894L1.108 0L1.066 0.0430002L0.001 1.106L3.911 4.997L0 8.896L1.108 10Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;