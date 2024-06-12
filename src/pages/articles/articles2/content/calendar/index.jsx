import React from 'react'

export default function DailyReport() {
    return (
        <div className='flex flex-col gap-[50px]'>
            <h2 className='bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent text-[22px] md:text-[28px] lg:text-[36px] xl:text-[45px] font-semibold relative z-[1]'>Daily report generation :</h2>
            <p className='text-[#E4E8EB] text-[26px] font-normal'>Based on your task completion and engagement within the channel , AI will automatically generate your Daily reports once you check-out for the day. It helps the managers a clear view of what is the status of the projects . Conversely , automatic generation of reports can fully evade miscommunication.</p>
            <p className='text-[#E4E8EB] text-[26px] font-normal'>There is a seperate section for Daily reports in side bar . This can help to see year long data and helps in analysing the performance of the employee correctly.</p>
        </div>
    )
}
