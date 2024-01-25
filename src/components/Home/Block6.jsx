
import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


function Block6() {
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  const value = 5.0;

  return (
    <div className='my-5 max-sm:p-0  p-5 '>
    <div className='w-[50%] mx-auto  flex flex-col items-center justify-center max-lg:w-[55%] max-sm:w-full max-sm:px-4 max-md:px-7 px-10'>
      <img src="/Company logo.png" alt="" />
        <p className="mb-5 my-3 text-gray-800 text-center text-[19px] dark:text-gray-400">
        I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.
        </p>
     <div className='flex mt-2 items-center justify-center mb-5'>
     <Stack direction="row" spacing={2}>
    <img src="/Image.png" alt="" />
    </Stack>
   
     </div>
     <h3 className='text-center font-inter text-[14px] font-[800]'>Nik Baber</h3>
    <h3 className='text-center  font-inter mb-2  text-[12px]'>Lead Designer</h3>
  <div className='flex items-center justify-center'>
  <Box
      sx={{
        width: 130,
        display: 'flex',
        alignItems: 'center',
        marginBottom:'10px',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.1}
        emptyIcon={<StarIcon style={{ opacity: 0.2 }} fontSize="inherit" />}
      />
      
    </Box>

  </div>
    </div>
</div>
  )
}

export default Block6