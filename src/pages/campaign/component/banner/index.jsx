import React from 'react'
import campaignBg from "../../../../images/campaign_bg.png";
import campaignIcon from "../../../../images/campaignIcon.svg";
import Arrow from "../../../../images/routeArrow.svg";
import whatsapp from "../../../../images/whatsapp.svg";



export default function Banner() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % 3);
        }, 2000); // Change the delay time as needed (in milliseconds)

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-[#FFF] relative'>
            <img src={campaignBg} alt='' className='absolute z-0 left-1/2 -translate-x-1/2 -top-[0px] xl:-top-[170px]' />
            <div className='flex gap-[6px] sm:gap-[12px] items-center justify-center text-[#24223E] font-semibold text-[18px] sm:text-[30px] lg:text-[40px] xl:text-[60px] relative z-[1]'>
                <h2>Ready to Save</h2>
                <h2 className={`font-semibold text-[18px] sm:text-[30px] lg:text-[40px] xl:text-[70px] text-[#007AFF] text-center relative z-[1] ${activeIndex === 0 ? 'block' : 'hidden'}`}>Time</h2>
                <h2 className={`font-semibold text-[18px] sm:text-[30px] lg:text-[40px] xl:text-[70px] text-[#FF9500] text-center relative z-[1] ${activeIndex === 1 ? 'block' : 'hidden'}`}>Energy</h2>
                <h2 className={`font-semibold text-[18px] sm:text-[30px] lg:text-[40px] xl:text-[70px] text-[#34C759] text-center relative z-[1] ${activeIndex === 2 ? 'block' : 'hidden'}`}>Money</h2>
                <h2>with Workfast.ai ?</h2>
            </div>
            <div className='mt-[20px] lg:mt-[45px] flex justify-center items-center flex-col gap-[34px] relative z-[1]'>
                <div className='flex justify-center'>
                    <img src={campaignIcon} alt='campaignIcon' className='w-[100px] sm:w-[150px] lg:w-auto'/>
                    <img src={Arrow} alt='Arrow' className='rotate-180'/>
                    <img src={whatsapp} alt='whatsapp' className='w-[50px] sm:w-[80px] lg:w-auto'/>
                </div>
                <h3 className='text-[#000000] text-[16px] sm:text-[22px] lg:text-[28px] xl:text-[32px] font-medium text-center w-11/12 lg:w-10/12 xl:w-8/12 relative z-[1]'>Why settle for <span className='font-semibold text-[#26AE60]'>WhatsApp</span> to manage your team when <span className='font-semibold text-[#FDB220]'>Workfast.ai</span> delivers a more professional solution for less ?</h3>
                <div className='relative z-[1] px-[27px] py-[10px] lg:py-[17px] rounded-[8px] sm:rounded-[12px] bg-gradient-to-l from-[#FDD01F] via-[#FDD320] to-[#F8861B] cursor-pointer text-[#2A2200] font-semibold text-[14px] sm:text-[18px] lg:text-[22px] '>Sign-up Free</div>
            </div>
        </div>
    )
}
