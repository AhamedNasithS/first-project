import React from 'react'



export default function Availbles() {
  const [macHover, setMacHover] = React.useState(false)
  const [windowsHover, setWindowsHover] = React.useState(false)
  const [androidHover, setAndroidHover] = React.useState(false)
  const [wearablesHover, setWearablesHover] = React.useState(false)
  const [IosHover, setIosHover] = React.useState(false)
  const [webHover, setWebHover] = React.useState(false)


  return (
    <div className="flex flex-col items-center relative w-10/12 mx-auto">
      <img src="https://dz1x1c630cl14.cloudfront.net/webassets/glow3.svg" alt='glow' className='absolute -top-[100px] sm:-top-[300px] lg:-top-[150px] z-0' />
      <h3 className='text-[22px] sm:text-[38px] lg:text-[55px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Available On</h3>
      {/* <img src={Cave} alt='cave' className='absolute top-[18px] sm:top-[30px] lg:top-[40px] right-0 sm:right-[20px] w-[80px] sm:w-[150px] lg:w-[230px] xl:w-auto' /> */}
      <div className='absolute top-[18px] sm:top-[30px] lg:top-[40px] right-0 sm:right-[20px] w-[100px] xl:w-[340px] h-[40px] lg:h-[55px] hidden xl:block'>
        <div className='w-full h-full animationBorder bg-[#3E3E3E] pt-[1px] pr-[1px] relative z-[1]  lg:rounded-tr-[50px]'>
          <div className='w-full h-full bg-[#010306] relative z-[5] rounded-tr-[50px]'>
          </div>
        </div>
      </div>
      {/* <img src={Cave1} alt='cave' className='absolute top-[18px] sm:top-[30px] lg:top-[40px] left-0 sm:left-[20px] w-[80px] sm:w-[150px] lg:w-[230px] xl:w-auto' /> */}
      <div className='absolute top-[18px] sm:top-[30px] lg:top-[40px] left-0 sm:left-[20px] w-[100px] lg:w-[340px] h-[40px] lg:h-[55px] hidden xl:block'>
        <div className='w-full h-full animationBorderLeft bg-[#3E3E3E] pt-[1px] pl-[1px] relative z-[1] rounded-tl-[50px]'>
          <div className='w-full h-full bg-[#000] relative z-[5] rounded-tl-[50px]'>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 xl:flex gap-6 lg:gap-12 items-center justify-center mt-[20px] lg:mt-[50px] w-full relative z-10'>
        <div className='flex gap-1.5 items-center' onMouseEnter={() => { setMacHover(true) }} onMouseLeave={() => { setMacHover(false) }}>
          {macHover ? (
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/apple.svg' alt='apple' className='w-[30px] lg:w-auto' />
          ) : (
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/apple1.svg' alt='apple' className='w-[30px] lg:w-auto' />
          )}
          <h2 className='text-[#FFF] font-semibold text-[18px] lg:text-[32px]'>Mac</h2>
        </div>
        <div className='flex gap-1.5 items-center sm:justify-center lg:justify-end' onMouseEnter={() => { setWindowsHover(true) }} onMouseLeave={() => { setWindowsHover(false) }}>
          {windowsHover ? (
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/windows.svg' alt='apple' className='w-[30px] lg:w-auto' />
          ) : (
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/windows1.svg' alt='apple' className='w-[30px] lg:w-auto' />
          )}
          <h2 className='text-[#FFF] font-semibold text-[18px] lg:text-[32px]'>Windows</h2>
        </div>
        <div className='flex gap-1.5 items-center ml-0 sm:ml-[80px] lg:ml-0' onMouseEnter={() => { setAndroidHover(true) }} onMouseLeave={() => { setAndroidHover(false) }}>
          {androidHover ? (
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/android.svg' alt='apple' className='w-[30px] lg:w-auto' />
          ) : (
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/android1.svg' alt='apple' className='w-[30px] lg:w-auto' />
          )}
          <h2 className='text-[#FFF] font-semibold text-[18px] lg:text-[32px]'>Android</h2>
        </div>
        <div className='flex gap-1.5 items-center' onMouseEnter={() => { setWearablesHover(true) }} onMouseLeave={() => { setWearablesHover(false) }}>
          {wearablesHover ? (
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/wearables.svg' alt='apple' className='w-[30px] lg:w-auto' />
          ) : (
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/wearables1.svg' alt='apple' className='w-[30px] lg:w-auto' />
          )}
          <h2 className='text-[#FFF] font-semibold text-[18px] lg:text-[32px]'>Wearables</h2>
        </div>
        <div className='flex gap-1.5 items-center ml-0 sm:ml-[40px] xl:ml-0 xl:justify-end' onMouseEnter={() => { setIosHover(true) }} onMouseLeave={() => { setIosHover(false) }}>
          {IosHover ? (
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/apple.svg' alt='apple' className='w-[30px] lg:w-auto' />
          ) : (
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/apple1.svg' alt='apple' className='w-[30px] lg:w-auto' />
          )}
          <h2 className='text-[#FFF] font-semibold text-[18px] lg:text-[32px]'>IOS</h2>
        </div>
        <div className='flex gap-1.5 items-center xl:justify-end ml-0 sm:ml-[80px] lg:ml-0' onMouseEnter={() => { setWebHover(true) }} onMouseLeave={() => { setWebHover(false) }}>
          {webHover ? (
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/web.svg' alt='apple' className='w-[30px] lg:w-auto' />
          ) : (
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/web1.svg' alt='apple' className='w-[30px] lg:w-auto' />
          )}
          <h2 className='text-[#FFF] font-semibold text-[18px] lg:text-[32px]'>Web</h2>
        </div>
      </div>
    </div>
  )
}
