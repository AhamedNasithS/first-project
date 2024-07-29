import React from 'react'
import Header from './component/header'
import Banner from './component/banner'
import Footer from './component/footer'

export default function TimeAndFocus() {
  return (
    <div className='flex flex-col justify-start items-center w-full h-full bg-[#FFFFFF] relative overflow-hidden gap-[30px] md:gap-[60px] lg:gap-[100px]'>
        <Header/>
        <Banner/>
        <Footer/>
    </div>
  )
}
