import React from 'react'
import Glow_1 from "../../images/Glowing1.svg";
import Footer from '../footer';
import Banner from '../banner';
import Resources from '../resource';
import BeforeAfter from '../before&after';
import Power from '../earth';
import Revolution from '../revolution';

export default function Landing1() {
    return (
        <div className='flex flex-col justify-start items-center w-full h-full bg-[#010306] relative overflow-hidden px-[20px] sm:px-0'>
            <Banner />
            <Resources />
            <BeforeAfter />
            <Power />
            <Revolution />
            <Footer />
            <img src={Glow_1} alt='glow' className='absolute bottom-0' />
        </div>
    )
}