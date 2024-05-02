import React from 'react';
import Header from '../header';
import MainScreen from './component/main';
import Guide from './component/guide';
import ProductManagement from './component/productmanagement';
import Difference from './component/difference';
import Roles from './component/roles';
import ProductManager from './component/productmanager';
import RolesOfProductManager from './component/rolesofmanager';
import Tools from './component/tools';
import BestTools from './component/besttools';
import WorkFastAi from './component/workfatsai';
import Comparative from './component/comparative';
import Footer from './component/footer';

export default function Blog() {
    return (
        <div className='flex flex-col justify-start items-center w-full h-full bg-[#010306] relative overflow-hidden gap-[100px]'>
            <Header/>
            <MainScreen/>
            <Guide/>
            <ProductManagement/>
            <Difference/>
            <Roles/>
            <ProductManager/>
            <RolesOfProductManager/>
            <Tools/>
            <BestTools/>
            <WorkFastAi/>
            <Comparative/>
            <Footer/>
        </div>
    )
}
