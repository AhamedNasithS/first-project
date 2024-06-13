import React from 'react'
import { FaRegClock } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';




export default function Articles() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col gap-[48px] w-10/12 relative z-[1] mx-auto'>
            <div className='flex gap-[14px] items-center'>
                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles.svg' alt='article' />
                <h3 className='text-[#FFFFFF] font-semibold text-[21px]'>Articles</h3>
            </div>
            <div className='flex gap-[28px] overflow-x-scroll w-full'>
                <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => {navigate('/blog/breaking-barriers-in-communication-collaboration-with-workfast.ai')}}>
                    <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles1.svg' alt='articles' />
                    <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
                        <h2 className='text-[#FFFFFF] text-[24px] font-semibold'>Breaking Barriers in Communication and Collaboration with Workfast.ai</h2>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[4px] items-center'>
                                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg' alt='articles' />
                                <h2 className='text-[#7C828D] text-[17px] font-medium'>Peter Elk</h2>
                            </div>
                            <div className='flex gap-[4px] items-center'>
                                <FaRegClock className='text-[#1C274C] text-[17px] font-medium'/>
                                <h2 className='text-[#7C828D] text-[17px] font-medium'>18 min read</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => {navigate('/blog/top-7-ways-workfast.ai-can-revolutionise-your-project-management')}}>
                    <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles2.svg' alt='articles' />
                    <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
                        <h2 className='text-[#FFFFFF] text-[24px] font-semibold'>Top 7 ways Workfast.ai can Revolutionise your project management</h2>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[4px] items-center'>
                                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg' alt='articles' />
                                <h2 className='text-[#7C828D] text-[17px] font-medium'>Peter Elk</h2>
                            </div>
                            <div className='flex gap-[4px] items-center'>
                                <FaRegClock className='text-[#1C274C] text-[17px] font-medium'/>
                                <h2 className='text-[#7C828D] text-[17px] font-medium'>18 min read</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => {navigate('/blog/beginner-guide-to-product-management')}}>
                    <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles3.svg' alt='articles' />
                    <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
                        <h2 className='text-[#FFFFFF] text-[24px] font-semibold'>Beginner's Guide to Product Management: Everything You Need to Know</h2>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[4px] items-center'>
                                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg' alt='articles' />
                                <h2 className='text-[#7C828D] text-[17px] font-medium'>Peter Elk</h2>
                            </div>
                            <div className='flex gap-[4px] items-center'>
                                <FaRegClock className='text-[#1C274C] text-[17px] font-medium'/>
                                <h2 className='text-[#7C828D] text-[17px] font-medium'>18 min read</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-[8px] max-w-[378px] flex flex-col shrink-0 cursor-pointer' onClick={() => {navigate('/blog/looking-for-a-new-platform-for-project-management')}}>
                    <img src='https://dz1x1c630cl14.cloudfront.net/webassets/articles4.svg' alt='articles' />
                    <div className='bg-[#121A2F] px-[20px] py-[14px] rounded-b-[8px] flex flex-col gap-[14px]'>
                        <h2 className='text-[#FFFFFF] text-[24px] font-semibold'>Looking for a new platform for project management ? Discover Workfast.ai</h2>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[4px] items-center'>
                                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/peter.svg' alt='articles' />
                                <h2 className='text-[#7C828D] text-[17px] font-medium'>Peter Elk</h2>
                            </div>
                            <div className='flex gap-[4px] items-center'>
                                <FaRegClock className='text-[#1C274C] text-[17px] font-medium'/>
                                <h2 className='text-[#7C828D] text-[17px] font-medium'>18 min read</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
