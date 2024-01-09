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
    <div>
      <div className="mb-16 mt-24 mx-6  ">
      <div className='w-[35%] mx-auto flex-col items-center justify-center max-lg:w-[55%] max-sm:w-full max-sm:px-4 max-md:px-7 px-10'>
        <h5 className=" text-[28px] mb-4 max-sm:font-normal text-center   dark:text-white">
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

    <>
    {/* <h1 className='flex text-6xl  mb-5 max-lg:text-3xl max-md:hidden max  pt-16 justify-center font-[200px] w-full h-32' style={{ fontFamily: "'Bebas Neue', sans-serif" }}>SHOP BY CATEGORIES</h1> */}

    <div className='flex  justify-center mt-10  items-center'>
      <div className=' w-[88%] flex max-sm:gap-5 rounded-lg max-sm:flex-col max-sm:items-center gap-10  justify-evenly  h-auto '>
        <div>
         <img src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
   {/* <button className='font-[400] border  px-12 py-3 my-4 text-center text-[14px] relative text-black no-underline transition-transform before:bg-hsl-45-100-70 before:content- before:inset-0 before:absolute before:transform-scale-x-0 before:transform-origin-right before:transition-transform-0.5s before:ease-in-out before:z-index--1 hover:before:transform-scale-x-1 hover:before:transform-origin-left'>
        Shop Women Formal Shoes
   </button> */}
  
      </div>
      <div>
         <img src="https://images.unsplash.com/photo-1561816544-21ecbffa09a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" /> 
        
   {/* <button className='font-[400] border  px-12 py-3 my-4 text-center text-[14px] relative text-black no-underline transition-transform before:bg-hsl-45-100-70 before:content- before:inset-0 before:absolute before:transform-scale-x-0 before:transform-origin-right before:transition-transform-0.5s before:ease-in-out before:z-index--1 hover:before:transform-scale-x-1 hover:before:transform-origin-left'>
        Shop Women Formal Shoes
   </button> */}
 
      </div>
     
     
      </div>
      </div>
      </>
      </div>
      <div></div>
    </div>
  );
}

export default Block4;
