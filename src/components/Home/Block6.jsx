
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
    <div className='my-10  p-5 '>
    <div className='w-[50%] mx-auto flex-col items-center justify-center max-lg:w-[55%] max-sm:w-full max-sm:px-4 max-md:px-7 px-10'>
       <img src="" alt="" />
        <p className="mb-5 text-gray-800 text-center text-[20px] dark:text-gray-400">
        It seems like there might be some confusion or incomplete information in your statement. If you have a specific question or topic you'd like assistance with, please provide more details so I can better understand and help you.
        </p>
     <div className='flex items-center justify-center mb-5'>
     <Stack direction="row" spacing={2}>
      <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />
    </Stack>
   
     </div>
     <h3 className='text-center my-1'>Ansh Yadav</h3>
    <h3 className='text-center mb-2 font-mono text-[10px]'>Lead Designer</h3>
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