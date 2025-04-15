import Image from 'next/image'
import React from 'react'


const Hero = () => {
  return (
    <div className='flex lg:flex-row flex-col mx-auto px-5 md:px-0  pt-14 '>
        <div className="left">
            
            <div className='space-y-3 text-center lg:text-start'>
            <h1 className='text-4xl font-bold text-[#282828]'>Car insurance</h1>
            <h2 className='text-2xl '>Prices starting at just ₹2,094/yr</h2>
            <p className='text-[#6C6C6C] text-sm'>This amount refers to the TP rates only</p>
            </div>

            <svg className="my-5 hidden md:inline" width="95" height="1" viewBox="0 0 95 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="95" y2="0.5" stroke="url(#paint0_linear_1_145)"/>
            <defs>
            <linearGradient id="paint0_linear_1_145" x1="95" y1="2.13822" x2="0" y2="2.13822" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#C9C9C9"/>
            </linearGradient>
            </defs>
            </svg>

            <div className='flex md:flex-row flex-col  justify-center items-center'>
            <div >

                <div className='flex rounded-l-md items-center space-x-4 py-2 pl-4 pr-8 mt-5 bg-gradient-to-r from-[#FFF2EB] via-[#FFF7F2] to-white'>
                    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.14159 4.29642L4.20703 4.16211L4.33184 6.10602C4.38038 6.28274 4.51906 6.42411 4.6924 6.46652L5.71169 6.73514C5.80183 6.75634 5.88504 6.80582 5.94744 6.87651L11.3698 12.7789L12.6733 11.45L6.9806 5.85861C6.92512 5.80206 6.88352 5.73844 6.86272 5.66775L6.48829 4.62158C6.43282 4.46607 6.30801 4.3459 6.14853 4.30348L6.14159 4.29642Z" fill="#EC6625"/>
                    <path d="M16.0426 19.2707L19.0335 16.2217C19.514 15.7318 20.2984 15.7318 20.7789 16.2217L29.1141 24.7189C30.1584 25.7835 30.1535 27.508 29.1141 28.5676L28.1629 29.5373C27.1185 30.602 25.427 30.597 24.3876 29.5373L16.0524 21.0401C15.5719 20.5503 15.5719 19.7505 16.0524 19.2607L16.0426 19.2707Z" stroke="#EC6625" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.7148 19.8457L26.517 26.7802" stroke="#EC6625" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.7028 22.046L21.6445 10.8915C23.1769 11.1884 24.8272 10.7289 26.0129 9.52017C27.3442 8.16297 27.7464 6.21199 27.2194 4.49429L24.6122 7.15214C24.2794 7.49144 23.7316 7.49144 23.3919 7.15214L21.4088 5.13047C21.0759 4.79117 21.0759 4.23274 21.4088 3.88637L24.0159 1.22852C22.331 0.691296 20.4242 1.10128 19.0859 2.45848C17.9002 3.66724 17.4495 5.3496 17.7407 6.9118L6.79903 18.0663C5.26663 17.7694 3.61636 18.2289 2.43066 19.4376C1.09935 20.7948 0.697185 22.7458 1.22416 24.4635L3.83131 21.8057C4.16414 21.4664 4.71192 21.4664 5.05168 21.8057L7.03478 23.8273C7.36761 24.1666 7.36761 24.7251 7.03478 25.0714L4.42763 27.7293C6.11257 28.2665 8.01939 27.8565 9.35764 26.4993C10.5433 25.2906 10.994 23.6082 10.7028 22.046Z" stroke="#004A80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Doorstep Cashless RepairsH</span>
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H36L32.25 7L36 14H0L3.75 7L0 0Z" fill="url(#paint0_linear_1_1380)"/>
                    <path d="M7.04644 10.1328V3.78781H8.09044L11.5374 8.17081H11.2944V3.78781H12.5994V10.1328H11.5554L8.11744 5.74981H8.35144V10.1328H7.04644ZM13.8843 10.1328V3.78781H18.2943V4.87681H15.2253V6.36181H18.0783V7.45981H15.2253V9.04381H18.2943V10.1328H13.8843ZM21.054 10.1328L18.804 3.78781H20.253L21.864 8.68381H21.477L23.232 3.78781H24.258L25.869 8.68381H25.509L27.219 3.78781H28.578L26.31 10.1328H25.167L23.61 5.62381H23.817L22.206 10.1328H21.054Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear_1_1380" x1="0" y1="0" x2="-9.23926e-10" y2="15.9727" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F58820"/>
                    <stop offset="1" stopColor="#B02A30"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </div>


                <div className='flex rounded-l-md items-center space-x-4 py-2 px-4 mt-5 bg-gradient-to-r from-[#FFF2EB] via-[#FFF7F2] to-white'>
                <svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0081 13.3135H9.0957C5.10688 13.3135 1.87109 16.6122 1.87109 20.6786V26.6755" stroke="#004A80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.2109 34.4059H24.9994V20.679C24.9994 16.7418 21.9724 13.5343 18.1625 13.3291" stroke="#004A80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24.9995 26.2646H21.0704" stroke="#004A80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.0704 19.5996V34.4058" stroke="#004A80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.0078 30.1113H16.0963C17.6621 30.1113 19.0712 31.0842 19.6527 32.5664L20.279 34.1549" stroke="#004A80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.077 1H12.7946C10.6946 1 8.99219 2.73551 8.99219 4.87637V8.44871C8.99219 10.5896 10.6946 12.3251 12.7946 12.3251H14.077C16.177 12.3251 17.8794 10.5896 17.8794 8.44871V4.87637C17.8794 2.73551 16.177 1 14.077 1Z" stroke="#004A80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.9357 35.7044L18.0363 13.3203H15.6431L1 27.5641V32.0561C1 33.9107 3.31873 35.4232 5.13793 35.4688L13.9357 35.7044Z" stroke="#EC6625" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                    <span>₹15 lakh Personal Accident Cover</span>
                </div>

                <div className='flex rounded-l-md items-center space-x-4 py-2 px-4 mt-5 bg-gradient-to-r from-[#FFF2EB] via-[#FFF7F2] to-white'>
                <svg width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_1348)">
                    <path d="M23.9625 12.0327L20.8341 6.42897C20.3115 5.49387 19.3008 4.94382 18.2351 5.0057L11.8269 5.39761C10.8712 5.45262 10.0118 6.00267 9.55108 6.84151L1.0321 22.4081C0.296403 23.7557 0.791452 25.4471 2.13909 26.1897L11.6757 31.4083C13.0233 32.144 14.7147 31.649 15.4573 30.3013L23.9763 14.7279C24.4369 13.8891 24.4301 12.8715 23.9625 12.0327V12.0327Z" stroke="#004A80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.9348 12.5684C18.1006 12.5684 19.0456 11.6233 19.0456 10.4575C19.0456 9.29173 18.1006 8.34668 16.9348 8.34668C15.769 8.34668 14.824 9.29173 14.824 10.4575C14.824 11.6233 15.769 12.5684 16.9348 12.5684Z" stroke="#004A80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.5506 10.2036C18.5506 10.2036 23.4942 7.7352 24.2437 1.40269C24.3124 0.818259 23.6111 0.460724 23.1711 0.845762C22.2497 1.65709 21.0533 3.27976 20.6064 6.42882" stroke="#004A80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.69474 18.5922C7.57098 18.0903 7.69474 17.5196 8.03853 16.8802C8.38231 16.2408 8.79485 15.8626 9.28303 15.6907C9.7712 15.5188 10.28 15.5876 10.8163 15.8763C11.3526 16.1651 11.6758 16.5639 11.7995 17.0727C11.9233 17.5815 11.8064 18.1453 11.4695 18.7641C11.1326 19.3829 10.7063 19.8024 10.2181 19.9674C9.72995 20.1324 9.22115 20.0705 8.68484 19.7817C8.14854 19.493 7.82538 19.0942 7.70162 18.5854H7.69474V18.5922ZM9.64056 18.7504C9.77808 18.6404 9.94309 18.4066 10.1425 18.0491C10.3419 17.6915 10.4313 17.444 10.445 17.2652C10.4588 17.0796 10.4038 16.9558 10.2663 16.8802C10.1287 16.8046 9.9981 16.8252 9.85371 16.9421C9.70932 17.0521 9.5443 17.279 9.35866 17.6228C9.17302 17.9666 9.06301 18.2416 9.04238 18.4204C9.02863 18.5991 9.08363 18.7229 9.21427 18.7985C9.35866 18.8741 9.49618 18.8604 9.63369 18.7573H9.64056V18.7504ZM7.11719 22.3051L14.3367 17.9459L15.6912 18.6885L8.48545 23.0546L7.11719 22.3051ZM11.0501 23.8796C10.9332 23.3777 11.0501 22.807 11.4007 22.1745C11.7514 21.5419 12.1502 21.1569 12.6384 20.985C13.1197 20.8131 13.6285 20.875 14.1648 21.1637C14.7011 21.4525 15.0311 21.8582 15.148 22.3532C15.2649 22.8552 15.148 23.419 14.8042 24.0447C14.4604 24.6703 14.041 25.0829 13.5597 25.2548C13.0784 25.4267 12.5627 25.3648 12.0264 25.0691C11.4901 24.7735 11.167 24.3816 11.057 23.8796H11.0501ZM12.9821 24.024C13.1265 23.914 13.2916 23.6803 13.4841 23.3296C13.6766 22.9789 13.7729 22.7245 13.7866 22.5458C13.8004 22.3601 13.7454 22.2364 13.6078 22.1607C13.4703 22.0851 13.3397 22.1057 13.1953 22.2226C13.0509 22.3395 12.8859 22.5595 12.7002 22.9033C12.5146 23.2471 12.4046 23.5221 12.384 23.7009C12.3633 23.8796 12.4252 24.0034 12.5559 24.079C12.6865 24.1547 12.8309 24.1409 12.9753 24.0309L12.9821 24.024Z" fill="#EC6625"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_1348">
                    <rect width="25" height="32.4395" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>


                    <span>Drive less? Pay less with PAYD add-on</span>
                </div>

            </div>

       
        <div className="right flex justify-center items-center md:-mt-16 mt-8  pl-8">
            
            <Image
            src="/cars/Car.svg"
            width={400}
            height={400}
            alt="logo"
            />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero