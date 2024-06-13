import React from 'react'
import BreakinBarriers from './breaking_barriers';
import AllInOne from './all_in__one';
import AiInteligence from './ai_inteligence';
import EmailCalender from './email_callender';
import Organisation from './organisation';
import DailyReport from './daily_report';
import Integration from './integration';
import Workflow from './workflow';
import GoalProject from './goal';
import arrow from "../../../../images/arrow_left.svg";
import Automation from './automation';

export default function Content({ tocData, items, scrollToSection }) {
    return (
        <div className='flex px-[20px] md:px-0 md:w-[88%] mx-auto gap-[40px] relative h-full'>
            <div className='flex flex-col gap-[15px] md:gap-[30px] lg:gap-[50px] w-full md:w-[62%] xl:w-[60%] overflow-y-auto'>
                <div id='breaking-barriers'><BreakinBarriers /></div>
                <div id='all-in-one'><AllInOne /></div>
                <div id='automation'><Automation /></div>
                <div id='ai-intelligence'><AiInteligence /></div>
                <div id='email-calendar'><EmailCalender /></div>
                <div id='organisation'><Organisation /></div>
                <div id='daily-report'><DailyReport /></div>
                <div id='integration'><Integration /></div>
                <div id='workflow'><Workflow /></div>
                <div id='goal-project'><GoalProject /></div>
            </div>
            <aside className='sticky right-0 top-0 self-start w-[38%] xl:w-[40%] rounded-[8px] hidden md:block'>
                <h3 className='text-[#FFFFFF] text-[18px] lg:text-[22px] xl:text-[26px] font-medium pl-[9px]'>Table of contents</h3>
                {tocData.map((item) => (
                    <div
                        key={item.id}
                        className={`flex gap-[17px] items-center p-[9px] cursor-pointer ${item.id === items ? "bg-[#0F162F99]" : "bg-transparent"}`}
                        onClick={() => scrollToSection(item.id)}
                    >
                        <img src={arrow} alt='arrow' />
                        <h3 className='text-[#FFFFFF] text-[18px] lg:text-[22px] xl:text-[26px] font-medium'>{item.title}</h3>
                    </div>
                ))}
            </aside>
        </div>
    )
}
