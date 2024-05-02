import React from 'react'
import oneAi from "../../../../images/one.ai_Icon.svg";
import slack from "../../../../images/slack.svg";
import asana from "../../../../images/asana.svg";
import monday from "../../../../images/mondaycom.svg";
import jira from "../../../../images/jira.svg";
import clickup from "../../../../images/clickup.svg";
import teams from "../../../../images/microsoftTeam.svg"



export default function BestTools() {
    return (
        <div className='flex flex-col justify-center items-center w-10/12 relative z-[1] mx-auto'>
            <h2 className='text-[40px] bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent inter-bold relative z-[1]'>Which is the best tool for Product managers ?</h2>
            <div className='mt-[40px] grid grid-cols-5 h-[390px] w-9/12'>
                <div className='flex items-center'>
                    <img src={teams} alt='' />
                </div>
                <div className='flex flex-col items-start h-full'>
                    <div className='basis-1/2 flex justify-end items-start'>
                        <img src={asana} alt='' className='ml-[40px]' />
                    </div>
                    <div className='basis-1/2 flex items-end'>
                        <img src={monday} alt='' />
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={oneAi} alt='' />
                </div>
                <div className='flex flex-col items-center h-full'>
                    <div className='basis-1/2 flex justify-end items-start'>
                        <img src={jira} alt='' />
                    </div>
                    <div className='basis-1/2 flex items-end'>
                        <img src={clickup} alt='' className='ml-[40px]' />
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <img src={slack} alt='' />
                </div>
            </div>
            <p className='text-[#E4E8EB] font-normal text-[26px] mt-[40px] w-[83%] mx-auto text-center'>When it comes to productivity and efficiency in product management , its best to choose a tool which gives more benefits you are searching. Not all tools give the most benefits. Because of that product managers use eight to nine tools for product / project management. For example Asana ,Workfast.ai , Monday.com , Jira , Click up , Teams , Slack etc.</p>
            <p className='text-[#E4E8EB] font-normal text-[26px] mt-[20px] w-[83%] mx-auto text-center'>So confusions arise “what to see in software tools before using ? “ . The existing softwares serves more than one area but not the most . The criteria for choosing best tool should be , list all the major work and compare which softwares serves you best . It is not presence of all features rather how efficiently the features enhances your workflow.on the basis of above criteria , Workfast.ai serves the best with most features . So we will see what is the tool about and its usability .</p>
        </div>
    )
}