"use client"
import React, { useState } from 'react';
// import logo from "/logo.svg";
import Link from 'next/link';
import Dropdown from '../ui/Dropdown';
import Image from 'next/image';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <div className="top-navbar  bg-[#F8F6F6] text-[13px] flex md:justify-between items-center md:px-10 py-1">
        <div className="left py-1 flex space-x-4 text-[13px]">
          <div className='flex items-center px-3 space-x-3'>
          <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9984 0.962891C10.5665 0.962891 6.96094 4.56847 6.96094 9.00032C6.96094 13.4322 10.5665 17.0378 14.9984 17.0378C19.4302 17.0378 23.0358 13.4322 23.0358 9.00032C23.0358 4.56847 19.4302 0.962891 14.9984 0.962891ZM15 18C10.0374 18 6 13.9626 6 9C6 4.03739 10.0374 0 15 0C19.9626 0 24 4.03739 24 9C24 13.9626 19.9626 18 15 18Z" fill="#282828"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9433 3.37332C12.9433 3.37332 13.8691 4.54958 14.2088 5.79142C14.4017 6.62143 13.8514 6.80588 13.4928 6.94373C13.1342 7.08157 12.526 7.52917 13.0559 8.7322C13.5859 9.93523 14.6442 11.0705 15.2141 11.2674C15.784 11.4643 15.9134 11.6158 16.7369 10.9086C17.3239 10.4045 18.2511 11.1205 18.7354 11.5735C18.9306 11.756 19.8576 12.7932 19.8576 12.7932C19.8576 12.7932 20.4806 13.7232 19.1207 14.4967C17.7609 15.2702 17.3709 15.1773 15.9051 14.0426C14.4393 12.9079 11.2742 10.5088 10.0318 5.32069C9.95923 5.01364 10.022 4.72275 10.1081 4.45152C10.2777 3.9167 11.3022 3.11491 11.8461 3.02319C12.2299 2.95843 12.6392 3.01535 12.9433 3.37332Z" fill="#282828"/>
          <path d="M29.5 9.5H23.5" stroke="#282828" stroke-linecap="square"/>
          <path d="M6.5 9.5H0.5" stroke="#282828" stroke-linecap="square"/>
          </svg>

            <a href="Tel:18002666">1800 2666</a>
          </div>|
          <div className='flex items-center px-3 space-x-3 text-[13px]'>
            <a href="Tel:18002666">Call Back</a>
          </div>|
          <div className='px-3'>
            <span className='bg-white rounded-3xl h-[23px] flex space-x-2 justify-center items-center px-2 text-[13px]'>
              <span className='bg-[#26BA40] rounded-full w-3 h-3'></span>
              <p>Live Chat</p>
            </span>
          </div>
        </div>

        
        <button
            className="flex items-center focus:outline-none"
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


        
        <ul className="right hidden md:flex space-x-4 text-sm ">
           <li className='px-1'><Dropdown name="Renewals" color='black' /></li>
           <li className='px-1'><Dropdown name="Support" color='black' /></li>
           <li className='px-1'><Dropdown name="Info Centre" color='black' /></li>
           <li className='px-1'><Dropdown name="Investor Relations" color='black' /></li>
        </ul>

        {isOpen && (
        <ul className="right md:hidden flex flex-col space-y-4 text-sm bg-[#F8F6F6] absolute w-full mt-[10rem] z-40 px-3">
           <li className='px-1'><Dropdown name="Renewals" color='black' /></li>
           <li className='px-1'><Dropdown name="Support" color='black' /></li>
           <li className='px-1'><Dropdown name="Info Centre" color='black' /></li>
           <li className='px-1'><Dropdown name="Investor Relations" color='black' /></li>
        </ul>
        )}

      </div>
    <div className="bottom-navbar bg-gradient-to-b from-[#F17D01] to-[#AE2120] py-3 px-6 text-white">
      <div className="md:flex  items-center md:flex-row">
    
        <div className="flex justify-between items-center w-full md:w-auto">
        <Image
            src="/logo.svg"
            width={200}
            height={200}
            alt="logo"
          />
          {/* <img src={logo} alt="logo" className="h-8" /> */}

        
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
         
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        
        <div
          className={`flex-col md:flex-row md:justify-between md:flex items-start md:items-center w-full mt-4 md:mt-0 ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className="mx-0 md:mx-7 space-y-3 md:space-y-0 md:space-x-3 flex flex-col md:flex-row items-start md:items-center text-base md:text-sm lg:text-base">
            <li className="px-1"><Dropdown name="Car Insurance" color="white" /></li>
            <li className="px-1"><Dropdown name="Two Wheeler Insurance" color="white" /></li>
            <li className="px-1"><Dropdown name="Health Insurance" color="white" /></li>
            <li className="px-1"><Dropdown name="Travel Insurance" color="white" /></li>
            <li className="px-1"><Dropdown name="Other Insurance" color="white" /></li>
            <li className="px-1"><Dropdown name="Claims" color="white" /></li>
          </ul>

         
          <div className="flex items-center space-x-3 mt-4 md:mt-0 ml-0 md:ml-4">
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