import React from 'react'
import ChatToTask from './chattotask';
import Calendar from './calendar';
import Emails from './email';
import AiIntelligence from './ai-intelligence';
import PersonalisationAndIntegration from './personalisation-integration';
import BottomUpApproach from './bottom-up-approach';
import MobileFirst from './mobile-first';
import Top7Ways from './top-7-ways';
import { Link } from 'react-scroll';

export default function Content({ tocData }) {
    const [activeSection, setActiveSection] = React.useState(null);

    // Update active section on scroll
    const handleSetActive = (to) => {
        setActiveSection(to);
    };
    return (
        <div className='flex px-[20px] md:px-0 md:w-[88%] mx-auto gap-[40px] relative'>
            <div className='flex flex-col gap-[15px] md:gap-[30px] lg:gap-[50px] w-full md:w-[62%] xl:w-[60%] overflow-y-auto'>
                <div id='top-7-ways-workfast.ai'><Top7Ways /></div>
                <div id='mobile-first'><MobileFirst /></div>
                <div id='bottom-up-approach'><BottomUpApproach /></div>
                <div id='personalisation-integration'><PersonalisationAndIntegration /></div>
                <div id='ai-intelligence'><AiIntelligence /></div>
                <div id='email'><Emails /></div>
                <div id='calendar'><Calendar /></div>
                <div id='chat-to-task'><ChatToTask /></div>
            </div>
            <aside className='sticky right-0 top-[40px] self-start w-[38%] xl:w-[40%] rounded-[8px] hidden md:block'>
                <h3 className='text-[#FFFFFF] text-[18px] lg:text-[22px] xl:text-[26px] font-medium pl-[9px]'>Table of contents</h3>
                <ul className={`mt-[10px]`} data-hs-scrollspy="#scrollspy-2" data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-2">
                    {tocData.map((section, index) => (
                        <li key={section.id}>
                            <Link
                                activeClass="" // Active link style
                                to={section.id}
                                spy={true}
                                smooth={true}
                                duration={100}
                                className={`flex gap-[10px] lg:gap-[17px] items-start p-[9px] cursor-pointer ${activeSection === section.id ? "bg-[#0F162F99]" : "bg-transparent"}`}
                                onSetActive={handleSetActive}
                            >
                                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/arrow_left.svg' alt='arrow' className={`w-[20px] lg:w-auto ${index === 0 || index === 2 ? "mt-[7px]" : "mt-[2px] lg:mt-[4px] xl:mt-[7px]"}`} />
                                <h3 className='text-[#FFFFFF] text-[16px] lg:text-[22px] xl:text-[26px] font-medium'>{section.title}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}
