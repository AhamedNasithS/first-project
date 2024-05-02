import React from 'react'

export default function ProductManager() {
  return (
    <div className='flex flex-col justify-center items-center w-10/12 relative z-[1] mx-auto'>
        <h2 className='text-[40px] bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent inter-bold relative z-[1]'>Who are product managers ?</h2>
        <p className='text-[#E4E8EB] font-normal text-[26px] mt-[40px] w-10/12 mx-auto'>Product managers are usually “Generalistsˮ who takes full responsibility for managing product starting from Design , development , testing and reaching product to the market</p>
        <p className='text-[#E4E8EB] font-normal text-[26px] mt-[20px] w-10/12 mx-auto'>A product team without a product manager is like an orchestra without a conductor.</p>
        <p className='text-[#E4E8EB] font-normal text-[26px] mt-[20px] w-10/12 mx-auto'>Most notably, product managers link the development team on the one side with marketing, sales, and customer success teams on the other side, while ensuring the process is aligned with the business vision.</p>
    </div>
  )
}