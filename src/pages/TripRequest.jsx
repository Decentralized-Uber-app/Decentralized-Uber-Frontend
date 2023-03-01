import React from 'react'
import SideBar from "../Components/SideBar";
import UserNavBar from "../Components/UserNavBar";
import UserSideBar from "../Components/UserSideBar"

import {BsClock} from "react-icons/bs"

import Map from "../Components/Map"

const TripRequest = () => { 
  return (
    <div className="bg-gray-200 h-screen">
      <UserNavBar />
      <SideBar iconCount={'all'}/>
      <UserSideBar />
      <div className='flex lg:justify-center lg:w-10/12 w-full justify-end  flex-wrap'>
        <div className='w-full flex justify-center py-5 text-xl sm:text-2xl'>
        <h1>Where would you like to go?</h1>
      </div>
      <Map />
      </div>
      <div className='sm:w-10/12 w-full flex justify-center py-3 pl-5 lg:pl-2 flex-wrap'>
        <div className='md:w-9/12 w-full mt-4'>
          <ul className='lg:w-10/12 w-full flex flex-wrap gap-y-2'>
           <div className='flex'>
             <div className='text-xl mr-2 flex items-center'><BsClock /></div>
            <li className='flex flex-wrap lg:gap-x-1'><span> Victoria Island</span>
            <span>N0 290a, Ajose Adeogun Street,  Vicoria Island</span></li>
           </div>
           <div className='flex'>
             <div className='text-xl mr-2 flex items-center'><BsClock /></div>
            <li className='flex flex-wrap lg:gap-x-1'><span> Victoria Island</span>
            <span>N0 290a, Ajose Adeogun Street,  Vicoria Island</span></li>
           </div>
           <div className='flex'>
             <div className='text-xl mr-2 flex items-center'><BsClock /></div>
            <li className='flex flex-wrap lg:gap-x-1'><span> Victoria Island</span>
            <span>N0 290a, Ajose Adeogun Street,  Vicoria Island</span></li>
           </div>
          </ul>
        </div>
      </div>
    </div> 
  )
}
export default TripRequest