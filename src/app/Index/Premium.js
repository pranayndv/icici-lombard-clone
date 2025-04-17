import React from 'react';

const data = [
  { title: "IDV", desc: "IDV is the maximum amount you can claim under your policy. The higher your car’s market value, the higher your IDV and premium will be." },
  { title: "Make and model", desc: "Higher-end models are insured at a higher price, simply because the cost of repairs/replacement for such vehicle is higher." },
  { title: "Fuel type", desc: "Repairing petrol-fuelled cars is cheaper than those that run on diesel and CNG. As a result, they are also less expensive to insure." },
  { title: "Year of manufacture", desc: "Certain new cars may be costly to cover since their spare parts may not be available yet." },
  { title: "Location", desc: "Since urban areas have denser traffic, there’s a greater probability of accidental damages. Thus, your premium may vary depending on your location." },
  { title: "Claim history", desc: "If you have made no car insurance claims in the past year, you stand to gain a No Claim Bonus on your premium." },
  { title: "Add-ons", desc: "A small additional cost will be included in your premium for the add-ons you pick." },
];

function Premium() {
  return (
    <div className='py-5 px-4 md:px-8 max-w-[90rem] w-full mx-auto xl:h-[735px]'>
      <h1 className='text-2xl md:text-3xl xl:text-4xl text-center pt-3 pb-14 my-3 font-mulish font-[550]'>
        How is car insurance premium calculated?
      </h1>
      <div className='w-full flex flex-col lg:flex-row lg:space-x-5'>
    
        <div className='flex flex-col w-full lg:w-1/2 space-y-4'>
          <h3 className='text-lg font-semibold '>
            Your car insurance premium includes three major components:
          </h3>

       
          <div className='flex py-3 gap-4'>
            <svg className='w-6 h-6 shrink-0' width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.341719 22V18.79H5.20172V4.09H7.06172L0.821719 7.81V4.15L6.31172 0.849999H9.07172V18.79H13.6317V22H0.341719Z" fill="#EC6608" />
            </svg>
            <span className='text-base'>
              Third-party liability premium – this is stipulated by the Insurance Regulatory and Development Authority of India (IRDAI), and it is directly proportional to your car’s cubic capacity.
            </span>
          </div>


          <div className='mx-auto md:w-5/6 overflow-x-auto rounded-2xl bg-white md:ml-10'>
            <table className='w-full table-auto text-left border-separate border-spacing-0'>
              <thead>
                <tr className='bg-[rgba(225,224,209,1)] text-black'>
                  <th className='px-4 py-3 border-r border-[#ECE9E9] w-1/2'>Cubic capacity</th>
                  <th className='px-4 py-3 w-1/2'>Premium (From 1st June 2022)</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-[rgba(245,246,246,1)]'>
                  <td className='px-4 py-3 border-r border-gray-300'>Not exceeding 1000 cc</td>
                  <td className='px-4 py-3'>₹2,094</td>
                </tr>
                <tr>
                  <td className='px-4 py-3 border-r border-gray-300'>Exceeding 1000 cc but not exceeding 1500 cc</td>
                  <td className='px-4 py-3'>₹3,416</td>
                </tr>
                <tr className='bg-[rgba(245,246,246,1)]'>
                  <td className='px-4 py-3 border-r border-gray-300'>Exceeding 1500 cc</td>
                  <td className='px-4 py-3'>₹7,897</td>
                </tr>
              </tbody>
            </table>
          </div>

   
          <div className='flex py-3 gap-4'>
            <svg className='w-6 h-6 shrink-0' width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.35172 22V19.15L8.37172 11.83C9.25172 10.91 9.90172 10.06 10.3217 9.28C10.7417 8.5 10.9517 7.7 10.9517 6.88C10.9517 5.86 10.6317 5.09 9.99172 4.57C9.35172 4.05 8.42172 3.79 7.20172 3.79C6.22172 3.79 5.28172 3.97 4.38172 4.33C3.48172 4.67 2.60172 5.21 1.74172 5.95L0.481719 3.07C1.34172 2.31 2.40172 1.7 3.66172 1.24C4.94172 0.779999 6.28172 0.549999 7.68172 0.549999C9.96172 0.549999 11.7117 1.06 12.9317 2.08C14.1517 3.1 14.7617 4.56 14.7617 6.46C14.7617 7.78 14.4517 9.04 13.8317 10.24C13.2117 11.42 12.2517 12.66 10.9517 13.96L5.10172 19.81V18.79H15.6017V22H1.35172Z" fill="#EC6608" />
            </svg>
            <span className='text-base'>
              Own damage premium – this is calculated as IDV X [Tariff Rate] – [Discounts] + Add on Covers
            </span>
          </div>

          
          <div className='flex py-2 gap-4'>
            <svg className='w-6 h-6 shrink-0' width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.68172 22.3C6.22172 22.3 4.82172 22.09 3.48172 21.67C2.14172 21.23 1.04172 20.63 0.181719 19.87L1.44172 16.96C2.38172 17.68 3.35172 18.21 4.35172 18.55C5.37172 18.89 6.44172 19.06 7.56172 19.06C8.92172 19.06 9.95172 18.79 10.6517 18.25C11.3517 17.71 11.7017 16.92 11.7017 15.88C11.7017 14.88 11.3517 14.13 10.6517 13.63C9.97172 13.11 8.97172 12.85 7.65172 12.85H4.23172V9.76H7.32172C8.46172 9.76 9.37172 9.48 10.0517 8.92C10.7317 8.36 11.0717 7.59 11.0717 6.61C11.0717 5.69 10.7517 4.99 10.1117 4.51C9.49172 4.03 8.59172 3.79 7.41172 3.79C5.29172 3.79 3.42172 4.51 1.80172 5.95L0.541719 3.07C1.40172 2.27 2.46172 1.65 3.72172 1.21C5.00172 0.769999 6.34172 0.549999 7.74172 0.549999C9.94172 0.549999 11.6617 1.05 12.9017 2.05C14.1617 3.03 14.7917 4.4 14.7917 6.16C14.7917 7.42 14.4317 8.51 13.7117 9.43C13.0117 10.33 12.0417 10.93 10.8017 11.23V10.87C12.2617 11.11 13.3917 11.71 14.1917 12.67C15.0117 13.61 15.4217 14.79 15.4217 16.21C15.4217 18.09 14.7317 19.58 13.3517 20.68C11.9717 21.76 10.0817 22.3 7.68172 22.3Z" fill="#EC6608" />
            </svg>
            <span className='text-base'>Personal accident cover premium + Additional covers</span>
          </div>
        </div>

  
        <div className='w-full lg:w-1/2 lg:px-10 mt-10 lg:mt-0 text-start'>
          <h3 className='text-lg font-semibold'>
            Factors that affect these three components and your final car insurance price, include:
          </h3>

          {data.map((item, index) => (
            <div className='flex py-3 gap-x-3 items-start' key={index}>
              <div className='w-6 h-5 shrink-0 flex justify-center items-center'>
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.99911 4.50319C9.99753 4.6489 9.95388 4.78818 9.87768 4.89211L6.96172 8.82209C6.88473 8.93352 6.77759 8.9978 6.66489 8.99994C6.55218 9.00209 6.44266 8.94316 6.36329 8.83602C6.28392 8.72887 6.23948 8.58209 6.24106 8.42995C6.24265 8.27781 6.28948 8.13316 6.37123 8.02923L8.57764 5.05497H0.422632C-0.140877 5.06568 -0.140877 3.9214 0.422632 3.93212H8.57685L6.37202 0.961065C6.29345 0.856066 6.249 0.712496 6.249 0.563568C6.249 0.413569 6.29265 0.269998 6.37123 0.164999C6.45059 0.0578568 6.55695 0 6.66727 0C6.77838 0 6.88473 0.061071 6.96251 0.167142L9.87848 4.09712C9.95784 4.20426 10.0023 4.35212 9.99991 4.50426" fill="#282828" />
                </svg>
              </div>
              <span className='font-mulish text-[16px]'>
                <b>{item.title}</b> - {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Premium;
