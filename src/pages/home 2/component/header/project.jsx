import React from "react";

export default function Project() {
    return(
        <>
          {/* Project */}
          <section className="mt-[40px] md:mt-[50px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]">
          <div>
            <h1 className="text-center DarkerGrostesque font-[600px] text-[#E4E8EB] text-[25px] md:text-[45px] lg:text-[55px] xl:text-[70px] 2xl:text-[75px]">
                     Project
            </h1>
            <p className="text-[#E4E8EB] capitalize text-center bg-yellowlinear mt-[10px] font-[600px] md:mt-[25px] md:text-[18px] lg:text-[20px] lg:mt-[30px] xl:text-[26px] xl:mt-[35px] 2xl:text-[30px] 2xl:mt-[40px]">A Space to Carefully Plan and Achieve a collection aim.</p>
            <p className="text-white text-center w-10/12 mx-auto capitalize text-[10px] md:text-[13px] mt-[13px] lg:text-[15px] xl:text-[24px] 2xl:text-[26px]">for example sales and maeketing projects, web and app development projects,hr and administrative <br></br> projects or customer and client satisfaction projects etc</p>
         </div>
         <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Ellipsed.svg" alt="ellipsed" className="z-[0] hidden sm:block md:absolute md:top-[1000px] md:w-[500px] md:left-[50px] lg:absolute lg:top-[1300px] lg:w-[600px] lg:left-[60px] xl:absolute xl:w-[600px] xl:top-[2000px] xl:left-[300px]  2xl:absolute 2xl:w-[1200px] 2xl:top-[2300px] 2xl:left-[500px]"/>
         <div className="grid grid-cols-1 mt-[20px] mx-auto md:grid-cols-3 md:w-10/12 md:mx-auto lg:mt-[30px] lg:w-12/12  2xl:w-10/12 2xl:mx-auto">
            <div className="mt-[20px] col-span-1">
              <img src="https://dz1x1c630cl14.cloudfront.net/webassets/channel.svg" className="w-fit h-[300px] mx-auto md:w-fit md:h-[250px] lg:w-fit lg:h-[320px] xl:w-full xl:h-[450px]" alt="noimg" />
            </div>

           
            <div className="mt-[20px] col-span-2">
              <img src="https://dz1x1c630cl14.cloudfront.net/webassets/projectimg.svg" className="" alt="noimg" />
            </div>
          </div>
        </section>










        {/* old code

        <section className="mt-[40px] md:mt-[50px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]">
          <div>
            <h1 className="text-[#E4E8EB] text-center DarkerGrostesque font-[600px] text-[#E4E8EB] text-[25px] md:text-[45px] lg:text-[55px] xl:text-[70px] 2xl:text-[75px]">
                     Project
            </h1>
            <p className="text-[#E4E8EB] text-center mt-[10px] font-[600px] md:mt-[25px] lg:text-[20px] lg:mt-[30px] xl:text-[26px] xl:mt-[35px] 2xl:text-[30px] 2xl:mt-[40px]">Every words are useful, <span className="text-[#FFE269]">Chat and grow together</span> with your team</p>
         </div>
         <img src={Elliped} className="z-[0] hidden sm:block md:absolute md:top-[1000px] md:w-[500px] md:left-[50px] lg:absolute lg:top-[1300px] lg:w-[600px] lg:left-[60px] xl:absolute xl:w-[600px] xl:top-[2000px] xl:left-[300px]  2xl:absolute 2xl:w-[1200px] 2xl:top-[2300px] 2xl:left-[500px]"/>
         <div className="grid gris-cols-1  md:grid-cols-2 md:w-10/12 mx-auto lg:mt-[30px] lg:w-10/12 lg:mx-auto 2xl:w-8/12 2xl:mx-auto p-[20px]">
               <div className="mt-[10px]">
                  <h1 className="text-[#E4E8EB] text-center text-[18px] sm:text-left leading-[25px] md:text-[18px] md:leading-[24px] lg:text-[24px] lg:leading-[30px] xl:text-[38px] xl:leading-[48px] 2xl:text-[50px] 2xl:leading-[50px]">Categorized chat<br></br><span className="text-[#FFE269]"> So, We never missed</span></h1>
                 
                  <div className="items-center justify-center mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[60px]">
                    <div className="flex  mt-[10px] xl:mt-[20px]">
                      <img src={dots}  className="" alt="noimg"/>
                      <h1 className="text-[#E4E8EB] px-[10px] text-[15px] xl:text-[20px] 2xl:text-[25px]">Real time communicate</h1>
                    </div>
                    <div className="flex  mt-[5px] md:mt-[8px]">
                      <img src={dots}  className="" alt="noimg"/>
                      <h1 className="text-[#E4E8EB] px-[10px] text-[15px] xl:text-[20px] 2xl:text-[25px]">Share & upload multiple files</h1>
                    </div>
                    <div className="flex  mt-[5px] md:mt-[8px]">
                      <img src={dots}  className="" alt="noimg"/>
                      <h1 className="text-[#E4E8EB] px-[10px]  text-[15px] xl:text-[20px 2xl:text-[25px]">Quick search</h1>
                    </div>
                    <div className="flex  mt-[5px] md:mt-[8px]">
                      <img src={dots}  className="" alt="noimg"/>
                      <h1 className="text-[#E4E8EB] px-[10px]  text-[15px] xl:text-[20px] 2xl:text-[25px]">Connect virtually</h1>
                    </div>
                  </div>
               </div>
               <div className="mt-[20px]">
                  <img src={chatimg} className="" alt="noimg"/>
               </div>
               <img src="" className="circle"/>
            </div>
        </section> */}
        
        </>
    )
}