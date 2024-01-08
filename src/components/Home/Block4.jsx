import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Card, CardBody } from "react-bootstrap";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function Block4() {
  return (
    <div>
      <div className="my-16 mx-6  ">
        <div className="w-[40%] mx-auto flex-col items-center justify-center max-lg:w-[55%] max-sm:w-full max-sm:px-4 max-md:px-7 px-10">
          <h5 className=" text-3xl mb-4 max-sm:font-normal text-center   dark:text-white">
            Elevating Card Programs with Cutting-Edge Technology
          </h5>
          <p className="mb-2 text-gray-500 text-center text-[14px] dark:text-gray-400">
            Stay Lorem, ipsum dolor sit corrupti harum repellat! up to date and
            move work forward with Flowbite on iOS & Android. Download the app
            today.
          </p>
          <div className=" flex mb-5">
            <button className="text-[#8C6596]   m-auto text-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
        <div className="flex max-md:flex-col gap-5 justify-evenly  ">
          <div className="p-5 flex justify-center items-center bg-[#FAF9FF]">
            <div className="mx-5">
              <a
                href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>
          </div>

          <div className="p-5 flex justify-center items-center bg-[#FAF9FF]">
            <div className="mx-5">
              <a
                href="#"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Block4;
