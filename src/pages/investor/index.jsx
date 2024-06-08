import React from 'react'
import Header from './header'
import Banner from './banner'
import HighRisk from './risk'
import Principles from './principles'
import LastSection from './lastsection'

export default function Investors() {
  return (
    <div className='flex flex-col justify-start items-center w-full h-full bg-[#010306] relative overflow-hidden sm:px-0'>
      <Header />
      <Banner/>
      <HighRisk/>
      <Principles/>
      <LastSection/>
      
    </div>
  )
}
