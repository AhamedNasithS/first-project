import React from "react";
// import gif from "../../../../images/giffycanvas.gif"
// import Elliped7 from "../../../../images/Ellipse7.svg"

export default function Header() {
  return (
    <>
      <section className="p-[20px] md:p-[30px] lg:p-[50px]">
        <div className="mt-[20px]">
          <div className="">
            <h1 className="text-[#E4E8EB] text-[50px] text-center font-medium DarkerGrostesqueSemibold md:text-[50px] lg:text-[50px] xl:text-[75px]">Channel</h1>
            <p className="text-[#E4E8EB] text-[14px] text-center md:text-[15px] lg:text-[18px] xl:text-[32px]">A Space to Communicate and get alligned with your team on Project and tasks   <span className="text-[#FFE269]"></span>  <br></br> </p>
          </div>
          <div className="grid grid-cols-1 mx-auto md:grid-cols-3 md:w-10/12 md:mx-auto lg:mt-[30px] lg:w-12/12  2xl:w-10/12 2xl:mx-auto">
            <div className="mt-[20px] col-span-1">
              <img src="https://dz1x1c630cl14.cloudfront.net/webassets/channel.svg" className="w-fit h-[300px] mx-auto md:w-fit md:h-[250px] lg:w-fit lg:h-[320px] xl:w-full xl:h-[450px]" alt="noimg" />
            </div>

            {/* <div className="mt-[30px] ">
                  <h1 className="text-[#E4E8EB] text-center text-[18px] sm:text-left  DarkerGrostesque font-medium	 leading-[22px] md:text-[18px] lg:text-[24px]  xl:text-[38px] xl:leading-[38.11px] 2xl:text-[50px] 2xl:leading-[50px]">Come & join together for<br></br><span className="text-[#FFE269]"> create great things</span></h1>
                  <p className="text-[#E4E8EB] text-center mt-[10px] text-[13px]  sm:text-left md:text-[13px] md:w-10/12 md:!font-[500px] lg:w-8/12 lg:text-[16px] xl:text-[21px] xl:leading-[35px] xl:w-8/12 2xl:w-6/12 2xl:text-[26px] 2xl:mt-[20px]">Create a space for your community to come together. Build it yourselves, making a place that reflects the unity and identity of your people.</p>
                  <div className="mx-auto flex flex-col justify-center items-center sm:justify-start sm:items-start px-[11px] md:px-[0px]">
                    <div className="flex flex-row mt-[10px] xl:mt-[20px] w-8/12">
                      <img src={dots}  className="" alt="noimg"/>
                      <h1 className="text-[#E4E8EB] px-[10px] text-[15px] xl:text-[20px]">Easy Collabration</h1>
                    </div>
                    <div className="flex flex-row mt-[5px] md:mt-[8px] w-8/12">
                      <img src={dots}  className="" alt="noimg"/>
                      <h1 className="text-[#E4E8EB] px-[10px] text-[15px] xl:text-[20px]">Multiple Channels</h1>
                    </div>
                    <div className="flex flex-row mt-[5px] md:mt-[8px] w-8/12">
                      <img src={dots}  className="" alt="noimg"/>
                      <h1 className="text-[#E4E8EB] px-[10px]  text-[15px] xl:text-[20px]">Icons based profiles</h1>
                    </div>
                  </div>
               </div> */}
            <div className="mt-[20px] col-span-2">
              <img src="https://dz1x1c630cl14.cloudfront.net/webassets/preview.svg" className="" alt="noimg" />
            </div>
          </div>
        </div>
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Glowing2.svg" alt='glow' className='md:absolute md:left-[3px] md:top-[300px] md:h-[500px] lg:h-[700px] lg:absolute lg:left-[3px] lg:top-[300px] xl:absolute xl:left-0 xl:top-[450px] 2xl:w-[500px] 2xl:h-[1000px] z-[0] hidden sm:block' />
      </section>
    </>





  )
}