import React from "react"
import Preview from "../../../../images/preview.svg";
import previewone from "../../../../images/channel.svg"

export default function Intelligence() {
    return(
        <>
         <section className="p-[20px] mt-[40px] md:mt-[50px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]">
             <div>
            <h1 className="text-center DarkerGrostesque font-[600px] text-[#E4E8EB] text-[25px] md:text-[45px] lg:text-[55px] xl:text-[70px] 2xl:text-[75px]">
            Intelligence     
            </h1>
            <p className="text-[#E4E8EB] capitalize text-center bg-yellowlinear mt-[10px] font-[600px] md:mt-[25px] md:text-[18px] lg:text-[20px] lg:mt-[30px] xl:text-[26px] xl:mt-[35px] 2xl:text-[30px] 2xl:mt-[40px]">Get Intelligence responce from 1.ai any data, information, report or <br></br> summary about your organisation</p>
            <p className="text-white text-center w-10/12 mx-auto capitalize text-[10px] md:text-[13px] mt-[13px] lg:text-[15px] xl:text-[24px] 2xl:text-[26px]">For example, Top performer of the quarter, pending approvals, priority list, attendence etc. </p>
         </div>    
         <div className="grid grid-cols-1 mx-auto md:grid-cols-3 md:w-10/12 md:mx-auto lg:mt-[30px] lg:w-12/12  2xl:w-10/12 2xl:mx-auto">
            <div className="mt-[20px] col-span-1">
              <img src={previewone} className="w-fit h-[300px] mx-auto md:w-fit md:h-[250px] lg:w-fit lg:h-[320px] xl:w-full xl:h-[450px]" alt="noimg" />
            </div>

           
            <div className="mt-[20px] col-span-2">
              <img src={Preview} className="" alt="noimg" />
            </div>
          </div>
      </section>
        </>
    )
} 