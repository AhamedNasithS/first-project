import React from 'react'
import tik from "../../../../images/right.svg";
import ilustrater from "../../../../images/ilustrater.webp";

export default function Tools() {
    return (
        <div className='flex flex-col justify-center items-center w-10/12 relative z-[1] mx-auto'>
            <h2 className='text-[40px] bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent inter-bold relative z-[1] w-10/12 text-center'>What software tools does the product managers use to bring productivity in development of a product?</h2>
            <p className='text-[#E4E8EB] font-normal text-[32px] mt-[40px] w-10/12 mx-auto'>Mostly <span className='text-[#FFDD09]'>product managers</span> use tools for</p>
            <div className='mt-[40px] w-11/12 grid grid-cols-2 gap-[60px]'>
                <div className='w-[458px] rounded-[34px] p-[1px] bg-gradient-to-br from-[#1F44C5]/[80%] to-[#22398700]'>
                    <div className='w-full h-full rounded-[34px] bg-[#010306] p-[10px]'>
                        <div className='w-full h-full rounded-[30px] bg-gradient-to-bl from-[#10192C29] via-[#101B2E8F] to-[#29457B00] p-[20px] border-[1px] border-[#1F44C5]/[40%] flex flex-col gap-[20px]'>
                            <div className='flex gap-1 items-center'>
                                <img src={tik} alt='tik' />
                                <p className='text-[#E4E8EB] text-[24px] font-normal'>Prototyping</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src={tik} alt='tik' />
                                <p className='text-[#E4E8EB] text-[24px] font-normal'>Roadmapping</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src={tik} alt='tik' />
                                <p className='text-[#E4E8EB] text-[24px] font-normal'>Task management</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src={tik} alt='tik' />
                                <p className='text-[#E4E8EB] text-[24px] font-normal'>Data management</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src={tik} alt='tik' />
                                <p className='text-[#E4E8EB] text-[24px] font-normal'>Communication</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src={tik} alt='tik' />
                                <p className='text-[#E4E8EB] text-[24px] font-normal'>User tracking and analysis</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src={tik} alt='tik' />
                                <p className='text-[#E4E8EB] text-[24px] font-normal'>Customer survey</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={ilustrater} alt='ilustrater' className='w-[70%]'/>
            </div>
        </div>
    )
}