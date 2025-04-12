"use client"
import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ name, color = 'white' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClick = () => {
    if (!isDesktop) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => isDesktop && setIsOpen(true)}
      onMouseLeave={() => isDesktop && setIsOpen(false)}
    >
      <button
        className="flex items-center space-x-2 focus:outline-none"
        onClick={handleClick}
      >
        <span>{name}</span>
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          className={`fill-[${color}] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1.108L3.898 5.022L5.003 6.128L6.106 5.021L10 1.108L9.957 1.066L8.894 0.001L5.003 3.911L1.104 0L0 1.108Z"
            fill={color}
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute mt-2 bg-white text-black rounded shadow-md z-50 lg:w-48 w-[95vw] ml-[-1.3rem]">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
