import React from 'react'
import Articles1 from '../../../../images/articles_main2.svg';
import peter from "../../../../images/peter.svg";
import twitter from "../../../../images/twitter.svg";
import share from "../../../../images/share_icon.svg";
import linkedin from "../../../../images/linkedin_icon.svg";
import facebook from "../../../../images/facebook_icon.svg";

export default function Banner() {
    return (
        <div className='w-[89%] mx-auto flex gap-[40px] items-center relative max-h-[350px]'>
            <img src={Articles1} alt='articles' className='relative z-[1]' />
            <img src="https://dz1x1c630cl14.cloudfront.net/webassets/glow3.svg" alt='glow' className='absolute z-[0] top-[0px] sm:top-auto' />
            <div className='flex flex-col justify-between h-[350px]'>
                <h3 className='bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent text-[22px] md:text-[28px] lg:text-[36px] xl:text-[40px] font-semibold relative z-[1]'>Top 7 ways Workfast.ai can Revolutionise your project management</h3>
                <div className='flex gap-[40px] items-center relative z-[1]'>
                    <div className='flex gap-[12px] items-center'>
                        <img src={peter} alt='articles' className='w-[50px] h-[50px]' />
                        <h2 className='text-[#E4E8EB] text-[26px] font-medium'>Peter Elk</h2>
                    </div>
                    <div className='h-[24px] w-[1px] bg-[#FFFFFF] relative z-[1]'></div>
                    <h3 className='text-[#FFFFFF] text-[26px] font-medium relative z-[1]'>May 31,2024</h3>
                    <div className='h-[24px] w-[1px] bg-[#FFFFFF] relative z-[1]'></div>
                    <h3 className='text-[#FFFFFF] text-[26px] font-medium relative z-[1]'>18 min read</h3>
                </div>
                <div className='flex gap-[32px]'>
                    <img src={twitter} alt='articles' className='relative z-[1] cursor-pointer' />
                    <img src={linkedin} alt='articles' className='relative z-[1] cursor-pointer' />
                    <img src={facebook} alt='articles' className='relative z-[1] cursor-pointer' />
                    <img src={share} alt='articles' className='relative z-[1] cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
