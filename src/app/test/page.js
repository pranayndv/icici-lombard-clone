import React from 'react'
import insurance from "../../../public/svgs/insurance.svg"
import Image from 'next/image'

const page = () => {
  return (
    <div className='mt-[106px] h-screen'>

      <Image src={insurance} alt="" className='h-20 w-20' />

    </div>
  )
}

export default page