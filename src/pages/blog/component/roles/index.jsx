import React from 'react'
import tik from "../../../../images/right.svg";

export default function Roles() {
    return (
        <div className='flex flex-col justify-center items-center w-10/12 relative z-[1] mx-auto'>
            <h2 className='text-[20px] md:text-[26px] lg:text-[32px] xl:text-[40px] bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent inter-bold relative z-[1]'>What are the roles in product management?</h2>
            <p className='text-[#E4E8EB] font-normal text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] mt-[20px] lg:mt-[40px] mx-auto text-center'>Generally the following roles are used in different companies across world. </p>
            <p className='text-[#E4E8EB] font-normal text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] mt-[10px] lg:mt-[20px] ml-[20px] lg:ml-[40px] xl:ml-[15px] text-start w-full xl:w-11/12'>They are :</p>
            <div className='mt-[40px] md:w-[94%] xl:w-11/12 grid md:grid-cols-2 gap-[60px] relative'>
                <div className='w-full md:w-[490px] rounded-[34px] p-[1px] bg-gradient-to-br from-[#1F44C5]/[80%] to-[#22398700]'>
                    <div className='w-full h-full rounded-[34px] bg-[#010306] p-[10px]'>
                        <div className='w-full h-full rounded-[30px] bg-gradient-to-bl from-[#10192C29] via-[#101B2E8F] to-[#29457B00] p-[20px] border-[1px] border-[#1F44C5]/[40%] flex flex-col gap-[20px]'>
                            <div className='flex gap-2 items-center'>
                                <img src={tik} alt='tik' className='w-[14px] md:w-auto'/>
                                <p className='text-[#E4E8EB] text-[14px] md:text-[20px] lg:text-[24px] font-normal'>Chief product officer</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={tik} alt='tik' className='w-[14px] md:w-auto'/>
                                <p className='text-[#E4E8EB] text-[14px] md:text-[20px] lg:text-[24px] font-normal'>Director of product management </p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={tik} alt='tik' className='w-[14px] md:w-auto'/>
                                <p className='text-[#E4E8EB] text-[14px] md:text-[20px] lg:text-[24px] font-normal'>Product manager</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={tik} alt='tik' className='w-[14px] md:w-auto'/>
                                <p className='text-[#E4E8EB] text-[14px] md:text-[20px] lg:text-[24px] font-normal'>Product owner</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={tik} alt='tik' className='w-[14px] md:w-auto'/>
                                <p className='text-[#E4E8EB] text-[14px] md:text-[20px] lg:text-[24px] font-normal'>Product marketing manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[380px] h-[100px] rounded-br-[20px] border-r-[1px] border-b-[1px] border-[#18599F]/[60%] absolute top-0 right-[50px]'></div>
            </div>
        </div>
    )
}