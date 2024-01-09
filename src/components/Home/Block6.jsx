
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
         <img src="data:image/png;base64,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 " className=' my-2 h-8' alt="" />
        <p className="mb-5 my-3 text-gray-800 text-center text-[19px] dark:text-gray-400">
        It seems like there might be some confusion or incomplete information in your statement. If you have a specific question or topic you'd like assistance with, please provide more details so I can better understand and help you.
        </p>
     <div className='flex mt-2 items-center justify-center mb-5'>
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