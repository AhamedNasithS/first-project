import React from 'react';
import Header from '../header';
import MainScreen from './component/main';

export default function Blog() {
    return (
        <div className='flex flex-col justify-start items-center w-full h-full bg-[#010306] relative overflow-hidden gap-[100px]'>
            <Header />
            <MainScreen />
        </div>
    )
}
