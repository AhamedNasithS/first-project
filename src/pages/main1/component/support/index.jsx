import React from 'react'
import gsap from 'gsap';
import chroma from 'chroma-js';
import { LuHeartHandshake, LuHourglass, LuMessagesSquare, LuSmile } from 'react-icons/lu';


export default function Support() {
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    const button = buttonRef.current;

    if (!button) return;

    const handlePointerMove = (e) => {
      const rect = button.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(button, {
        "--pointer-x": `${x}px`,
        "--pointer-y": `${y}px`,
        duration: 0.6,
      });

      gsap.to(button, {
        "--button-glow": chroma
          .mix(
            getComputedStyle(button).getPropertyValue("--button-glow-start").trim(),
            getComputedStyle(button).getPropertyValue("--button-glow-end").trim(),
            x / rect.width
          )
          .hex(),
        duration: 0.2,
      });
    };

    button.addEventListener('pointermove', handlePointerMove);

    return () => {
      button.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative px-[20px] lg:px-0 w-full lg:w-10/12 mx-auto my-[20px] lg:my-[100px]">
      <h3 className='text-[24px] sm:text-[40px] lg:text-[65px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>World-Class Support Team</h3>
      <div ref={buttonRef} className='border-[1px] border-[#FDD220] bg-transparent rounded-[5px] lg:rounded-[20px] mt-[10px] glow-button'>
        <h1 className='text-[#FFFFFF] font-medium text-[14px] lg:text-[22px] span'>Contact</h1>
      </div>
      <div className='grid grid-cols-2 lg:flex w-full gap-6 lg:gap-16 items-center justify-center mt-[20px] lg:mt-[50px]'>
        <div className='bg-[#FFFFFF14] size-[150px] sm:size-[210px] m-auto border-[1px] border-[#FFFFFF0A] rounded-[20px] lg:rounded-[40px] flex flex-col justify-center items-center p-3 hover:scale-[1.1] transition-all duration-500' style={{ boxShadow: '0px 2.63px 0px 0px #FFFFFF14 inset' }}>
          <div className='size-[30px] md:size-[50px] bg-[#FCFCFC17] border-[1px] border-[#F78C9F] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
            <LuHeartHandshake className='relative z-[1] text-[#F78C9F] text-[20px] md:text-[30px]' />
          </div>
          <h2 className='font-semibold text-[18px] lg:text-[28px] text-[#FFF] my-[10px] lg:my-[15px]'>24/7</h2>
          <h3 className='font-medium text-[12px] lg:text-[18px] text-[#FFFFFF]'>Support</h3>
        </div>
        <div className='bg-[#FFFFFF14] size-[150px] sm:size-[210px] m-auto border-[1px] border-[#FFFFFF0A] rounded-[20px] lg:rounded-[40px] flex flex-col justify-center items-center p-3 hover:scale-[1.1] transition-all duration-500' style={{ boxShadow: '0px 2.63px 0px 0px #FFFFFF14 inset' }}>
          <div className='size-[30px] md:size-[50px] bg-[#FCFCFC17] border-[1px] border-[#69E3B0] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
            <LuMessagesSquare className='relative z-[1] text-[#69E3B0] text-[20px] md:text-[30px]' />
          </div>
          <h2 className='font-semibold text-[18px] lg:text-[28px] text-[#FFF] my-[10px] lg:my-[15px]'>{"<1h"}</h2>
          <h3 className='font-medium text-[12px] lg:text-[18px] text-[#FFFFFF]'>Response</h3>
        </div>
        <div className='bg-[#FFFFFF14] size-[150px] sm:size-[210px] m-auto border-[1px] border-[#FFFFFF0A] rounded-[20px] lg:rounded-[40px] flex flex-col justify-center items-center p-3 hover:scale-[1.1] transition-all duration-500' style={{ boxShadow: '0px 2.63px 0px 0px #FFFFFF14 inset' }}>
           <div className='size-[30px] md:size-[50px] bg-[#FCFCFC17] border-[1px] border-[#FCE05E] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
            <LuSmile className='relative z-[1] text-[#FCE05E] text-[20px] md:text-[30px]' />
          </div>
          <h2 className='font-semibold text-[18px] lg:text-[28px] text-[#FFF] my-[10px] lg:my-[15px]'>95%</h2>
          <h3 className='font-medium text-[12px] lg:text-[18px] text-[#FFFFFF]'>Satisfaction</h3>
        </div>
        <div className='bg-[#FFFFFF14] size-[150px] sm:size-[210px] m-auto border-[1px] border-[#FFFFFF0A] rounded-[20px] lg:rounded-[40px] flex flex-col justify-center items-center p-3 hover:scale-[1.1] transition-all duration-500' style={{ boxShadow: '0px 2.63px 0px 0px #FFFFFF14 inset' }}>
          <div className='size-[30px] md:size-[50px] bg-[#FCFCFC17] border-[1px] border-[#255DCA] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
            <LuHourglass className='relative z-[1] text-[#255DCA] text-[20px] md:text-[30px]' />
          </div>
          <h2 className='font-semibold text-[18px] lg:text-[28px] text-[#FFF] my-[10px] lg:my-[15px]'>99.99%</h2>
          <h3 className='font-medium text-[12px] lg:text-[18px] text-[#FFFFFF]'>Uptime</h3>
        </div>
      </div>
    </div>
  )
}
