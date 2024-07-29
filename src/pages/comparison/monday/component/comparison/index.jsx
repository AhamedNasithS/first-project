import React from 'react'
import workfast from "../../../../../images/workfastLogo.svg";
import monday from "../../../../../images/mondaylogo.svg";
import mondayIcon from "../../../../../images/mondayicon.svg";
import mondayName from "../../../../../images/mondayname.svg";
import { TbCircleCheckFilled, TbCircleMinus } from 'react-icons/tb';



export default function Comparison() {
    const list = [
        { title: 'Date view', monday: 'NO', workfast: 'YES' },
        { title: 'Project view', monday: 'NO', workfast: 'YES' },
        { title: 'Priority view', monday: 'NO', workfast: 'YES' },
        { title: 'People View', monday: 'NO', workfast: 'YES' },
        { title: 'Stage view', monday: 'NO', workfast: 'YES' },
        { title: 'Gantt chart', monday: 'YES', workfast: 'YES' },
        { title: 'Kanban view', monday: 'YES', workfast: 'YES' },
        { title: 'Board View', monday: 'NO', workfast: 'YES' },
        { title: 'Personal task', monday: 'NO', workfast: 'YES' },
        { title: 'Official task', monday: 'NO', workfast: 'YES' },
        { title: 'Inbox', monday: 'NO', workfast: 'YES' },
        { title: 'Tasks and subtasks', monday: 'NO', workfast: 'YES' },
        { title: 'Individual and group Chats', monday: 'NO', workfast: 'YES' },
        { title: 'Public and Private Channels', monday: 'NO', workfast: 'YES' },
        { title: 'Add to task from chat and channel', monday: 'NO', workfast: 'YES' },
        { title: 'Check-in', monday: 'NO', workfast: 'YES' },
        { title: 'Check -out', monday: 'NO', workfast: 'YES' },
        { title: 'Filter and sort options', monday: 'NO', workfast: 'YES' },
        { title: 'Comment in tasks , subtasks , projects .', monday: 'NO', workfast: 'YES' },
        { title: 'Feed Back Channel', monday: 'NO', workfast: 'YES' },
        { title: 'Voting Channel', monday: 'NO', workfast: 'YES' },
        { title: 'Multiple workspace', monday: 'NO', workfast: 'YES' },
        { title: 'People', monday: 'NO', workfast: 'YES' },
        { title: 'Add many invites', monday: 'NO', workfast: 'YES' },
        { title: 'Drag and Drop documents and files from folders easily', monday: 'NO', workfast: 'YES' },
        { title: 'Embedded email', monday: 'YES', workfast: 'YES' },
        { title: 'Customised navigation bar', monday: 'NO', workfast: 'YES' },
        { title: 'Customise workflow , statuses ,Tags , Priority', monday: 'NO', workfast: 'YES' },
        { title: 'Recurring Task', monday: 'NO', workfast: 'YES' },
        { title: 'Customised Analytics Reports', monday: 'NO', workfast: 'YES' },
        { title: 'Daily , Weekly , Monthly , Quarterly Analytics', monday: 'NO', workfast: 'YES' },
        { title: 'People and Profiles', monday: 'NO', workfast: 'YES' },
        { title: 'Feedback channel', monday: 'NO', workfast: 'YES' },
        { title: 'Customisable Project card', monday: 'NO', workfast: 'YES' },
        { title: 'Invite and collaborate in projects , channels , tasks .', monday: 'NO', workfast: 'YES' },
        { title: 'Customised Integration', monday: 'NO', workfast: 'YES' },
    ]
    return (
        <div className='flex flex-col justify-center items-center w-11/12 sm:w-10/12 mx-auto'>
            <h3 className='text-[#000000] text-[24px] sm:text-[30px] lg:text-[40px] xl:text-[52px] font-semibold sm:w-10/12 lg:w-9/12 text-center'>See why teams</h3>
            <div className='text-[#000000] text-[24px] sm:text-[30px] lg:text-[40px] xl:text-[52px] font-semibold text-center flex flex-wrap gap-[12px] items-center justify-center'>
                <h3>choose Workfast.ai over </h3>
                <img src={mondayIcon} alt='mondayIcon' className='w-[50px] xl:w-auto'/>
                <img src={mondayName} alt='mondayName' className='w-[150px] xl:w-auto'/>
            </div>
            <div className='mt-[32px]'>
                <div className='grid grid-cols-4 border-[1px] border-[#CECEEA] rounded-t-[6px] sm:rounded-t-[12px] w-full '>
                    <div className='col-span-2 px-[10px] py-[14px] sm:px-[18px] sm:py-[25px]'>
                        <div className='text-[#000000] text-[14px] sm:text-[20px] font-bold'>Compare features</div>
                    </div>
                    <div className='border-l-[1px] border-[#CECEEA] p-[2px] sm:p-[5px]'>
                        <div className='bg-[#F002500D] w-full h-full flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-[6px]'>
                        <div className='px-[9px] py-[2px] sm:py-[4px] rounded-[8px] bg-[#F00250] text-[#FFFFFF] text-[8px] lg:text-[11px] font-normal flex sm:hidden'>PAID</div>
                            <img src={monday} alt='monday' className='w-[15px] sm:w-auto'/>
                            <div className='text-[#000000] text-[12px] sm:text-[14px] lg:text-[16px] font-bold'>Monday.com</div>
                            <div className='px-[9px] py-[4px] rounded-[8px] bg-[#F00250] text-[#FFFFFF] text-[8px] lg:text-[11px] font-normal hidden sm:flex'>PAID</div>
                        </div>
                    </div>
                    <div className='border-l-[1px] border-[#CECEEA] p-[2px] sm:p-[5px]'>
                        <div className='bg-[#4CB9390D] w-full h-full flex flex-col-reverse lg:flex-row  justify-center items-center lg:gap-[6px]'>
                        <div className='px-[9px] py-[2px] sm:py-[4px] rounded-[8px] bg-[#4CB939] text-[#FFFFFF] text-[8px] lg:text-[11px] font-normal flex sm:hidden'>FREE</div>
                            <img src={workfast} alt='monday' className='w-[15px] sm:w-auto'/>
                            <div className='text-[#000000] text-[12px] ssm:text-[14px] lg:text-[16px] font-bold'>Workfast.ai</div>
                            <div className='px-[9px] py-[4px] rounded-[8px] bg-[#4CB939] text-[#FFFFFF] text-[8px] lg:text-[11px] font-normal hidden sm:flex'>FREE</div>
                        </div>
                    </div>
                </div>
                {list?.map((each, index) => (
                    <div key={index} className={`grid grid-cols-4 border-b-[1px] border-x-[1px] border-[#CECEEA] w-full ${list.length - 1 === index ? "rounded-b-[12px]" : ""}`}>
                        <div className='col-span-2 p-[10px] sm:p-[20px]'>
                            <div className='text-[#000] font-semibold text-[14px] sm:text-[18px]'>{each.title}</div>
                        </div>
                        <div className='border-l-[1px] border-[#CECEEA] p-[2px] sm:p-[5px]'>
                            <div className='flex justify-center items-center bg-[#F002500D] w-full h-full'>{each.monday === "YES" ? <TbCircleCheckFilled className='size-[20px] sm:size-[28px] text-[#4CB939]' /> : <TbCircleMinus TbCircleCheckFilled className='size-[20px] sm:size-[28px] text-[#F00250]' />}</div>
                        </div>
                        <div className='border-l-[1px] border-[#CECEEA] p-[2px] sm:p-[5px]'>
                            <div className='flex justify-center items-center bg-[#4CB9390D] w-full h-full'>{each.workfast === "YES" ? <TbCircleCheckFilled className='size-[20px] sm:size-[28px] text-[#4CB939]' /> : <TbCircleMinus TbCircleCheckFilled className='size-[20px] sm:size-[28px] text-[#F00250]' />}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-[40px] sm:mt-[140px] flex flex-col justify-center items-center gap-[40px]'>
                <h3 className='text-[#24223E] text-[24px] sm:text-[30px] lg:text-[42px] font-semibold sm:w-10/12 text-center'>Master your task and achieve your goal with Workfast.ai</h3>
                <button className='w-[170px] h-[50px] lg:w-[270px] lg:h-[64px] rounded-[11px] bg-gradient-to-br from-[#FDD01F] via-[#FDD320] to-[#F8861B] text-[#2A2200] text-[18px] lg:text-[21px] font-semibold'>Try it Free</button>
            </div>
        </div>
    )
}
