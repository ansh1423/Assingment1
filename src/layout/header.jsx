import React from 'react'

function Header() {
  return (
    
    <div>
        <div className='w-full    h-auto it flex items-center justify-center '>
            <div className=' px-2  w-full'>
            <div className='flex justify-center mx-2 gap-4 my-1 border-rounded-full items-center '> 
                  
                <button type="button" class=" px-2   bg-[#F1F1F2]  rounded-full text-center text-[#363C46] text-[10px] font-medium leading-4">Announcement</button>
                 <p className='text-[12px]  max-sm:text-[10px] '>We are happy to announce that we raise $2 Million in seed funding</p>
            </div>
           
            </div>
            <hr />
          
           
        </div>
        <div className=' '>

<nav class="bg-white border w-full flex-col my-5 flex-wrap border-gray-200 ">
  <div class=" flex flex-wrap my-3 items-center justify-between mx-10 ">
  <div>
    <img src="/Mode UI Logo.png" alt="" className='' />
  </div>
  <div class="flex md:order-2 max-md:hidden rounded-md bg-[#EEEFEF] ">
      <button type="button" class="text-[#5A6465] px-4 p-2 text-[14px] flex items-center justify-center gap-1 max-sm:gap-1 bg-[#EEEFEF]    font-medium max-sm:font-mono rounded-lg max-sm:text-[12px] text-sm  max-sm:px-2  text-center">
        Login
        <div className=''>
        <img src="/log-in.png" alt="" className='w-4 h-4' />
        </div>
        </button>
      {/* <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        <span class="sr-only">Open main menu</span>
    </button> */}
  </div>
  <div className='flex items-center md:hidden justify-center gap-4'>
  <div class="flex md:order-2  px-1 rounded-xl bg-[#EEEFEF]  space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-[#5A6465] text-[14px] flex items-center justify-center gap-2  bg-[#EEEFEF]    font-medium  rounded-lg   px-2  py-2 text-center">
        Login
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 max-sm:w-4 max-sm:h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
</svg>

        </button>
      {/* <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        <span class="sr-only">Open main menu</span>
    </button> */}
  </div>
  <div>
  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
  </div>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium  max-lg:text-[14px]p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <li>
                    <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex text-[14px] items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Card Acess <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
                </li>
      <li>
        <a href="#" class="block py-2 max-lg:text-[14px] px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-[14px] md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Banking</a>
      </li>
      <li>
        <a href="#" class="block py-2 max-lg:text-[14px] px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-[14px] md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Processing</a>
      </li>
      <li>
        <a href="#" class="block py-2 max-lg:text-[14px] px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-[14px] md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 max-lg:text-[14px] px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-[14px] md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Career</a>
      </li>
      <li>
        <a href="#" class="block py-2 max-lg:text-[14px] px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-[14px] md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
    </div>
  )
}

export default Header