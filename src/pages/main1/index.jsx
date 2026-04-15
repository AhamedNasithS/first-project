import React from 'react';
import Header from './component/header';
import Intro from './component/intro';
import Channel from './component/channel';
import Project from './component/project';
import Task from './component/task';
import Chat from './component/chat';
import Features from './component/features';
import Footer from './component/footer';
import Availbles from './component/avaibles';
import Support from './component/support';
import Access from './component/access';
import AOS from 'aos';
import 'aos/dist/aos.css';
import appStore from "../../images/appstore.svg";
import playStore from "../../images/playstore.svg";
import mobile from "../../images/main/mobileview.png";
import { toast } from 'react-toastify';


export default function Main1() {

  const handleFeatureClick = () => {
    toast.success("Coming soon...!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored"
    });
  };
  
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='flex flex-col justify-start items-center w-full h-full bg-[#010306] relative overflow-hidden px-0'>
      <Header />
      <Intro handleFeatureClick={handleFeatureClick} />
      <Features />
      <img src={mobile} alt='mobileView'
        data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="10000"
        className='my-[20px]' />
      <Channel />
      <Project />
      <Task />
      <Chat />
      <Availbles />
      <div className='mt-[10px] relative z-[1] grid sm:flex md:flex-row justify-center items-center gap-[30px]'>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <div className='px-[20px] lg:px-[30px] py-[10px] border-[1px] border-[#004B9D] bg-[#0A0D1900] rounded-[14px] sm:rounded-[20px] flex gap-[20px] items-center cursor-pointer'>
            <img src={appStore} alt='appstore' className='w-[25px] sm:w-[30px] lg:w-auto' />
            <div className='flex flex-col justify-between'>
              <h3 className='text-[#FFFFFF] text-[12px] sm:text-[16px] lg:text-[18px] font-medium'>Download on the</h3>
              <h2 className='text-[#FFFFFF] text-[16px] sm:text-[22px] lg:text-[26px] font-semibold'>App Store</h2>
            </div>
          </div>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <div className='px-[20px] lg:px-[30px] py-[10px] border-[1px] border-[#004B9D] bg-[#0A0D1900] rounded-[14px] sm:rounded-[20px] flex gap-[20px] items-center cursor-pointer'>
            <img src={playStore} alt='playstore' className='w-[25px] sm:w-[30px] lg:w-auto' />
            <div className='flex flex-col justify-between'>
              <h3 className='text-[#FFFFFF] text-[12px] sm:text-[16px] lg:text-[18px] font-medium'>GET IT ON</h3>
              <h2 className='text-[#FFFFFF] text-[16px] sm:text-[22px] lg:text-[26px] font-semibold'>Google Play</h2>
            </div>
          </div>
        </a>
      </div>
      <Support />
      <Access handleFeatureClick={handleFeatureClick} />
      <Footer handleFeatureClick={handleFeatureClick} />
    </div>
  )
}
