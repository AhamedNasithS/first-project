import React from 'react'

export default function WebHeader() {
    return (
        <div className='w-auto mx-auto h-[65px] border-[1px] border-[#070A10] bg-gradient-to-t from-[#1B2443] to-[#0C143300] rounded-b-[10px] py-[3px] px-[30px] flex items-center gap-[30px]'>
            <div className='border-b-[1px] border-[#0072C4] h-full flex items-center text-[#D6D5D5] text-[19px] font-medium'>
                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/hastag.svg" alt='hastag' />
                <h3>Channel</h3>
            </div>
            <div className='border-[#0072C4] h-full flex items-center text-[#D6D5D5] text-[19px] font-medium'>
                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/project.svg" alt='hastag' />
                <h3>Project</h3>
            </div>
            <div className='border-[#0072C4] h-full flex items-center text-[#D6D5D5] text-[19px] font-medium'>
                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/ai.svg" alt='hastag' />
                <h3>Ai</h3>
            </div>
            <div className='border-[#0072C4] h-full flex items-center text-[#D6D5D5] text-[19px] font-medium'>
                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/task.svg" alt='hastag' />
                <h3>Task</h3>
            </div>
            <div className='border-[#0072C4] h-full flex items-center text-[#D6D5D5] text-[19px] font-medium'>
                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/chatimgcopy.svg" alt='hastag' />
                <h3>Chat</h3>
            </div>
        </div>
    )
}
