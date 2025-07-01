import React from 'react';
import Header from './header';
import Banner from './banner';
import { FaRegClock } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Content from './content';
import Footer from './footer';

const tocData = [
  { title: 'Looking for a new platform', id: 'looking-for-a-new-platform' },
  { title: 'What is Workfast.ai ?', id: 'workfast.ai' },
  { title: 'Core features of Workfast.ai', id: 'core-features-of-workfast.ai' },
  { title: 'Unique features that will excites the users while using 1,ai :', id: 'unique-features' },
  { title: 'Why workfast.ai is created?', id: 'why-workfast.ai-is-created' },
];

export default function Articles3() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-start items-center w-full bg-[#010306] relative  gap-[30px] md:gap-[60px] lg:gap-[100px]'>
      <Header />
      <Banner />
      <Content tocData={tocData} />
      <p className='text-[#E4E8EB] text-[15px] md:text-[18px] lg:text-[22px] xl:text-[26px] font-normal w-[88%] text-center'>Thus I like to conclude , don’t choose a tool for your company just because your ‘friend suggested to use it’ or  false belief like ‘a costly software gives better result ‘.Have an informed decision while choosing a communication and collaboration tool . Use it during trial period . Get concurrence from all your team members . Give some time period for a software to perform its function. Use and wait till then  .Ask yourself How productive will my team be if I choose so and so software. Because productivity brings lots of revenue to your business and reduce your wastage .</p>
      <div className='flex flex-col gap-[32px] xl:gap-[48px] px-[20px] sm:px-0 w-full md:w-[88%] relative z-[1] mx-auto'>
        <div className='flex gap-[14px] items-center'>
          <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles.svg' alt='article' className='w-[35px] lg:w-[40px]' />
          <h3 className='text-[#FFFFFF] font-semibold text-[21px]'>Articles</h3>
        </div>
        <div className='flex flex-col md:flex-row gap-[20px] lg:gap-[28px] overflow-x-scroll justify-between w-full element-with-scrollbar'>
          <div className='rounded-[8px] sm:max-w-[300px] lg:max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => { navigate('/blog/breaking-barriers-in-communication-collaboration-with-workfast.ai') }}>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles1.svg' alt='articles' />
            <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[10px] lg:gap-[14px]'>
              <h2 className='text-[#FFFFFF] text-[18px] lg:text-[24px] font-semibold'>Breaking Barriers in Communication and Collaboration with Workfast.ai</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-[4px] items-center'>
                  <img src='https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg' alt='articles' className='w-[25px] lg:w-auto' />
                  <h2 className='text-[#7C828D] text-[15px] lg:text-[17px] font-medium'>Peter Elk</h2>
                </div>
                <div className='flex gap-[4px] items-center'>
                  <FaRegClock className='text-[#1C274C] text-[15px] lg:text-[17px] font-medium' />
                  <h2 className='text-[#7C828D] text-[15px] lg:text-[17px] font-medium'>18 min read</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-[8px] sm:max-w-[300px] lg:max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => {navigate('/blog/top-7-ways-workfast.ai-can-revolutionise-your-project-management')}}>
                    <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles2.svg' alt='articles' />
                    <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[10px] lg:gap-[14px]'>
                        <h2 className='text-[#FFFFFF] text-[18px] lg:text-[24px] font-semibold'>Top 7 ways Workfast.ai can Revolutionise your project management</h2>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[4px] items-center'>
                                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg' alt='articles' className='w-[25px] lg:w-auto'/>
                                <h2 className='text-[#7C828D] text-[15px] lg:text-[17px] font-medium'>Peter Elk</h2>
                            </div>
                            <div className='flex gap-[4px] items-center'>
                                <FaRegClock className='text-[#1C274C] text-[15px] lg:text-[17px] font-medium'/>
                                <h2 className='text-[#7C828D] text-[15px] lg:text-[17px] font-medium'>18 min read</h2>
                            </div>
                        </div>
                    </div>
                </div>
          <div className='rounded-[8px] sm:max-w-[300px] lg:max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => { navigate('/blog/beginner-guide-to-product-management') }}>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles3.svg' alt='articles' />
            <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[10px] lg:gap-[14px]'>
              <h2 className='text-[#FFFFFF] text-[18px] lg:text-[24px] font-semibold'>Beginner's Guide to Product Management: Everything You Need to Know</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-[4px] items-center'>
                  <img src='https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg' alt='articles' className='w-[25px] lg:w-auto' />
                  <h2 className='text-[#7C828D] text-[15px] lg:text-[17px] font-medium'>Peter Elk</h2>
                </div>
                <div className='flex gap-[4px] items-center'>
                  <FaRegClock className='text-[#1C274C] text-[15px] lg:text-[17px] font-medium' />
                  <h2 className='text-[#7C828D] text-[15px] lg:text-[17px] font-medium'>18 min read</h2>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='rounded-[8px] sm:max-w-[300px] lg:max-w-[378px] flex flex-col shrink-0 cursor-pointer ' onClick={() => { navigate('/blog/looking-for-a-new-platform-for-project-management') }}>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles4.svg' alt='articles' />
            <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[10px] lg:gap-[14px]'>
              <h2 className='text-[#FFFFFF] text-[18px] lg:text-[24px] font-semibold'>Looking for a new platform for project management ? Discover Workfast.ai</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-[4px] items-center'>
                  <img src='https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg' alt='articles' className='w-[25px] lg:w-auto' />
                  <h2 className='text-[#7C828D] text-[15px] lg:text-[17px] font-medium'>Peter Elk</h2>
                </div>
                <div className='flex gap-[4px] items-center'>
                  <FaRegClock className='text-[#1C274C] text-[15px] lg:text-[17px] font-medium' />
                  <h2 className='text-[#7C828D] text-[15px] lg:text-[17px] font-medium'>18 min read</h2>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
