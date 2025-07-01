import React from 'react'
import two from "../../../../images/2.svg";
import whatsapp from "../../../../images/whatsappLogo.svg";
import workfast from "../../../../images/workfastLogo.svg";
import { TbCircleMinus, TbCircleCheckFilled } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


export default function Comparison() {
    const [isReadMore, setIsReadMore] = React.useState(false);

    const list = [
        { title: 'Create Channel', description: 'Channel is a space where one can invite any number of members to discuss about projects , sales , marketing or any goals .', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Public and Private channel', description: 'Make the channel public (visible to all ) or private (visible only to members of that channel)', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Tag specific person and chat', description: 'Tag anyone by typing ”@” from your organisation', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Channel name', description: 'Give new name to a new channel with related name', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Channel icon', description: 'Choose icons which suits the channel mood and purpose', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Channel description', description: 'Give a description for newly created channel which helps channel members to understand the purpose.', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Invite members to channel', description: 'Invite members to channel by just clicking “@” key .', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Invite external members to channel with Access control', description: 'Invite external members who are not related to your company , but related to the particular purpose or channel . give Access control with messaging but not edit and delete option etc .', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Reactions', description: 'Give hundreds of emojis and reactions related to messages', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Unread messages', description: 'Unread messages which u want to see later', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Copy text', description: 'Copy any text and paste it anywhere .', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Threads and reply', description: 'Reply to any messages which you are tagged in and follow the thread which helps to understand the whole conversation in place', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Remainder', description: 'Set remainder by clicking on any particular text if one feels its important.', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Save for later', description: 'Save any messages that is important to be noted', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Add to Task', description: 'Add any messages to task section which helps you not to mis any action item in deep conversation.', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Forward', description: 'Forward messages to chat or channel or any external application', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Edit', description: 'edit and change the mispelt context', whatsapp: 'YES', workfast: 'YES' },
        { title: 'No double tick', description: 'Professional messages dont have double tick option .', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Upload Audio note', description: 'Record any audio and share', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Upload files and Documents', description: 'Upload any files and documents in any format to the channel', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Alerts and Notification', description: 'get real time notification and alerts , which helps in quick response', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Camera and Upload', description: 'Open camera option and click pictures or videos .', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Upload from gallery', description: 'Upload directly from gallery', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Check-in /Check-out', description: 'Click check-in option to allow your company know you are up for work . Check out and notify you are not available in this time.', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Star the channel', description: 'Star the channel to mention its importance', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Pin the channel', description: 'Pin channel for to be listed in top of all channels', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Search the channel', description: 'Universal search allows you to search any documents a, files , messages from across the channel list', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Voting channel', description: 'Take decisions among your company by posting a message of any new release or updates or new product and get voting . Get it anonymous as well .', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Feed Back Channel', description: 'Share any new ideas , bugs or features to workfast.ai directly and know the product road map.', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Town hall', description: 'Announce any new or important messages in this group which have all members in the company .', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Direct message', description: 'Directly message to members of your company in a casual way .', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Create groups', description: 'Create groups to discuss among the members.', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Set title, Description, Display pictures', description: 'Set title, Description , Display pictures of your choice and let the team know the purpose', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Star the message', description: 'Star any messages', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Forward', description: 'Forward any messages', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Copy text', description: 'Copy text messages', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Delete', description: 'Delete any messages', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Add to task', description: 'Add any messages to task section and add action item', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Reactions', description: 'Give reactions to messages', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Share files and Docs', description: 'Share files and docs in different format', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Reply, Report, Block', description: 'Report and Block any messages that breaches your standards', whatsapp: 'YES', workfast: 'YES' },
        { title: 'Profiles and people', description: 'Add people and create everyones profile by adding email id and designation', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Task management', description: 'SManage and organise tasks completely in one space', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Tasks title', description: 'Give task title while creating new tasks', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Task Description', description: 'Give task description while creating new tasks to know whats the task is all about', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Assign to anyone', description: 'Assign task to anyone who is in your company', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Set due Date and Time', description: 'Set due date and time for completing the tasks and get notified', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Set Remainder', description: 'Set general remainder for a task', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Set as recurring task', description: 'Some tasks must be done at time interval . You can set limits and remainder.', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Duplicate the Task', description: 'Duplicate the task and add or change to the task .', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Comment on tasks', description: 'When updating a task use comment section inside the task and bring your team to know what your feeling about the progress', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Add collaborators', description: 'Add collaborators as observers to a particular task list.', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Invite from outside with Access control', description: 'Invite members from outside with Access control to a particular task to view or edit or comment.', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Add subtasks', description: 'Create subtasks within the tasks to work clearly .', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Share Documents and assets for tasks', description: 'Share documents and files needed to execute a particular task can be done and collected at one place . This helps assigned member a clear understanding of tasks ', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Set priority', description: 'Set priority for the tasks according to its importance', whatsapp: 'NO', workfast: 'YES' },
        { title: 'People View', description: 'View the task list based on who allocated which tasks', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Project View', description: 'View the task list based on which project has my tasks and dependencies .', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Priority View', description: 'View the tasks list based on the priority eg: high , medium , low priority', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Group View', description: 'View the tasks list based on groups like Assigned to me , collaborator tasks, etc', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Date View', description: 'View tasks based on which date what tasks are allocated', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Filters', description: '7 + filters to see your tasks clearly', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Sort by option', description: 'Sort the tasks by using sort menu', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Inbox', description: 'Write your thoughts , ideas or task in inbox and store it for future use', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Task preview', description: 'Task customisation with how you like to view task card on your screen . eg: you can see in full card , without task count or you can see only title.', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Search', description: 'Search anything related to task in search option', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Task status', description: 'Set status of task to see the progress', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Reports and Analytics', description: 'Get full analytics of the Tasks and reports in single click every day , weekly , monthly, quarterly , yearly .', whatsapp: 'NO', workfast: 'YES' },
        { title: 'Cloud storage', description: 'Files and data are stored in cloud rather than phone memory', whatsapp: 'NO', workfast: 'YES' },
        { title: 'No Phone number visibility', description: 'No one will be able to see the members personal numbers and details except official mail id.', whatsapp: 'NO', workfast: 'YES' },
    ]
    return (
        <div className='flex flex-col justify-center items-center gap-[20px] w-full px-[20px] sm:px-0 '>
            <img src={two} alt='two' className='h-[100px] sm:w-auto'/>
            <div className='text-[#000000] text-[22px] sm:text-[30px] lg:text-[50px] font-semibold text-center'>Run your business professionally</div>
            <div className=' sm:mt-[20px] sm:w-10/12 mx-auto relative overflow-x-scroll'>
                <div className='grid grid-cols-4 border-[1px] border-[#CECEEA] rounded-t-[6px] sm:rounded-t-[12px] w-full '>
                    <div className='col-span-2 px-[10px] py-[14px] sm:px-[18px] sm:py-[25px]'>
                        <div className='text-[#000000] text-[14px] sm:text-[20px] font-bold'>Compare features</div>
                    </div>
                    <div className='border-l-[1px] border-[#CECEEA] p-[2px] sm:p-[5px]'>
                        <div className='bg-[#F002500D] w-full h-full flex flex-col-reverse sm:flex-row justify-center items-center sm:gap-[6px]'>
                            <img src={whatsapp} alt='whatsapp' />
                            <div className='text-[#000000] text-[12px] sm:text-[16px] font-bold'>Whatsapp</div>
                        </div>
                    </div>
                    <div className='border-l-[1px] border-[#CECEEA] p-[2px] sm:p-[5px]'>
                        <div className='bg-[#4CB9390D] w-full h-full flex flex-col-reverse sm:flex-row  justify-center items-center sm:gap-[6px]'>
                            <img src={workfast} alt='whatsapp' />
                            <div className='text-[#000000] text-[12px] sm:text-[16px] font-bold'>Workfast.ai</div>
                        </div>
                    </div>
                </div>
                {list?.map((each, index) => (
                    <div key={index} className={`grid grid-cols-4 border-b-[1px] border-x-[1px] border-[#CECEEA] w-full ${!isReadMore ? (index === 10 ? "rounded-b-[12px]" : "") : (list.length - 1 === index ? "rounded-b-[12px]" : "")} ${(!isReadMore && index <= 10) || (isReadMore && index <= 69) ? "" : "hidden"}`}>
                        <div className='col-span-2 p-[10px] sm:p-[20px]'>
                            <div className='text-[#000] font-semibold text-[14px] sm:text-[18px]'>{each.title}</div>
                            <div className='mt-[6px] text-[#252525] font-medium text-[12px] sm:text-[14px]'>{each.description}</div>
                        </div>
                        <div className='flex justify-center items-center'>
                            {each.whatsapp === "YES" ? <TbCircleCheckFilled className='size-[20px] sm:size-[28px] text-[#4CB939]' /> : <TbCircleMinus TbCircleCheckFilled className='size-[20px] sm:size-[28px] text-[#F00250]' />}
                        </div>
                        <div className='flex justify-center items-center'>
                            {each.workfast === "YES" ? <TbCircleCheckFilled className='size-[20px] sm:size-[28px] text-[#4CB939]' /> : <TbCircleMinus TbCircleCheckFilled className='size-[20px] sm:size-[28px] text-[#F00250]' />}
                        </div>
                    </div>
                ))}
                {!isReadMore ?
                    (
                        <div className='absolute h-[200px] sm:h-[250px] w-full bg-gradient-to-b from-[#FFF8DD00] to-[#FFF8DDB8] rounded-b-[12px] z-[10] bottom-0 overflow-hidden'>
                            <div className='absolute h-full w-full backdrop-blur-[10px] flex justify-center items-center'>
                                <div className='bg-[#FFDD09] px-[16px] py-[8px] sm:py-[12px] flex gap-[4px] items-center cursor-pointer rounded-[12px]' onClick={() => { setIsReadMore(true) }}>
                                    <div className='text-[#131100] text-[14px] sm:text-[22px] font-semibold'>Read more</div>
                                    <IoIosArrowDown className='text-[#131100] text-[14px] sm:text-[22px] mt-[2px]' />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='bg-[#FFDD09] w-[120px] sm:w-[170px] h-[40px] sm:h-[54px] mx-auto flex gap-[4px] items-center justify-center cursor-pointer rounded-[12px] mt-[40px]' onClick={() => { setIsReadMore(false) }}>
                            <div className='text-[#131100] text-[14px] sm:text-[22px] font-semibold'>Read Less</div>
                            <IoIosArrowUp className='text-[#131100] text-[14px] sm:text-[22px] mt-[2px]' />
                        </div>
                    )}
            </div>
        </div>
    )
}
