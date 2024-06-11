import React from 'react'
import { AiFillLinkedin, AiFillFacebook, AiFillInstagram } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleEmailClick = () => {
        window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@get1.ai';
    };

    return (
        <>
            <div className='mb-[80px] w-full sm:w-9/12 mx-auto border-t-[1px] border-[#403D39]'>
                <div className='sm:flex  justify-between items-center mt-[40px] w-11/12 mx-auto'>
                    <img src="https://dz1x1c630cl14.cloudfront.net/webassets/one.ai_Logo.svg" alt='logo' className='w-[40px] lg:w-[50px]' />
                    <div>
                        <div className='flex gap-[15px] lg:gap-[20px] items-center sm:justify-end mt-[20px] sm:mt-0'>
                            <h1 className='text-[#858585] text-[14px] lg:text-[16px] font-medium'>Contact: </h1>
                            <div className='text-center flex items-center justify-center gap-[5px]'>
                                <IoMdMail className="stroke-[#FFFFFF] fill-[#FFF] w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] flex shrink-0" />
                                <h1 className='font-light text-[#FEF9F1] text-[13px] lg:text-[16px]' onClick={handleEmailClick}>hello@get1.ai</h1>
                            </div>
                        </div>
                        <div className='flex gap-[15px] mt-[20px]'>
                            <h1 className='text-[#FEF9F1] text-[14px] lg:text-[16px] font-medium'>Follow Us On</h1>
                            <div className='flex gap-[8px] text-[#FFFFFF] text-[20px]'>
                                <AiFillInstagram />
                                <AiFillFacebook />
                                <AiFillLinkedin />
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-[#D1D1D1] text-[12px] lg:text-[14px] font-normal mt-[20px] sm:mt-[100px] sm:text-center w-11/12 mx-auto'>© Copyrights {currentYear} | All rights reserved</h1>
            </div>
            <div className='flex justify-between w-9/12 mx-auto mb-[40px] sm:mb-[70px] xl:mb-[100px]'>
                <a href='/ContactUs'><p className='text-[#858585] text-[14px] lg:text-[16px] font-medium'>Contact us </p></a>
                <a href='/RefundandCancellation'><p className='text-[#858585] text-[14px] lg:text-[16px] font-medium'>Refund Policy </p></a>
                <a href='/PrivacyPolicy'><p className='text-[#858585] text-[14px] lg:text-[16px] font-medium'>Privacy Policy </p></a>
                <a href='/TermsandConditions'><p className='text-[#858585] text-[14px] lg:text-[16px] font-medium'>Terms and Conditions </p></a>
                <a href='/about'><p className='text-[#858585] text-[14px] lg:text-[16px] font-medium'>About us </p></a>

            </div>
        </>
    )
}
