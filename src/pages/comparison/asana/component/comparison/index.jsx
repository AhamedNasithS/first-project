import React from 'react'
import workfast from "../../../../../images/workfastLogo.svg";
import asana from "../../../../../images/asanalogo.svg";
import { TbCircleCheckFilled, TbCircleMinus } from 'react-icons/tb';



export default function Comparison() {
    const list = [
        { title: 'Create Channel', asana: 'NO', workfast: 'YES' },
        { title: 'Public and Private channel', asana: 'YES', workfast: 'YES' },
        { title: 'Tag specific person and chat', asana: 'NO', workfast: 'YES' },
        { title: 'Channel name', asana: 'NO', workfast: 'YES' },
        { title: 'Channel icon', asana: 'NO', workfast: 'YES' },
        { title: 'Channel description', asana: 'NO', workfast: 'YES' },
        { title: 'Invite members to channel', asana: 'NO', workfast: 'YES' },
        { title: 'Invite external members to channel with Access control', asana: 'NO', workfast: 'YES' },
        { title: 'Reactions', asana: 'NO', workfast: 'YES' },
        { title: 'Unread messages', asana: 'NO', workfast: 'YES' },
        { title: 'Copy text', asana: 'NO', workfast: 'YES' },
        { title: 'Threads and reply', asana: 'NO', workfast: 'YES' },
        { title: 'Remainder', asana: 'NO', workfast: 'YES' },
        { title: 'Save for later', asana: 'NO', workfast: 'YES' },
        { title: 'Add to Task', asana: 'NO', workfast: 'YES' },
        { title: 'Forward', asana: 'NO', workfast: 'YES' },
        { title: 'Edit', asana: 'NO', workfast: 'YES' },
        { title: 'No double tick', asana: 'NO', workfast: 'YES' },
        { title: 'Upload Audio note', asana: 'NO', workfast: 'YES' },
        { title: 'Upload files and Documents', asana: 'NO', workfast: 'YES' },
        { title: 'Alerts and Notification', asana: 'NO', workfast: 'YES' },
        { title: 'Camera and Upload', asana: 'NO', workfast: 'YES' },
        { title: 'Upload from gallery', asana: 'NO', workfast: 'YES' },
        { title: 'Check-in /Check-out', asana: 'NO', workfast: 'YES' },
        { title: 'Star the channel', asana: 'NO', workfast: 'YES' },
        { title: 'Pin the channel', asana: 'NO', workfast: 'YES' },
        { title: 'Search the channel', asana: 'NO', workfast: 'YES' },
        { title: 'Voting channel', asana: 'NO', workfast: 'YES' },
        { title: 'Feed Back Channel', asana: 'NO', workfast: 'YES' },
        { title: 'Town hall', asana: 'NO', workfast: 'YES' },
        { title: 'Direct message', asana: 'NO', workfast: 'YES' }
    ]
    return (
        <div className='flex flex-col justify-center items-center gap-[32px] w-10/12 mx-auto'>
            <h3 className='text-[#000000] text-[24px] sm:text-[30px] lg:text-[40px] xl:text-[52px] font-semibold sm:w-10/12 lg:w-9/12 text-center'>Workfast.ai has lot more features for half the price</h3>
            <h4 className='text-[#8E8E93] text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-normal w-10/12 lg:w-9/12 text-center'>Workfast.ai with simple and elegant UI/UX makes it a best choice for teams to organise task and communicate faster</h4>
            <div>
                <div className='grid grid-cols-4 border-[1px] border-[#CECEEA] rounded-t-[6px] sm:rounded-t-[12px] w-full '>
                    <div className='col-span-2 px-[10px] py-[14px] sm:px-[18px] sm:py-[25px]'>
                        <div className='text-[#000000] text-[14px] sm:text-[20px] font-bold'>Compare features</div>
                    </div>
                    <div className='border-l-[1px] border-[#CECEEA] p-[2px] sm:p-[5px]'>
                        <div className='bg-[#F002500D] w-full h-full flex flex-col-reverse sm:flex-row justify-center items-center sm:gap-[6px]'>
                        <div className='px-[9px] py-[2px] sm:py-[4px] rounded-[8px] bg-[#F00250] text-[#FFFFFF] text-[8px] lg:text-[11px] font-normal flex sm:hidden'>PAID</div>
                            <img src={asana} alt='asana' className='w-[15px] sm:w-auto'/>
                            <div className='text-[#000000] text-[12px] sm:text-[14px] lg:text-[16px] font-bold'>Asana</div>
                            <div className='px-[9px] py-[4px] rounded-[8px] bg-[#F00250] text-[#FFFFFF] text-[8px] lg:text-[11px] font-normal hidden sm:flex'>PAID</div>
                        </div>
                    </div>
                    <div className='border-l-[1px] border-[#CECEEA] p-[2px] sm:p-[5px]'>
                        <div className='bg-[#4CB9390D] w-full h-full flex flex-col-reverse sm:flex-row  justify-center items-center sm:gap-[6px]'>
                        <div className='px-[9px] py-[2px] sm:py-[4px] rounded-[8px] bg-[#4CB939] text-[#FFFFFF] text-[8px] lg:text-[11px] font-normal flex sm:hidden'>FREE</div>
                            <img src={workfast} alt='asana' className='w-[15px] sm:w-auto'/>
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
                            <div className='flex justify-center items-center bg-[#F002500D] w-full h-full'>{each.asana === "YES" ? <TbCircleCheckFilled className='size-[20px] sm:size-[28px] text-[#4CB939]' /> : <TbCircleMinus TbCircleCheckFilled className='size-[20px] sm:size-[28px] text-[#F00250]' />}</div>
                        </div>
                        <div className='border-l-[1px] border-[#CECEEA] p-[2px] sm:p-[5px]'>
                            <div className='flex justify-center items-center bg-[#4CB9390D] w-full h-full'>{each.workfast === "YES" ? <TbCircleCheckFilled className='size-[20px] sm:size-[28px] text-[#4CB939]' /> : <TbCircleMinus TbCircleCheckFilled className='size-[20px] sm:size-[28px] text-[#F00250]' />}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-[40px] sm:mt-[140px] flex flex-col justify-center items-center gap-[40px]'>
                <h3 className='text-[#24223E] text-[24px] sm:text-[30px] lg:text-[42px] font-semibold sm:w-10/12 text-center'>Get Twice the value for half the price with Workfast.ai</h3>
                <button className='w-[170px] h-[50px] lg:w-[270px] lg:h-[64px] rounded-[11px] bg-gradient-to-br from-[#FDD01F] via-[#FDD320] to-[#F8861B] text-[#2A2200] text-[18px] lg:text-[21px] font-semibold'>Try it Free</button>
            </div>
        </div>
    )
}
