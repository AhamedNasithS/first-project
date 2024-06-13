import React from 'react';
import Header from './header';
import Banner from './banner';
import { FaRegClock } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Content from './content';

const tocData = [
  { title: 'What is Breaking Barriers', id: 'breaking-barriers' },
  { title: 'All-in-one workbase', id: 'all-in-one' },
  { title: 'Automation makes work easier', id: 'automation' },
  { title: 'AI intelligence', id: 'ai-intelligence' },
  { title: 'Email - calendar duo', id: 'email-calendar' },
  { title: 'Organisation chart and reporting', id: 'organisation' },
  { title: 'Daily report generation', id: 'daily-report' },
  { title: 'Integration and personalisation', id: 'integration' },
  { title: 'Workflow Setting', id: 'workflow' },
  { title: 'Goal - Project - Task linkage', id: 'goal-project' },
];

export default function Articles1() {
  const navigate = useNavigate();
  const [items, setItems] = React.useState('');

  const scrollToSection = (id) => {
    setItems(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sectionTops = tocData.map(item => {
        const element = document.getElementById(item.id);
        return { id: item.id, top: element.getBoundingClientRect().top };
      });
      const visibleSection = sectionTops.find(section => section.top >= 0);
      if (visibleSection) {
        setItems(visibleSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col justify-start items-center w-full bg-[#010306] relative overflow-hidden gap-[30px] md:gap-[60px] lg:gap-[100px]'>
      <Header />
      <Banner />
      {/* <div className='flex w-[88%] mx-auto gap-[40px] relative h-full'>
        <div className='flex flex-col gap-[15px] md:gap-[30px] lg:gap-[50px] w-[60%] overflow-y-auto'>
          <div id='breaking-barriers'><BreakinBarriers /></div>
          <div id='all-in-one'><AllInOne /></div>
          <div id='automation'><AiInteligence /></div>
          <div id='ai-intelligence'><AiInteligence /></div>
          <div id='email-calendar'><EmailCalender /></div>
          <div id='organisation'><Organisation /></div>
          <div id='daily-report'><DailyReport /></div>
          <div id='integration'><Integration /></div>
          <div id='workflow'><Workflow /></div>
          <div id='goal-project'><GoalProject /></div>
        </div>
        <aside className='fixed right-0 top-10 self-start w-[40%] p-[20px] rounded-[8px]'>
          <h3 className='text-[#FFFFFF] text-[26px] font-medium pl-[9px]'>Table of contents</h3>
          {tocData.map((item) => (
            <div
              key={item.id}
              className={`flex gap-[17px] items-center p-[9px] cursor-pointer ${item.id === items ? "bg-[#0F162F99]" : "bg-transparent" }`}
              onClick={() => scrollToSection(item.id)}
            >
              <img src={arrow} alt='arrow' />
              <h3 className='text-[#FFFFFF] text-[26px] font-medium'>{item.title}</h3>
            </div>
          ))}
        </aside>
      </div> */}
      <Content tocData={tocData} items={items} scrollToSection={scrollToSection}/>
      <div className='flex flex-col gap-[32px] xl:gap-[48px] px-[20px] sm:px-0 w-full md:w-[88%] relative z-[1] mx-auto' id="footer">
        <div className='flex gap-[14px] items-center'>
          <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles.svg' alt='article' className='w-[40px] md:w-[50px] lg:w-auto'/>
          <h3 className='text-[#FFFFFF] font-semibold text-[18px] md:text-[21px]'>Articles</h3>
        </div>
        <div className='flex flex-col md:flex-row gap-[28px] justify-between w-full overflow-x-scroll'>
          <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => {navigate('/blog/top-7-ways-workfast.ai-can-revolutionise-your-project-management')}}>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles2.svg' alt='articles' />
            <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
              <h2 className='text-[#FFFFFF] text-[18px] md:text-[24px] font-semibold'>Top 7 ways Workfast.ai can Revolutionise your project management</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-[4px] items-center'>
                  <img src='https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg' alt='articles' className='w-[24px] md:w-auto'/>
                  <h2 className='text-[#7C828D] text-[12px] md:text-[17px] font-medium'>Peter Elk</h2>
                </div>
                <div className='flex gap-[4px] items-center'>
                  <FaRegClock className='text-[#1C274C] text-[12px] xl:text-[17px] font-medium' />
                  <h2 className='text-[#7C828D] text-[12px] md:text-[17px] font-medium'>18 min read</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => {navigate('/blog/beginner-guide-to-product-management')}}>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles3.svg' alt='articles' />
            <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
              <h2 className='text-[#FFFFFF] text-[18px] md:text-[24px] font-semibold'>Beginner's Guide to Product Management: Everything You Need to Know</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-[4px] items-center'>
                  <img src='https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg' alt='articles' className='w-[24px] md:w-auto'/>
                  <h2 className='text-[#7C828D] text-[12px] md:text-[17px] font-medium'>Peter Elk</h2>
                </div>
                <div className='flex gap-[4px] items-center'>
                  <FaRegClock className='text-[#1C274C] text-[12px] md:text-[17px] font-medium' />
                  <h2 className='text-[#7C828D] text-[12px] md:text-[17px] font-medium'>18 min read</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => {navigate('/blog/looking-for-a-new-platform-for-project-management')}}>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles3.svg' alt='articles' />
            <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
              <h2 className='text-[#FFFFFF] text-[18px] md:text-[24px] font-semibold'>Looking for a new platform for project management? Discover Workfast.ai</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-[4px] items-center'>
                  <img src='https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg' alt='articles'className='w-[24px] md:w-auto' />
                  <h2 className='text-[#7C828D] text-[12px] md:text-[17px] font-medium'>Peter Elk</h2>
                </div>
                <div className='flex gap-[4px] items-center'>
                  <FaRegClock className='text-[#1C274C] text-[12px] md:text-[17px] font-medium' />
                  <h2 className='text-[#7C828D] text-[12px] md:text-[17px] font-medium'>18 min read</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
