import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

function Block7() {
  return (
    <div className='mt-10 mb-16  '>
    <div className='w-[40%] mx-auto  flex-col items-center justify-center max-lg:w-[65%] max-sm:w-full max-sm:px-4 max-md:px-7 px-10'>
    <h5 className=" text-[26px] max-md:text-[24px] mb-4 max-sm:font-normal text-center   dark:text-white">
            Unlock Limitless Possibilies with Our New Card Solutions
        </h5>
        <div className='flex gap-5 items-center my-4 justify-center'>
        <button type="button" class="text-white gap-1 mt-3 t max-sm:text-center  mb-3 text-[12px] bg-[#592066] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Unlock your Card
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
</svg>
</button>
<button type="button" class="text-[#121417] gap-1 bg-[#EEEFEF] mt-3 t max-sm:text-center  mb-3 text-[12px]   font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Customer Support
<HeadphonesOutlinedIcon className='w-3 h-3'/>
</button>
        </div>
    </div>

   
</div>
  )
}

export default Block7