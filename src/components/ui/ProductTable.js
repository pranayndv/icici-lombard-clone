import React from 'react'

const ProductTable = () => {
  return (
    <div className='md:mx-24 mx-5 overflow-x-auto rounded-2xl bg-white my-12 '>
    <table className='w-full table-auto text-left border-separate border-spacing-0'>
      <thead>
        <tr className='bg-[rgba(225,224,209,1)] text-black'>
          <th className='px-4 py-3 border-r border-gray-300 w-1/3'>Product</th>
          <th className='px-4 py-3 border-r border-gray-300 w-1/3'>Product Code</th>
          <th className='px-4 py-3 w-1/2'>UIN Code</th>
        </tr>
      </thead>
      <tbody>
        <tr className='bg-[rgba(245,246,246,1)]'>
          <td className='px-4 py-3 border-r border-gray-300'>Private car package policy</td>
          <td className='px-4 py-3 border-r border-gray-300'>3001</td>
          <td className='px-4 py-3'>IRDAN115RP0017V01200102</td>
        </tr>
        <tr>
          <td className='px-4 py-3 border-r border-gray-300'>Stand-alone own damage private car package policy</td>
          <td className='px-4 py-3 border-r border-gray-300'>3001/O</td>
          <td className='px-4 py-3'>IRDAN115RP0001V01201920</td>
        </tr>
        <tr className='bg-[rgba(245,246,246,1)]'>
          <td className='px-4 py-3 border-r border-gray-300'>Private car liability policy</td>
          <td className='px-4 py-3 border-r border-gray-300'>3001/A</td>
          <td className='px-4 py-3'>IRDAN115RP0012V01200102</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default ProductTable