import React from 'react'
import { GoGlobe } from "react-icons/go";
import { RiKey2Fill } from "react-icons/ri";
import { MdLockOpen } from "react-icons/md";

function Block3() {
  return (
    <div className='my-10  '>
    <div className='w-[40%] mx-auto flex-col items-center justify-center max-lg:w-[55%] max-sm:w-full max-sm:px-4 max-md:px-7 px-10'>
        <h5 className=" text-3xl mb-4 max-sm:font-normal text-center   dark:text-white">
            Elevating Card Programs with Cutting-Edge Technology
        </h5>
        <p className="mb-2 text-gray-500 text-center text-[14px] dark:text-gray-400">
            Stay Lorem, ipsum dolor sit  corrupti harum repellat! up to date and move work forward with Flowbite on iOS & Android. Download the app today.
        </p>
        <div className=' flex mb-5'>
            <button 
                
                className="text-[#8C6596]   m-auto text-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

    <div className='mx-4 mt-10 mb-5 max-sm:flex-col   px-8 flex gap-12 justify-around'>
        <div className='w-full'>
            <div className='flex items-center mb-4 justify-center w-full h-6'>
                <GoGlobe className='text-[#592066] bg-[#F4EFF7] px-2 py-2 w-8 h-8 rounded-full' />
            </div>
            <p className='text-center text-[14px] mt-2'>Globally accepted</p>
            <p className='text-center text-[12px] mt-2'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Consectetur, eveniet?</p>
        </div>

        <div className='w-full'>
            <div className='flex items-center mb-4 justify-center w-full h-6'>
                <RiKey2Fill className='text-[#592066] bg-[#F4EFF7] px-2 py-2 w-8 h-8 rounded-full' />
            </div>
            <p className='text-center text-[14px] mt-2'>Biometrically Integrated</p>
            <p className='text-center text-[12px] mt-2'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Consectetur, eveniet?</p>
        </div>

        <div className='w-full'>
            <div className='flex items-center mb-4 justify-center w-full h-6'>
                <MdLockOpen className='text-[#592066] bg-[#F4EFF7] px-2 py-2 w-8 h-8 rounded-full' />
            </div>
            <p className='text-center text-[14px] mt-2'>Fully Secured</p>
            <p className='text-center text-[12px] mt-2'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Consectetur, eveniet?</p>
        </div>
    </div>
</div>
  )
}

export default Block3