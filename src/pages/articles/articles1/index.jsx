import React from 'react';
import Header from './header';
import Banner from './banner';
import BreakinBarriers from './breaking_barriers';
import arrow from "../../../images/arrow_left.svg";
import AllInOne from './all_in__one';
import AiInteligence from './ai_inteligence';
import EmailCalender from './email_callender';
import Organisation from './organisation';
import DailyReport from './daily_report';
import Integration from './integration';
import Workflow from './workflow';
import GoalProject from './goal';
import articlesImg from "../../../images/articles.svg";
import articles2 from "../../../images/articles2.svg";
import articles3 from "../../../images/articles3.svg";
import articles4 from "../../../images/articles4.svg";
import peter from "../../../images/peter.svg";
import { FaRegClock } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className='flex flex-col justify-start items-center w-full bg-[#010306] relative overflow-hidden gap-[30px] md:gap-[60px] lg:gap-[100px]'>
      <Header />
      <Banner />
      <div className='flex w-[88%] mx-auto gap-[40px]'>
        <div className='flex flex-col gap-[15px] md:gap-[30px] lg:gap-[50px] w-[60%] h-screen overflow-y-auto'>
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
        <aside className='sticky top-10 self-start w-[40%] p-[20px] rounded-[8px]'>
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
      </div>
      <div className='flex flex-col gap-[48px] w-[88%] relative z-[1] mx-auto'>
        <div className='flex gap-[14px] items-center'>
          <img src={articlesImg} alt='article' />
          <h3 className='text-[#FFFFFF] font-semibold text-[21px]'>Articles</h3>
        </div>
        <div className='flex gap-[28px] justify-between w-full'>
          <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer'>
            <img src={articles2} alt='articles' />
            <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
              <h2 className='text-[#FFFFFF] text-[24px] font-semibold'>Top 7 ways Workfast.ai can Revolutionise your project management</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-[4px] items-center'>
                  <img src={peter} alt='articles' />
                  <h2 className='text-[#7C828D] text-[17px] font-medium'>Peter Elk</h2>
                </div>
                <div className='flex gap-[4px] items-center'>
                  <FaRegClock className='text-[#1C274C] text-[17px] font-medium' />
                  <h2 className='text-[#7C828D] text-[17px] font-medium'>18 min read</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer'>
            <img src={articles3} alt='articles' />
            <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
              <h2 className='text-[#FFFFFF] text-[24px] font-semibold'>Beginner's Guide to Product Management: Everything You Need to Know</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-[4px] items-center'>
                  <img src={peter} alt='articles' />
                  <h2 className='text-[#7C828D] text-[17px] font-medium'>Peter Elk</h2>
                </div>
                <div className='flex gap-[4px] items-center'>
                  <FaRegClock className='text-[#1C274C] text-[17px] font-medium' />
                  <h2 className='text-[#7C828D] text-[17px] font-medium'>18 min read</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer'>
            <img src={articles4} alt='articles' />
            <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
              <h2 className='text-[#FFFFFF] text-[24px] font-semibold'>Looking for a new platform for project management? Discover Workfast.ai</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-[4px] items-center'>
                  <img src={peter} alt='articles' />
                  <h2 className='text-[#7C828D] text-[17px] font-medium'>Peter Elk</h2>
                </div>
                <div className='flex gap-[4px] items-center'>
                  <FaRegClock className='text-[#1C274C] text-[17px] font-medium' />
                  <h2 className='text-[#7C828D] text-[17px] font-medium'>18 min read</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
