import React from 'react'

export default function Banner() {
    return (
        <div className='px-[20px] sm:p-0 w-full sm:w-[93%] xl:w-[89%] mx-auto sm:flex gap-[40px] items-center relative xl:max-h-[350px]'>
            <img src="https://dz1x1c630cl14.cloudfront.net/webassets/articles_main2.svg" alt='articles'  className='relative z-[1] sm:w-[50%] xl:w-auto' />
            <img src="https://dz1x1c630cl14.cloudfront.net/webassets/glow3.svg" alt='glow' className='absolute z-[0] top-[0px] sm:top-auto' />
            <div className='flex flex-col gap-[30px] justify-between mt-[40px] sm:mt-0 sm:h-[250px] lg:h-[330px] xl:h-[350px]'>
                <h3 className='bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent text-[18px] md:text-[22px] lg:text-[30px] xl:text-[40px] font-semibold relative z-[1] text-center sm:text-start'>Top 7 ways Workfast.ai can Revolutionise your project management</h3>
                <div className='flex gap-[20px] xl:gap-[40px] items-center relative z-[1]'>
                    <div className='flex gap-[8px] xl:gap-[12px] items-center'>
                        <img src='https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg' alt='articles' className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]' />
                        <h2 className='text-[#E4E8EB] text-[14px] lg:text-[20px] xl:text-[26px] font-medium'>Peter Elk</h2>
                    </div>
                    <div className='h-[24px] w-[1px] bg-[#FFFFFF] relative z-[1]'></div>
                    <h3 className='text-[#FFFFFF] text-[14px] lg:text-[20px] xl:text-[26px] font-medium relative z-[1]'>May 31,2024</h3>
                    <div className='h-[24px] w-[1px] bg-[#FFFFFF] relative z-[1]'></div>
                    <h3 className='text-[#FFFFFF] text-[14px] lg:text-[20px] xl:text-[26px] font-medium relative z-[1]'>18 min read</h3>
                </div>
                <div className='flex gap-[24px] xl:gap-[32px] justify-center sm:justify-start'>
                    <img src='https://dz1x1c630cl14.cloudfront.net/webassets/twitter.svg' alt='articles' className='relative z-[1] cursor-pointer w-[30px] lg:w-[45px] xl:w-auto' />
                    <img src='https://dz1x1c630cl14.cloudfront.net/webassets/linkedin_icon.svg' alt='articles' className='relative z-[1] cursor-pointer w-[30px] lg:w-[45px] xl:w-auto' />
                    <img src='https://dz1x1c630cl14.cloudfront.net/webassets/facebook_icon.svg' alt='articles' className='relative z-[1] cursor-pointer w-[30px] lg:w-[45px] xl:w-auto' />
                    <img src='https://dz1x1c630cl14.cloudfront.net/webassets/share_icon.svg' alt='articles' className='relative z-[1] cursor-pointer w-[30px] lg:w-[45px] xl:w-auto' />
                </div>
            </div>
        </div>
    )
}
