import React from 'react'
import BeginnerGuideProductManagement from './beginner-guide';
import ProductManagement from './product-management';
import ProductVsProject from './product-vs-project';
import RolesInProductManagement from './roles-in-product-management';
import MajorRolesOfProductManagers from './major-roles-of-product-managers';
import SoftwareToolsDoesTheProduct from './software-tools-does-the-product';
import ToolForProductManagers from './tools-for-profuct-managers';
import WorkfastAi from './workfat.ai';
import SoftwareToolComparatively from './software-tool-comparatively';
import { Link } from 'react-scroll';

export default function Content({ tocData }) {
    const [activeSection, setActiveSection] = React.useState(null);

    // Update active section on scroll
    const handleSetActive = (to) => {
        setActiveSection(to);
    };
    return (
        <div className='flex px-[20px] md:px-0 md:w-[93%] mx-auto gap-[40px] relative'>
            <div className='flex flex-col gap-[15px] md:gap-[30px] lg:gap-[50px] w-full md:w-[62%] xl:w-[60%] overflow-y-auto'>
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
            <aside className='sticky right-0 top-[10px] lg:top-[30px] max-h-[590px] overflow-y-scroll md:h-auto self-start w-[38%] xl:w-[40%] rounded-[8px] hidden md:block element-with-scrollbar'>
                <h3 className='text-[#FFFFFF] text-[18px] lg:text-[22px] xl:text-[26px] font-medium pl-[9px]'>Table of contents</h3>
                <ul className={`mt-[10px]`} data-hs-scrollspy="#scrollspy-2" data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-2">
                    {tocData.map((section, index) => (
                        <li key={section.id}>
                            <Link
                                activeClass="" // Active link style
                                to={section.id}
                                spy={true}
                                smooth={true}
                                duration={100}
                                className={`flex gap-[10px] lg:gap-[17px] items-start p-[9px] cursor-pointer ${activeSection === section.id ? "bg-[#0F162F99]" : "bg-transparent"}`}
                                onSetActive={handleSetActive}
                            >
                                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/arrow_left.svg' alt='arrow' className={`w-[20px] lg:w-auto ${index === 0 || index === 2 ? "mt-[7px]" : "mt-[2px] lg:mt-[4px] xl:mt-[7px]"}`} />
                                <h3 className='text-[#FFFFFF] text-[16px] lg:text-[22px] xl:text-[26px] font-medium'>{section.title}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}
