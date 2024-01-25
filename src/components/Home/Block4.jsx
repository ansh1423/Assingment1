import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Block4() {
  return (
    <div className="pt-8">
      <div className="mb-16 mt-24 mx-6  ">
      <div className='w-[50%]   flex mx-auto gap-4 flex-col items-center justify-center max-lg:w-[55%] max-sm:w-full max-sm:px-4 max-md:px-7 px-10'>
      
      <h5 className=" text-[35px] px-4 text-[#121417] flex flex-col items-center justify-center  font-[900] font-manrope mb-4 max-sm:font-normal text-center   dark:text-white">
        Elevating Card Programs with Cutting-Edge Technology
        
        <p className="mb-2  w-[70%] text-center  mt-1 font-inter  text-gray-500  text-[14px] dark:text-gray-400">
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </h5>
        <div className=' flex rounded-[8px] mb-5'>
            <button 
                
                className="text-[#582066] text-[12px] font-manrope  font-bold  m-auto text-center focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5  inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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


    
    {/* <h1 className='flex text-6xl  mb-5 max-lg:text-3xl max-md:hidden max  pt-16 justify-center font-[200px] w-full h-32' style={{ fontFamily: "'Bebas Neue', sans-serif" }}>SHOP BY CATEGORIES</h1> */}
  <div className="flex items-center justify-center">

 
    <div className='flex mx-8 max-lg:flex-col max-lg:w-[40%] max-sm:w-[80%] h-[70%]     justify-center mt-10  gap-8 items-center'>
        <div>
          <img src="yyyy.png" alt="" className="" />
        </div>
        <div>
          <img src="tttt.png" alt="" />
        </div>
      </div>
      </div>
      </div>
     
    </div>
  );
}

export default Block4;
