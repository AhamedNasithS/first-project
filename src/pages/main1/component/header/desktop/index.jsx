import React, { useEffect, useState } from 'react'
import { Logo } from '../SVG';
import { toast } from 'react-toastify';

export default function Desktop() {

    const handleFeatureClick = () => {
        toast.success("Coming soon...!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored"
        });
    };

    const [position, setPosition] = useState(window.innerWidth);

    useEffect(() => {
        window.onresize = function () {
            setPosition(window.innerWidth);
        };
    }, []);

    return (
        <div className='flex justify-between items-center h-[80px] w-full bg-gradient-to-t from-[#111830] to-[#13131300] p-[24px]'>
            <a title='logo' href='/'>
                <Logo width={position >= 1024 ? "133" : "100"} height={position >= 1024 ? "51" : "45"} />
            </a>
            <div className='flex gap-8 px-8 py-4 rounded-[40px] border-[1px] border-[#E2E8FF1A]'>
                <h3 className='text-[#FFF] font-normal text-[14px] cursor-pointer' onClick={() => { handleFeatureClick() }}>Features</h3>
                <h3 className='text-[#FFF] font-normal text-[14px] cursor-pointer' onClick={(e) => { handleFeatureClick() }}>Blog</h3>
                <h3 className='text-[#FFF] font-normal text-[14px] cursor-pointer' onClick={() => { handleFeatureClick() }}>Pricing</h3>
                <h3 className='text-[#FFF] font-normal text-[14px] cursor-pointer' onClick={(e) => { handleFeatureClick() }}>Investor</h3>
            </div>
            <div className='p-[1px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[12px]'>
                <div className='p-[3px] lg:p-[6px] rounded-[12px] flex gap-[10px] items-center bg-[#111830]'>
                    <button className='py-[8px] px-[12px] text-[#FFFFFF] hover:text-[#000] text-[14px] font-semibold rounded-[8px] bg-transparent hover:bg-[#E2E8FFBF]' onClick={(e) => { handleFeatureClick() }}>Log in</button>
                    <button className='py-[8px] px-[12px] text-[#1B1600] text-[14px] font-semibold rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B]' onClick={(e) => { handleFeatureClick() }}>Sign up</button>
                </div>
            </div>
        </div>
    )
}
