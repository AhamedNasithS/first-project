import React from 'react'
import { TbMenuDeep } from "react-icons/tb"
import { RxCross2 } from "react-icons/rx";
import logo from "../../../../../../images/colorthemelogo.svg";
import API from '../../../../../../utils/API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Mobile() {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "SIGN_UP_TODOIST"
            }
        );
        if (response.data.statusCode === 200) {
            navigate('/signup')
        }
    };

    const handleLiginClick = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "LOG_IN_TODIST"
            }
        );
        if (response.data.statusCode === 200) {
            window.location.href = 'https://app.workfast.ai/';
        }
    };

    const handleBlog = async (e) => {
        e.preventDefault();
        const response = await axios.post(API.BUTTON,
            {
                "eventName": "BLOG_TODIST"
            }
        );
        if (response.data.statusCode === 200) {
            navigate('/blog')
        }
    };

    return (
        <>
            {isOpen ? (
                <div className={`fixed inset-0 bg-[#000]/[20%] z-[40]`}>
                    <div className={`rounded-b-[20px] bg-[#FFF] z-[50] fixed top-0 left-0 right-0`}>
                        <div className='w-full mx-auto flex justify-between items-center p-[20px] z-[5]'>
                            <div className='px-[12px] border border-[#CECEEA] rounded-[16px]' style={{ boxShadow: '0px 4px 7px 0px #432E860A' }} onClick={() => { navigate('/') }}><img src={logo} alt='logo' /></div>
                            <RxCross2 className='bg-[#FFF] text-[#24223E] w-[24px] h-[24px] p-[3px] border-[#CECEEA] border-[1px] rounded' style={{ boxShadow: '0px 4px 7px 0px #432E860A' }} onClick={() => setIsOpen(!isOpen)} />
                        </div>
                        <div className={`w-9/12 mx-auto my-6 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className={`mr-[40px] text-[#24223E] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={(e) => { handleBlog(e) }}>
                                <h1 className="font-medium text-1xl">Blog</h1>
                            </div>
                            <div className={`mr-[40px] text-[#24223E] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={() => { navigate('/pricing') }}>
                                <h1 className="font-medium text-1xl">Pricing</h1>
                            </div>
                            <div className={`mr-[40px] text-[#24223E] py-[10px] mb-6 cursor-pointer rounded-[5px]`} onClick={(e) => { navigate('/investor') }}>
                                <h1 className="font-medium text-1xl">Investor</h1>
                            </div>
                            <button className='py-[8px] px-[12px] text-[#FFF] mb-6 text-[14px] font-semibold rounded-[8px] bg-gradient-to-r from-[#FF4E50]  to-[#F9D423] w-full' onClick={(e) => { handleClick(e) }}>Sign up</button>
                            <button className='py-[10px] px-[12px] bg-[#FFF] text-[14px] font-semibold rounded-[8px] text-[#24223E] w-full border border-[#CECEEA]' style={{ boxShadow: '0px 4px 7px 0px #432E860A' }} onClick={(e) => { handleLiginClick(e) }}>Log in</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-full flex justify-between items-center p-[20px] z-[5]'>
                    <div className='px-[12px] border border-[#CECEEA] rounded-[16px]' style={{ boxShadow: '0px 4px 7px 0px #432E860A' }} onClick={() => { navigate('/') }}><img src={logo} alt='logo' /></div>
                    <TbMenuDeep className='bg-[#FFF] text-[#24223E] w-[24px] h-[24px] p-[3px] border-[#CECEEA] border-[1px] rounded' style={{ boxShadow: '0px 4px 7px 0px #432E860A' }} onClick={() => setIsOpen(!isOpen)} />
                </div>
            )}
            {isOpen && (
                <div className='fixed h-screen w-full top-0 left-0 bg-[#000]/[20%] z-[10]' onClick={() => setIsOpen(!isOpen)}></div>
            )}
        </>
    )
}
