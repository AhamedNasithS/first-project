import React from 'react'
import arrow from "../../../../images/arrow_left.svg";
import BeginnerGuideProductManagement from './beginner-guide';
import ProductManagement from './product-management';
import ProductVsProject from './product-vs-project';
import RolesInProductManagement from './roles-in-product-management';
import MajorRolesOfProductManagers from './major-roles-of-product-managers';
import SoftwareToolsDoesTheProduct from './software-tools-does-the-product';
import ToolForProductManagers from './tools-for-profuct-managers';
import WorkfastAi from './workfat.ai';
import SoftwareToolComparatively from './software-tool-comparatively';

export default function Content({ tocData, items, scrollToSection }) {
    return (
        <div className='flex w-[93%] mx-auto gap-[40px] relative h-full'>
            <div className='flex flex-col gap-[15px] md:gap-[30px] lg:gap-[50px] w-[60%] overflow-y-auto'>
                <div id='beginner-guide-to-product-management'><BeginnerGuideProductManagement /></div>
                <div id='product-management'><ProductManagement/></div>
                <div id='product-vs-project'><ProductVsProject /></div>
                <div id='roles-in-product-management'><RolesInProductManagement /></div>
                <div id='major-roles-of-product-managers'><MajorRolesOfProductManagers /></div>
                <div id='software-tools-does-the-product'><SoftwareToolsDoesTheProduct /></div>
                <div id='tool-for-product-managers'><ToolForProductManagers /></div>
                <div id='workfast.ai'><WorkfastAi /></div>
                <div id='software-tool-comparatively'><SoftwareToolComparatively /></div>
            </div>
            <aside className='sticky right-0 top-0 self-start w-[40%] rounded-[8px]'>
                <h3 className='text-[#FFFFFF] text-[26px] font-medium pl-[9px]'>Table of contents</h3>
                {tocData.map((item,index) => (
                    <div
                        key={item.id}
                        className={`flex gap-[17px] p-[9px] cursor-pointer ${item.id === items ? "bg-[#0F162F99]" : "bg-transparent"} ${index === 0 || index === 2 ? "items-start" : "items-center"}`}
                        onClick={() => scrollToSection(item.id)}
                    >
                        <img src={arrow} alt='arrow' className={`${index === 0 || index === 2 ? "mt-[7px]" : ""}`} />
                        <h3 className='text-[#FFFFFF] text-[26px] font-medium'>{item.title}</h3>
                    </div>
                ))}
            </aside>
        </div>
    )
}
