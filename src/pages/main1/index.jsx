import React from 'react';
import Header from '../header';
import Intro from './component/intro';
import Channel from './component/channel';
import Project from './component/project';
import Task from './component/task';
import Chat from './component/chat';
import Ai from './component/ai';
import Features from './component/features';
import Footer from './component/footer';
import Testimonial from './component/testimonials';
import Availbles from './component/avaibles';
import Pricing from './component/price';
import IpadView from './component/ipadview';
import Support from './component/support';
import Access from './component/access';


export default function Main1() {
  return (
    <div className='flex flex-col justify-start items-center w-full h-full bg-[#010306] relative overflow-hidden px-0'>
      <Header/>
      <Intro/>
      <Features/>
      <img src='https://dz1x1c630cl14.cloudfront.net/webassets/mobiles.svg' alt='mobileView'  className='my-[20px] lg:my-[100px] p-[20px]'/>
      <Channel/>
      <Project/>
      <Task/>
      <Chat/>
      <Ai/>
      <Availbles/>
      <img src='https://dz1x1c630cl14.cloudfront.net/webassets/avaliables.svg' alt='availble' className='mt-[10px] lg:mt-[50px] p-[20px]'/>
      <Pricing/>
      <IpadView/>
      <Support/>
      <Testimonial/>
      <Access/>
      <Footer/>
    </div>
  )
}
