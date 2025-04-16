import React from 'react'


const InsuranceForm = () => {
  return (
    <div className='flex  flex-col justify-center  items-center  py-[36px] '>
        <form action="" className='border border-[#C9C9C9] rounded-lg md:w-[470px]  flex flex-col justify-center items-center space-y-6 p-7 py-8 '>
            <input type="text" className='rounded-md py-3 px-3 w-full border outline-none border-[#C9C9C9]' placeholder='Car registration no.' />

            <input type="text" className='rounded-md py-3 px-3 w-full border outline-none border-[#C9C9C9]' placeholder='Mobile no.' />

            <input type="text" className='rounded-md py-3 px-3 w-full border outline-none border-[#C9C9C9]' placeholder='Email' />

            <button className='rounded-md py-4 px-3 w-full bg-[#EC6608] text-white font-bold'>Get quote</button>

            <div className='w-full '>
                <a href="#" className='text-[#EC6625] text-base font-bold underline'>Retrieve quote</a>
            </div>

            <div className='w-full space-x-2 flex items-center mb-4'>
                <input type="checkbox" className='accent-[#EC6625] w-4 h-4' />
                <span>I agree to the <a href="" className='underline'>terms and conditions</a></span>
            </div>

        </form>
        <div className='xl:w-[367px] w-[300px] bg-[#FFF2EB] py-3 rounded-b-2xl flex justify-center items-center text-[#EC6625] font-semibold underline'>
            <a href=""> Renew your ICICI Lombard policy</a>
        </div>
    </div>
  )
}

export default InsuranceForm