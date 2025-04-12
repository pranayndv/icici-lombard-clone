import React from 'react'

const InsuraceTable = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center my-7 md:w-2/3 px-5 md:px-0 space-y-6'>
        <h1 className='xl:text-4xl text-xl text-center mb-4'>
          Comprehensive Car Insurance vs Third-Party Car Insurance
        </h1>

        <div className="overflow-hidden rounded-md">
          <table className='table-auto'>
            <thead>
              <tr className='bg-[#E1E0D1]'>
                <th className='pl-4 pr-2 py-5 text-left rounded-tl-md border-r border-gray-300'>Comprehensive Car Insurance</th>
                <th className='pl-4 pr-2 py-5 text-left rounded-tr-md'>Third-Party Car Insurance</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-[#F5F6F6]'>
                <td className='pl-4 pr-2 py-5 rounded-tl-md border-r border-gray-300'>Covers damages to your own car and third-party liabilities</td>
                <td className='pl-4 pr-2 py-5'>Covers third-party liabilities only</td>
              </tr>
              <tr>
                <td className='pl-4 pr-2 py-5 rounded-tl-md border-r border-gray-300'>Provides complete protection for your car</td>
                <td className='pl-4 pr-2 py-5'>Only covers legal liabilities</td>
              </tr>
              <tr className='bg-[#F5F6F6]'>
                <td className='pl-4 pr-2 py-5 rounded-tl-md border-r border-gray-300'>May include add-ons like zero depreciation, roadside assistance, etc.</td>
                <td className='pl-4 pr-2 py-5'>Only includes mandatory third-party coverage as per law</td>
              </tr>
              <tr>
                <td className='pl-4 pr-2 py-5 rounded-tl-md border-r border-gray-300'>Higher premium as compared to third-party insurance</td>
                <td className='pl-4 pr-2 py-5'>Lower premium as compared to comprehensive insurance</td>
              </tr>
              <tr className='bg-[#F5F6F6]'>
                <td className='pl-4 pr-2 py-5 rounded-bl-md rounded-tl-md border-r border-gray-300'>Can be purchased online or offline</td>
                <td className='pl-4 pr-2 py-5 rounded-br-md'>Mandatorily needs to be purchased before registering a car</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='p-5 md:pl-10 space-y-3 text-justify md:text-start'>
            <p>
            Comprehensive car insurance is a more comprehensive policy that covers not only third-party liabilities but also damage to your own vehicle. On the other hand, third-party car insurance only covers legal liabilities in case of an accident. Comprehensive car insurance also offers add-ons like zero depreciation and roadside assistance, whereas third-party insurance only includes mandatory coverage as per law.
            </p>

            <p>
            Comprehensive car insurance has a higher premium as compared to third-party insurance, but it provides complete protection for your car. The choice between the two depends on your budget and the level of coverage you desire. You can easily buy car insurance online or offline, but third-party insurance is mandatory and needs to be purchased before registering a car.
            </p>
        </div>
      </div>
    </div>
  )
}

export default InsuraceTable