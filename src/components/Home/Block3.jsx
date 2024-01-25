import React from 'react'
import { GoGlobe } from "react-icons/go";
import { RiKey2Fill } from "react-icons/ri";
import { MdLockOpen } from "react-icons/md";

function Block3() {
  return (
      <div className='dark:bg-[#2F373D]'>
    <div className='sm:py-24 dark:bg-[#2F373D]   max-sm:pt-16  mx-20      '>
    <div className='w-[50%]   flex mx-auto gap-4 flex-col items-center justify-center max-lg:w-[55%] max-sm:w-full max-sm:px-4 max-md:px-7 px-10'>
      
        <h5 className=" text-[35px]  max-sm:text-[33px] px-4 text-[#121417] flex flex-col items-center justify-center  font-[900] font-manrope mb-4 max-sm:font-normal text-center   dark:text-white">
        Elevating Card Programs with Cutting-Edge Technology
        
        <p className="mb-2  w-[70%] text-center  mt-1 font-inter  text-gray-500  text-[14px] dark:text-gray-400">
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </h5>
        <div className=' flex rounded-[8px] pb-5'>
            <button 
                
                className="text-[#582066] dark:text-white text-[12px] font-manrope  font-bold  m-auto text-center focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5  inline-flex items-center"
            >
                Compare all Pro features
                <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </button>

        </div>

    </div>

    <div className=' mt-24 max-sm:mt-10 pb-5 max-lg:flex-col   flex gap-12 justify-around'>
        <div className='flex max-lg:flex-col gap-8 items-center justify-center w-full'>

      
        <div className=' w-[40%] max-md:w-[80%]'>
            <div className='flex items-center mb-4 justify-center w-full h-6'>
               <img src="globe.png" alt=""  className='px-2 py-2 bg-[#F4EFF7]  w-8 h-8 rounded-full' />
            </div>
            <p className='text-center dark:text-white text-[14px] mt-2'>Globally accepted</p>
            <p className='text-center  dark:text-white    text-[12px] mt-2'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Consectetur, eveniet?</p>
        </div>

        <div className='w-[40%] max-md:w-[80%]'>
            <div className='flex items-center mb-4 justify-center w-full h-6'>
            <img src="key.png" alt=""  className='px-2 py-2 bg-[#F4EFF7]  w-8 h-8 rounded-full' />
            </div>
            <p className='text-center dark:text-white text-[14px] mt-2'>Biometrically Integrated</p>
            <p className='text-center  dark:text-white text-[12px] mt-2'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Consectetur, eveniet?</p>
        </div>

        <div className='w-[40%] max-md:w-[80%]'>
            <div className='flex items-center mb-4 justify-center w-full h-6'>
            <img src="lock.png" alt=""  className='px-2 py-2 bg-[#F4EFF7]  w-8 h-8 rounded-full' />
            </div>
            <p className='text-center  dark:text-white text-[14px] mt-2'>Fully Secured</p>
            <p className='text-center  dark:text-white text-[12px] mt-2'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Consectetur, eveniet?</p>
        </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Block3