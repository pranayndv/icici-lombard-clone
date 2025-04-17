import React from 'react';

const faqItems = [
  {
    title: "What kind of coverage you need:",
    desc: "Choose from options like liability, collision, comprehensive, or personal injury protection.",
    icon: (
      <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-0.0049996 32V27.185H7.285V5.135H10.075L0.715 10.715V5.225L8.95 0.274998H13.09V27.185H19.93V32H-0.0049996Z" fill="#F26624"/>
      </svg>

    )
  },
  {
    title: "How much your car is worth:",
    desc: "Make sure the cost of your insurance policy matches your vehicle's value.",
    icon: (
      <svg width="23" height="33" viewBox="0 0 23 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.51 33V28.725L12.04 17.745C13.36 16.365 14.335 15.09 14.965 13.92C15.595 12.75 15.91 11.55 15.91 10.32C15.91 8.79 15.43 7.635 14.47 6.855C13.51 6.075 12.115 5.685 10.285 5.685C8.815 5.685 7.405 5.955 6.055 6.495C4.705 7.005 3.385 7.815 2.095 8.925L0.205 4.605C1.495 3.465 3.085 2.55 4.975 1.86C6.895 1.17 8.905 0.824998 11.005 0.824998C14.425 0.824998 17.05 1.59 18.88 3.12C20.71 4.65 21.625 6.84 21.625 9.69C21.625 11.67 21.16 13.56 20.23 15.36C19.3 17.13 17.86 18.99 15.91 20.94L7.135 29.715V28.185H22.885V33H1.51Z" fill="#F26624"/>
      </svg>
       
        
    )
  },
  {
    title: "How you drive:",
    desc: "Your driving habits, such as how often you drive and what type of driving you do, can affect the cost of the insurance if you opt for pay-as-you-drive or pay-how-you-drive policies.",
    icon: (
      <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.005 33.45C9.815 33.45 7.715 33.135 5.705 32.505C3.695 31.845 2.045 30.945 0.755 29.805L2.645 25.44C4.055 26.52 5.51 27.315 7.01 27.825C8.54 28.335 10.145 28.59 11.825 28.59C13.865 28.59 15.41 28.185 16.46 27.375C17.51 26.565 18.035 25.38 18.035 23.82C18.035 22.32 17.51 21.195 16.46 20.445C15.44 19.665 13.94 19.275 11.96 19.275H6.83V14.64H11.465C13.175 14.64 14.54 14.22 15.56 13.38C16.58 12.54 17.09 11.385 17.09 9.915C17.09 8.535 16.61 7.485 15.65 6.765C14.72 6.045 13.37 5.685 11.6 5.685C8.42 5.685 5.615 6.765 3.185 8.925L1.295 4.605C2.585 3.405 4.175 2.475 6.065 1.815C7.985 1.155 9.995 0.824998 12.095 0.824998C15.395 0.824998 17.975 1.575 19.835 3.075C21.725 4.545 22.67 6.6 22.67 9.24C22.67 11.13 22.13 12.765 21.05 14.145C20 15.495 18.545 16.395 16.685 16.845V16.305C18.875 16.665 20.57 17.565 21.77 19.005C23 20.415 23.615 22.185 23.615 24.315C23.615 27.135 22.58 29.37 20.51 31.02C18.44 32.64 15.605 33.45 12.005 33.45Z" fill="#F26624"/>
      </svg>
        
        
    )
  },
  {
    title: "How much you're willing to pay out of pocket:",
    desc: "Think about your budget and how much risk you're comfortable with. In case of an accident, if you’re not comfortable spending money from your own pocket for your car repairs, opt for the Own Damage cover instead of a Third-party policy.",
    icon: (
      <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.02 32V25.79H0.845V21.74L15.92 0.274998H20.6V21.38H25.145V25.79H20.6V32H15.02ZM15.02 21.38V7.115H16.1L5.165 22.73V21.38H15.02Z" fill="#F26624"/>
        </svg>
        
        
    )
  },
  {
    title: "Where you live:",
    desc: "Car insurance online costs can differ based on traffic and crime in your area.",
    icon: (
      <svg width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.725 32.45C10.345 32.45 8.965 32.3 7.585 32C6.235 31.7 4.96 31.28 3.76 30.74C2.59 30.2 1.585 29.555 0.745 28.805L2.635 24.44C4.045 25.49 5.485 26.285 6.955 26.825C8.455 27.335 10.015 27.59 11.635 27.59C13.585 27.59 15.1 27.11 16.18 26.15C17.29 25.16 17.845 23.84 17.845 22.19C17.845 20.51 17.32 19.16 16.27 18.14C15.22 17.09 13.78 16.565 11.95 16.565C10.66 16.565 9.475 16.82 8.395 17.33C7.345 17.81 6.4 18.56 5.56 19.58H1.735V0.274998H21.445V5.045H7.225V15.125H5.83C6.61 14.075 7.645 13.265 8.935 12.695C10.255 12.125 11.725 11.84 13.345 11.84C15.385 11.84 17.155 12.26 18.655 13.1C20.155 13.94 21.325 15.125 22.165 16.655C23.005 18.155 23.425 19.925 23.425 21.965C23.425 24.035 22.945 25.865 21.985 27.455C21.055 29.015 19.705 30.245 17.935 31.145C16.195 32.015 14.125 32.45 11.725 32.45Z" fill="#F26624"/>
        </svg>
        
        
    )
  },
  {
    title: "Discounts:",
    desc: "Look for discounts you might be eligible for, such as discounts for having multiple policies, being a safe driver, or driving less.",
    icon: (
    <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.625 33.45C8.635 33.45 5.545 32.07 3.355 29.31C1.195 26.55 0.115 22.68 0.115 17.7C0.115 14.1 0.67 11.055 1.78 8.565C2.89 6.045 4.465 4.125 6.505 2.805C8.575 1.485 11.05 0.824998 13.93 0.824998C15.64 0.824998 17.335 1.14 19.015 1.77C20.695 2.37 22.135 3.24 23.335 4.38L21.4 8.7C20.29 7.68 19.09 6.93 17.8 6.45C16.51 5.94 15.205 5.685 13.885 5.685C11.185 5.685 9.13 6.6 7.72 8.43C6.31 10.26 5.605 12.99 5.605 16.62V19.995H5.065C5.305 18.465 5.815 17.16 6.595 16.08C7.375 14.97 8.38 14.13 9.61 13.56C10.84 12.96 12.205 12.66 13.705 12.66C15.565 12.66 17.215 13.095 18.655 13.965C20.095 14.835 21.22 16.035 22.03 17.565C22.87 19.095 23.29 20.85 23.29 22.83C23.29 24.87 22.825 26.7 21.895 28.32C20.995 29.91 19.75 31.17 18.16 32.1C16.57 33 14.725 33.45 12.625 33.45ZM12.31 28.86C13.42 28.86 14.395 28.62 15.235 28.14C16.075 27.66 16.72 26.985 17.17 26.115C17.65 25.215 17.89 24.195 17.89 23.055C17.89 21.885 17.65 20.865 17.17 19.995C16.72 19.125 16.075 18.45 15.235 17.97C14.395 17.46 13.42 17.205 12.31 17.205C11.2 17.205 10.225 17.46 9.385 17.97C8.545 18.45 7.885 19.125 7.405 19.995C6.925 20.865 6.685 21.885 6.685 23.055C6.685 24.195 6.925 25.215 7.405 26.115C7.885 26.985 8.545 27.66 9.385 28.14C10.225 28.62 11.2 28.86 12.31 28.86Z" fill="#F26624"/>
    </svg>

    )
  }
];

const Faq = () => {
  return (
    <div className="bg-[#00305B] py-[4.2rem] px-4 md:px-10 text-white xl:h-[883px]">
      <h1 className="xl:text-4xl text-2xl text-center mb-10 font-mulish font-[550]">
        How to choose the right car insurance policy online?
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[90rem] w-full mx-auto">
        {faqItems.map((item, index) => (
          <div key={index} className="flex border border-[#065E9E] md:h-[280px] p-6 sm:p-8 rounded-lg h-full">
            <div className="flex items-start pr-5 pt-2">{item.icon}</div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-base mt-6 max-w-[90rem] w-full mx-auto">
        Before buying car insurance online, read the policy details and fine print, and ask questions to clarify anything you need help understanding. Regularly reviewing your car insurance policy can help ensure that it continues to meet your needs and that you&apos;re not overpaying for coverage you don&apos;t need.
      </p>
    </div>
  );
};

export default Faq;
