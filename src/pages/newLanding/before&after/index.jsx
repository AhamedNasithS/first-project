import React from 'react'
import BeforeWork from "../../../videos/Before_work.mp4";
import AfterLife from "../../../videos/After_Life.mp4";
import BeforeLife from "../../../videos/Before_life.mp4";
import AfterWork from "../../../videos/After_Work.mp4";


export default function BeforeAfter() {
    const [isVideoHovered, setIsVideoHovered] = React.useState(false);
  return (
    <div className='text-center w-10/12 mx-auto mb-[80px] sm:mb-[140px] xl:mb-[200px] z-[1] relative' onMouseEnter={() => setIsVideoHovered(true)} onMouseLeave={() => setIsVideoHovered(false)}>
                <h1 className={` transition-all duration-[1000ms] ${isVideoHovered ? "text-[#FDD320]" : "text-[#FFFFFF]"} text-[40px] lg:text-[60px] xl:text-[90px] DarkerGrostesqueSemibold`}>{isVideoHovered ? "After 1.ai" : "Before 1.ai"}</h1>
                <div className={`w-full grid sm:grid-cols-2 xl:mt-[30px] transition-all duration-[1000ms] ${isVideoHovered ? "gap-0" : "gap-[50px] sm:gap-[100px]"} relative`}>
                    {isVideoHovered ? <h1 className='text-[60px] lg:text-[80px] xl:text-[110px] DarkerGrostesqueSemibold text-[#FFFFFF] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[60%] sm:-translate-y-[50%]'>Balance</h1> : <h1 className={`text-[18px] text-[#FDD320] transition-opacity duration-[1000ms] sm:hidden absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[60%] sm:-translate-y-[50%] ${isVideoHovered ? "opacity-0" : "opacity-100"}`}>Click Me</h1>}
                    <div className='w-full transition-all duration-[1000ms]'>
                        {isVideoHovered ? (
                            <video src={AfterWork} className='w-full rounded-t-[80px] sm:rounded-tr-[0px] sm:rounded-s-[100px]' autoPlay muted loop />
                        ) : (
                            <video src={BeforeWork} className='w-full rounded-t-[80px] sm:rounded-tr-[0px] sm:rounded-s-[100px]' autoPlay muted loop />
                        )}
                    </div>
                    <div className='w-full'>
                        {isVideoHovered ? (
                            <video src={AfterLife} className='w-full rounded-b-[80px] sm:rounded-bl-[0px] sm:rounded-e-[100px]' autoPlay muted loop />
                        ) : (
                            <video src={BeforeLife} className='w-full rounded-b-[80px] sm:rounded-bl-[0px] sm:rounded-e-[100px]' autoPlay muted loop />
                        )}
                    </div>
                </div>
                <div className='hidden sm:grid grid-cols-3 justify-center text-[22px] lg:text-[26px] xl:text-[30px] text-[#fff] DarkerGrostesqueSemibold'>
                    <h1>Work</h1>
                    <h1 className={`text-[14px] hidden xl:block lg:text-[16px] xl:text-[18px] text-[#FDD320] transition-opacity duration-[1000ms] ${isVideoHovered ? "opacity-0" : "opacity-100"}`}>Hover Me</h1>
                    <h1 className={`text-[14px] xl:hidden lg:text-[16px] xl:text-[18px] text-[#FDD320] transition-opacity duration-[1000ms] ${isVideoHovered ? "opacity-0" : "opacity-100"}`}>Click Me</h1>
                    <h1>Life</h1>
                </div>
            </div>
  )
}
