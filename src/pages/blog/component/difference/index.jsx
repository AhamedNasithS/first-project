import React from 'react'


export default function Difference() {
    return (
        <div className='flex flex-col justify-center items-center w-11/12 relative z-[1] mx-auto border-b-[1px] border-[#18599F] rounded-b-[55px]'>
            <h2 className='text-[20px] md:text-[26px] lg:text-[32px] xl:text-[40px] bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent font-bold relative z-[1]'>Product Vs Project management</h2>
            <div className='mb-[40px] mt-[20px] md:my-[40px] lg:my-[80px] w-11/12 grid md:grid-cols-2 gap-[20px] md:gap-[60px]'>
                <div className='w-11/12 mx-auto md:w-full h-auto lg:h-[410px] rounded-[30px] sm:rounded-[34px] p-[1px] bg-gradient-to-br from-[#1F44C5CC] to-[#22398700]'>
                    <div className='w-full h-full rounded-[30px] sm:rounded-[34px] bg-[#010306] p-[5px] sm:p-[10px]'>
                        <div className='w-full h-full rounded-[26px] sm:rounded-[30px] bg-gradient-to-bl from-[#10192C29] via-[#101B2E8F] to-[#29457B00] p-[15px] sm:p-[20px] border-[1px] border-[#1F44C5]/[40%] flex flex-col gap-[15px] sm:gap-[20px] items-center'>
                            <h1 className='bg-gradient-to-l from-[#FFFFFF] to-[#18599F] bg-clip-text text-transparent font-medium text-[24px] sm:text-[26px] lg:text-[32px] xl:text-[43px]'>Product management</h1>
                            <div className='bg-gradient-to-bl from-[#10192C29] via-[#101B2E8F] to-[#29457B00] p-[5px] border-[1px] border-[#1F44C5]/[50%] w-[100px] sm:w-[115px] h-[40px] sm:h-[50px] rounded-[30px] sm:mt-[10px]'>
                                <div className='w-1/2 h-full rounded-[25px] bg-gradient-to-bl from-[#10192C29] via-[#101B2E8F] to-[#29457B00] border-[1px] border-[#1F44C5]/[50%] flex justify-center items-center' style={{ boxShadow: "0px 4px 6.7px 0px #00000029" }}>
                                    <img src='https://dz1x1c630cl14.cloudfront.net/webassets/productManagement.svg' alt='product' className='mt-[6px] w-[30px] sm:w-auto'/>
                                </div>
                            </div>
                            <p className='text-[#E4E8EB] text-[14px] lg:text-[18px] xl:text-[22px] font-normal text-center w-[87%] mt-[10px]'>Product management is a term suits for any company that develop product. Since the boom of software market , product management as a term typically used in product software making companies.</p>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 mx-auto md:w-full h-auto lg:h-[410px] rounded-[30px] sm:rounded-[34px] p-[1px] bg-gradient-to-br from-[#1F44C5CC] to-[#22398700]'>
                    <div className='w-full h-full rounded-[30px] sm:rounded-[34px] bg-[#010306] p-[5px] sm:p-[10px]'>
                        <div className='w-full h-full rounded-[26px] sm:rounded-[30px] bg-gradient-to-bl from-[#10192C29] via-[#101B2E8F] to-[#29457B00] p-[15px] sm:p-[20px] border-[1px] border-[#1F44C5]/[40%] flex flex-col gap-[15px] sm:gap-[20px] items-center'>
                            <h1 className='bg-gradient-to-l from-[#FFFFFF] to-[#C7B45D] bg-clip-text text-transparent font-medium text-[24px] sm:text-[26px] lg:text-[32px] xl:text-[43px]'>Project management </h1>
                            <div className='bg-gradient-to-bl from-[#10192C29] via-[#101B2E8F] to-[#29457B00] p-[5px] border-[1px] border-[#F2CD2CCC]/[60%] w-[100px] smw-[115px] h-[40px] sm:h-[50px] rounded-[30px] sm:mt-[10px] flex justify-end'>
                                <div className='w-1/2 h-full rounded-[25px] bg-gradient-to-bl from-[#10192C29] via-[#101B2E8F] to-[#29457B00] border-[1px] border-[#F2CD2CCC]/[60%] flex justify-center items-center' style={{ boxShadow: "0px 4px 6.7px 0px #00000029" }}>
                                    <img src='https://dz1x1c630cl14.cloudfront.net/webassets/projectManagement.svg' alt='product' className='mt-[6px] w-[30px] sm:w-auto'/>
                                </div>
                            </div>
                            <p className='text-[#E4E8EB] text-[14px] lg:text-[18px] xl:text-[22px] font-normal text-center w-[87%] mt-[10px]'>Whereas in Services software companies , they generally term as Project management because , services usually deal with customers for doing services like website, app development etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}