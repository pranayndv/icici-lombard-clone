import Image from 'next/image';
import React from 'react'

const tags = [
        "Health Insurance", "Bike Insurance", "Travel Insurance", "Vehicle Insurance", "Car Insurance Blogs",
        "Zero Depreciation Car Insurance", "Car Insurance Calculator", "Comprehensive Car Insurance",
        "Roadside Assistance", "Engine Protect Car Insurance", "Third-Party Car Insurance",
        "Cashless Car Insurance", "Model based Car Insurance", "Car Insurance In Ahmedabad",
        "Car Insurance In Jaipur", "Car Insurance Coverage", "Second Hand Car Insurance",
        "Car Insurance In Nashik", "Consumable Car Insurance", "IDV In Car Insurance",
        "Car Insurance In Gurgaon", "No Claim Bonus In Car Insurance"
      ];
      

const Searches = () => {
  return (
    <div className='bg-[#F8F6F6]  py-10 md:px-20 px-7 '>

        <div className='flex lg:flex-row flex-col  items-center space-x-10'>

            <Image src="/svgs/search.svg"
                alt="star"
              width={400}
              height={400}
              className="w-auto"
                                    />
            <div>
            <h2 className="text-4xl  mb-7 text-[#282828] md:ml-2 md:text-start text-center my-3">Popular Searches</h2>
            <div className="flex flex-wrap gap-3">
         {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-[#FFF2EB] hover:shadow-sm`} >
            {tag}
          </span>
        ))}
      </div>
        </div>
        </div>



    </div>
  )
}

export default Searches



  
