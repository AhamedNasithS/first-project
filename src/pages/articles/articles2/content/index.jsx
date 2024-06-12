import React from 'react'
import BreakinBarriers from './top-7-ways';
import AllInOne from './mobile-first';
import AiInteligence from './bottom-up-approach';
import EmailCalender from './ai-intelligence';
import Organisation from './email';
import DailyReport from './calendar';
import Integration from './chattotask';
import arrow from "../../../../images/arrow_left.svg";
import Workflow from './personalisation-integration';

export default function Content({ tocData, items, scrollToSection }) {
    return (
        <div className='flex w-[88%] mx-auto gap-[40px] relative h-full'>
            <div className='flex flex-col gap-[15px] md:gap-[30px] lg:gap-[50px] w-[60%] overflow-y-auto'>
                <div id='top-7-ways-workfast.ai'><BreakinBarriers /></div>
                <div id='mobile-first'><AllInOne /></div>
                <div id='bottom-up-approach'><AiInteligence /></div>
                <div id='personalisation-integration'><Workflow /></div>
                <div id='ai-intelligence'><EmailCalender /></div>
                <div id='email'><Organisation /></div>
                <div id='calendar'><DailyReport /></div>
                <div id='chat-to-task'><Integration /></div>
            </div>
            <aside className='sticky right-0 top-0 self-start w-[40%] rounded-[8px]'>
                <h3 className='text-[#FFFFFF] text-[26px] font-medium pl-[9px]'>Table of contents</h3>
                {tocData.map((item) => (
                    <div
                        key={item.id}
                        className={`flex gap-[17px] items-center p-[9px] cursor-pointer ${item.id === items ? "bg-[#0F162F99]" : "bg-transparent"}`}
                        onClick={() => scrollToSection(item.id)}
                    >
                        <img src={arrow} alt='arrow' />
                        <h3 className='text-[#FFFFFF] text-[26px] font-medium'>{item.title}</h3>
                    </div>
                ))}
            </aside>
        </div>
    )
}
