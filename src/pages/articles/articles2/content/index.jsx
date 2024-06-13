import React from 'react'
import ChatToTask from './chattotask';
import Calendar from './calendar';
import Emails from './email';
import AiIntelligence from './ai-intelligence';
import PersonalisationAndIntegration from './personalisation-integration';
import BottomUpApproach from './bottom-up-approach';
import MobileFirst from './mobile-first';
import Top7Ways from './top-7-ways';

export default function Content({ tocData, items, scrollToSection }) {
    return (
        <div className='flex w-[88%] mx-auto gap-[40px] relative h-full'>
            <div className='flex flex-col gap-[15px] md:gap-[30px] lg:gap-[50px] w-[60%] overflow-y-auto'>
                <div id='top-7-ways-workfast.ai'><Top7Ways /></div>
                <div id='mobile-first'><MobileFirst /></div>
                <div id='bottom-up-approach'><BottomUpApproach /></div>
                <div id='personalisation-integration'><PersonalisationAndIntegration /></div>
                <div id='ai-intelligence'><AiIntelligence /></div>
                <div id='email'><Emails /></div>
                <div id='calendar'><Calendar /></div>
                <div id='chat-to-task'><ChatToTask /></div>
            </div>
            <aside className='sticky right-0 top-0 self-start w-[40%] rounded-[8px]'>
                <h3 className='text-[#FFFFFF] text-[26px] font-medium pl-[9px]'>Table of contents</h3>
                {tocData.map((item,index) => (
                    <div
                        key={item.id}
                        className={`flex gap-[17px] p-[9px] cursor-pointer ${item.id === items ? "bg-[#0F162F99]" : "bg-transparent"} ${index === 0 || index === 2 ? "items-start" : "items-center"}`}
                        onClick={() => scrollToSection(item.id)}
                    >
                        <img src='https://dz1x1c630cl14.cloudfront.net/webassets/arrow_left.svg' alt='arrow' className={`${index === 0 || index === 2 ? "mt-[7px]" : ""}`} />
                        <h3 className='text-[#FFFFFF] text-[26px] font-medium'>{item.title}</h3>
                    </div>
                ))}
            </aside>
        </div>
    )
}
