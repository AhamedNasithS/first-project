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
import Automation from './automation';
import { Link } from 'react-scroll';

export default function Content({ tocData }) {
    const [activeSection, setActiveSection] = React.useState(null);

    // Update active section on scroll
    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    return (
        <div className='sm:flex px-[20px] md:px-0 md:w-[88%] mx-auto gap-[40px] relative'>
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
            <aside className='sticky right-0 top-[40px] self-start w-[38%] xl:w-[40%] rounded-[8px] hidden md:block'>
                <h3 className='text-[#FFFFFF] text-[18px] lg:text-[22px] xl:text-[26px] font-medium pl-[9px]'>Table of contents</h3>
                <ul className={`mt-[10px]`} data-hs-scrollspy="#scrollspy-2" data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-2">
                    {tocData.map((section) => (
                        <li key={section.id}>
                            <Link
                                activeClass="" // Active link style
                                to={section.id}
                                spy={true}
                                smooth={true}
                                duration={100}
                                className={`flex gap-[10px] lg:gap-[17px] items-start xl:items-center p-[9px] cursor-pointer ${activeSection === section.id ? "bg-[#0F162F99]" : "bg-transparent"}`}
                                onSetActive={handleSetActive}
                            >
                                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/arrow_left.svg' alt='arrow' className='mt-[2px] lg:mt-[4px] xl:mt-0 w-[20px] lg:w-auto' />
                                <h3 className='text-[#FFFFFF] text-[16px] lg:text-[22px] xl:text-[26px] font-medium'>{section.title}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}
