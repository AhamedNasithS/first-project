import React from 'react'

export default function Organisation() {
    return (
        <div className='flex flex-col gap-[15px] lg:gap-[30px] xl:gap-[50px]'>
            <h2 className='bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent text-[21px] md:text-[26px] lg:text-[32px] xl:text-[45px] font-semibold relative z-[1]'>Organisation chart and reporting : </h2>
            <p className='text-[#E4E8EB] text-[15px] md:text-[18px] lg:text-[21px] xl:text-[26px] font-normal'>Every organisation has hierarchy for smooth functioning of the system . Its common there will be reporting authority at every level. Workfast.ai will give space for creating organisation chart within organisation.  </p>
            <p className='text-[#E4E8EB] text-[15px] md:text-[18px] lg:text-[21px] xl:text-[26px] font-normal'>Simply it means , who reports to who ?. This will be helpful for AI intelligence to read data for giving rightful council when asked. </p>
            <p className='text-[#E4E8EB] text-[15px] md:text-[18px] lg:text-[21px] xl:text-[26px] font-normal'> For example , requesting leave to Manager or HR or CEO becomes easy . It automatically tag your reporting manager in leave request .  </p>
            <p className='text-[#E4E8EB] text-[15px] md:text-[18px] lg:text-[21px] xl:text-[26px] font-normal'> On other hand Organisation system will help assign tasks to their attendees with the help of AI.</p>
        </div>
    )
}
