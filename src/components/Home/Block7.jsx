import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

function Block7() {
  return (
    <>
     <div className='h-auto  dark:bg-[#2F373D]  max-md:py-8 max-md:px-4 py-[96px] px-[80px]  gap-[8px]   flex items-center justify-center w-full' >
    
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
      className="text-white  max-md:w-full gap-1 px-4 py-2  max-sm:text-center rounded-[8px]  text-[12px] bg-[#582066]  font-medium text-sm inline-flex items-center justify-center "
    >
      Unlock your Card
    <img src="/credit-card.png" alt="" />
    </button>
    <button
      type="button"
      className="text-[#5A6475]  max-md:w-full gap-1 px-4 py-2  max-sm:text-center rounded-[8px]  text-[12px] bg-[#EEEFEF]  mt-3  mb-3  font-medium text-sm text-center inline-flex items-center justify-center "
    >
      Customer Support
      <HeadphonesOutlinedIcon className='w-2 h-2'/>
    </button>
  </div>
</div>


    </div>
    

   </div>
   </>

   
  )
}

export default Block7