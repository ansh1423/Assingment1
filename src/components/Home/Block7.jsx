import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function Block7() {
  return (
    <div className='my-10  '>
    <div className='w-[40%] mx-auto flex-col items-center justify-center max-lg:w-[55%] max-sm:w-full max-sm:px-4 max-md:px-7 px-10'>
        <h5 className=" text-3xl mb-4 max-sm:font-normal text-center   dark:text-white">
            Elevating Card Programs with Cutting-Edge Technology
        </h5>
        <div className='flex items-center my-4 justify-center'>
        <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>

        </div>
    </div>

   
</div>
  )
}

export default Block7