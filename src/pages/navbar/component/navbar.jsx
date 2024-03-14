import React from "react";
import logo from "../../../images/one.ai_Logo.svg"
import menu from "../../../images/menuburger.png"
import { NavLink } from "react-router-dom";
const Navigation = ({open, setOpen}) => {
    let Links =[
      {name:"Home",link:"/home"},
      {name:"Feature",link:"/"},
      {name:"User Guide",link:"/"},
      
    ];
    
  return (
    <div className='shadow-md w-full sticky top-0 left-0  z-50 nav'>
      <div className='md:flex items-center justify-between bg-white py-[20px] pb-[17px] md:px-10 px-7 nav'>
      <div className='font-light text-2xl cursor-pointer flex items-center text-gray-800 2xl:m-[16px]'>
        <div className='flex text-3xl text-indigo-600 mr-1 pt-2'> 
            <img src={logo} className='w-[32px] h-[32px]' alt='noimg'/>
            <h1 className="DarkerGrostesque font-[600px] text-[#E4E8EB] px-[10px] mt-[-5px]">1.ai</h1>
        </div>
        
      </div>
      
      <div onClick={()=> {setOpen(!open); } } className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
         <img src={menu} className='w-[20px] h-[20px] mt-[7px]' alt='noimg'  name={open ? 'close':'menu'} />
          {/* <ion-icon name={open ? 'close':'menu'} ></ion-icon> */}
      </div>
      
      <ul className={`float-right md:flex md:float-end md:pb-0 pb-12 absolute md:static nav md:z-auto z-[-1] left-0 w-full md:w-auto  pl-9 md:gap-[30px] xl:gap-[50px] 2xl:gap-[100px] ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='text-white  md:ml-8 text-xl md:my-0 my-7'>
                <NavLink to={link.link} className='cool-link  text-white text-2xl lg:text-xl font-medium leading-6 hover:text-gray-400  md:text-[15px] 2xl:text-[25px]'>{link.name} </NavLink>
              {/* <a href={link.link} className='font font-light  text-white text-2xl lg:text-xl font-[500px] leading-6 text-gray-900 text-gray-800 hover:text-gray-400  md:text-[15px] 2xl:text-[25px]'>{link.name}</a> */}
            </li>
          ))
        }
      
       </ul>
      </div>
    </div>  
    
  )
}
export default Navigation

