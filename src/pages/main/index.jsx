import React from 'react';
import Header from '../header';
import Intro from './component/intro';
import WebHeader from './component/webheader';
import Channel from './component/channel';
import Project from './component/project';
import Task from './component/task';
import Chat from './component/chat';
import Ai from './component/ai';
import Features from './component/features';
import Management from './component/management';
import PreferTools from './component/prefertools';
import Migration from './component/migration';
import Footer from './component/footer';
import Testimonial from './component/testimonials';


export default function Main() {
  return (
    <div className='flex flex-col justify-start items-center w-full h-full bg-[#010306] relative overflow-hidden px-[20px] sm:px-0'>
      <Header/>
      <Intro/>
      <img src="https://dz1x1c630cl14.cloudfront.net/webassets/glow3.svg" alt='glow' className='absolute top-[700px] w-[408px] h-[930px] left-[50%] -translate-x-[50%]'/>
      <WebHeader/>
      <Channel/>
      <Project/>
      <Task/>
      <Chat/>
      <Ai/>
      <Features/>
      <Management/>
      <PreferTools />
      <Migration/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
