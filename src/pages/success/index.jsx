import React from 'react'
import yellowGlow from "../../images/yellowglow.png"
import Header from './header'
import LoadLottie from '../loadLottie';
import sucess from "../../sucess.json";
import { useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();

  React.useEffect(()=>{
    setTimeout(() => {
      navigate('/signup')
    }, 2000);
  },[])

  return (
    <div className='flex flex-col w-full h-full bg-[#010306] relative overflow-hidden'>
      <Header />
      <img src={yellowGlow} alt='yellowGlow' className='absolute top-[73px] md:top-[80px] z-[0] ' />
      <div className='relative px-[20px] md:px-0 w-full md:w-11/12 mx-auto flex flex-col justify-center items-center gap-[30px] lg:gap-[60px] overflow-hidden'>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div className='shooting-stars1'></div>
        <div className='shooting-stars'></div>
        <div className='w-[300px] md:w-[630px] md:h-[200px] bg-[#121825] rounded-[16px] p-[32px] relative z-[10] my-[200px]'>
          <div className='w-full flex  justify-center'>
            <div className="w-[100px] flex justify-center">
              <LoadLottie animationData={sucess} loop={true} />
            </div>
          </div>
          <h3 className='text-[14px] sen-bold text-[#FFF] text-center'>Thank you You can create your workspace now.</h3>
        </div>
      </div>
    </div>
  )
}
