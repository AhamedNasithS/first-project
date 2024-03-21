import React from 'react'
import ceo from "../../../../images/ceo.svg";
import sales from "../../../../images/sales.png";
import manager from "../../../../images/manager.svg";
import designer from "../../../../images/designer.svg";
import finance from "../../../../images/finance.svg";
import operation from "../../../../images/operation.svg";
import administration from "../../../../images/administration.svg";
import hr from "../../../../images/hr.svg";

export default function Management() {
  return (
    <div className="flex flex-col items-center relative w-10/12 mx-auto mt-[100px]">
        <h2 className='text-center text-[40px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Systematic Ready Solution For all enterprises to manage & govern any projects.</h2>
        <div className='flex gap-5 items-center overflow-x-scroll w-full mt-[50px]'>
          <img src={ceo} alt='ceo' className='flex shrink-0'/>
          <img src={sales} alt='ceo' className='flex shrink-0'/>
          <img src={manager} alt='ceo' className='flex shrink-0'/>
          <img src={designer} alt='ceo' className='flex shrink-0'/>
          <img src={finance} alt='ceo' className='flex shrink-0'/>
          <img src={operation} alt='ceo' className='flex shrink-0'/>
          <img src={administration} alt='ceo' className='flex shrink-0'/>
          <img src={hr} alt='ceo' className='flex shrink-0'/>
        </div>
    </div>
  )
}
