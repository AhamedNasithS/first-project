import React from "react";

export default function Task() {
    return(
        <>
          {/* Task  */}
      <section className="p-[20px] mt-[40px] md:mt-[50px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]">
       <div>
            <h1 className="text-center DarkerGrostesque font-[600px] text-[#E4E8EB] text-[25px] md:text-[45px] lg:text-[55px] xl:text-[70px] 2xl:text-[75px]">
                Task     
            </h1>
            <p className="text-[#E4E8EB] text-center capitalize bg-yellowlinear mt-[10px] font-[600px] md:mt-[25px] md:text-[18px] lg:text-[20px] lg:mt-[30px] xl:text-[26px] xl:mt-[35px] 2xl:text-[30px] 2xl:mt-[40px]">Tasks are to-do-list which often completed in a specific time frame</p>
            <p className="text-white w-10/12 mx-auto text-center capitalize text-[10px] md:text-[13px] mt-[13px] lg:text-[15px] xl:text-[24px] 2xl:text-[26px]">My Task (personal), Project (professional) are set in specific timeframe which is assigned to yourself <br></br> or any team member by the assignee manager </p>
         </div>    
         <div className="grid grid-cols-1 mx-auto md:grid-cols-3 md:w-10/12 md:mx-auto lg:mt-[30px] lg:w-12/12  2xl:w-10/12 2xl:mx-auto">
            <div className="mt-[20px] col-span-1">
              <img src="https://dz1x1c630cl14.cloudfront.net/webassets/channel.svg" className="w-fit h-[300px] mx-auto md:w-fit md:h-[250px] lg:w-fit lg:h-[320px] xl:w-full xl:h-[450px]" alt="noimg" />
            </div>

           
            <div className="mt-[20px] col-span-2">
              <img src="https://dz1x1c630cl14.cloudfront.net/webassets/taskimg.svg" className="" alt="noimg" />
            </div>
          </div>
      </section>







      {/* <section className="p-[20px] mt-[40px] md:mt-[50px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]">
       <div>
            <h1 className="text-[#E4E8EB] text-center DarkerGrostesque font-[600px] text-[#E4E8EB] text-[25px] md:text-[45px] lg:text-[55px] xl:text-[70px] 2xl:text-[75px]">
                Task     
            </h1>
            <p className="text-[#E4E8EB] text-center mt-[10px] font-[600px] md:mt-[25px] lg:text-[20px] lg:mt-[30px] xl:text-[26px] xl:mt-[35px] 2xl:text-[30px] 2xl:mt-[40px]">Every words are useful, <span className="text-[#FFE269]">Chat and grow together</span> with your team</p>
         </div>    
       <div className=" sm:grid grid-cols-1  md:grid-cols-2 md:w-10/12  md:mx-auto xl:w-10/12 gap-[20px]">
       
                   <div className="mt-[20px]">
                           <img src={chatimg} className="" alt="noimg"/>
                   </div>
                     <div>
                     <div className="mt-[10px]">
                           <h1 className="text-white font-[montserrat] mx-auto text-center text-[20px] text-DarkLiver font-medium  md:text-start lg:text-[24px] xl:text-[44px]">Real time communicate</h1>
                           <p className="text-white mx-auto text-center mt-[10px] text-[12px] font-light	text-DarkLiver md:text-start lg:text-[14px] xl:text-[16px] 2xl:text-[25px] 2xl:mt-[40px]">Our dedicated teams are laser-focused on delivering the best-in-class services to our employer partners, helping them fulfill their hiring requirements in record time. </p>
                     </div>
   
                        <div className="mt-[10px]">
                            <h1 className="text-white font-[montserrat] mx-auto  text-center text-[20px] text-DarkLiver font-medium  md:text-start lg:text-[24px] xl:text-[44px]">Categorized Chat</h1>
                            <p className="text-white font-[poppins] mx-auto text-center mt-[10px] text-[12px] font-light	text-DarkLiver md:text-start lg:text-[14px] xl:text-[16px] 2xl:text-[25px] 2xl:mt-[40px]">Founded in 2022 with one strong mission of accelerating India by empowering the rising workforce with better professional opportunities </p>
                       </div>
                     </div>
                     
   
                        
                   </div>
      </section> */}
        
        </>
    )
}