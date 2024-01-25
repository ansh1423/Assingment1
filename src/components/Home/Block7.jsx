import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

function Block7() {
  return (
    <>
     <div className='h-auto   max-md:py-8 max-md:px-4 py-[96px] px-[80px]  gap-[8px]   flex items-center justify-center w-full' >
    
    <div className='  w-full   px-[32px]  '>
     <div className='flex items-center   w-full justify-center'>
    <div className='w-[55%]    flex mx-auto gap-8 flex-col items-center justify-center max-lg:w-[80%]  max-md:w-full   '>
        <h5 className=" text-[35px] max-md:text-[32px] text-[#121417] flex flex-col items-center justify-center  font-[900] font-manrope mb-4  text-center   dark:text-white">
        Unlock Limitless Possibilities with Our New Card Solutions
        </h5>
    </div>
    </div>
    <div className='flex max-sm:flex-col max-sm:items-center max-md:flex max-md:full gap-5     my-4 items-center justify-center'>
  <div className=' w-[70%] max-sm:w-full  max-md:px-4  flex max-sm:flex-col gap-4  items-center justify-center max-sm:justify-start'>
    <button
      type="button"
      className="text-white max-md:text-[10px] max-md:w-full gap-1 px-4 py-3  max-sm:text-center rounded-[8px]  text-[12px] bg-[#582066] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm inline-flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Unlock your Card
    <img src="/credit-card.png" alt="" />
    </button>
    <button
      type="button"
      className="text-[#5A6475] bg-[#EEEFEF] max-md:text-[10px] max-md:w-full gap-1 px-4 py-3 mt-3 max-sm:text-center rounded-[8px] mb-3 text-[12px] bg-[#] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center inline-flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Customer Support
      <HeadphonesOutlinedIcon className='w-3 h-3'/>
    </button>
  </div>
</div>


    </div>
    

   </div>
   </>

   
  )
}

export default Block7